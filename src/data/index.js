// tag line: A Better Tomorrow Starts Today

const navigationData = [
  // { name: "Home", path: "/", icon: "fa-solid fa-house" },
  { name: "About", path: "/about", icon: "fa-solid fa-info-circle" },
  {
    name: "Specialization",
    path: "/specialization",
    icon: "fa-solid fa-lightbulb",
  },
  {
    name: "Resources",
    path: "/resources",
    icon: "fa-solid fa-briefcase-clock",
  },
  { name: "Blog", path: "/blog", icon: "fa-solid fa-blog" },
];

const siteInfo = {
  title: "Jon Strunk, Ph.D.",
  logo: "/JS-blue_rmb_64x64.png",
  phone: "4707957283",
  email: "contact@JonStrunk.com",
};

const socialMedia = {
  github: {
    icon: "fa-brands fa-github",
    link: "https://github.com/jon2357",
  },
  linkedin: {
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/jon-strunk/",
  },
  medium: {
    icon: "fa-brands fa-medium",
    link: "https://medium.com/@jonstrunk",
  },
  twitter: {
    icon: "fa-brands fa-twitter",
    link: "https://twitter.com/JonStrunk42",
  },
};

const ctaRoutes = {
  newsletter: {
    text: "Join Newsletter",
    icon: "fa-regular fa-newspaper",
    route: null,
  },
  directMessage: {
    text: "Message Me",
    icon: "fa-regular fa-paper-plane",
    route: null,
  },
  meeting: {
    text: "Set a Meeting",
    icon: "fa-solid fa-calendar-days",
    route: null,
  },
};

const heroSection = {
  title: "Jon Strunk, Ph.D.",
  descShort:
    "Cognitive neuroscientist turned technologist focused on human interactions. Be that physical, digital, or interpersonal.",
  imageUrl: "Jon-profile1-800x800.png",
  imageAlt: "Jon",
  buttonText: "Read More",
  buttonLink: "about",
};

const productSection = [
  {
    title: "Research & Innovation",
    descShort:
      "Over a decade of Cognitive Neuroscience research aimed at understanding how humans interact with the world and acquire knowledge.",
    imageUrl: "milad-fakurian-58Z17lnVS4U-unsplash-mod-400x225.png",
    imageAlt: "Research",
    buttonText: "Learn More",
    buttonLink: ["specialization", "#research"],
  },
  {
    title: "Product & Technology",
    descShort:
      "Over two decades of delivering value at each level of an organization's technical infrastructure.",
    imageUrl: "glenn-carstens-peters-npxXWgQ33ZQ-unsplash-mod-400x225.png",
    imageAlt: "Technology",
    buttonText: "Do More",
    buttonLink: ["specialization", "#technology"],
  },
  {
    title: "Commercial Finance",
    descShort:
      "Nearly half a decade of experience originating and servicing commercial loans with private money.",
    imageUrl: "micheile-dot-com-lZ_4nPFKcV8-unsplash-mod-400x225.png",
    imageAlt: "Finance",
    buttonText: "Earn More",
    buttonLink: ["specialization", "#finance"],
  },
];

const aboutMe = {
  title: "Jon Strunk, Ph.D.",
  imageUrl: "Jon_square-bk(nature).jpg",
  imageAlt: "Jon",
  description: [
    "I am passionate about the pursuit of and utilization of knowledge. I am a life long learner. I find I'm happiest when I'm exploring the unknown, or helping others achieve their own version of success. I spend my time learning new technology and figuring out how it can be used to improve life. ",

    "I sit at the intersection of Research, Technology, Data, and Product.  My career has spanned decades to understand how people interact with technology and learn new things. What started with helping people use technology, transformed into a passion for understanding how people learn, and has cumulated into a drive for creating solutions that bring insight into human behavior and make life better.",

    "Throughout my career I've applied my natural curiosity, research expertise, and excitement for technology to create proof of concepts, minimal viable products, and scalable solutions. With every project I take on, I start with 3 main questions: What need is this filling? Who will benefit? Is the value add quantitative,  qualitative, or both?",

    "Let's connect! I'm always interested in learning more about what drives people and where they hope to go. I believe that  every single one of us is capable of so much more, and I would love the opportunity to help you on your journey.",
  ],
  timeLineTitle: "My Journey",
  timeLine: [
    {
      phase: "Creating",
      items: [
        {
          yearEnd: null,
          yearStart: 2022,
          imageUrl: "diego-ph-fIq0tET6llw-unsplash_mod-400x400.jpg",
          imageAlt: "Creating the Future",
          description: "Boldly Foraging into the Future",
          highlightList: [
            "Started Technology Consulting and Education Business",
            "Leveled up into Full Stack Cloud Engineering",
          ],
        },
        {
          yearEnd: 2022,
          yearStart: 2018,
          imageUrl: "tamara-gak-uvTqhAnaf6s-unsplash_mod-400x400.jpg",
          imageAlt: "Corporate Chess",
          description:
            "Built Solutions and Strategy in the FinTech and Lending Space",
          highlightList: [
            "Built Data Analytic, Quality, and Engineering Solutions",
            "Started Commercial Lending Business",
          ],
        },
      ],
    },
    {
      phase: "Learning",
      items: [
        {
          yearEnd: 2018,
          yearStart: 2015,
          imageUrl: "male-gab32b1866_640.jpg",
          imageAlt: "Leading the way",
          description:
            "Led Innovative Cognitive Neuroscience Research on Learning and Memory",
          highlightList: [
            "Completed Ph.D. in Cognitive Neuroscience with a Minor in Multivariate Neuroimaging",
            "Rendered 22 Research Activities",
          ],
        },
        {
          yearEnd: 2015,
          yearStart: 2010,
          imageUrl: "janko-ferlic-sfL_QOnmy00-unsplash_mod-400x400.jpg",
          imageAlt: "Creating a Library of Knowledge",
          description:
            "Acquired Valuable Skills in Research, Psychology, & Neuroscience",
          highlightList: [
            "Completed Master's Degree in Cognitive Neuroscience",
            "Rendered 12 Research Activities",
          ],
        },
      ],
    },
    {
      phase: "Helping",
      items: [
        {
          yearEnd: 2010,
          yearStart: null,
          imageUrl: "marvin-meyer-SYTO3xs06fU-unsplash_mod-400x400.jpg",
          imageAlt: "Technology and Education",
          description:
            "Discovered Joy in Solving Problems with Technology and Educating Others",
          highlightList: [
            "Completed Bachelor's Degree",
            "Excelled in Technical Support and Education",
          ],
        },
      ],
    },
  ],
};

