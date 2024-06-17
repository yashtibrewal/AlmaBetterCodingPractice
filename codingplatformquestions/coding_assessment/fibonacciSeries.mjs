

function fibonacciSeries(n) {
    const result = [];
    if(n==1){
        result.push(0);
    }else if(n==2){
        result.push(0);
        result.push(1);
    }
    // Your code goes here
    let i=0,j=1,k;
    n-=2;
    result.push(0);
    result.push(1);
    while(n>0){
        k = i+j;
        i=j,j=k;
        result.push(k);
        n--;
        
    }

    console.log(result.join(" "));
}

fibonacciSeries(10);