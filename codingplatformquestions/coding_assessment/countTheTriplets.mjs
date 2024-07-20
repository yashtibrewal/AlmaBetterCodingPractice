
/**
 * 
 * @param {[]} arr 
 */
function countTriplets(arr) {
    // Your code goes here
    let sum = 0, count = 0;

    arr = arr.sort((a,b)=>a-b);

    for (let i = 0; i < arr.length - 1; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            sum = arr[i] + arr[j];

            if(arr.lastIndexOf(sum)!=-1){
                count++;
            }

        }

    }

    return count;
}