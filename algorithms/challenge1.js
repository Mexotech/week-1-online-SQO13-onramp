const True = [2, null, 2, '', 4, 5, undefined];
console.log(countTruthy(True));

function countTruthy(True) {
    let count = 0;

    for (let item of True) {
        if (item)
            count++;
    }

    return count;
}