# 🚀 Panduan Deploy Next.js ke DomaiNesia Hosting

## Persiapan Lokal

### 1. Build Project
```bash
npm run build
```

### 2. File yang Perlu di-Upload
Upload file-file berikut ke server (via FTP/SFTP atau Git):

```
├── .next/              # Hasil build (WAJIB)
├── node_modules/       # Dependencies (atau install di server)
├── public/             # Static files
├── package.json
├── package-lock.json
├── server.js           # Custom server (sudah dibuat)
├── next.config.ts
└── .env                # Environment variables (buat manual di server)
```

---

## Setup di cPanel DomaiNesia

### 1. Buka "Setup Node.js App"
- Login ke cPanel: `https://sakamasystem.com/cpanel`
- Cari menu **"Setup Node.js App"** atau **"Nodejs"**

### 2. Create New Application
Klik **"CREATE APPLICATION"** dan isi:

| Field | Value |
|-------|-------|
| Node.js Version | **18.x** atau **20.x** (pilih yang tersedia) |
| Application Mode | **Production** |
| Application Root | `public_html` atau `public_html/sakama` |
| Application URL | Biarkan kosong (untuk domain utama) |
| Application Startup File | `server.js` |

### 3. Klik "CREATE"

---

## Upload Project

### Opsi A: Via Git (Recommended)
```bash
# Di SSH server
cd ~/public_html
git clone https://github.com/username/sakama-portfolio.git .

# Atau jika sudah ada repo
git pull origin main
```

### Opsi B: Via FTP/SFTP
Upload semua file (kecuali `node_modules`) ke folder Application Root

---

## Install Dependencies di Server

### 1. Masuk ke Virtual Environment Node.js
Di halaman "Setup Node.js App", klik **"Run NPM Install"** atau:

```bash
# Copy command dari cPanel (ada tombol "Enter to virtual environment")
# Contoh:
source /home/sakamasy/nodevenv/public_html/18/bin/activate

# Install dependencies
npm install

# Build (jika belum build lokal)
npm run build
```

### 2. Setup Environment Variables
Buat file `.env` di folder project:

```bash
nano .env
```

Isi dengan:
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://sakamasystem.com
# Tambahkan variable lain sesuai kebutuhan
```

---

## Restart Application

1. Kembali ke halaman **"Setup Node.js App"** di cPanel
2. Klik **"RESTART"** pada aplikasi

---

## Troubleshooting

### Error: Port already in use
Pastikan port di `server.js` sesuai dengan yang di-assign cPanel (biasanya otomatis via `process.env.PORT`)

### Error: Module not found
```bash
source /home/sakamasy/nodevenv/public_html/18/bin/activate
npm install
```

### Error: Build failed
```bash
npm run build
```

### Cek Log Error
Di cPanel, lihat **"Error Log"** atau:
```bash
tail -f ~/logs/nodejs.log
```

---

## Struktur Folder Akhir di Server

```
/home/sakamasy/
├── public_html/              # Document root
│   ├── .next/                # Build output
│   ├── node_modules/         # Dependencies
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   ├── package.json
│   ├── server.js             # Entry point
│   ├── next.config.ts
│   └── .env                  # Environment (buat manual)
```

---

## ✅ Checklist Deployment

- [ ] Build lokal: `npm run build`
- [ ] Upload file ke server
- [ ] Setup Node.js App di cPanel
- [ ] Install dependencies: `npm install`
- [ ] Buat file `.env` di server
- [ ] Restart aplikasi
- [ ] Test akses `https://sakamasystem.com`
