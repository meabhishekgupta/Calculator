console.log("Welcome! Calculator is On");
let str = "";
let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        if(e.target.innerHTML == "CLR"){
            str = "";
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == "PI"){
            str = str + "3.14";
            document.querySelector('input').value = str;
        }
        else if(e.target.innerHTML == "="){
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else{
            str = str + e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})