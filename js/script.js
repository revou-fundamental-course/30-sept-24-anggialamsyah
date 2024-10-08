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

        cara = celcius + "\u00B0C "+ " * "+ " 9/5 + "+ 32 + " = " + hasil;
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