    // Array kosong untuk menyimpan database pengunjung
    let pengunjung = [];

    // Fungsi untuk menampilkan daftar pengunjung
    function tampilkanDaftarPengunjung() {
      let daftarPengunjungElement = document.getElementById("daftarPengunjung");
      daftarPengunjungElement.innerHTML = ""; // Menghapus konten sebelumnya

      if (pengunjung.length > 0) {
        let daftarHTML = "<h2>Daftar Pengunjung:</h2>";
        daftarHTML += "<ul>";

        pengunjung.forEach((pengunjung, index) => {
          daftarHTML += `<li>[${index + 1}] Nama : ${pengunjung.nama}</li>`;
          if (pengunjung.nomorAnggota) {
            daftarHTML += `<li>Nomor Anggota : ${pengunjung.nomorAnggota}</li>`;
          }
          if (pengunjung.gender) {
            daftarHTML += `<li>Gender : ${pengunjung.gender}</li>`;
          }
        });

        daftarHTML += "</ul>";
        daftarPengunjungElement.innerHTML = daftarHTML;
      } else {
        daftarPengunjungElement.innerHTML = "";
      }
    }

    // Fungsi untuk menambahkan pengunjung baru
    function tambahkanPengunjung() {
      let pengunjungBaru = {};
      pengunjungBaru.nama = prompt("Masukkan Nama Pengunjung:");

      if (pengunjungBaru.nama === null || pengunjungBaru.nama === "") {
        alert("Anda tidak menambahkan pengunjung dengan valid");
        return;
      }

      pengunjungBaru.nomorAnggota = prompt("Masukkan Nomor Anggota :");
      pengunjungBaru.gender = prompt("Masukkan Gender");

      pengunjung.push(pengunjungBaru);
      console.log("Pengunjung berhasil ditambahkan:", pengunjungBaru);
    }

    // Fungsi untuk keluar dari program
    function keluarProgram() {
      alert("Terima kasih telah menggunakan program ini.");
      // Tambahkan kode untuk keluar dari program (misalnya, refresh halaman)
    }