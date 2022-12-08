function getUnique(arr) {
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
const array = [1, 2, 3, 2, 5, 3, 4, 6, 1, 4, 7, 5];
getUnique(array);