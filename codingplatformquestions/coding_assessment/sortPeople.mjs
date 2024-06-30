const sortPeople = function (names, heights) {

    let items = [];

    for (let i = 0; i < names.length; i++) {
        const obj = {};
        obj.height = heights[i];
        obj.name = names[i];
        items.push(obj);
    }
    items = items.sort((itemA,itemB)=>itemB.height-itemA.height);
    
    const result = [];

    for(let item of items){ 
        result.push(item.name);
    }
    return result;

};

console.log(sortPeople( ["Alice","Bob","bob"],[155,185,150]));