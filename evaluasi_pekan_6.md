# Evaluasi Pekan 6: Kedai Senja v2

**Waktu pengerjaan:** pukul 09.00 – 22.30 WIB
**Cara mengerjakan:** Praktik langsung di komputer (terminal, editor kode, browser, Git, dan GitHub). Kamu boleh istirahat kapan saja.
**Pengumpulan:** link repository GitHub paling lambat pukul 22.30 WIB.

---

## Aturan

- Boleh membuka materi dan dokumentasi. Tidak boleh memakai AI.
- Nama variabel, function, property, dan method memakai camelCase. Nama konstanta global memakai UPPER_SNAKE_CASE.
- Jawaban penjelasan ditulis dengan bahasa sendiri, maksimal 3 kalimat, sebagai **komentar** di bawah kodenya.

---

## Cerita Soal

Kedai Senja sekarang menerima data transaksi dari formulir pemesanan. Data yang masuk **berantakan** (huruf campur aduk, spasi berlebih, angka berbentuk teks). Tugasmu membuat program yang **membersihkan data**, **memproses transaksi**, dan **membuat laporan harian**. Semua dikerjakan dalam satu proyek bernama `evaluasi-pekan-6`.

## Struktur Proyek

```
evaluasi-pekan-6/
├── index.html          ← memanggil script.js (Bagian 2, 3, dan 4)
├── script.js
├── logika.html         ← memanggil logika.js (Bagian 5)
├── logika.js
├── perbaikan.html      ← memanggil perbaikan.js (Bagian 6)
├── perbaikan.js
├── eksperimen.html     ← memanggil eksperimen.js (Bagian 7)
├── eksperimen.js
├── .gitignore
└── README.md
```

Setiap halaman HTML hanya memanggil satu file JavaScript miliknya sendiri.

---

## Bagian 1: Persiapan Proyek

1. Lewat **terminal**, buat folder `evaluasi-pekan-6`. Di dalamnya buat `index.html`, `script.js`, `.gitignore`, dan `README.md`.
2. `index.html` berisi kerangka HTML dasar lengkap dengan `<title>` dan memanggil `script.js`.
3. Isi `.gitignore` dengan minimal: `node_modules/`, `.env`.
4. Jalankan `git init`. Buat commit pertama di branch `main` dengan format `tipe: deskripsi`.
5. Buat repository GitHub **public** bernama `evaluasi-pekan-6`, lalu hubungkan dan push `main`.

### Alur Git Selama Ujian

Setiap bagian dikerjakan di **branch sendiri**, lalu di-merge ke `main` setelah selesai:

| Bagian | Nama branch                 |
| ------ | --------------------------- |
| 2      | `feat/data-dan-pembersihan` |
| 3      | `feat/mesin-kasir`          |
| 4      | `feat/laporan-harian`       |
| 5      | `feat/latihan-logika`       |
| 6      | `fix/perbaikan-kode`        |
| 7      | `docs/tebak-jelaskan`       |

- Setiap bagian punya minimal 2 commit. Total commit proyek minimal 12.
- Semua pesan commit memakai format `tipe: deskripsi` yang jelas.
- Branch `docs/tebak-jelaskan` digabungkan ke `main` lewat **Pull Request** di GitHub (bukan merge lokal). Isi judul dan deskripsi PR dengan jelas.
- Sebelum push terakhir, branch `main` di GitHub harus sudah berisi seluruh hasil.

---

## Bagian 2: Data dan Pembersihan Data

Kerjakan di `script.js`, branch `feat/data-dan-pembersihan`.

Di bagian paling atas `script.js`, tulis **komentar banyak baris** berisi nama, tanggal, dan tujuan program.

### 2.1 Data

