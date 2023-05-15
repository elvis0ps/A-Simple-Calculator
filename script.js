let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button=> {
    button.addEventListener('click', ()=>{
        
        switch(button.innerText){
            case 'C':
                display.innerText ="";
                
                break;
            case '←':
                display.innerText=display.innerText.slice(0,-1);
                break;
            case '=':
                try{
                    display.innerText=eval(display.innerText);
                } catch{
                    display.innerText='Error!'
                }
                display.innerText = eval(display.innerText);
                break;
           default:
            display.innerText += button.innerText;
            break;
        }
        });

    })
