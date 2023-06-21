// alamat
$(document).ready(function () {
    $('#kecamatan').change(function () {
        var selectedKecamatan = $(this).val();
        var desaOptions = $('#desa');
        desaOptions.empty(); // Menghapus opsi desa sebelumnya

        if (selectedKecamatan === 'kecamatan1') {
            desaOptions.append('<option value="kuta tinggi">Kuta Tinggi</option><option value="keude siblah">Keude Siblah</option>');
        } else if (selectedKecamatan === 'kecamatan2') {
            desaOptions.append('<option value="padang baru">Padang Baru</option><option value="manggeng">Manggeng</option>');
        } else if (selectedKecamatan === 'kecamatan3') {
            desaOptions.append('<option value="sikabu">Sikabu</option><option value="alu pisang">Asu Pisang</option>');
        }
    });
});

// metode pembayaran
$(document).ready(function() {
    $('#metode').change(function() {
        var selectedMetode = $(this).val();
        var bankContainer = $('#bankContainer');
        var ewalletContainer = $('#ewalletContainer');
        
        bankContainer.hide(); // Sembunyikan elemen select bank saat halaman dibuka
        ewalletContainer.hide(); // Sembunyikan elemen select E-Wallet saat halaman dibuka
        
        if (selectedMetode === 'transfer_bank') {
            bankContainer.show(); // Tampilkan elemen select bank jika metode pembayaran "Transfer Bank" dipilih
        } else if (selectedMetode === 'ewallet') {
            ewalletContainer.show(); // Tampilkan elemen select E-Wallet jika metode pembayaran "E-Wallet" dipilih
        }
    });
});