1. Buat **object** `kedai` berisi: `nama`, `pemilik`, `kota`, `tahunBerdiri`, `sedangBuka`, `nomorWhatsApp`, `website`, dan `jamOperasional`. `website` belum ada. `jamOperasional` adalah object berisi `buka` dan `tutup`. Pilih tipe data yang tepat untuk setiap properti.
2. Buat **array** `menu` berisi **minimal 8 object**. Tiap object punya `nama`, `kategori`, `harga`, dan `stok`. Syarat:
   - nama menu ditulis dengan huruf awal kapital tiap kata (contoh: `"Kopi Susu"`),
   - minimal 3 kategori berbeda,
   - minimal 1 menu dengan `stok: 0`.
3. Buat **array** `transaksiMentah` berisi **minimal 6 object** yang meniru data dari formulir. Semua nilai berupa **teks** dan sengaja berantakan. Tiap object punya:
   - `kode` (contoh: `"trx-001"`),
   - `pelanggan` (contoh: `"  rina WULANDARI "`),
   - `hari` (contoh: `"Sabtu"`),
   - `uangBayar` (contoh: `"150.000"` atau `"75000"`),
   - `voucher` (contoh: `" diskon10 "`),
   - `pesanan`: array berisi object `{ menu, jumlah }`, dengan `menu` dan `jumlah` berupa teks (contoh: `{ menu: " kopi SUSU", jumlah: "2" }`).

   Syarat data, setelah semua dikerjakan, hasil pemrosesan harus memuat:
   - minimal 3 transaksi yang berstatus lunas,
   - minimal 1 transaksi yang uangnya kurang,
   - minimal 2 transaksi yang ditolak (misalnya nama pelanggan kosong dan pesanan kosong),
   - minimal 1 transaksi yang tetap diproses tetapi punya item tidak valid (menu tidak ada, jumlah 0 atau negatif, atau stok tidak cukup),
   - hari yang bervariasi: ada `jumat`, ada `sabtu` atau `minggu`, ada hari lain,
   - minimal 1 voucher kosong dan minimal 2 voucher yang berisi.

### 2.2 Function Pembersih Data

Buat function berikut. Pakai **function declaration**, **function expression**, dan **arrow function** masing-masing minimal satu kali di seluruh bagian ini.

