let judul = document.querySelector('p');
judul.innerHTML = 'My To Do List';

// list.innerHTML = `
// <div class='row'>
//         <div class='col-8'>
//             <div class='form-check'>
//                 <input class='form-check-input' type='checkbox' value=' id='flexCheckDefault'>
//                 <label class='form-check-label' for='flexCheckDefault'>
//                     Tugas Baru
//                 </label>
//             </div>
//         </div>
//         <div class='col-auto'>
//                 <div class='btn'><i class='bi bi-trash'></i></div>
//         </div>
// </div>`

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightgreen';
// judul.style.backgroundColor = 'salmon';

let container = document.querySelector('.container');
container.style.margin = '135px auto';
container.style.maxWidth = '550px';
container.style.background = '#ffff';
container.style.borderRadius = '7px';
container.style.padding = '28px 10px';

document.body.style.backgroundImage = 'linear-gradient(to right, grey, lightgreen, lightblue, lightyellow)';


document.querySelector('#input input').setAttribute('placeholder', 'Masukkan Tugas Baru');
document.querySelector("#input input").removeAttribute('type')

judul.className = 'text-center';
judul.classList.add('text-center', 'fs-3', 'fw-bold', 'mt-3');


// inputButton.onclick = klik;
// function klik() {
//     alert('OK');
// }

// function gantiRed() {
//     inputButton.style.backgroundColor = 'red';
// }
// function gantiBlack() {
//     inputButton.style.color = 'black';
// }

// inputButton.addEventListener('mouseover', gantiRed);
// inputButton.addEventListener('mouseover', gantiBlack);

// inputButton.addEventListener('click', btnAktif);
// function btnAktif() {
//     console.log('Button Aktif!')
// }

document.getElementById('input').addEventListener('submit', submitAktif);

function submitAktif(event) {
    event.preventDefault();
    if (input.value == 'Javascript') {
        console.log('data dikirim ke server');
    } else {
        console.log('data gagal dikirim');
    }
}



/*Create element & Create Text Node*/

let input = document.querySelector('#input input');

let inputButton = document.querySelector('#input button');
inputButton.innerHTML = 'Tambah';

function tambahTugas(){
    let list = document.getElementById('list');

    let divRow = document.createElement('div');
    divRow.classList.add('row', 'mb-2');

    let divCol = document.createElement('div');
    divCol.className = 'col-8';

    let divAuto = document.createElement('div');
    divAuto.className = 'col-auto';

    let divForm = document.createElement('div');
    divForm.classList.add('form-check', 'nt-2');

    let divBtn = document.createElement('div');
    divBtn.className = 'btn';

    let inputTugas = document.createElement('input');
    inputTugas.setAttribute('type', 'checkbox');
    inputTugas.classList.add('form-check-input', 'list');

    let label = document.createElement('label');
    label.className = 'form-check-label';

    let namaTugas = document.createTextNode(`${input.value}`);
    label.appendChild(namaTugas);

    let icon = document.createElement('i');
    icon.classList.add('bi', 'bi-trash', 'delete');


    list.appendChild(divRow);
    divRow.append(divCol, divAuto);
    divCol.appendChild(divForm);
    divForm.append(inputTugas, label);
    divAuto.appendChild(divBtn);
    divBtn.appendChild(icon);

    input.value = '';

}
    inputButton.addEventListener('click', tambahTugas);

