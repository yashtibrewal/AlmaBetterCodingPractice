var hammingWeight = function(n) {
    let ctr = 0;
    for(const member of n.toString(2)){
        if(member)ctr++;
    }
    return ctr;
};

console.log(hammingWeight(0b00000000000000000000000000001011));
