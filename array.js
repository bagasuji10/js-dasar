//menambah array
// var arr = [];
// arr[0] = "Sandika";
// arr[1] = "Galih";
// arr[2] = "nofa";

//menghapus array
// var arr = ["Nindita", "Dwi", "Jayanti"];
// arr[1] = undefined;

//menampilkan array
// var arr = ["Nindita", "Dwi", "Jayanti"];

// for (var index = 0; index < arr.length; index++) {
//     console.log('Mahasiswa ke-' + (index+1) + ' : ' + arr[index]);
// }

//method pada array
//1. join
var arr = ["Nindita", "Dwi", "Jayanti", "Esa", "Lova"];
// console.log(arr.join('-'))

// 2. push & pop - paling belakang array
// arr.push('Esa');
// arr.pop();

// 3. unshift & shift - paling awal array
// arr.unshift('Esa');
// arr.shift();

// 4. splice(indexAwal, mauDihapusBerapa, elemenBaru1,elemenBaru2, ...)
// arr.splice(1, 2, 'Esa', 'Bagas');

// 5. slice(awal,akhir)
// var arr2 = arr.slice(1,3);
// console.log(arr.join('-'));
// console.log(arr2.join('-'));


// 6. foreach
var angka = [1,2,3,10,4,5,20,30,6,7,8,9];
//ini menggunakan function expression
// angka.forEach(function(e) {
//     console.log(e);
// });

// arr.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map - mengembalikan nilai array
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join('-'));

// 8. sort
// angka.sort(function (a, b) {
//     return a-b;
// });
// console.log(angka.join('-'));

// 9. filter -, mencari nilai pada array dan mengembalikkan dalam bentuk array
// 10. find - mencari satu nilai
var angka2 = angka.filter(function(x){
    return x > 5;
});
console.log(angka2.join('-'));




