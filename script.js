// Variabel global untuk slideshow
let slideIndex = 0; // Mulai dari slide pertama
let slideInterval; // Untuk menyimpan referensi interval

// Fungsi untuk mengelola slideshow
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // Hentikan interval sebelumnya jika ada, untuk menghindari duplikasi
  if (slideInterval) {
    clearTimeout(slideInterval); // Menggunakan clearTimeout karena kita pakai setTimeout
  }

  // Sembunyikan semua slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Naikkan slideIndex, jika sudah di akhir, kembali ke awal
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Tampilkan slide yang sedang aktif
  slides[slideIndex - 1].style.display = "block";

  // Tambahkan kembali kelas 'fade' setiap kali slide ditampilkan untuk memicu animasi
  slides[slideIndex - 1].classList.add("fade");
  // Hapus kelas 'fade' setelah animasi selesai agar bisa dipicu lagi
  // Durasi ini harus sesuai dengan animation-duration di CSS untuk kelas .fade
  setTimeout(() => {
    slides[slideIndex - 1].classList.remove("fade");
  }, 1500); // Sesuaikan dengan durasi animasi CSS (1.5s = 1500ms)

  // Atur interval baru untuk slide berikutnya
  slideInterval = setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik (3000 ms)
}

// Menjalankan semua skrip setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", () => {
  // --- Kode untuk Burger Menu ---
  const burger = document.getElementById("burgerMenu");
  const nav = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (burger && nav) {
    // Hanya jalankan jika elemen ditemukan
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");

      navLinks.forEach((link, index) => {
        if (nav.classList.contains("nav-active")) {
          // Cek apakah menu sedang aktif
          link.style.opacity = "1";
          // Transisi berdasarkan index untuk efek berurutan
          link.style.transition = `opacity 0.5s ease forwards ${
            index / 7 + 0.3
          }s`;
        } else {
          // Reset opacity dan transisi saat menu ditutup
          link.style.opacity = "";
          link.style.transition = "";
        }
      });

      burger.classList.toggle("toggle"); // Animasi ikon burger
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active"); // Tutup menu
        burger.classList.remove("toggle"); // Reset ikon burger
        navLinks.forEach((item) => {
          // Reset opacity saat menu ditutup
          item.style.opacity = "";
          item.style.transition = "";
        });
      });
    });
  } else {
    console.error(
      "Elemen 'burgerMenu' atau 'navLinks' tidak ditemukan. Pastikan ID di HTML sudah benar."
    );
  }

  // --- Mulai Slideshow setelah DOM dimuat ---
  showSlides();
});