| Function                   | Tugas                                                                                                                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bersihkanNama(teks)`      | Menghapus spasi di awal dan akhir, mengubah setiap kata menjadi huruf awal kapital dan sisanya huruf kecil, dan merapikan spasi ganda di antara kata. Mengembalikan teks hasil                |
| `ubahKeAngka(teks)`        | Menghapus titik pemisah ribuan dan spasi, lalu mengubah menjadi angka. Jika hasilnya bukan angka yang valid, mengembalikan `0`                                                                |
| `ambilPersenVoucher(kode)` | Membersihkan kode, lalu jika diawali `"DISKON"` (tidak peka huruf besar/kecil), mengembalikan angka persen di belakangnya (contoh: `" diskon10 "` menjadi `10`). Selain itu mengembalikan `0` |
| `formatRupiah(angka)`      | Mengembalikan teks dengan titik pemisah ribuan dan awalan `"Rp "`. Tidak boleh memakai `toLocaleString`                                                                                       |

Contoh hasil yang diharapkan:

```
bersihkanNama("  rina   WULANDARI ")  →  "Rina Wulandari"
bersihkanNama("")                      →  ""
ubahKeAngka("150.000")                 →  150000
ubahKeAngka("75000")                   →  75000
ubahKeAngka("abc")                     →  0
ambilPersenVoucher(" diskon10 ")       →  10
ambilPersenVoucher("PROMO5")           →  0
ambilPersenVoucher("")                 →  0
formatRupiah(1250000)                  →  "Rp 1.250.000"
formatRupiah(500)                      →  "Rp 500"
formatRupiah(0)                        →  "Rp 0"
```

Uji setiap function dengan **minimal 3 kasus** (termasuk contoh di atas), lalu cetak dengan format `input → hasil`.

### 2.3 Data Bersih

Buat array `transaksiBersih` dari `transaksiMentah` memakai perulangan (`for` atau `for...of`) dan `push`. Tiap object hasilnya punya:

- `kode`: huruf kapital semua,
- `pelanggan`: hasil `bersihkanNama`,
- `hari`: huruf kecil tanpa spasi berlebih,
- `uangBayar`: angka,
- `persenVoucher`: angka,
- `pesanan`: array `{ menu, jumlah }`, dengan `menu` hasil `bersihkanNama` dan `jumlah` berupa angka.

Cetak `transaksiBersih` ke console.

**Jawab dalam komentar:**

1. Apa beda `parseInt`, `parseFloat`, dan `Number`? Kenapa `ubahKeAngka` harus menghapus titik terlebih dahulu? Apa hasil `parseInt("150.000")`?
2. `toFixed` mengembalikan teks atau angka? Buktikan dengan `typeof`, lalu tunjukkan akibatnya jika hasil `toFixed` langsung dijumlahkan dengan angka.
3. Apa beda `replace` dan `replaceAll`? Tunjuk satu tempat di kodemu yang memerlukan salah satunya.
4. Setelah kamu memanggil `kode.toUpperCase()`, kenapa isi variabel `kode` yang asli tidak berubah?
5. Tunjuk satu function declaration, satu function expression, dan satu arrow function dari kodemu. Kenapa kamu memilih bentuk itu untuk masing-masing?

---

## Bagian 3: Mesin Kasir

Lanjutkan di `script.js`, branch `feat/mesin-kasir` (buat dari `main` setelah Bagian 2 di-merge).

Buat **satu object** `kasir` dengan kerangka berikut:

```javascript
const kasir = {
  menu: menu,
  saldoKas: 0,
  riwayat: [],
  pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

  // method ditulis di sini
};
```

Semua method memakai `this` untuk mengakses data object. Buat method berikut:

| Method                                  | Tugas                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cariMenu(nama)`                        | Mencari menu di `this.menu` memakai `for...of`. Mengembalikan object menu jika ketemu, atau `null` jika tidak                                                                                                                                                                                                                                                                               |
| `hitungSubtotal(pesanan)`               | Memeriksa tiap item di `pesanan` memakai `for...of`. Item dilewati (`continue`) jika menu tidak ada, jumlah 0 atau kurang, atau stok tidak cukup. Mengembalikan object `{ subtotal, itemValid, itemTidakValid }`. Tiap item di `itemValid` berisi `{ menu, jumlah, harga }`, dan tiap item di `itemTidakValid` berisi `{ menu, alasan }`                                                    |
| `hitungPromoHari(hari)`                 | Memakai `switch`: `"jumat"` potongan 3000, `"sabtu"` dan `"minggu"` potongan 5000 (digabung tanpa `break` di antaranya), selain itu 0. Case lain wajib memakai `break`                                                                                                                                                                                                                      |
| `hitungDiskon(subtotal, persenVoucher)` | Persen berdasarkan subtotal memakai `if...else if...else`: minimal 100000 → 15, minimal 50000 → 10, minimal 25000 → 5, selain itu 0. Persen yang dipakai adalah yang **lebih besar** antara persen subtotal dan `persenVoucher` (pakai `Math.max`). Mengembalikan besar diskon dalam rupiah, dibulatkan ke bilangan bulat                                                                   |
| `hitungPajak(nilai, tarif = 0.11)`      | Mengembalikan pajak dalam rupiah, dibulatkan ke bilangan bulat. Hasil akhir harus berupa angka, bukan teks                                                                                                                                                                                                                                                                                  |
| `hitungKembalianPecahan(kembalian)`     | Jika `kembalian` kurang dari 0, mengembalikan `null`. Jika tidak, menghitung jumlah lembar tiap pecahan di `this.pecahan` memakai `for...of` dan `while`. Mengembalikan object dengan kunci berupa nilai pecahan (diisi memakai bracket notation) dan hanya memuat pecahan yang jumlah lembarnya lebih dari 0. Tambahkan properti `sisa` berisi sisa kembalian yang tidak bisa dipecah lagi |
| `prosesTransaksi(trx)`                  | Memproses satu transaksi dari `transaksiBersih` (lihat aturan di bawah) dan mengembalikan object hasil                                                                                                                                                                                                                                                                                      |
| `cetakStruk(hasil)`                     | Mencetak struk rapi memakai template literal dan `formatRupiah` (lihat aturan di bawah)                                                                                                                                                                                                                                                                                                     |

