if(document.getElementById("konversi")) {
    // Javascript untuk menghitung Konversi Celcius ke Fahrenheit
// Event listener untuk Button konversi
document.getElementById("konversi").addEventListener("click", function() {

    // Fungsi untuk menghitung Konversi suhu dari Celcius ke Fahrenheit
    function Konversi() {
        let celcius = document.getElementById("input_suhu").value;
    
        fahrenheit = (celcius * 9/5) + 32;

        document.getElementById("hasil_suhu").value = fahrenheit + "\u00B0F";
        
    }

    // Memanggil Fungsi Konversi
    Konversi();

    // Fungsi untuk menjelaskan kalkulasi
    function kalkulasi() {
        let celcius = document.getElementById("input_suhu").value;
        let hasil = document.getElementById("hasil_suhu").value;

        cara = celcius + "\u00B0C "+ " *  (9/5) + "+ 32 + " = " + hasil;
        document.getElementById("kalkulasi").value = cara;
    }

    // Memanggil Fungsi Kalkulasi
    kalkulasi();
    
});

// Event Listener untuk Button Reset
document.getElementById("reset").addEventListener("click", function() {
   document.getElementById("hasil_suhu").value = "";
   document.getElementById("kalkulasi").value = ""; 
});
} else {

    // Javascript untuk menghitung Konversi Fahrenheit ke Celcius
// Event listener untuk Button konversi2
document.getElementById("konversi2").addEventListener("click", function() {

    // Fungsi untuk menghitung Konversi suhu dari Celcius ke Fahrenheit
    function Konversi2() {
        let fahrenheit = document.getElementById("input_suhu2").value;
        celcius = 5/9 * (fahrenheit  - 32);

        document.getElementById("hasil_suhu2").value = celcius + "\u00B0C";
        
    }

    // Memanggil Fungsi Konversi2
    Konversi2();

    // Fungsi untuk menjelaskan kalkulasi
    function kalkulasi2() {
        let fahrenheit = document.getElementById("input_suhu2").value;
        let hasil = document.getElementById("hasil_suhu2").value;

        cara = " 5/9 * ( " + fahrenheit + "\u00B0F ) - "+ 32 + " = " + hasil;
        document.getElementById("kalkulasi2").value = cara;
    }

    // Memanggil Fungsi Kalkulasi2
    kalkulasi2();
    
});

// Event Listener untuk Button Reset
document.getElementById("reset2").addEventListener("click", function() {
   document.getElementById("hasil_suhu2").value = "";
   document.getElementById("kalkulasi2").value = ""; 
});
}
