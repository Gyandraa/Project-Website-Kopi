🎯 Gambaran Website

Website ini nantinya seperti gabungan antara:

Website cafe (branding & menu)
Aplikasi pemesanan (seperti GoFood versi sederhana)

Target user:

Anak muda
Pengguna mobile & desktop
🖥️ Halaman yang Dibutuhkan

1. 🏠 Home Page

Berisi:

Hero section (gambar cafe + slogan)
Highlight menu favorit
CTA (Call To Action): “Pesan Sekarang” 2. 🍽️ Menu Page

Menampilkan:

Daftar makanan & minuman
Kategori (Coffee, Non-Coffee, Snack)
Card menu:
Gambar
Nama
Harga
Tombol “Tambah” 3. 🛒 Cart / Keranjang

Fitur:

List pesanan
Edit jumlah item
Hapus item
Total harga otomatis 4. 📦 Checkout Page

Fitur:

Input nama pelanggan
Nomor WhatsApp
Catatan pesanan
Tombol “Pesan Sekarang” → redirect ke WhatsApp 5. 📄 Order History (Optional untuk upgrade)
Menyimpan pesanan ke localStorage
Menampilkan riwayat pesanan user
⚙️ Fitur Utama (WAJIB)
🔹 1. State Management
Gunakan React state / context
Simpan cart di localStorage
🔹 2. Dynamic Data
Data menu disimpan dalam JSON / dummy API
Bisa di-fetch (simulasi backend)
🔹 3. Filter & Search
Filter kategori menu
Search berdasarkan nama
🔹 4. Add to Cart System
Tambah item
Update jumlah
Hitung total otomatis
🔹 5. Integrasi WhatsApp

Saat klik checkout:

Halo, saya ingin pesan:

- Kopi Latte x2
- Croissant x1
  Total: Rp 45.000
  🔹 6. Responsive Design
  Mobile first
  UI clean (mirip aplikasi modern)
  🧠 Tech Stack (Request dari Client)

Frontend:

React
TypeScript
CSS / Tailwind (bebas, tapi disarankan Tailwind)
