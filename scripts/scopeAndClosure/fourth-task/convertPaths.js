// file paths

function extendObj(obj = {}, idx = 0, array = []) {
    if (idx === array.length) return obj;

    const key = array[idx];

    if (!obj.hasOwnProperty(key)) {
        obj[key] = {};
    }

    extendObj(obj[key], idx + 1, array);
}

/**
 * Converts a plain input array with routes into a paths tree.
 *
 * @param {string[]} paths - The input array containing paths to be converted.
 * @returns {Object} The resulting paths tree object.
 */
const convertPaths = (paths) => {
    const pathTree = {}

    paths.forEach((fullPath) => {
        const parts = fullPath.split('/') // [rootDir, subDir ...]

        extendObj(pathTree, 0, parts);
    })

    return pathTree;
};

console.log(
    convertPaths([
        "rootDir1/subDir1/subSubDir/file",
        "rootDir2/file",
        "rootDir1/subDir1/subSubDir1",
        "rootDir1/subDir1/subSubDir",
        "rootDir2/subDir2",
        "rootDir2/subDir2/file",
        "file"
    ])
);

/* console log output should be:
 * {
 *  "rootDir1": {
 *    "subDir1": {
 *      "subSubDir": {
 *        "file": {}
 *      },
 *     "subSubDir1": {}
 *    }
 *  },
 *  "rootDir2": {
 *    "file": {},
 *    "subDir2": {
 *      "file": {}
 *    }
 *  },
 *  "file": {}
 *}
 */