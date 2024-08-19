let forgiveScale = 1.0;

function forgive() {
    alert("yo sabia que me iba a perdonar");
    document.body.style.backgroundColor = '#fce4e';
    document.querySelector(".container").innerHTML= '<h1> ¡LA QUIEROOOOOOOO!</h1><p>¡Mmmmuaaaa!</p><img src="./mono.png" style="width: 30%;" alt="corazon">'

}

function notforgive(){
    const screanWidth = window.innerWidth;
    const screanHeight = window.innerHeight;
    const buttonWidth = document.querySelector(".not-forgive").offsetWidth;
    const buttonHeight = document.querySelector(".not-forgive").offsetHeight;

    let randomX, randomY;
    let overlap = true;

    while (overlap){
        randomX = Math.floor(Math.random() * (screanWidth - buttonWidth));
        randomY = Math.floor(Math.random() * (screanHeight - buttonHeight));
        
        const forgiveRect = document.querySelector(".forgive").getBoundingClientRect();
        const notForgiveRect = {left: randomX, top: randomY, right: randomX+buttonWidth, bottom: randomY+buttonHeight};

        if (notForgiveRect.right < forgiveRect.left ||
            notForgiveRect.left > forgiveRect.right ||
            notForgiveRect.bottom < forgiveRect.top ||
            notForgiveRect.top > forgiveRect.bottom) {
            overlap = false;
                
        }
    }
    
    document.querySelector(".not-forgive").style.position= "absolute";
    document.querySelector(".not-forgive").style.top = randomY + "px";
    document.querySelector(".not-forgive").style.left = randomX + "px";

    forgiveScale += 0.5;
    document.querySelector(".forgive").style.transform = "scale("+ forgiveScale +")";
    document.querySelector(".forgive").style.transformOrigin = "center";
}