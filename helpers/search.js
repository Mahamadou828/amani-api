const Fuse = require("fuse.js");

// const options: Fuse.FuseOptions<any> = {
//   keys: ['author', 'tags'],
// };

function search(dataToSearch, basedOnOptionsKey, searchByValue = "") {
  if (searchByValue.trim()) {
    let fuse = new Fuse(dataToSearch, {
      keys: basedOnOptionsKey,
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      minMatchCharLength: 2,
      // location: 0,
      threshold: 0.3,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
    });
    let result = fuse.search(searchByValue).map((r) => r.item);

    return result;
  }

  return dataToSearch;
}

module.exports = search;
