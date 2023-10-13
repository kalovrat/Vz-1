const canvas = document.getElementById('canv');
const container = document.querySelector('.container'); 
const ctx = canvas.getContext('2d');
container.style.marginTop = -1 *screen.height
container.style.minHeight = screen.height 

const w = canvas.width = 1263
const h = canvas.height = 1000;
console.log(1)
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);
function adjustCanvasSize() {
    const w = canvas.width = 1263;
    const h = canvas.height = 1000;
    canvas.style.minHeight = 1000+ 'px';
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);
  }
  
  adjustCanvasSize();
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#00bf1a'
  ctx.font = '15pt monospace';

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}
window.addEventListener('resize', adjustCanvasSize);
setInterval(matrix, 80);


let count_change = 0
const text = document.querySelector(".ic-text");
const letters = text.innerText.split("");
text.innerHTML = "";

letters.forEach((letter) => {
const span = document.createElement("span");
span.classList.add('able_change');
span.innerText = letter;
    text.appendChild(span);

});
const spans = document.querySelectorAll(".ic-text span");
let ic_text = 'Услуги разработки'
function change_bw(){
    
    

        
        for(i = 0;i < count_change;i++){
            if(spans[i].classList.contains('able_change')){
                spans[i].innerHTML = String.fromCharCode(Math.random() * 128);
            }
        }

    if(count_change < ic_text.length){
        count_change +=1;
    }
}

setInterval(change_bw, 80);
let count_stop = 0 
function stop_cbw(){ 
    if(count_stop < ic_text.length){
        console.log(count_stop)
        spans[count_stop].classList.remove('able_change');
        spans[count_stop].innerHTML = ic_text[count_stop]
        count_stop += 1

    }
}
function stop_cbw_int(){
    setInterval(stop_cbw, 80)
}
setTimeout(stop_cbw_int, 1000);

let terminal_text1 = document.querySelector('.terminal-text1')
let dis = false

function change_terminal(){
if(terminal_text1.classList.contains('able_change')){
    if(!dis){
        
        terminal_text1.style.opacity = '100'; // добавлено
        dis = true;
    } else {
        terminal_text1.style.opacity = '0';
        dis = false;
    }
}
}
setInterval(change_terminal, 500);
let buttons = document.querySelectorAll('.iu-button')
let arr_txt = ['open WEB','open TG-bots','open Smartcontracts',  'open Brut', 'open Parsing',  'open Other']
let data_txt = ['<div class="inner-mp">  <div class="mp1-back-web" style="">    <p style="color: #FFF;margin-top: 69px;      font-family: F77 Minecraft;   font-size: 25px;   font-style: normal;   font-weight: 400;   line-height: 50%; /* 32.5px */   text-shadow:  -1px -1px 0 #214D73, /* Обводка сверху слева */  1px -1px 0 #214D73, /* Обводка сверху справа */ -1px 1px 0 #214D73, /* Обводка снизу слева */  1px 1px 0 #214D73; /* Обводка снизу справа */  ">  Web разработка:  <br>  <p style="color: #FFF;    font-family: F77 Minecraft;  font-size: 15px;  font-style: normal;  font-weight: 400;line-height: 250%;  text-shadow:  -1px -1px 0 #214D73, /* Обводка сверху слева */  1px -1px 0 #214D73, /* Обводка сверху справа */ -1px 1px 0 #214D73, /* Обводка снизу слева */  1px 1px 0 #214D73; /* Обводка снизу справа */   ">-Фронтенд-разработка  <br>   -Бэкенд-разработка   <br>  -Дизайн и визуал.</p>   </p>           </div>   </div>',
' <div class="inner-mp">       <div class="mp1-back-tg" style="display:flex;background-image:  url(images/Frame\ 8.svg) !important;">   <img src="images/Saly-1.svg" style="position: absolute;">          <div style="margin-top: 85px;opacity: 0.5; color: #214D73;           font-family: F77 Minecraft;          font-size: 25px;          font-style: normal;          font-weight: 400;          line-height: 50%; /* 32.5px */">           <p style="           font-size: 25px;          font-style: normal;          font-weight: 400;          line-height: 130%; /* 32.5px */          width: 198px;margin-top:66px          ">pазработка</p>          <p style="font-size: 11px;margin-top: -20px;">           ботов и пользовательских <br>           ботов для Telegram, для <br>           оптимизации взаимодействия <br>           с клиентами и предоставления<br>           автоматизации в мессенджере.          </p>          </div>          <div style="margin-top: 85px; position: absolute; color: #FFF;           font-family: F77 Minecraft;          font-size: 24.5px;          font-style: normal;          font-weight: 400;          line-height: 50%; /* 32.5px */">           <p style="        font-size: 24.5px;          font-style: normal;          font-weight: 400;          line-height: 130%; /* 32.5px */          width: 198px;margin-top:66px          ">разработка</p>          <p style="font-size: 10.5px;margin-top: -20px;">           ботов и пользовательских <br>           ботов для Telegram, для <br>           оптимизации взаимодействия <br>           с клиентами и предоставления<br>           автоматизации в мессенджере.          </p>          </div>      <img style="position: absolute;          width: 250px;          margin-left: 225px;          margin-top: 11px;          animation: shake 5s infinite;" src="images/telegram.svg" alt=""> </div>          </div>  ',
'<div class="inner-mp">                                                                             <div class="mp1-back" style="display:flex;background-image: url(images/Frame\ 7.svg);">                   <div style=" margin-left: 20px;font-family: F77 Minecraft;color: #B4B7F3;">                     <p style="                   text-align: center;                                      font-size: 25px;                   font-style: normal;                   font-weight: 400;                   line-height: 130%; /* 32.5px */                   width: 198px;margin-top:46px                   ">pазработка:</p>                   <p style="margin-top: 20px;">-Tokens?</p><br>                   <p style="font-size: 10px;margin-top: -15px;">Разработаем ваш личный токен</p><br>                   <p style="margin-top: -10px;">-NFT?</p><br>                   <p style="font-size: 10px;margin-top: -31px;">Разработаем ваше личное НФТ </p>                   <p style="margin-top: 13px;">-Smartcontracts</p<br>                   <p style="font-size: 10px;margin-top: -15px;">Cмартконтракты под любые проекты</p><br>                   </div>                                                                            <img style="position: absolute;margin-left: 296px;margin-top: 45px;animation:shake 5s infinite" src="images/ether.png" alt="">                                 </div>                   </div>'
]

