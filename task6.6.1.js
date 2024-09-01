let stroka = prompt('Введите слово');
let flag = true;
 let j = stroka.length - 1;
for (let i = 0; i <= j;i += 1){
  if (stroka[i] === stroka[j - i]){
    flag = true;

  }
}
if (flag){
  console.log(`Слово ${stroka} является палиндромом`);
}
else{
  console.log(`Слово ${stroka}  не является палиндромом`);
}