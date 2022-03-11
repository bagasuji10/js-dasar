// membuat object
//object literal
var mhs1 = {
    nama : "Bagas Uji Rahmanto",
    nrp : '3183111061',
    email : 'bagasuji10@gmail.com',
    jurusan: "Sistem Informasi",
}

var mhs2 = {
    nama : "Inka",
    nrp : '3183111063',
    email : 'inka@gmail.com',
    jurusan: "Sistem Informasi",
}

// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Dita', '318311192', 'dita@dita.com', 'Sistem nformasi');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Nindi', '31831123', 'nindi@gmail.com', 'sistem informasi');