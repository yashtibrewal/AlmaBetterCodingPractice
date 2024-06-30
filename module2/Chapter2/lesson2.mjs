export function implementBubbleSort(arr) {

    if (Array.isArray(arr)) {

        let isSorted = true; // assume true
        for (let i = 0; i < arr.length; i++) {
            isSorted = true;
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                    isSorted = false;
                }
            }
            if (isSorted) {
                return arr;
            }
        }
        return arr;

    }

}


// console.log(implementBubbleSort([1,2,3,7,4,5,6]).toString());

export function implementSelectionSort(arr) {

    if (Array.isArray(arr)) {

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) break;
        }

        let counter = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
            }
        }
        return arr;

    }
}

// console.log(implementSelectionSort([1,2,3,7,4,5,6]).toString());
function merge(leftArr, rightArr) {

    if (Array.isArray(leftArr) && Array.isArray(rightArr)) {

        const resultantArray = [];
        let l =0, r = 0;
        while (l < leftArr.length && r < rightArr.length) {

            if (leftArr[l] < rightArr[r]) {
                resultantArray.push(leftArr[l]);
                l++;
            } else {
                resultantArray.push(rightArr[r]);
                r++;
            }

        }

        while (l < leftArr.length) {
            resultantArray.push(leftArr[l]);
            l++;
        }


        while (r < rightArr.length) {
            resultantArray.push(rightArr[r]);
            r++;
        }


        return resultantArray;

    }


}
function mergeSortImplementation(arr) {

    if (Array.isArray(arr)) {

        if (arr.length <= 1) {
            return arr;
        }
        let mid = Math.floor(arr.length / 2);

        const left = mergeSortImplementation(arr.slice(0, mid));
        const right = mergeSortImplementation(arr.slice(mid, arr.length));

        return merge(left, right);

    }
}


export function mergeSort(arr,l, r){ 
    const result = mergeSortImplementation(arr);

    for(let i=0;i<arr.length;i++){
        arr[i] = result[i];
    }
}
// console.log(merge([41, 42,43],[1,99,105]));

const input = [41, 5, 9, 1, 99];
mergeSort(input,0,4);
console.log(input );

