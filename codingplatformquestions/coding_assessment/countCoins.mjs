function countCoinCombinations(coins, sum) {
    // Your code goes here

    let path = [];

    const set = new Set();

    function backtrack(sum, j) {

        if (sum < 0) return;

        if (sum == 0) { 
            const pathCopy = [...path];
            pathCopy.sort((a,b)=>a-b);
            set.add(pathCopy.toString());
            return;
        }

        for (let i = j; i < coins.length; i++) {
            path.push(coins[i]);
            backtrack(sum - coins[i], j);  
            path.pop();
        }

    }

    backtrack(sum, 0);

    return set.size;
}

console.log(countCoinCombinations([1, 2, 3], 4));