const users = require('./data.js');

const index = () => {
    console.log('=== Data Users ===');
    const tampilkanData = users.map(user => {
        console.log(`Nama: ${user.nama}`);
        console.log(`Umur: ${user.umur}`);
        console.log(`Alamat: ${user.alamat}`);
        console.log(`Email: ${user.email}`);
        console.log("========================");
        return user;
    });
};

const store = (user) => {
    users.push(user);
    console.log(`User ${user.nama} berhasil ditambahkan`);
}

const destroy = (nama) => {
    const findUserIndex = users.findIndex(user => user.nama === nama);

    if(findUserIndex >= 0) {
        const deletedUser = users.splice(findUserIndex, 1)[0];
        console.log(`User ${deletedUser.nama} berhasil dihapus!`);
        return deletedUser;
    } else {
        console.log(`User dengan nama: ${nama} tidak ditemukan`);
        return null;
    }
}

module.exports = {index, store, destroy};