let display = ['', 'flex', '']
let backgrounds = ['images/unnamed.jpg', ]

let panel = document.querySelector('.main-panel')
let panel_1 = document.querySelector('.panel')



buttons.forEach((button, index) => {
    button.addEventListener('click', function(){
      if(index != 3){
        terminal_text1.classList.remove('able_change')
        terminal_text1.style.opacity = '100'
        terminal_text1.innerHTML = arr_txt[index]
        panel.innerHTML = data_txt[index]
        document.querySelector('.cards').style.display = ''
        loading(index)
        panel.style.display = display[index]
      }else{ 
        let contacts_1 = document.querySelector('.TG-block')
        contacts_1.scrollIntoView({ behavior: 'smooth' });
      }
      
        
        

        

    })
    

});
let intervalId; // Переменная для сохранения идентификатора интервала
let close_knopka = document.querySelectorAll('.close-in')
console.log(close_knopka)
close_knopka.forEach((button, index) => {
    button.addEventListener('click', function(){
        console.log(1)
        clearInterval(intervalId);
        panel_1.style.display = 'none'
      
        
        

        

    })
    

});
let close_console = document.querySelectorAll('.close-console')
console.log(document.querySelector('.cards'))
console.log(close_console)
close_console.forEach((button, index) => {
    button.addEventListener('click', function(){
        console.log(document.querySelector('.cards'))
        document.querySelector('.cards').style.display = 'none'
      
        
        

        

    })
    

});




function loading(index) {
let isitstarted = false;
let loading_count = 0;
let procetage = 15;
let loading_terminal = document.querySelector('.loading_terminal');
let open = document.querySelector('.openning')
let string_lt = '';
open.innerHTML = ''
loading_terminal.innerHTML = '';

// Остановить предыдущий интервал, если он существует
if (intervalId) {
clearInterval(intervalId);
}

intervalId = setInterval(() => {
if (loading_count < 15) {
  string_lt += '_';
  loading_terminal.innerHTML = string_lt + String((100 / procetage).toFixed(1)) + '%';
  loading_count += 1;
  procetage -= 1;
  isitstarted = true;
}
else{
    
    open.innerHTML = 'done!'
    panel_1.style.display = 'block'
    
    
}
}, 50);
}
   //Make the DIV element draggagle:
   dragElement(document.querySelector((".panel")), '.close-panel');
   dragElement(document.querySelector((".cards")), '.close');     
   function dragElement(elmnt, elem2) {
     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
     if (document.querySelector(elem2)) {
       /* if present, the header is where you move the DIV from:*/
       document.querySelector(elem2).onmousedown = dragMouseDown;
     } else {
       /* otherwise, move the DIV from anywhere inside the DIV:*/
       elmnt.onmousedown = dragMouseDown;
     }
   
     function dragMouseDown(e) {
       e = e || window.event;
       // get the mouse cursor position at startup:
       pos3 = e.clientX;
       pos4 = e.clientY;
       document.onmouseup = closeDragElement;
       // call a function whenever the cursor moves:
       document.onmousemove = elementDrag;
     }
   
     function elementDrag(e) {
       e = e || window.event;
       // calculate the new cursor position:
       pos1 = pos3 - e.clientX;
       pos2 = pos4 - e.clientY;
       pos3 = e.clientX;
       pos4 = e.clientY;
       // set the element's new position:
       elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
       elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
     }
   
     function closeDragElement() {
       /* stop moving when mouse button is released:*/
       document.onmouseup = null;
       document.onmousemove = null;
     }
   }

