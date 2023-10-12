// Menghasilkan angka acak antara 1 dan 10
var angka = Math.round(Math.random() * 10) + 1;

// Inisialisasi jumlah kesempatan
var kesempatan = 3;

// Memulai permainan
alert("Kamu harus menebak angka (1-10)!\nKesempatanmu : 3");

while (kesempatan > 0) {
  // Meminta pemain untuk menebak angka
  var tebakanPemain = parseInt(prompt("Tebak angka (1-10):" ));

  // Memeriksa apakah input pemain valid
  if (isNaN(tebakanPemain) || tebakanPemain < 1 || tebakanPemain > 10) {
    alert("Berapa angka tebakanmu ?");
    continue; // 
  }

  // Mengurangi jumlah kesempatan
  kesempatan--;

  // Memeriksa apakah tebakan pemain benar
  if (tebakanPemain === angka) {
    alert("Selamat, kamu menang! Angka yang benar adalah " + angka);
    break; // Mengakhiri permainan jika pemain menang
  } else if (tebakanPemain < angka) {
    alert("Jawabanmu terlalu rendah. Sisa kesempatan: " + kesempatan);
  } else {
    alert("Jawabanmu terlalu tinggi. Sisa kesempatan: " + kesempatan);
  }
}

// Menampilkan pesan jika kesempatan habis
if (kesempatan === 0) {
  alert("Maaf, kesempatanmu sudah habis. Jawaban yang benar adalah " + angka);
}
