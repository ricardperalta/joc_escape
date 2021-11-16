class Point {
    constructor(xx, yy) {
       this.x = xx;
       this.y = yy;
    }

    // Método
    suma (p2) {
       this.x += p2.x;
       this.y += p2.y;
    }
 }
 
 class Vec {
    constructor(xx, yy) {
       this.x = xx;
       this.y = yy;
    }

    // Método
    dist () {
        return (Math.sqrt(this.x**2 + this.y**2));
    }
 }
 
 