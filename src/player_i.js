
const Ship = require('./ship.js');
const gameboard = require('./gameboard.js');
const initialship = require('./initial_ship.js');
const setbox = require('./set_box_to_X_O.js');


const ship = new Ship();

const setBox = new setbox();

const initialShip = new initialship();

const gameBoard = new gameboard();



let a = 0; let b = 0; let c = 0; let d = 0; let e = 0;
let f = 0; let g = 0; let h = 0; let i = 0; let j = 0; 
let k = 0; let l = 0; let m = 0; let n = 0; let o = 0; 
let p = 0; let q = 0; let r = 0; let s = 0;




class player_i{
    
    player_i_human_or_computer(player_div, player,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){

        let box_total_arr = []
            for(let u = 0; u<100; u++){
                box_total_arr.push(u);
            }
        


        let counter_t = 0;

        let z = [];

        let x = 0;
        let y = 0;
        let switch_number = 0;

        let box_arr = gameBoard.gridboard(player_div);
           
        
        const initial_ship = initialShip.initial_Ship_1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);

        const initial_ship_copy = initialShip.initial_Ship_1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);

        const total_arr = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];
        
        let welcome_value = [];

        for(let t = 0; t < 100; t++){

            box_arr[t].innerText = t;

            function getValue(){
                return t;
            }
            function updateValue(){
                counter_t = getValue();
                welcome_value.push(counter_t);
                console.log("welcome value: " + welcome_value);
                return welcome_value;
            }

           

            box_arr[t].onclick = function(){
                
                getValue();
                
                const index_of_t =  box_total_arr.indexOf(t);
                box_total_arr.splice(index_of_t,1);
                console.log("t: " + t);

                let welcome_value_text = document.getElementById("welcome");
                x = welcome_value_text.innerText;

                console.log("x: " + x);
                console.log("player: "+ player);
                
                if(!box_total_arr.includes(t) && !welcome_value.includes(t)&& x!=player && !x.includes("Win")){
                    welcome_value_text.innerText = player;
                    console.log("A");
                    updateValue();

                }
                else if(x.includes("Win")){
                    document.getElementById("welcome_turn").innerText = "";
                }

                

                let welcome_value_text_12 = document.getElementById("welcome");
                y = welcome_value_text_12.innerText;


                if(x === y){
                    console.log("Not good!");
                    switch_number = 0;
                }
                else{
                    console.log("Good!");
                    switch_number = 1;
                }
                
                console.log("switch_number: "+switch_number)
                for(let j = 0; j < initial_ship_copy.length; j++){

                   
                    if(total_arr.includes(t) && switch_number == 1){
        
                        setBox.setbox_X(box_arr[t]);
                       
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
                   
                    else if(switch_number == 1){
                        
                        setBox.setbox_O(box_arr[t]);
                        
                        
                    }

                    
                   
                }
               
                if(initial_ship_copy.length == z.length){
                    console.log(player+", You Win!");
                    const result = document.getElementById("welcome");
                    result.innerText = player+", You Win!";
                    x = result.innerText;
                }
                
               
            }
           
        }
        
        
    }
}




module.exports = player_i;







