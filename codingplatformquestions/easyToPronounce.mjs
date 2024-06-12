function containsVowels(arr){
    if(Array.isArray(arr)){

        for(let i=0;i<arr.length;i++){
            if(['a','e','i','o','u'].includes(arr[i])){
                return true;
            }

        }

    }

    return false;
}


function isEasyToPronounce(s) {
    
    if(typeof s == "string"){

        const arr = s.split("");
        for(let i=0;i<s.length-4;i++){

            if(!containsVowels(arr.slice(i,i+4))){
                return "NO";
            }

        }


    }
    return "YES";

}

console.log(isEasyToPronounce("apple"));
console.log(isEasyToPronounce("tryst"));