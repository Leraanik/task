const arr = [];
for (let i = 0; i < 3; i+=1){
    const row = [];
    for (let j = 0; j < 3; j += 1){
        row.push(Math.random() < 0.5 ? 'x' : 'o');
    }
    arr.push(row);
    console.log(arr[i].join(' '));
}