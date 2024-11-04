
class Ship{
    
    hit(time_hit){
        return time_hit;
    }
    
    isShunk(time_hit, ship_hitted,b){
        if(time_hit == ship_hitted){
            console.log("Ship " + b + " is shunk.");
            return "shunk";
        }
        else{
            return "Ship " + b + " is a float."
        }
    }
}

//export{ Ship };
module.exports = Ship;
