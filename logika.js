// 1. hitungFaktorial(n)
function hitungFaktorial(n) {
    if (n < 0) return null;
    let hasil = 1;
    for (let i = 1; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

// 2. cekPalindrom(teks) - Tanpa reverse
function cekPalindrom(teks) {
    if (!teks) return false;
    let bersih = teks.trim().toLowerCase();
    if (bersih === "") return false;

    let depan = 0;
    let belakang = bersih.length - 1;

    while (depan < belakang) {
        if (bersih[depan] !== bersih[belakang]) {
            return false;
        }
        depan++;
        belakang--;
    }
    return true;
}

// 3. hitungVokal(teks)
function hitungVokal(teks) {
    if (!teks) return 0;
    let hurufVokal = "aiueo";
    let teksKecil = teks.toLowerCase();
    let jumlah = 0;

    for (let i = 0; i < teksKecil.length; i++) {
        if (hurufVokal.includes(teksKecil[i])) {
            jumlah++;
        }
    }
    return jumlah;
}

// 4. cariTerbesar(daftar) - Tanpa Math.max pada array
function cariTerbesar(daftar) {
    if (!daftar || daftar.length === 0) return null;

    let nilaiMax = daftar[0];
    let indeksMax = 0;

    for (let i = 1; i < daftar.length; i++) {
        if (daftar[i] > nilaiMax) {
            nilaiMax = daftar[i];
            indeksMax = i;
        }
    }

    return { nilai: nilaiMax, indeks: indeksMax };
}

// 5. hapusDuplikat(daftar) - Array asli tidak berubah
function hapusDuplikat(daftar) {
    if (!daftar) return [];
    let hasilBaru = [];

    for (let i = 0; i < daftar.length; i++) {
        let item = daftar[i];
        let sudahAda = false;

        for (let j = 0; j < hasilBaru.length; j++) {
            if (hasilBaru[j] === item) {
                sudahAda = true;
                break;
            }
        }

        if (!sudahAda) {
            hasilBaru.push(item);
        }
    }

    return hasilBaru;
}

// 6. cekBilanganPrima(n)
function cekBilanganPrima(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


// UJI COBA DAN PENCETAKAN HASIL

console.log("=== 1. UJI HITUNG FAKTORIAL ===");
console.log(`5! → ${hitungFaktorial(5)}`);
console.log(`0! → ${hitungFaktorial(0)}`);
console.log(`-3! → ${hitungFaktorial(-3)}`);

console.log("\n=== 2. UJI CEK PALINDROM ===");
console.log(`"Katak" → ${cekPalindrom("Katak")}`);
console.log(`" Malam " → ${cekPalindrom(" Malam ")}`);
console.log(`"Kopi" → ${cekPalindrom("Kopi")}`);
console.log(`"" → ${cekPalindrom("")}`);

console.log("\n=== 3. UJI HITUNG VOKAL ===");
console.log(`"Kedai Senja" → ${hitungVokal("Kedai Senja")}`);
console.log(`"RHYTHM" → ${hitungVokal("RHYTHM")}`);
console.log(`"Aiueo" → ${hitungVokal("Aiueo")}`);

console.log("\n=== 4. UJI CARI TERBESAR ===");
console.log("[12, 45, 7, 45, 30] →", cariTerbesar([12, 45, 7, 45, 30]));
console.log("[3] →", cariTerbesar([3]));
console.log("[] →", cariTerbesar([]));

console.log("\n=== 5. UJI HAPUS DUPLIKAT ===");
let arrayAsli1 = [1, 2, 2, 3, 1];
console.log(`Input: [1, 2, 2, 3, 1] → Hasil:`, hapusDuplikat(arrayAsli1));
console.log(`Bukti array asli 1 tetap:`, arrayAsli1);

let arrayAsli2 = ["a", "b", "a"];
console.log(`Input: ["a", "b", "a"] → Hasil:`, hapusDuplikat(arrayAsli2));
console.log(`Bukti array asli 2 tetap:`, arrayAsli2);

let arrayAsli3 = [];
console.log(`Input: [] → Hasil:`, hapusDuplikat(arrayAsli3));
console.log(`Bukti array asli 3 tetap:`, arrayAsli3);

console.log("\n=== 6. UJI CEK BILANGAN PRIMA ===");
console.log(`2 → ${cekBilanganPrima(2)}`);
console.log(`17 → ${cekBilanganPrima(17)}`);
console.log(`15 → ${cekBilanganPrima(15)}`);
console.log(`1 → ${cekBilanganPrima(1)}`);
console.log(`0 → ${cekBilanganPrima(0)}`);
