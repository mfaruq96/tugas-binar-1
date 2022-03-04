// no 1
// variabel sapi
// let sapi = {
//     "PakBudi" : 10,
//     "PakDayat" : 20,
//     "PakAmin" : 30
// };

// kondisi pembanding
// if (sapi.PakBudi >= sapi.PakDayat) {
//     console.log("Pak Budi Rich");    
// } else if (sapi.PakBudi <= sapi.PakAmin) {
//     console.log("sapi Pak Budi lebih kecil");
// } else {
//     console.log("sapi Pak Amin lebih banyak");
// };
// output jika Sapi Pak Budi lebih banyak = Pak Budi Rich
// output jika sapi Pak Budi lebih dikit = sapi Pak Budi lebih kecil
// output jika sapi Pak Budi tidak lebih dikit = sapi Pak Amin lebih banyak


// variabel ukuran
var ukuranPakAdi = 32;
var ukuranPakRahmat = 40;
var ukuranAvailable;

// case Pak Adi dengan ukuran sepatu 32
switch (ukuranPakAdi) {
    case 32:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 32";        
        break;
    case 23:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 23";        
        break;
    case 80:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 80";        
        break;
    case 54:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 54";        
        break;
    case 33:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 33";        
        break;
    case 43:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 43";        
        break;
    case 65:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 65";        
        break;
    default:
        ukuranAvailable = "Sepatu tidak ada";
};
console.log(ukuranAvailable)
// output "Sepatu ditemukan dengan ukuran 33"

// case Pak Rahmat dengan ukuran sepatu 40
switch (ukuranPakRahmat) {
    case 32:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 32";        
        break;
    case 23:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 23";        
        break;
    case 80:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 80";        
        break;
    case 54:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 54";        
        break;
    case 33:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 33";        
        break;
    case 43:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 43";        
        break;
    case 65:
        ukuranAvailable = "Sepatu ditemukan dengan ukuran 65";        
        break;
    default:
        ukuranAvailable = "Sepatu tidak ada";
};
console.log(ukuranAvailable)
// output : Sepatu tidak ada