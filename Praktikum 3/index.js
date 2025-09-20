let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},

    {id: 2, nama: "Mouse", harga: 200000, stok: 10},

    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];
console.log(produkToko);

let nextId = 4;

function tambahProduk(nama, harga, stok) {
    let produkBaru = {
        id: nextId++,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
    console.log(`✅ Produk "${nama}" berhasil ditambahkan dengan ID: ${produkBaru.id}`);
}

function hapusProduk(id) {
    let cariId = produkToko.findIndex(idProduk => idProduk.id == id);
    let namaProduk = produkToko[cariId].nama;


    if (cariId === -1) {
        console.log(`Produk dengan ID ${id} tidak ditemukan!`);
        return false;
    }

    produkToko.splice(cariId, 1);
    console.log(`✅ Produk "${namaProduk}" (ID: ${id}) berhasil dihapus!`);
    return true;
}

function tampilkanProduk() {
    console.log("ID  | Nama Produk    | Harga        | Stok");
    // console.log("----|--------------  |------------- |-----");
    
    produkToko.forEach(produk => {
        console.log(
            `${produk.id.toString()} | ` +
            `${produk.nama} | ` +
            `Rp ${produk.harga.toLocaleString('id-ID')} | ` +
            `${produk.stok}`
        );
    });

    console.log(`Total Produk: ${produkToko.length}`)
}


tambahProduk('Hp', 5000000, 2);
console.log(produkToko);

hapusProduk(1);
console.log(produkToko);

tampilkanProduk();