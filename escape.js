window.onload = function () {
    // Variables
    var MovRaton=0
  
    let xPos = 0;
    let yPos = 0;

    let posicionActual = 0;
    let $boton = document.querySelector('#boton');
    let $mainWin = document.querySelector('#mainWindow')
    let labelVec = document.querySelector('#vec')
    let labelMousePos = document.querySelector('#mPos')
    let labelPrevPos = document.querySelector('#prevPos')
    let labelNextPos = document.querySelector('#nextPos')
    // Funciones
   
    /* Cambia la posición del Boton */
   
    function CambiaPosicion(e){
        let prevX, prevY, nextX, nextY;
        console.log("mouse location:", e.clientX, e.clientY)
        MovRaton=(MovRaton+1)%10
        if (MovRaton==0) {
            // $boton.style.top = event.y - Math.random()*30 - $boton.clientHeight-10
            // $boton.style.left = event.x - Math.random()*30 - $boton.clientWidth-10
            prevX = $boton.offsetLeft;
            prevY = $boton.offsetTop;
           
            vx = e.clientX - prevX; 
            vy = e.clientY - prevY;
            
            if ((prevX == 0 || prevY == 0) && (vx < 100  || vy < 100)) {
                nextX = e.clientX + parseInt(vx/4);
                nextY = e.clientY + parseInt(vy/4);
            }
            else {
                nextX = prevX - parseInt(200/vx);
                nextY = prevY - parseInt(200/vy);
            }
            if (nextX < 0) nextX = 0;
            if(nextY < 0)  nextY = 0; 
            
            $boton.style.left = nextX;
            $boton.style.top = nextY;
            
            labelMousePos.innerHTML = "Mouse (" + e.clientX + ", " + e.clientY + ")";
            labelVec.innerHTML = "Vec (" + vx + ", " + vy + ")";
            labelNextPos.innerHTML = "Next (" + nextX + ", " + nextY + ")";
            labelPrevPos.innerHTML = "Prev (" + prevX + ", " + prevY + ")";
        }
    }


    /* Boton pillado */
   
    function botonPillado(){
        alert ("boton pillado");
        CambiaPosicion();
    }


    // Eventos
   
    $boton.addEventListener('click', botonPillado);
    $mainWin.addEventListener('mousemove', CambiaPosicion, true);
  
    // inicio
} 
