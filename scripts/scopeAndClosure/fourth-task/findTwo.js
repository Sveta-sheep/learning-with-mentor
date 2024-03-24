/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [i, j]
            }
        }
    }

    return null;
}

console.log(findTwo([1,2,3,-1]))