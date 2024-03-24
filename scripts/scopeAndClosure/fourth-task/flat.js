/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    const flattedArr = [];
    let isFlat = true;

    for (let i=0; i< arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattedArr.push(...arr[i])
            isFlat = false;
        } else {
            flattedArr.push(arr[i])
        }
    }

    if (depth > 1 && !isFlat) return flat(flattedArr, depth - 1);

    return flattedArr;
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr, 2))
// [1, 2, 3, [4]]