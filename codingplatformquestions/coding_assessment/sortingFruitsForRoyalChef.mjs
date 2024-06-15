
function printFruitsByFrequency(fruits) {

    const freq = {};

    for(let fruit of fruits){
      if(fruit in freq){
        
        freq[fruit] = freq[fruit]+1;

      }else {
        freq[fruit] = 1;
      }
    }

    console.log(freq);

    const stats = {};
    let v;

    for(let fruit of Object.keys(freq)){

        v = freq[fruit];
        if(v in stats){
            stats[v] = [fruit,...stats[v]];
        }else{
            stats[v] = [fruit];
        }
    }

    console.log(stats);
    const freqs = Object.keys(stats);

    freqs.sort((a,b)=>b-a);
    // freqs.reverse();

    const result = [];

    console.log(freqs);

    for(let i of freqs){
        result.push(...stats[i]);
    }

    return result;
}

const fruits = ["apple","banana","cherry","cherry","apple","apple","apple","banana","banana"];

console.log(printFruitsByFrequency(fruits));