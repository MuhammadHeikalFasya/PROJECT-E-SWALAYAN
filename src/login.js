(function () {
	'use strict'

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation')

	// Loop over them and prevent submission
	Array.prototype.slice.call(forms)
		.forEach(function (form) {
			form.addEventListener('submit', function (event) {
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
})()

function login() {
	// Mendapatkan nilai email dan password yang diinputkan
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	// Memeriksa email dan password untuk halaman 1
	if (email === 'costumer@gmail.com' && password === 'CST123') {
		// Jika email dan password sesuai, arahkan ke halaman 1
		window.location.href = '/index.html';
		return; // Menghentikan eksekusi fungsi setelah mengarahkan ke halaman 1
	}

	// Memeriksa email dan password untuk halaman 2
	if (email === 'admin@gmail.com' && password === 'ADM123') {
		// Jika email dan password sesuai, arahkan ke halaman 2
		window.location.href = '/admin/dasboard.html';
		return; // Menghentikan eksekusi fungsi setelah mengarahkan ke halaman 2
	}

	// Jika email dan password tidak sesuai dengan kedua halaman
	alert('Email atau password salah');
}
