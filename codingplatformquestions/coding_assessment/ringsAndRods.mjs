
/**
 * 
 * @param {string} rings 
 */
var countPoints = function (rings) {
    // Your code goes here

    let n = rings.length / 2;

    const history = {};

    for (let i = 0; i < rings.length; i += 2) {

        let color = rings[i];
        let num = parseInt(rings[i + 1], 10);
        // console.debug(num);

        if(!history[num]){
            history[num] = new Set();
        }

        history[num].add(color);

    }
    let result = 0;
    // console.log(ringsHistroy);
    
    for(let key of Object.keys(history)){
        if(history[key].size == 3){
            result++;
        }
    }

    return result;
};

console.log(countPoints("B0B6G0R6R0R6G9"));