Contoh hasil `hitungKembalianPecahan(53380)`:

```
{ "50000": 1, "2000": 1, "1000": 1, sisa: 380 }
```

### Aturan `prosesTransaksi(trx)`

1. **Validasi** memakai konsep Truthy/Falsy. Transaksi **ditolak** jika:
   - nama pelanggan kosong (alasan: `"Nama pelanggan kosong"`),
   - pesanan kosong, diperiksa lewat panjang array (alasan: `"Pesanan kosong"`),
   - tidak ada satu pun item valid (alasan: `"Tidak ada item valid"`).

   Hasil transaksi yang ditolak: `{ kode, pelanggan, status: "DITOLAK", alasan }`.

2. Jika lolos: hitung `subtotal`, `promoHari`, `diskon`, nilai setelah diskon (subtotal dikurangi diskon dan promo hari, **tidak boleh di bawah 0**), `pajak` (dari nilai setelah diskon), dan `total` (nilai setelah diskon ditambah pajak).
3. `kembalian` = uang bayar dikurangi total. Status:
   - `"LUNAS"` jika uang bayar lebih besar atau sama dengan total,
   - `"KURANG"` jika kurang.
4. Hanya untuk status `"LUNAS"`: stok menu yang terjual dikurangi, `total` ditambahkan ke `this.saldoKas`, dan `pecahanKembalian` dihitung.
5. Hasil dimasukkan ke `this.riwayat` (termasuk yang ditolak) dan juga dikembalikan. Hasil yang diproses punya properti: `kode`, `pelanggan`, `status`, `subtotal`, `promoHari`, `diskon`, `pajak`, `total`, `uangBayar`, `kembalian`, `pecahanKembalian`, `itemValid`, dan `itemTidakValid`.

### Aturan `cetakStruk(hasil)`

- Untuk transaksi yang ditolak, cetak kode, nama pelanggan, dan alasannya.
- Untuk transaksi lain, cetak: kode, nama pelanggan, daftar item valid **bernomor** (nama, jumlah, harga), item tidak valid beserta alasannya (jika ada), subtotal, promo hari, diskon, pajak, total, uang bayar, kembalian, status, dan pecahan kembalian (jika ada). Semua angka uang memakai `formatRupiah`.

### Menjalankan Semua Transaksi

1. Buat konstanta `TARGET_KAS`. Proses seluruh `transaksiBersih` memakai perulangan, panggil `cetakStruk` untuk tiap hasil.
2. Setelah tiap transaksi diproses, jika `kasir.saldoKas` sudah mencapai atau melewati `TARGET_KAS`, cetak pesan `"Target kas tercapai"` lalu hentikan perulangan (`break`).
3. Jalankan **dua kali** (muat ulang halaman di antara keduanya): pertama dengan `TARGET_KAS` sangat besar sehingga semua transaksi diproses, kedua dengan `TARGET_KAS` kecil sehingga perulangan berhenti di tengah. Tulis di komentar transaksi mana yang terakhir diproses pada percobaan kedua. Setelah itu kembalikan `TARGET_KAS` ke nilai besar.

**Jawab dalam komentar:**

