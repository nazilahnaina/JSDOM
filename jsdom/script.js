// const judul = document.getElementById('judul');
// judul.style.color='white';
// judul.style.backgroundColor='blue';
// judul.innerHTML = 'ninun';

// const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor='lightblue';
// p[1].style.backgroundColor='grey';
// p[2].style.backgroundColor='lightyellow';
// p[3].style.backgroundColor='lightgreen';


// for(let i=0;i<p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// //const h1 = document.getElementsByTagName('h1');
// //h1[0].style.fontSize='50px';
// //atau
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize='50px';

// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = "Dirubah dengan Javascript";

// //document.querySelector()
// // const p4 = document.querySelector('#b p');



// memberikan warna dan membesarkan font p4
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '25px';

// //mengubah background pada item2
// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'lightcoral';

// const p1 = document.querySelector('p');
// const p4 = document.querySelector('#b p');
// p1.innerHTML = 'ini dirubah melalui Javascript';

// //mengubah semua elemen p
// const p = document.querySelectorAll('p');
// p[2].style.backgroundColor='lightblue';

// const p = document.querySelectorAll('p');
//      for(let i=0;i<p.length; i++){
//         p[i].style.backgroundColor = 'lightgreen';
// //      }
// const judul = document.getElementById('judul');
// judul.innerHTML = 'nazilah';
// judul.style.backgroundColor = 'blue';
// judul.style.color ='white';


// const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor='lightblue';
// p[1].style.backgroundColor='grey';
// p[2].style.backgroundColor='lightyellow';
// p[3].style.backgroundColor='lightgreen';
// p[0].style.color = 'red';
// p[0].innerHTML = 'semngat';

// const p = document.getElementsByTagName('p');
// for(let i=0;i<p.length; i++){
//     p[i].style.backgroundColor = 'red';
// }

// // const p3 = document.querySelector('section#a .p3');

// const li = document.querySelector('section#b ul li:nth-child(2)');
// li.style.backgroundColor = 'yellow';

// const a = document.querySelector('section#a a');

// const li = document.querySelectorAll('li');
// for(let i=0;i<li.length; i++){
//     li[i].style.backgroundColor = 'red';
// }

// const p = document.querySelector('p');

// const judul = document.getElementById('judul');
// judul.style.backgroundColor='red';
// judul.style.color='white';
// judul.innerHTML='ninun';

// const p = document.getElementsByTagName('p');
// for(let i=0;i<p.length; i++){
//     p[i].style.backgroundColor=' blue';
// }

// const li = document.querySelectorAll('li');
// for(let i=0;i<li.length; i++){
//     li[i].style.backgroundColor='blue';
// }
// const p = document.querySelector('p');

// const a = document.querySelector('section#a a');


// const li = document.querySelector('section#b ul li:nth-child(2)');
// li.style.backgroundColor = 'yellow';



// const p1 = document.querySelector('p1');
// p1.style.backgroundColor = 'yellow';


// const p =document.getElementsByTagName('p');
// p[0].style.backgroundColor='red';

// const li = document.querySelector('section#b ul li:nth-child(1)');
// li.style.backgroundColor='blue'; 



//DOM Manipulation - Part 2 & Event JS Part 1
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// //simpan pBaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

//node.insertBefore()
const liBaru = document.createElement('li');
const teksliBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

//remove
const sectionA = document.getElementById('a');

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// // menambahkan h2 di pragraf 4
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!!!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

//backgroundcolor
pBaru.style.backgroundColor ='lightgreen';
liBaru.style.backgroundColor ='lightgreen';
h2Baru.style.backgroundColor ='lightgreen';

// //onclick
// const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightreen';

// }

// p3.onclick = function(){
//     p3.style.color = 'coral';
// }
//addEventListener

// const p3 = document.querySelector('.p3');
// p3.addEventListener = ('click', function(){
//     p3.style.backgroundColor = 'lightreen';

// })

// p3.addEventListener = ('click', function(){
//     p3.style.color = 'red';
// })

const p3 = document.querySelector('.p3');

function ubahWarnaP3(){
    p3.style.backgroundColor= 'lightcoral';

}
const p2 = document.querySelector('.p2');

function ubahWarnaP2(){
    p2.style.backgroundColor= 'lightcoral';

}
p2.onclick = ubahWarnaP2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksliBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksliBaru);
    ul.appendChild(liBaru);
})
