class Point {
    constructor(xx, yy) {
       this.x = xx;
       this.y = yy;
    }

    // this és el punt origen i p2 és el punt final, 
    // retorna un vector que va de this a p2.
    crearVect(p2) {
      let vRes = new Vec(p2.x - this.x, p2.y - this.y);
      return vRes;
    }

    // suma el vector 'v' al punt this,
    // modifica les coordenades del punt this.
    sumaVect(v) {

    }
   
    // Método suma, create a new Point adding this to p2.
    suma (p2) {
      let pRes = new Point(this.x + p2.x, this.y + p2.y); 
      return pRes;
    }

    isInside(center, radi) {
       if ((this.x > (center.x - radi)) && (this.x < (center.x + radi))
         && (this.y > (center.y - radi)) && (this.y < (center.y + radi)))  
            return true;
      return false;
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
    // invert this.x = cte / this.x
   
 }
 
 