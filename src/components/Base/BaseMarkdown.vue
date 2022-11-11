<template>
  <article class="prose max-w-none" v-html="processedMarkdown"></article>
</template>
<script setup>
import { computed } from "vue";
import { marked } from "marked";
import highlight from "highlight.js";
import "highlight.js/styles/github-dark.css"; // https://github.com/highlightjs/highlight.js/tree/main/src/styles
import mermaid from "https://unpkg.com/mermaid@9/dist/mermaid.esm.min.mjs";

import katex from "katex";

mermaid.initialize({
  startOnLoad: true,
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
  },
});

const props = defineProps({
  markdown: {
    type: String,
  },
});

const processedMarkdown = computed(() => {
  // Add Syntax highlighting for the code blocks
  let value = marked(props.markdown, {
    highlight(code, lang) {
      if ((lang.toLowerCase() != "mermaid") & (lang.toLowerCase() != "math")) {
        if (highlight.getLanguage(lang)) {
          return highlight.highlight(code, {
            language: lang,
            ignoreIllegals: true,
          }).value;
        }
      }
    },
  });

  // Parse Code Blocks for Mermaid JS diagrams and render them
  let graphCount = 0;
  var element = document.createElement("div");
  element.insertAdjacentHTML("beforeend", value);
  element
    .querySelectorAll("pre.mermaid, pre>code.language-mermaid")
    .forEach(($el) => {
      // if the second selector got a hit, reference the parent <pre>
      if ($el.tagName === "CODE") $el = $el.parentElement;

      // define the graph information
      graphCount = graphCount + 1;
      let graphId = `graph` + graphCount;
      let graphDefinition = $el.textContent;

      mermaid.mermaidAPI.render(graphId, graphDefinition, function (svgCode) {
        $el.outerHTML = `
          <div class="mermaid w-full grid justify-items-center" id="${graphId}">${svgCode}</div>
  
    `;
      });
    });
  // Code to add in a details section to mermaid js images
  // <div class="grid justify-items-center">
  //         <details>
  //           <summary class="w-72">Diagram Source</summary>
  //           <pre>${$el.textContent}</pre>
  //         </details>
  //       </div>
  // Parse Code Blocks for Equations and render them
  let eqCount = 0;
  element.querySelectorAll("pre.math, pre>code.language-math").forEach((el) => {
    // Pull data outside the code block
    if (el.tagName === "CODE") el = el.parentElement;

    eqCount = eqCount + 1;
    let eqId = `eqBlock` + eqCount;
    let eqKatex = katex.renderToString(el.textContent);
    el.outerHTML = `<div class="grid justify-items-center" id="${eqId}">${eqKatex}</div>`;
  });

  element.querySelectorAll("p").forEach((el) => {
    // Pull data outside the code block
    if (
      (el.textContent[0] === "$") &
      (el.textContent[el.textContent.length - 1] === "$")
    ) {
      console.log(el.textContent);
    }
  });

  // Parse Inline Code for Equations and render them ($...$)
  let eqCount1 = 0;
  element.querySelectorAll("code").forEach((el) => {
    // Pull data outside the code block
    if (
      (el.textContent[0] === "$") &
      (el.textContent[el.textContent.length - 1] === "$")
    ) {
      eqCount1 = eqCount1 + 1;
      let eqId = `eqInline` + eqCount1;
      let eqKatex = katex.renderToString(el.textContent.slice(1, -1));
      el.outerHTML = `<div id="${eqId}">${eqKatex}</div>`;
    }
  });
  // Return the modified HTML element for display
  return element.innerHTML;
});
</script>
<style>
@import "@/plugins/katex.min.css";
</style>
