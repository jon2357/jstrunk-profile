import { createClient } from "contentful";

export {
  client,
  getContentByField,
  getActivities,
  getTraining,
  getCorporate,
  getResources,
  getBlog,
  getPostBySlug,
};

const config = {
  accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN,
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
};
const client = createClient(config);

/**
 * Get all records in which a field contains a specific value
 * @param {String} contentType - Which Content Type (Collection).
 * @param {String} field - Which Field to look into on  the Collection.
 * @param {String} value - Which value are you matching.
 * let foundContent = ref([]);
 * getContentByField("activities", "category", "Award").then((value) => (foundContent.value = value));
 */
async function getContentByField(contentType, field, value) {
  const entries = await client.getEntries({
    [`fields.${field}`]: value,
    content_type: contentType,
  });

  if (!entries.items) {
    console.log(`Failed to find ${value} in ${field} of ${contentType}`);
    return;
  }
  return entries;
}

/**
 * Get all Records from all activities Collection
 * let allActivities = ref([]);
 * getActivities().then((value) => (allActivities.value = value));
 */
async function getActivities() {
  try {
    const entries = await client.getEntries({
      content_type: "activities",
    });
    let data = Array();
    entries.items.forEach(function (entry) {
      data.push(activitySchema(entry));
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getTraining() {
  try {
    const entries = await client.getEntries({
      content_type: "training",
    });
    let data = Array();
    entries.items.forEach(function (entry) {
      data.push(trainingSchema(entry));
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getCorporate() {
  try {
    const entries = await client.getEntries({
      content_type: "corporateExperiences",
    });
    let data = Array();
    entries.items.forEach(function (entry) {
      data.push(corporateSchema(entry));
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getResources() {
  try {
    const entries = await client.getEntries({
      content_type: "resources",
    });
    let data = Array();
    entries.items.forEach(function (entry) {
      data.push(resourceSchema(entry));
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getBlog() {
  try {
    const entries = await client.getEntries({
      content_type: "blogPosts",
      order: "sys.createdAt",
    });
    let data = Array();
    entries.items.forEach(function (entry) {
      data.push(blogSchema(entry));
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getPostBySlug(slug) {
  try {
    const entries = await client.getEntries({
      content_type: "blogPosts",
      "fields.slug": slug,
    });
    let data = Array();
    entries.items.forEach(function (entry) {
      data.push(blogSchema(entry));
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

// ********** Conversion Schemas to flatten Contentful response Objects **********
const activitySchema = (entry) => {
  return {
    id: entry?.sys?.id,
    date: new Date(entry?.fields?.date),
    role: entry?.fields?.role,
    category: entry?.fields?.category,
    type: entry?.fields?.type,
    title: entry?.fields?.title,
    department: entry?.fields?.department,
    url: entry?.fields?.link,
    citation: entry?.fields?.citation,
    slug: entry?.fields?.slug,
    orgNameAb: entry?.fields?.organization?.fields?.abbreviatedName,
    orgNameFull: entry?.fields?.organization?.fields?.fullName,
    orgSlug: entry?.fields?.organization?.fields?.slug,
    orgUrl: entry?.fields?.organization?.fields?.website,
    orgLogoUrl: entry?.fields?.organization?.fields?.logo?.fields?.file.url,
  };
};

const trainingSchema = (entry) => {
  return {
    id: entry?.sys?.id,
    dateStart: new Date(entry?.fields?.dateStart),
    dateEnd: new Date(entry?.fields?.dateEnd),
    programName: entry?.fields?.programName,
    award: entry?.fields?.award,
    type: entry?.fields?.type,
    description: entry?.fields?.description,
    slug: entry?.fields?.slug,
    orgNameAb: entry?.fields?.organization?.fields?.abbreviatedName,
    orgNameFull: entry?.fields?.organization?.fields?.fullName,
    orgSlug: entry?.fields?.organization?.fields?.slug,
    orgUrl: entry?.fields?.organization?.fields?.website,
    orgLogoUrl: entry?.fields?.organization?.fields?.logo?.fields?.file.url,
  };
};

const corporateSchema = (entry) => {
  return {
    id: entry?.sys?.id,
    dateStart: new Date(entry?.fields?.dateStart),
    dateEnd: new Date(entry?.fields?.dateEnd),
    title: entry?.fields?.title,
    technologyStack: entry?.fields?.technologyStack,
    achievements: entry?.fields?.achievements,
    description: entry?.fields?.description,
    slug: entry?.fields?.slug,
    orgNameAb: entry?.fields?.organization?.fields?.abbreviatedName,
    orgNameFull: entry?.fields?.organization?.fields?.fullName,
    orgSlug: entry?.fields?.organization?.fields?.slug,
    orgUrl: entry?.fields?.organization?.fields?.website,
    orgLogoUrl: entry?.fields?.organization?.fields?.logo?.fields?.file.url,
  };
};

const resourceSchema = (entry) => {
  return {
    id: entry?.sys?.id,
    date: new Date(entry?.fields?.date),
    event: entry?.fields?.eventName,
    title: entry?.fields?.title,
    category: entry?.fields?.category,
    resources: entry?.fields?.resources,
  };
};

const blogSchema = (entry) => {
  return {
    id: entry?.sys?.id,
    createdDate: new Date(entry?.sys?.createdAt),
    modifiedDate: new Date(entry?.sys?.updatedAt),
    title: entry?.fields?.title,
    slug: entry?.fields?.slug,
    heroImageUrl: entry?.fields?.heroImage?.fields?.file?.url,
    heroImageDesc: entry?.fields?.heroImage?.fields?.description,
    heroImageTitle: entry?.fields?.heroImage?.fields?.title,
    abstract: entry?.fields?.abstract,
    bodyText: entry?.fields?.bodyText,
    categories: entry?.fields?.categories,
  };
};