1. Kenapa di dalam method kamu menulis `this.menu`, bukan `menu`? Apa yang dirujuk oleh `this`?
2. Kenapa `hitungPromoHari` lebih cocok memakai `switch`? Di mana kamu sengaja tidak menulis `break`, dan kenapa hasilnya tetap benar?
3. Kenapa `!trx.pesanan.length` bisa dipakai untuk memeriksa pesanan kosong? Sebutkan 3 nilai yang dianggap Falsy.
4. Tunjuk satu tempat di kodemu yang memakai `break` dan satu yang memakai `continue`. Apa beda keduanya?
5. Kenapa `hitungSubtotal` mengembalikan object berisi `subtotal`, `itemValid`, dan `itemTidakValid`, bukan hanya angka subtotal?
6. Kenapa `hitungKembalianPecahan` memakai `while` di dalam `for...of`? Apakah bisa diganti dengan `%` dan `/`? Jelaskan.

---

## Bagian 4: Laporan Harian

Lanjutkan di `script.js`, branch `feat/laporan-harian` (buat dari `main` setelah Bagian 3 di-merge).

Dengan data `kasir.riwayat` dari percobaan **pertama** (semua transaksi diproses), buat object `laporan` berisi:

| Properti                                       | Isi                                                                                                                                  |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `jumlahTransaksi`                              | Banyaknya seluruh transaksi di riwayat                                                                                               |
| `jumlahLunas`, `jumlahKurang`, `jumlahDitolak` | Banyaknya transaksi tiap status                                                                                                      |
| `pendapatan`                                   | Jumlah `total` dari transaksi berstatus LUNAS                                                                                        |
| `rataRata`                                     | Pendapatan dibagi jumlah transaksi lunas, dibulatkan ke bilangan bulat. Hasil akhir harus berupa angka                               |
| `transaksiTerbesar`                            | Object hasil transaksi LUNAS dengan `total` terbesar                                                                                 |
| `penjualanPerMenu`                             | Object berisi nama menu dan jumlah yang terjual (dari item valid transaksi LUNAS). Isi memakai bracket notation dan pemeriksaan `in` |
| `menuTerlaris`                                 | Nama menu dengan jumlah terjual terbanyak                                                                                            |
| `daftarDitolak`                                | Array `{ kode, alasan }` untuk transaksi yang ditolak                                                                                |
| `kodeLunas`                                    | Array berisi kode transaksi LUNAS (pakai `push`)                                                                                     |
| `ringkasanKode`                                | Teks berisi kode transaksi LUNAS dipisah `", "`, dibuat memakai perulangan dan `+=`                                                  |
| `menuStokMenipis`                              | Array nama menu di `kasir.menu` yang stoknya kurang dari 3                                                                           |

**Cetak laporan:**

1. Judul `"LAPORAN HARIAN KEDAI SENJA"` (dari `kedai.nama`, dicetak dengan huruf kapital semua memakai method, bukan diketik manual) dan tampilan rapi memakai template literal serta `formatRupiah`.
2. Isi `penjualanPerMenu` dicetak memakai `for...in`.
3. Hasil `Object.keys` dan `Object.values` dari `penjualanPerMenu`.
4. Periksa apakah `ringkasanKode.split(", ").length` sama dengan `jumlahLunas`. Cetak hasil pengecekannya.
5. Demo array method pada `kodeLunas`:
   - `includes` untuk memeriksa satu kode,
   - `indexOf` untuk mencari posisi satu kode,
   - `slice` untuk mengambil 2 kode pertama,
   - `splice` untuk menghapus kode pertama dari **salinan** array (buat salinan dengan `slice`), lalu tunjukkan bahwa `kodeLunas` yang asli tidak berubah.

**Jawab dalam komentar:**

1. Kenapa `penjualanPerMenu` dibuat sebagai object, bukan array? Kenapa harus memakai bracket notation untuk mengisinya?
2. Apa beda `Object.keys` dan `Object.values`? Tunjuk hasilnya dari kodemu.
3. Dari demo array method, mana yang mengubah array aslinya dan mana yang tidak? Bukti apa yang kamu lihat di console?
4. Kenapa `rataRata` harus diubah kembali menjadi angka setelah memakai `toFixed`? Apa yang terjadi jika tidak diubah?
5. Apa hasil pengecekan jumlah kode pada nomor 4 di atas? Jelaskan kenapa hasilnya begitu.

