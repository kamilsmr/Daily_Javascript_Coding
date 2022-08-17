// console.log("welcome to javascript");

// let name = prompt('adinizi giriniz');

// let sonuc = confirm('emin misiniz');
// console.log(sonuc);

// console.log('adiniz : ' + name +' dir');
// console.log(`adiniz : ${name} dir`);

// değişkenler

// var number = 'okul numaram';
// console.log(number);

// let sayi = 55;
// console.log(sayi);

// // let kullandığımızda değişkeni değiştirebiliyoruz.
// sayi = 100;
// console.log(sayi);

// lette localde tanımladığımız dışarı çıkamıyor orada olup bitiyor. fakat var local dışı kullanılabiliyor.
// {
//   let localVar1 = "local variable";
//   var isim = "kamil";
//   console.log(localVar1);
// }

// // console.log(localVar1);
// console.log(isim);

// const ta daha önce tanımlanan değişken başka bir değişkene atanabiliyor. O değişken değiştiğinde atanan değişkende değişiyor.

const student = {
    firstName: 'Can',
    number: 'F1234',
  };
  
const otherStudent = student;
console.log(otherStudent);
  
otherStudent.number1 = 'F9876';
  
console.log(student);