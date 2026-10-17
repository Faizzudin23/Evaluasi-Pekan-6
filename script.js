// BAGIAN 2.1 : DATA
const kedai = {
    nama: "KEDAI SENJA 2",
    pemilik: "Faiz Amru",
    kota: "Yogyakarta",
    tahunBerdiri: 2023,
    sedangBuka: true,
    nomorWhatsApp: "082986472875",
    website: null,
    jamOperasional: {buka: "10:00", tutup: "23:59"},
};

let menu = [
    {nama: "Kopi Susu", kategori: "Minuman", harga: 8000, stok: 15},
    {nama: "Soda Gembira", kategori: "Minuman", harga: 20000, stok: 8},
    {nama: "Es Degan", kategori: "Minuman", harga: 14000, stok: 12},
    {nama: "Nasi Ayam Geprek", kategori: "Makanan", harga: 22000, stok: 17},
    {nama: "Nasi Mie Instan", kategori: "Makanan", harga: 12000, stok: 13},
    {nama: "Nasi Goreng Spesial", kategori: "Makanan", harga: 25000, stok: 5},
    {nama: "Dimsum Goreng", kategori: "Snack", harga: 15000, stok: 7},
    {nama: "Pancake", kategori: "Snack", harga: 19000, stok: 0},
];

// Data mentah
const transaksiMentah = [
    {
        kode: "trx-001",
        pelanggan: "  rina WULANDARI ",
        hari: "Sabtu ",
        uangBayar: "120.000",
        voucher: " diskon10 ",
        pesanan: [
            { menu: " kopi SUSU", jumlah: " 2 " },
            { menu: "Soda gembira ", jumlah: "1" }
        ]
    },
    {
        kode: " trx-002 ",
        pelanggan: "BUDI santoso",
        hari: " jumat",
        uangBayar: "75000",
        voucher: "",
        pesanan: [
            { menu: "es teh manis", jumlah: "3" },
            { menu: " roti bakar ", jumlah: " 1" }
        ]
    },
    {
        kode: "trx-003",
        pelanggan: "  siti  ",
        hari: "minggu",
        uangBayar: "200.000",
        voucher: "VOUCHER5",
        pesanan: [
            { menu: "NASI goreng", jumlah: "2" },
            { menu: "  jus jeruk ", jumlah: "2" }
        ]
    },
    {
        kode: "trx-004",
        pelanggan: "joko  ",
        hari: "SENIN",
        uangBayar: " 50.000 ",
        voucher: " ",
        pesanan: [
            { menu: "kopi susu", jumlah: "1" },
            { menu: "es teh", jumlah: "1" }
        ]
    },
    {
        kode: "trx-005",
        pelanggan: "  dewi PERMANA ",
        hari: "rabu",
        uangBayar: "90000",
        voucher: " diskon20 ",
        pesanan: [
            { menu: "  mie instan", jumlah: "2" },
            { menu: "teh hangat", jumlah: "1" }
        ]
    },
    {
        kode: "trx-006",
        pelanggan: "agus",
        hari: " kamis ",
        uangBayar: "150.000",
        voucher: "",
        pesanan: [
            { menu: "Ayam Goreng", jumlah: "1" },
            { menu: "Es Jeruk", jumlah: "2" }
        ]
    }
];

// Wadah penyimpanan hasil pembersihan (Parallel Arrays)
let kodeTransaksi = [];
let namaPelanggan = [];
let namaHari = [];
let uangDibayar = [];
let persentaseVoucher = [];
let menuPesanan = [];
let jumlahPesanan = [];

// 1. Fungsi bersihkanSpasi(teks)
function bersihkanSpasi(teks) {
    if (!teks) return "";
    let teksTrimmed = teks.trim();
    let kataArray = teksTrimmed.split(/\s+/);
    let kataHasil = [];

    for (let i = 0; i < kataArray.length; i++) {
        let kata = kataArray[i];
        if (kata !== "") {
            let kataRapi = kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase();
            kataHasil.push(kataRapi);
        }
    }
    return kataHasil.join(" ");
}