---

## Bagian 5: Latihan Logika

Buat `logika.html` dan `logika.js`, branch `feat/latihan-logika`. Bagian ini terpisah dari Kedai Senja.

Buat function berikut. Setiap function dipanggil minimal dengan semua contoh di bawah, dan hasilnya dicetak.

| Function                | Tugas                                                                                                                                                                                                              | Contoh hasil                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `hitungFaktorial(n)`    | Mengembalikan `n!`. Jika `n` negatif, mengembalikan `null`                                                                                                                                                         | `5` → `120`, `0` → `1`, `1` → `1`, `-3` → `null`                                                     |
| `cekPalindrom(teks)`    | Mengembalikan `true` jika teks sama jika dibaca dari depan maupun belakang. Tidak peka huruf besar/kecil dan mengabaikan spasi di awal dan akhir. Teks kosong mengembalikan `false`. Tidak boleh memakai `reverse` | `"Katak"` → `true`, `" Malam "` → `true`, `"Kopi"` → `false`, `""` → `false`                         |
| `hitungVokal(teks)`     | Mengembalikan jumlah huruf vokal (a, i, u, e, o), tidak peka huruf besar/kecil                                                                                                                                     | `"Kedai Senja"` → `5`, `"RHYTHM"` → `0`, `"Aiueo"` → `5`                                             |
| `cariTerbesar(daftar)`  | Mengembalikan object `{ nilai, indeks }` dari angka terbesar (indeks pertama jika kembar). Array kosong mengembalikan `null`. Tidak boleh memakai `Math.max` pada array                                            | `[12, 45, 7, 45, 30]` → `{ nilai: 45, indeks: 1 }`, `[3]` → `{ nilai: 3, indeks: 0 }`, `[]` → `null` |
| `hapusDuplikat(daftar)` | Mengembalikan array baru tanpa elemen ganda dengan urutan kemunculan pertama. Array asli tidak boleh berubah                                                                                                       | `[1, 2, 2, 3, 1]` → `[1, 2, 3]`, `["a", "b", "a"]` → `["a", "b"]`, `[]` → `[]`                       |
| `cekBilanganPrima(n)`   | Mengembalikan `true` jika `n` bilangan prima                                                                                                                                                                       | `2` → `true`, `17` → `true`, `15` → `false`, `1` → `false`, `0` → `false`                            |

Untuk `hapusDuplikat`, cetak juga array asli setelah function dipanggil sebagai bukti tidak berubah.

**Jawab dalam komentar:**

1. Pilih satu function. Jelaskan langkah demi langkah apa yang terjadi saat dipanggil dengan salah satu contoh (nilai variabel di tiap putaran perulangan).
2. Pada `hapusDuplikat`, kenapa array asli tidak berubah? Kenapa kamu memakai method yang kamu pilih untuk memeriksa elemen ganda?
3. Pada `cekBilanganPrima`, apakah kamu memakai `break`? Apa yang terjadi jika baris itu dihapus: hasilnya salah atau hanya lebih lambat? Jelaskan.
4. Kenapa `cariTerbesar([])` mengembalikan `null`, bukan `0`?
5. Tunjuk dua function yang memakai jenis perulangan berbeda (`for`, `for...of`, atau `while`). Kenapa kamu memilih jenis itu untuk masing-masing?

---

## Bagian 6: Perbaiki Kode

Buat `perbaikan.html` dan `perbaikan.js`, branch `fix/perbaikan-kode`.

Salin kode di bawah ke `perbaikan.js`. Kode ini punya **15 kesalahan**. Komentar `Seharusnya` menunjukkan hasil yang benar.

