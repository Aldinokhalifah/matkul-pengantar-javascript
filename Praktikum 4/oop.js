class Pelanggan {
    constructor(nama, nomorTelepon, kendaraanDisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraanDisewa;
    }

    sewaKendaraan(_nama, _nomorTelepon, _kendaraanDisewa) {
        this.nama = _nama;
        this.nomorTelepon = _nomorTelepon;
        this.kendaraanDisewa = _kendaraanDisewa;
        console.log(`Pelanggan ${_nama} berhasil menyewa ${_kendaraanDisewa}`);
    }

    getInfo() {
        console.log ( 
            `Nama: ${this.nama}`,
            `Nomor Telepon: ${this.nomorTelepon}`,
            `Kendaraan Disewa: ${this.kendaraanDisewa}`
        )
    }
}

const pelanggan1 = new Pelanggan();
pelanggan1.sewaKendaraan("Aldino", 908122193, "Mobil");
pelanggan1.getInfo();

const pelanggan2 = new Pelanggan();
pelanggan2.sewaKendaraan("Putra", 28391121, "Motor");
pelanggan2.getInfo();