//study kasus 1
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick= function(){
//   document.body.style.backgroundColor = ' lightgreen';

// document.body.setAttribute('class', 'hijau-muda');

document.body.classList.toggle('hijau-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

//study kasus 2
tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 +1);
    const g = Math.round(Math.random() * 255 +1);
    const b = Math.round(Math.random() * 255 +1);
    console.log(r);
    document.body.style.backgroundColor ='rgb('+ r +','+ g +','+ b +')';
})

//study kasus 3
const silderMerah = document.querySelector('input[name=silderMerah]');


const silderHijau = document.querySelector('input[name=silderHijau]');


const silderBiru = document.querySelector('input[name=silderBiru]');

silderMerah.addEventListener('input',function(){
    const r = silderMerah.value;
    const g = silderHijau.value;
    const b = silderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

silderHijau.addEventListener('input',function(){
    const r = silderMerah.value;
    const g = silderHijau.value;
    const b = silderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})


silderBiru.addEventListener('input',function(){
    const r = silderMerah.value;
    const g = silderHijau.value;
    const b = silderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})

//study kasus 4
document.body.addEventListener('mousemove',function(event){
    // console.log(event.clientX);
    // console.log(window.innerWidth);

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    
    //menambahkan dengan posisi y
    
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);

    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';    
});

