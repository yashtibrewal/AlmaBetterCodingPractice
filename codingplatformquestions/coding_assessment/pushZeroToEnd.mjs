function pushZerosToEnd(arr) {
    // Your code goes here

    if(Array.isArray(arr)){
        let len = arr.length;
        let i = 0;
        while(len>=0){
            
            if(arr[i]==0){
                arr.splice(i,1);
                arr.push(0);
                
            }else{
                i++;
            }
            
            len--;
        }
    }
    return arr;
}

console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));