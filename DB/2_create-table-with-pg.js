// Impor modul pg
const { Client } = require('pg');

// Buat objek klien dengan informasi koneksi
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'root',
  port: 5432,
});

// Hubungkan klien ke server
client.connect();

// Jalankan query SQL dan tangani hasilnya
client.query(
  'CREATE TABLE IF NOT EXISTS members (' +
    'id SERIAL PRIMARY KEY,' +
    'name VARCHAR(255) NOT NULL,' +
    'email VARCHAR(255) UNIQUE NOT NULL,' +
    'image VARCHAR(255),' +
    '"createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)',
  (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows); // Tampilkan hasil query dalam bentuk array objek
    }
    // Tutup koneksi
    client.end();
  }
);
