// BAGIAN 7.1 : TEBAK
//**Potongan A**

console.log("  Hai Kawan  ".trim().length);             // Tebakan : 9
console.log("Kopi Susu".toUpperCase().slice(0, 4));     // Tebakan : KOPI
console.log("a,b,c".split(",").length);                 // Tebakan : 3
console.log("banana".replace("a", "o"));                // Tebakan : bonono
console.log("banana".replaceAll("a", "o"));             // Tebakan : oooooo
console.log(parseInt("42px"));                          // Tebakan : 4
console.log(Number("42px"));                            // Tebakan : 
console.log(parseInt("3.99"));                          // Tebakan : 3
console.log(typeof (3.14159).toFixed(2));               // Tebakan : string
console.log((0.1 + 0.2).toFixed(2));                    // Tebakan : 0.30
console.log("10" + 5 * 2);                              // Tebakan : 1010
console.log(!0 && !"");                                 // Tebakan : error

//**Potongan B**

let angka = [10, 20, 30, 40];                           
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan);                  // Tebakan : [20, 30]
console.log(hapus);                     // Tebakan : [20, 30]
console.log(angka);                     // Tebakan : [10, 40]

function ganda(n) {
  return n * 2;
}
function cetak(n) {
  console.log(n * 2);
}
console.log(ganda(4) + ganda(1));       // Tebakan : 10
console.log(cetak(4));                  // Tebakan : 8

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) {
    this.stok -= n;
    return this.stok;
  },
};
toko.jual(2);                           // Tebakan :
console.log(toko.jual(1));              // Tebakan : 2
console.log("stok" in toko);            // Tebakan : true
for (let k in toko) {
  console.log(k);                       // Tebakan : nama, stok, jual
}

//**Potongan C**

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
console.log(hasil);                 // Tebakan : 134

let n = 3;
let kali = 1;
while (n > 0) {
  kali *= n;
  n--;
}
console.log(kali);                  // Tebakan : 6

let x = 0;
do {
  x += 5;
} while (x < 3);
console.log(x);                     // Tebakan : 5

for (let huruf of "ABC") {
  console.log(huruf + huruf.toLowerCase());     // Tebakan : 
}


// BAGIAN 7.2 : EKSPERIMEN PEMBUKTIAN KODE

console.log("=== 1. UJI HOISTING FUNCTION ===")
// A. Function declaration BERHASIL dipanggil sebelum didefinisikan (Hoisting)
console.log("Hasil Declaration:", contohDeclaration(5)); // Output: 10

function contohDeclaration(n) {
    return n * 2;
}

// B. Function expression GAGAL jika dipanggil sebelum didefinisikan
/* 
   Jika baris di bawah ini diaktifkan, akan memicu error:
   ReferenceError: Cannot access 'contohExpression' before initialization
*/
// console.log("Hasil Expression:", contohExpression(5));

const contohExpression = function(n) {
    return n * 2;
};
console.log("Hasil Expression setelah didefinisikan:", contohExpression(5));


console.log("\n=== 2. UJI SLICE VS SPLICE ===")
let arrayAsli = [10, 20, 30, 40];
console.log("Array awal:", arrayAsli);

// slice tidak mengubah array asli
let hasilSlice = arrayAsli.slice(1, 3);
console.log("Hasil slice [1, 3]:", hasilSlice);
console.log("Array setelah slice (tetap aman):", arrayAsli);

// splice mengubah array asli
let hasilSplice = arrayAsli.splice(1, 2);
console.log("Hasil splice(1, 2):", hasilSplice);
console.log("Array setelah splice (berubah terpotong):", arrayAsli);


console.log("\n=== 3. UJI FOR...IN VS FOR...OF PADA ARRAY ===")
let buah = ["apel", "mangga", "jeruk"];

console.log("--- Menggunakan for...in (menghasilkan indeks / string) ---");
for (let indeks in buah) {
    console.log(`Key: ${indeks} (tipe: ${typeof indeks}), Nilai: ${buah[indeks]}`);
}

console.log("--- Menggunakan for...of (menghasilkan nilai langsung) ---");
for (let nilai of buah) {
    console.log(`Nilai: ${nilai}`);
}


console.log("\n=== 4. UJI TOFIXED MENGHASILKAN TEKS ===")
let angkaFix = (5).toFixed(1);
let hasilGabung = angkaFix + 1;
console.log(`Nilai: "${angkaFix}" (tipe: ${typeof angkaFix})`);
console.log(`Hasil "(5).toFixed(1) + 1" adalah: "${hasilGabung}" (bukan 6.1, melainkan penggabungan string)`);


console.log("\n=== 5. UJI 6 NILAI FALSY VS TRUTHY KHUSUS ===")

// A. Enam nilai Falsy (TIDAK masuk ke dalam blok if)
let daftarFalsy = [false, 0, "", null, undefined, NaN];

console.log("--- Pengujian 6 Nilai Falsy ---");
for (let i = 0; i < daftarFalsy.length; i++) {
    let nilai = daftarFalsy[i];
    if (nilai) {
        console.log(`Masuk if: ${nilai}`);
    } else {
        console.log(`TIDAK masuk if (Falsy terbukti):`, nilai);
    }
}

// B. Nilai khusus yang sering mengecoh ("0", [], {}) (MASUK ke dalam blok if karena Truthy)
let daftarTruthyUnik = ["0", [], {}];

console.log("\n--- Pengujian Nilai Truthy Khusus ---");
for (let i = 0; i < daftarTruthyUnik.length; i++) {
    let nilai = daftarTruthyUnik[i];
    if (nilai) {
        // Menggunakan JSON.stringify agar array [] dan object {} tercetak jelas di console
        console.log(`MASUK ke dalam if (Truthy terbukti):`, JSON.stringify(nilai));
    } else {
        console.log(`Tidak masuk if:`, nilai);
    }
}