```javascript
const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = "5";

const pelanggan = {
  nama: "rina",
  saldo: 100000,

  // Bayar belanja. Seharusnya bayar(30000) mengembalikan sisa saldo: 70000
  bayar(jumlah) {
    saldo -= jumlah;
    return saldo;
  },
};

// Subtotal: jumlahkan harga semua isi keranjang. Seharusnya: 50000
let subtotal = 0;
for (let i = 0; i <= keranjang.length; i++) {
  subtotal += harga[keranjang[i]];
}

// Persen diskon: subtotal minimal 50000 → 10, minimal 25000 → 5, selain itu 0.
// Seharusnya diskon: 5000
let persen;
if (subtotal >= 25000) {
  persen = 5;
} else if (subtotal >= 50000) {
  persen = 10;
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
let total = subtotal - diskon - promo + pajak;

// Uang bayar dari formulir (teks "100.000"). Seharusnya: 100000, kembalian: 53380
let uangBayarTeks = "100.000";
let uangBayar = parseInt(uangBayarTeks);
let kembalian = uangBayar - total;

// Status. Uang bayar cukup. Seharusnya: "Lunas"
let status;
if ((uangBayar = total)) {
  status = "Lunas";
} else {
  status = "Kurang";
}

// Nama rapi. Seharusnya: "Rina"
let namaRapi =
  pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(0);

// Keranjang: hapus "teh" pertama, lalu tambah "air" di akhir.
// Seharusnya: [ 'kopi', 'roti', 'teh', 'air' ]
keranjang.slice(1, 1);
keranjang.unshift("air");

// Member bertambah 1. Seharusnya: 6
let jumlahMemberBaru = jumlahMember + 1;

// Rata-rata per item (total dibagi 4) ditambah biaya kemasan 10. Seharusnya: 11665
let rataRata = (total / 4).toFixed(2);
let rataRataTotal = rataRata + 10;

// Format rupiah. Seharusnya formatRupiah(53380) = "Rp 53380"
function formatRupiah(angka) {
  "Rp " + angka;
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiah(kembalian));
console.log(pelanggan.bayar(30000));
for (let kunci of harga) {
  console.log(kunci + ": " + harga[kunci]);
}
```

**Yang dikerjakan:**

1. Perbaiki ke-15 kesalahan. Tandai tiap perbaikan dengan komentar `// FIX: ...`.
2. Hasil akhir di console harus:

```
50000 5000 3000 4620 46620
100000 53380 Lunas
Rina
[ 'kopi', 'roti', 'teh', 'air' ]
6
11665
Rp 53380
70000
kopi: 20000
teh: 7500
roti: 15000
```

3. Buat **Catatan Bug** dalam komentar. Untuk tiap kesalahan tulis: **jenisnya** (menghentikan program dengan error / tidak error tapi hasil salah) dan **penyebabnya**.

**Jawab dalam komentar:**

1. Kenapa `if (uangBayar = total)` tidak menimbulkan error? Apa yang terjadi pada nilai `uangBayar` setelah baris itu dijalankan?
2. Kenapa `parseInt("100.000")` menghasilkan `100`, bukan `100000`?

---

## Bagian 7: Tebak, Eksperimen, dan Jelaskan

Buat `eksperimen.html` dan `eksperimen.js`, branch `docs/tebak-jelaskan`. Bagian ini digabungkan ke `main` lewat **Pull Request**.

### 7.1 Tebak

Untuk **setiap `console.log`** di tiga potongan di bawah, tulis **tebakan** di komentar **sebelum** menjalankan kode. Lalu jalankan dan tulis **hasil aslinya**.

**Potongan A**