// 2. Fungsi ubahKeAngka(teks)
function ubahKeAngka(teks) {
    if (!teks) return 0;
    let bersih = String(teks).replace(/\./g, "").trim();
    let angka = Number(bersih);
    if (isNaN(angka)) {
        return 0;
    }
    return angka;
}

// 3. Fungsi ambilPersenVoucher(kode)
function ambilPersenVoucher(kode) {
    if (!kode) return 0;
    let bersih = kode.trim().toLowerCase();
    if (bersih.startsWith("diskon")) {
        let angkaStr = bersih.replace("diskon", "").trim();
        let persen = Number(angkaStr);
        if (isNaN(persen)) return 0;
        return persen;
    }
    return 0;
}

// 4. Fungsi formatRupiah(angka) (Tanpa toLocaleString)
function formatRupiah(angka) {
    let str = String(angka);
    let hasil = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        hasil = str[i] + hasil;
        count++;
        if (count % 3 === 0 && i !== 0) {
            hasil = "." + hasil;
        }
    }
    return "Rp " + hasil;
}

// Function Utama: Memproses data mentah ke dalam wadah dengan perulangan manual
function prosesDataTransaksi() {
    for (let i = 0; i < transaksiMentah.length; i++) {
        // Ambil dan bersihkan data utama
        kodeTransaksi.push(transaksiMentah[i].kode.trim());
        namaPelanggan.push(bersihkanSpasi(transaksiMentah[i].pelanggan));
        namaHari.push(bersihkanSpasi(transaksiMentah[i].hari));
        
        let uangAngka = ubahKeAngka(transaksiMentah[i].uangBayar);
        uangDibayar.push(uangAngka);

        let persen = ambilPersenVoucher(transaksiMentah[i].voucher);
        persentaseVoucher.push(persen);

        // Nested Loop untuk array pesanan
        let menuBaris = [];
        let jumlahBaris = [];

        for (let j = 0; j < transaksiMentah[i].pesanan.length; j++) {
            menuBaris.push(bersihkanSpasi(transaksiMentah[i].pesanan[j].menu));
            jumlahBaris.push(ubahKeAngka(transaksiMentah[i].pesanan[j].jumlah));
        }

        menuPesanan.push(menuBaris);
        jumlahPesanan.push(jumlahBaris);
    }
}

// Jalankan fungsi
prosesDataTransaksi();

// Uji Cetak Hasil
console.log("--- UJI 1: bersihkanSpasi ---");
console.log(`"  rina WULANDARI " → "${bersihkanSpasi("  rina WULANDARI ")}"`);
console.log(`"  kopi   SUSU  " → "${bersihkanSpasi("  kopi   SUSU  ")}"`);
console.log(`" NASI goreng " → "${bersihkanSpasi(" NASI goreng ")}"`);

console.log("\n--- UJI 2: ubahKeAngka ---");
console.log(`"120.000" → ${ubahKeAngka("120.000")}`);
console.log(`" 50.000 " → ${ubahKeAngka(" 50.000 ")}`);
console.log(`"invalid" → ${ubahKeAngka("invalid")}`);

console.log("\n--- UJI 3: ambilPersenVoucher ---");
console.log(`" diskon10 " → ${ambilPersenVoucher(" diskon10 ")}`);
console.log(`"  DISKON25 " → ${ambilPersenVoucher("  DISKON25 ")}`);
console.log(`"VOUCHER5" → ${ambilPersenVoucher("VOUCHER5")}`);

console.log("\n--- UJI 4: formatRupiah ---");
console.log(`120000 → "${formatRupiah(120000)}"`);
console.log(`75000 → "${formatRupiah(75000)}"`);
console.log(`5000 → "${formatRupiah(5000)}"`);

let transaksiBersih = [];

