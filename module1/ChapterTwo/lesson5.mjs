function jSONParser(jsonString){

    return JSON.parse(jsonString);

}

// console.log(jSONParser(`{"name": "John", "age": 30, "isStudent": true}`));

function objectMerger(jsonObj, jsonObj2){

    return Object.assign(jsonObj,jsonObj2);

}

// console.log(objectMerger({ "name": "John", "age": 30 },{ "isStudent": true, "age": 25 }))

function nestedObjectFinder(obj,arg){

    const arr = arg.split(".");
    let ref = obj
    for(let i of arr){
        console.log(ref);
        console.log(ref.hasOwnProperty(i));
        if(ref!=null && ref != undefined && typeof obj =="object" && ref.hasOwnProperty(i)){
            ref = ref[i];
        }else{
            return null;
        }
    }
    return ref;
}

// console.log(nestedObjectFinder({"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}},"person.name"))
// console.log(nestedObjectFinder({"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}},"person.address.city"))
console.log(nestedObjectFinder({"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}},"person.address.postalCode"))
// console.log(nestedObjectFinder({"person":{"name": "John","age": 30,"address": {"city": "New York","country":"USA"}}},"persn.address.postalCode"))