```javascript
console.log("  Hai Kawan  ".trim().length);
console.log("Kopi Susu".toUpperCase().slice(0, 4));
console.log("a,b,c".split(",").length);
console.log("banana".replace("a", "o"));
console.log("banana".replaceAll("a", "o"));
console.log(parseInt("42px"));
console.log(Number("42px"));
console.log(parseInt("3.99"));
console.log(typeof (3.14159).toFixed(2));
console.log((0.1 + 0.2).toFixed(2));
console.log("10" + 5 * 2);
console.log(!0 && !"");
```

**Potongan B**

```javascript
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan);
console.log(hapus);
console.log(angka);

function ganda(n) {
  return n * 2;
}
function cetak(n) {
  console.log(n * 2);
}
console.log(ganda(4) + ganda(1));
console.log(cetak(4));

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);
console.log(toko.jual(1));
console.log("stok" in toko);
for (let k in toko) {
  console.log(k);
}
```

**Potongan C**

```javascript
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 5) {
    break;
  }
  hasil += i;
}
console.log(hasil);

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
console.log(kali);

let x = 0;
do {
  x += 5;
} while (x < 3);
console.log(x);

for (let huruf of "ABC") {
  console.log(huruf + huruf.toLowerCase());
}
```

### 7.2 Eksperimen

Tulis kode yang **membuktikan sendiri** setiap pernyataan berikut. Untuk kode yang menimbulkan error, jadikan baris itu komentar dan tulis pesan error yang muncul jika diaktifkan.

1. Function declaration bisa dipanggil **sebelum** baris pendefinisiannya, tetapi function expression (`const`) tidak.
2. `slice` tidak mengubah array asli, sedangkan `splice` mengubahnya.
3. `for...in` pada array menghasilkan indeks (berupa teks), sedangkan `for...of` menghasilkan nilainya.
4. `toFixed` menghasilkan teks, sehingga `(5).toFixed(1) + 1` bukan `6.1`.
5. Tunjukkan satu per satu bahwa enam nilai Falsy (`false`, `0`, `""`, `null`, `undefined`, `NaN`) tidak masuk ke dalam `if`, sedangkan `"0"`, `[]`, dan `{}` masuk.

### 7.3 Jelaskan

**Jawab dalam komentar:**

1. Pada Potongan A, kenapa `"10" + 5 * 2` hasilnya `"1010"`? Urutan apa yang dikerjakan JavaScript?
2. Pada Potongan B, kenapa `potongan` dan `hapus` isinya sama, tetapi efeknya pada `angka` berbeda?
3. Pada Potongan B, kenapa `console.log(cetak(4))` mencetak dua baris? Dari mana `undefined` berasal?
4. Pada Potongan C, kenapa `hasil` bernilai `"134"`? Jelaskan apa yang terjadi di tiap putaran dari `i = 1` sampai perulangan berhenti.
5. Pada Potongan C, kenapa `do...while` tetap menjalankan blok satu kali padahal kondisi `x < 3` bernilai `false` sejak awal?

---

## Bagian 8: README dan Pengumpulan

Isi `README.md` dengan:

1. **Judul proyek**, deskripsi singkat, cara menjalankan (tiap halaman HTML), teknologi yang digunakan, dan nama penulis.
2. Hasil perintah `git log --oneline --graph` (tempel apa adanya).
3. Jawaban tiga pertanyaan berikut dengan bahasa sendiri:
   - Kenapa pekerjaan dibagi ke banyak branch, bukan semuanya di `main`?
   - Apa fungsi `.gitignore` dan apa yang kamu masukkan ke dalamnya?
   - Apa beda merge lokal dengan Pull Request di GitHub?

---

## Yang Dikumpulkan

Kirim **link repository GitHub** `evaluasi-pekan-6` kepada mentor paling lambat pukul 22.30 WIB. Pastikan:

- repository bersifat public,
- branch `main` sudah berisi seluruh hasil,
- semua file ada: `index.html`, `script.js`, `logika.html`, `logika.js`, `perbaikan.html`, `perbaikan.js`, `eksperimen.html`, `eksperimen.js`, `.gitignore`, `README.md`.
