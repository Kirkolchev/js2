let result = (0.1 + 0.2).toFixed(1);
console.log(result);


let a = "1";
let b = 2;
let sum = Number(a) + b;
console.log(sum);



let flashGb = prompt("Введіть обсяг флешки у ГБ");

flashGb = Number(flashGb);
let flashMb = flashGb * 1024;
let fileSize = 820;
let fileCount = Math.floor(flashMb / fileSize);
alert(`На флешку ${flashGb} ГБ поміститься ${fileCount} файлів по 820 МБ.`);