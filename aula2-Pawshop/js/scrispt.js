
//querySelector = seletor de elementos
const botaotema = document.querySelector("#botaotema")

// addEventListener = adiciona um evento
botaotema.addEventListener('click', mudatema)

function mudatema(){
    let body = document.querySelector("body")
    let temaatual = document.querySelector("#temaatual")

    if(botaotema.checked){
        body.setAttribute('data-bs-theme', 'dark')   
        imglogo.setAttribute('src','images/logo/logoWhite.svg')
        temaatual.innerHTML = "Escuro"   
        
        
    }else{
        body.setAttribute('data-bs-theme', 'ligth')  
        imglogo.setAttribute('src','images/logo/logoDark.svg')
        temaatual.innerHTML = "Claro"   

    }

}