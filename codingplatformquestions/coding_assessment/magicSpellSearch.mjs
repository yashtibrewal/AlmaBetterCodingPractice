function binarySearch(arr, k) {
    // Your code goes here

    function getMid(l, r) {
        return Math.floor((l + r) / 2);
    }

    let l = 0, r = arr.length - 1, mid = getMid(l, r);

    while (l <= r) {
        mid = getMid(l, r);
        if (arr[mid] < k) {
            l = mid+1;
        } else if (arr[mid] > k) {
            r = mid-1;
        } else {
            return mid;
        }

    }

    return -1;
};

console.log(binarySearch([1, 3, 5, 7, 9],1));