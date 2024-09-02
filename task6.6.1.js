const InputLine = prompt('Введите слово ');
let flag = false;
const j = InputLine.length - 1;
for (let i = 0; i <= j;i += 1){
  if (InputLine[i] === InputLine[j - i]){
    flag = true;

  }
}
if (flag){
  console.log(`Слово ${InputLine} является палиндромом`);
}
else{
  console.log(`Слово ${InputLine} не является палиндромом`);
}