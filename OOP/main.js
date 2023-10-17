class kendaraan {
    constructor(model,merk,harga){
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }

//membuat method maju 
maju() {
    return`mesin ${this.merk} ${this.model} berjalan maju`;
}
//membuat method berhenti
berhenti() {
    return `mesin ${this.merk} ${this.model} berhenti`;
}
}

class siswa {
    constructor(nama,kelas,absen){
        this.nama = nama;
        this.kelas = kelas;
        this.absen = absen;
    }
    //membuat method belajar
belajar() {
    return`siswa bernma ${this.nama} ${this.kelas} sedang belajar`;
}
//membuat method istirahat
istirahat() {
    return `siswa bernama ${this.nama} ${this.kelas} sedang istirahat`;
}
    
}

let mobil = new kendaraan("supra", "toyota", 2000000);
let motor = new kendaraan("CBR", "Honda", 3000000);


let siswa1 = new siswa("naina", "IX PPLG 2", 21);
let siswa2 = new siswa("nazilah", "IX PPLG 2", 20);


console.log(mobil.maju());
console.log(motor.berhenti());

console.log(siswa1.belajar());
console.log(siswa2.istirahat());