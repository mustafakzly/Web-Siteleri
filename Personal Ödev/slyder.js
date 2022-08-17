let counter = 0;
const back = document.querySelector('.back');
const next = document.querySelector('.next');
const box = document.querySelector('.box')
const slider = document.querySelector('.slider');
const max = document.querySelectorAll('.slide').length - 1;


function sliderFunc(){
    if (counter < max){
        counter++;
        slider.style.left = "-" + 800 * counter + "px";
   }
   else{
       counter = 0;
       slider.style.left = "-" + 800 * counter + "px";
   }

}

let timer = setInterval(sliderFunc, 3000);

box.addEventListener('mouseover', ()=>{
    clearInterval(timer);
    console.log('Durduruldu.');

});

box.addEventListener('mouseout', ()=>{
   timer = setInterval(sliderFunc, 3000);
   console.log('Başlatıldı.')

});
next.addEventListener('click' , sliderFunc);
back.addEventListener('click', ()=>{
    if (counter >= 0){
        counter--;
        slider.style.left = "-" + 800 * counter + "px";
   }
});

