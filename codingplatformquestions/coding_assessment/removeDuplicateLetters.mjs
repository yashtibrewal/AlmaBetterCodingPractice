var removeDuplicateLetters = function (s) {

    let possiblities = [[]];

    function addToAll(char) {
        for (let i = 0; i < possiblities.length; i++) {
            possiblities[i].push(char);
        }
    }

    function createPossibilityForAll(char) {
        const newPossiblities = [];
        for (let i = 0; i < possiblities.length; i++) {
            newPossiblities.push([...possiblities[i]]);
            // remove the char from this posbility and add the char to last
            const posbility = possiblities[i];
            posbility.splice(posbility.indexOf(char), 1);
            posbility.push(char);
            newPossiblities.push(posbility);
        }
        possiblities = newPossiblities;
    }

    const chars = s.split("");
    const set = new Set();
    for (let char of chars) {
        if (set.has(char)) {
            createPossibilityForAll(char);
        } else {
            addToAll(char);
            set.add(char);
        }
    }

    const words  = possiblities.map(item=>item.join(""));

    let min = words[0];
    for(let i=1;i<words.length;i++){
        if(words[i]<min){
            min = words[i];
        }
    }
    
    return min;
};

// var removeDuplicateLetters = function(s) {
//     const stack = [];
//     const seen = {};
//     const occurrence = {};
//     for(let j = 0; j < s.length; j++) {
//         occurrence[s[j]] = j;
//     }
//     for(let i = 0; i < s.length; i++) {
//         const char = s[i];
//         if(seen[char]) {
//             continue;
//         }
//         while(stack.length > 0 && stack[stack.length - 1] > char && occurrence[stack[stack.length - 1]] > i) {
//             const temp = stack.pop();
//             seen[temp] = false;
//         }
//         seen[char] = true;
//         stack.push(char);
//     }

//     return stack.join('');
// };

console.log(removeDuplicateLetters("azzxxyyza"));
console.log(removeDuplicateLetters("bcabc"));