for (let i = 0; i < transaksiMentah.length; i++) {
    let itemAsal = transaksiMentah[i];

    // Proses array pesanan terlebih dahulu
    let pesananBersih = [];
    for (let j = 0; j < itemAsal.pesanan.length; j++) {
        pesananBersih.push({
            menu: bersihkanSpasi(itemAsal.pesanan[j].menu),
            jumlah: ubahKeAngka(itemAsal.pesanan[j].jumlah)
        });
    }

    // Buat object bersih untuk setiap transaksi
    let objekBersih = {
        kode: itemAsal.kode.trim().toUpperCase(),
        pelanggan: bersihkanSpasi(itemAsal.pelanggan),
        hari: itemAsal.hari.trim().toLowerCase(),
        uangBayar: ubahKeAngka(itemAsal.uangBayar),
        persenVoucher: ambilPersenVoucher(itemAsal.voucher),
        pesanan: pesananBersih
    };

    transaksiBersih.push(objekBersih);
}

console.log("\n--- HASIL TRANSAKSI BERSIH ---");
console.log(transaksiBersih);

/*
PERTANYAAN 
1. Apa beda `parseInt`, `parseFloat`, dan `Number`? Kenapa `ubahKeAngka` harus menghapus titik terlebih dahulu? Apa hasil `parseInt("150.000")`?
    - parseInt: Mengubah teks menjadi angka bulat (membuang angka di belakang koma, misal "12.5" jadi 12).
    - parseFloat: Mengubah teks menjadi angka desimal (tetap mempertahankan koma/titik, misal "12.5" jadi 12.5).
    - Number: Mengubah teks menjadi angka secara utuh (bisa bulat atau desimal).
    - Kenapa harus menghapus titik? Karena JavaScript menganggap titik (.) sebagai pemisah desimal, bukan pemisah ribuan. Jika teksnya "150.000" tidak dibersihkan, JavaScript akan membacanya sebagai 150 saja.
    - Hasil parseInt("150.000"): Adalah 150 (karena pembacaannya berhenti tepat saat menemui titik pertama).
2. `toFixed` mengembalikan teks atau angka? Buktikan dengan `typeof`, lalu tunjukkan akibatnya jika hasil `toFixed` langsung dijumlahkan dengan angka.
    - toFixed mengembalikan teks (string), bukan angka.
    - Akibatnya jika langsung dijumlahkan: Karena berupa teks, JavaScript akan melakukan penggabungan teks (concatenation) alih-alih penjumlahan matematika. Contoh: "10.57" + 5 akan menghasilkan "10.575" bukannya 15.57.
3. Apa beda `replace` dan `replaceAll`? Tunjuk satu tempat di kodemu yang memerlukan salah satunya.
    - replace: Hanya mengganti kecocokan pertama yang ditemukan pada teks.
    - replaceAll: Mengganti seluruh kecocokan yang ditemukan pada teks.
    - Tempat di kode yang memerlukannya: Pada fungsi ubahKeAngka saat membersihkan titik ribuan (.replace(/\./g, "")). Kita memakai regex dengan flag global (/g) karena sebuah angka bisa punya lebih dari satu titik pemisah ribuan, sehingga replace biasa tidak cukup.
4. Setelah kamu memanggil `kode.toUpperCase()`, kenapa isi variabel `kode` yang asli tidak berubah?
    - Karena tipe data string di JavaScript bersifat immutable (tidak bisa diubah langsung). Method seperti toUpperCase() tidak mengubah teks aslinya, melainkan menciptakan dan mengembalikan salinan teks baru yang sudah berhuruf besar.
5. Tunjuk satu function declaration, satu function expression, dan satu arrow function dari kodemu. Kenapa kamu memilih bentuk itu untuk masing-masing?
    - Function Declaration (bersihkanSpasi): Dipilih karena bentuknya paling standar, mudah dibaca, dan bisa dipanggil dari baris mana saja berkat fitur hoisting.
    - Function Expression (ubahKeAngka): Dipilih karena ingin memperlakukan fungsi sebagai nilai yang tersimpan rapi di dalam wadah variabel khusus.
    - Arrow Function: (Meskipun di kode sebelumnya kita memakai Declaration/Expression, contoh penulisannya seperti (teks) => teks.trim()). Dipilih jika kita ingin membuat fungsi satu baris yang sangat singkat tanpa perlu menulis kata function dan return
*/

