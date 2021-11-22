window.onload = function () {
    // Variables
    var MovRaton=0
  
    let points = 0;

    let buttArray = [...document.getElementsByClassName("balls")];
    let $mainWin = document.querySelector('#mainWindow')
    let labelPoints = document.querySelector('#points')
    let labelMousePos = document.querySelector('#mPos')
    let labelPrevPos = document.querySelector('#prevPos')
    let labelNextPos = document.querySelector('#nextPos')
    
    // init buttons at random position
    buttArray.forEach(but => {
        but.style.left = Math.random() * 500 + "px";
        but.style.top = Math.random() * 500 + "px";
    });
    // Funciones
   
    /* Cambia la posición del Boton */
    function MoveOneButton(but, M, Vmb, dist) {
        if (dist < 200) {
            but.style.left = but.offsetLeft + Vmb.x * 1000 / (dist**2); 
            but.style.top = but.offsetTop + Vmb.y * 1000/ (dist**2);
            if (but.offsetLeft < 0) but.style.left = 50;
            else if (but.offsetLeft > 500) but.style.left = 450;
            if (but.offsetTop < 0) but.style.top = 50;
            else if (but.offsetTop > 500) but.style.top = 450;
        }
    }

    // Move all the buttons, escaping from mouse position.
    function MoveAllButtons(e){
        let M, B, Vmb, dist;

        // show mouse position in console.
        console.log("mouse location:", e.clientX, e.clientY)
        // Only execute one of each ten times.
        MovRaton = (MovRaton + 1)%10
        if (MovRaton==0) {
            M = new Point(e.clientX, e.clientY);
            // all buttons move to scape.
            buttArray.forEach(but => {
                B = new Point(but.offsetLeft, but.offsetTop);
                // create vector from M to B.
                Vmb = M.crearVect(B);
                dist = Vmb.dist();
                MoveOneButton(but, M, Vmb, dist);
            });
            
            // test if some button is inside
            let center = new Point(250, 250);
            let radi = 25;
            buttArray.forEach(but => {
                if (but.style.visibility != "hidden") {
                    P = new Point(but.offsetLeft + but.offsetWidth / 2, but.offsetTop + but.offsetHeight / 2);
                    if (P.isInside(center, radi)) {
                        but.style.visibility = "hidden";
                        points++;
                    }
                }
            });
            
            labelPoints.innerHTML = "Punts: " + points;
            /*
            labelVec.innerHTML = "Vec (" + vx + ", " + vy + ")";
            labelNextPos.innerHTML = "Next (" + nextX + ", " + nextY + ")";
            labelPrevPos.innerHTML = "Prev (" + prevX + ", " + prevY + ")";
            */
        }
    }


    /* Boton pillado */
   
    function botonPillado(){
        alert ("boton pillado");
        CambiaPosicion();
    }


    // Eventos
    $mainWin.addEventListener('mousemove', MoveAllButtons, true);
  
    // inicio
} 
