// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = ['Yellow', 'Pink', 'White', 'Purple'];
firstUser.isHavePet = 'Yes';
firstUser.education = [{
    name: 'SD 01',
    city: 'Jakarta',
    graduate: 2016
},
{
    name: 'SMP 02',
    city: 'Jakarta',
    graduate: 2019
},
{
    name: 'SMA 03',
    city: 'Tangerang'
}];
firstUser.favoriteRestaurant = ['Bento', 'Sushi', 'Pancake', 'Eggy', 'Tempura', 'Bento', 'Eggy', 'Padang', 'Tteok', 'Sushi', 'Sushi'];

secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = ['Blue', 'Black', 'Grey'];
secondUser.isHavePet = 'No';
secondUser.education = [{
    name: 'SD 02',
    city: 'Jakarta',
    graduate: 2010
},{
    name: 'SMP 03',
    city: 'Bogor',
    graduate: 2013
},{
    name: 'SMA 01',
    city: 'Surabaya',
    graduate: 2016
},{
    name: 'Universitas Maju',
    city: 'Tangerang'
}];
secondUser.favoriteRestaurant = ['Tempura', 'Bento', 'Sushi', 'Pancake', 'Padang', 'Katsu', 'Geprek', 'Pancake', 'Eggy'];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};