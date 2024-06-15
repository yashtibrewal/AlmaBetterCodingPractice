function recurPascalsTriangle(n,array){
    let result;
    if(n==1){
        result = [1];
    } else if(n==2){
        array.push([1]);
        result = [1,1];
    } else {
        const prev = recurPascalsTriangle(n-1, array);
        result = [];
        for(let i=0;i<n;i++){
    
            if(i==0){
                result.push(1);
                continue;
            }
            if(i==n-1){
                result.push(1);
                continue;
            }
    
            result.push(prev[i]+prev[i-1]);
    
        }
    }
    array.push(result);
    return result;

}
function pascalsTriangle(n) {
    
    const result = [];
    recurPascalsTriangle(n,result);
    return result;

}

console.log(pascalsTriangle(6));