const specializations = {
  title: "Areas of Expertise",
  description:
    "My breath of experience has taught me that there are more similarities in the world than differences. Research, Technology, and even Finance are all dependent on the outputs making sense given the inputs. Building knowledge, products, and wealth are all dependent on understanding the systems that brought us to our current state.",
  imageUrl: "pexels-anete-lusina-4792509_mod_800x800.jpg",
  imageAlt: "Holding the Lightbulb",
  entries: [
    {
      anchor: "research",
      title: "Research & Innovation",
      imageUrl: "pexels-ekaterina-bolovtsova-6192326_mod-400x400.jpg",
      imageAlt: "Research",
      description: [
        "Learning and memory is a core pilar of experience. Our ability to learn from the past and apply those lessons to the  future shape our interactions, expectations, and decisions. My research focused on how past experience is leveraged to shape new memories and update our understanding of the world. Leveraging the past to build the future isn't limited to human experience. This is a foundational principle of progress. ",
        "My training and expertise in Cognitive Psychology and Neuroscience arms me with a holistic approach to understanding how your data represents real people and their choices. Take your analytic effort to the next level and lets create opportunities and products your customers love and praise.",
      ],
      externalConnections: [
        {
          text: "Pubmed",
          icon: null,
          link: "https://pubmed.ncbi.nlm.nih.gov/?term=strunk+jonathan",
        },
        {
          text: "Google Scholar",
          icon: null,
          link: "https://scholar.google.com/citations?hl=en&user=W01bHQMAAAAJ",
        },
      ],
    },
    {
      anchor: "technology",
      title: "Product & Technology",
      imageUrl: "pexels-lukas-577210_mod-400x400.jpg", //"https://placeimg.com/400/400/tech",
      imageAlt: "Technology",
      description: [
        "All products are technology products. If your customers interact with you online or you store their data on a computer, you leverage technology to run your business.  My focus is using data to inform strategy. Every piece of data you collect from your customers, products, and their interactions can help tell a story. This story should be the guiding light that you leverage to move your business forward.",
        "With over 20 years of experience, I have acquired unique insights to the interactions between systems and people. Be that your end users, developers, or stakeholders. Contact me today and build yourself a better tomorrow.",
      ],
      externalConnections: [
        {
          text: "GitHub",
          icon: null,
          link: "https://github.com/jon2357",
        },
      ],
    },
    {
      anchor: "finance",
      title: "Commercial Finance",
      imageUrl: "pexels-pixabay-164652_mod_400x400.jpg",
      imageAlt: "finance",
      description: [
        "My family and I have been helping Real Estate Entrepreneurs for over a decade.  We focus on hard money lending to remove the largest hurdle in getting our clients deals closed. We have worked across the diverse landscape of real estate deals as lenders, borrowers, servicers, rehabbers, note buyers, and landlords. Our breath of experience in the industry and our specialization in finance allows us the flexibility to work magic.",
        "We have recently expanding through partnerships with other commercial financers to offer our clients unsecured loans and lines of credit. Let's connect to get you the money you need to succeed, the investments you want to grow, or both!",
      ],
      externalConnections: [
        {
          text: "KFS Investments",
          icon: null,
          link: "https://www.kfsinvestments.com/",
        },
      ],
    },
  ],
};
export {
  siteInfo,
  heroSection,
  productSection,
  navigationData,
  aboutMe,
  socialMedia,
  ctaRoutes,
  specializations,
};
