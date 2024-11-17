
const Ship = require('./ship.js');
const gameboard = require('./gameboard.js');
const initialship = require('./initial_ship.js');
const setbox = require('./set_box_to_X_O.js');



const ship = new Ship();

const setBox = new setbox();

const initialShip = new initialship();

const gameBoard = new gameboard();





class player_i{
    
    player_i_human_or_computer(player_div, player,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){

        let box_arr = gameBoard.gridboard(player_div);

        let box_total_arr = []
            for(let u = 0; u<100; u++){
                box_total_arr.push(u);
            }

        for(let t = 0; t < 100; t++){
            //box_arr[t].innerText = t;
        }
        return box_arr;
    }

       
    setBox_to_X_O(box_arr, t,player_div, player,initial_ship, initial_ship_copy,total_arr, z){

      
        let y = 0;
        let switch_number = 0;
        let count = 0;
        
        let welcome_value = [];

        let welcome_value_text = document.getElementById("welcome_turn");
        let x = welcome_value_text.innerText; 

        for(let j = 0; j < initial_ship_copy.length; j++){
            
            if(total_arr.includes(t) && !x.includes("Win")){

                setBox.setbox_X(box_arr);
                
                
                if(initial_ship[j].includes(t)){
                    
                    
                    let time_hit = initial_ship_copy[j].length - initial_ship[j].length+1;
                    let ship_hitted = initial_ship_copy[j].length;
                    const index_to_be_splice = initial_ship[j].indexOf(t); // find index box to remove from array
                    initial_ship[j].splice(index_to_be_splice,1);
                   
                    
                    
                    if(ship.isShunk(time_hit+1, ship_hitted+1,j) == "shunk"){
                        z.push(1);
                        
                    }
                    
                }
                
            }
            
            else if(!x.includes("Win")){
                
                setBox.setbox_O(box_arr);
                
                
            }    
            
        }
    console.log("z: " + z);
    if(initial_ship_copy.length == z.length){
        console.log(player+", You Win!");
        const result = document.getElementById("welcome_turn");
        result.innerText = player+", You Win!";
    }
}

}





module.exports = player_i;







