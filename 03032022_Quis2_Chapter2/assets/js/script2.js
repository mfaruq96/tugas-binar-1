var ukuran = [
    32,
    23,
    80,
    54,
    33,
    43,
    65
];
var ukuranPakAdi = 223;
var ukuranPakRahmat = 40;
var ukuranAvailable;

for(i in ukuran){
    // console.log(i+". "+ ukuran[i])
    // document.write(i+". "+ ukuran[i] + "<br/>");
    
    switch (ukuran[i]) {
    case ukuranPakAdi:
        ukuranAvailable = "ok";
        break;
        default:
            ukuranAvailable = "default";
            break;
        };
        console.log(ukuranAvailable);
};