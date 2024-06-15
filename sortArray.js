function relativeSortArray(arr1, arr2) {
    const orderMap = new Map();
    arr2.forEach((item, index) => {
        orderMap.set(item, index);
    });

    const inArr2 = [];
    const notInArr2 = [];
    arr1.forEach(item => {
        if (orderMap.has(item)) {
            inArr2.push(item);
        } else {
            notInArr2.push(item);
        }
    });

    inArr2.sort((a, b) => orderMap.get(a) - orderMap.get(b));

    notInArr2.sort((a, b) => a - b);

    return inArr2.concat(notInArr2);
}

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
const sortedArr = relativeSortArray(arr1, arr2);
console.log(sortedArr);
