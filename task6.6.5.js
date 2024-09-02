const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];
for(let key of Object.values(obj)){
if (Array.isArray(key)){
    for (let elem of key){
        arrValues.push(elem);
    }
}
else{
    arrValues.push(key);
}
}
console.log(arrValues);