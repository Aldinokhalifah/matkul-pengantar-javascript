const { index, store, destroy } = require('./controller.js');

const main = () => {
    
    index();
    
    const newUser = {
        nama: 'Sinta', 
        umur: 26, 
        alamat: 'Jln.Melati', 
        email: 'sinta@example.com'
    };
    store(newUser);
    
    const newUser2 = {
        nama: 'Ahmad', 
        umur: 24, 
        alamat: 'Jln.Melati', 
        email: 'ahmad@example.com'
    };
    store(newUser2);
    
    destroy('Aldino');
    
    index();
}

main();