// BAGIAN 6 : PERBAIKI KODE
const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,

  // Bayar belanja. Seharusnya bayar(30000) mengembalikan sisa saldo: 70000
  bayar(jumlah) {
    this.saldo -= jumlah;           // FIX: Menambahkan 'this.saldo' agar merujuk ke properti objek, bukan variabel global yang tidak ada
    return saldo;
  },
};

// Subtotal: jumlahkan harga semua isi keranjang. Seharusnya: 50000
let subtotal = 0;
for (let i = 0; i < keranjang.length; i++) {        // FIX: Mengubah kondisi '<=' menjadi '<' agar tidak terjadi 'undefined' di akhir perulangan (keranjang[4])
  subtotal += harga[keranjang[i]];
}

// Persen diskon: subtotal minimal 50000 → 10, minimal 25000 → 5, selain itu 0.
// Seharusnya diskon: 5000
let persen;
if (subtotal >= 50000) {                // FIX: Urutan logika if-else dibalik dari nilai terbesar ke terkecil agar subtotal 50000 terbaca benar (10%)
  persen = 10;
} else if (subtotal >= 25000) {
  persen = 5;
} else {
  persen = 0;
}
let diskon = (subtotal * persen) / 100;

// Promo hari. "jumat" 3000, "sabtu" dan "minggu" 5000, lainnya 0.
// Hari ini "jumat". Seharusnya: 3000
let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000;
    break;              // FIX: Menambahkan 'break' agar tidak 'fall-through' langsung menimpa promo dengan 5000
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// Pajak 11% dari (subtotal - diskon - promo). Seharusnya: 4620
let pajak = subtotal - diskon - promo * TARIF_PAJAK;

// Total. Seharusnya: 46620
let total = (subtotal - diskon - promo) + pajak;            // FIX: Menambahkan tanda kurung '(subtotal - diskon - promo)' agar prioritas pengurangan didahulukan sebelum dikali tarif pajak

// Uang bayar dari formulir (teks "100.000"). Seharusnya: 100000, kembalian: 53380
let uangBayarTeks = "100.000";
// FIX: Menggunakan replace untuk menghapus titik pemisah ribuan agar parseInt tidak berhenti di titik pertama
let uangBayar = parseInt(uangBayarTeks.replace(/\./g, ""));
let kembalian = uangBayar - total;

// Status. Uang bayar cukup. Seharusnya: "Lunas"
let status;
if ((uangBayar = total)) {
  status === "Lunas";         // FIX: Mengubah operator penugasan '=' menjadi operator perbandingan '==='
} else {
  status === "Kurang";
}

// Nama rapi. Seharusnya: "Rina"
// FIX: Memperbaiki index slice kedua dari (0) menjadi (1) agar mengambil sisa huruf setelah huruf pertama
let namaRapi =
    pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1);

// Keranjang: hapus "teh" pertama, lalu tambah "air" di akhir.
// Seharusnya: [ 'kopi', 'roti', 'teh', 'air' ]
// PERBAIKAN: Menggunakan splice(index, 1) untuk menghapus elemen, dan push("air") untuk menambah di akhir
keranjang.splice(1, 1);
keranjang.push("air");

// Member bertambah 1. Seharusnya: 6
// PERBAIKAN: Mengubah tipe data string '5' menjadi angka menggunakan Number() atau operator '+' agar tidak terjadi penggabungan teks ("51")
let jumlahMemberBaru = Number(jumlahMember) + 1;

// Rata-rata per item (total dibagi 4) ditambah biaya kemasan 10. Seharusnya: 11665
let rataRata = total / 4; // Menghapus .toFixed() agar tetap tipe angka
// PERBAIKAN: Menambahkan Number() / Math.round() untuk memastikan hasil akhir berupa angka, bukan string sambungan
let rataRataTotal = Number(rataRata.toFixed(2)) + 10;

// Format rupiah. Seharusnya formatRupiah(53380) = "Rp 53380"
function formatRupiah(angka) {
    // PERBAIKAN: Menambahkan kata kunci 'return' agar fungsinya mengembalikan nilai teks
    return "Rp " + angka;
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));

// PERBAIKAN: Mengganti 'for...of' dengan 'for...in' karena 'harga' adalah sebuah Object, bukan Array
for (let kunci in harga) {
    console.log(kunci + ": " + harga[kunci]);
}
