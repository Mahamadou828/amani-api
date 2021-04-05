const Fuse = require("fuse.js");
const { take } = require("lodash");

const filterItems = (items, limit = 10, offset = 0, text, type, category) => {
  let filteredItems = items;

  // Text filter
  const fuse = new Fuse(items, {
    threshold: 0.3,
    minMatchCharLength: 2,
    keys: ["title"],
  });

  if (text && text !== "") {
    filteredItems = fuse.search(text).map((r) => r.item);
  }
  // Type filter
  if (type) {
    filteredItems = filteredItems.filter((item) => item.type === type);
  }
  // Category filter
  if (category && category.split(",").length) {
    filteredItems = filteredItems.filter((item) => {
      const isAvailable = item.categories.find((cat) =>
        category.split(",").includes(`${cat.slug}`)
      );
      if (isAvailable) {
        return true;
      }
      return false;
    });
  }
  const hasMore = offset + limit < filteredItems.length;

  filteredItems = filteredItems.slice(offset, offset + limit);
  return { items: filteredItems, hasMore };
};

const filterOrder = async (items, user, limit = 7, text) => {
  let filteredItems = items;

  // Text filter
  const fuse = new Fuse(items, {
    keys: ["id", "products.title"],
  });

  if (text && text !== "") {
    filteredItems = fuse.search(text).map((r) => r.item);
  }
  // Type filter
  if (user) {
    filteredItems = filteredItems.filter((item) => item.userId === user);
  }

  filteredItems = take(filteredItems, limit);
  return await filteredItems;
};

const getRelatedItems = async (type, slug, items) => {
  let filteredItems = items;
  const findRelated = take(
    await filteredItems.filter(
      (item) => item.type === type && item.slug !== slug
    ),
    10
  );
  return findRelated;
};

module.exports = {
  filterItems,
  getRelatedItems,
  filterOrder,
};
