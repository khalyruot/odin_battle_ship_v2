import "./styles.css";
const player_i = require('./player_i.js');
const generate_randomNumb = require('./generate_randomNumb.js');
const play_game_random_numb = require('./play_game_random_numb.js');
const initialship = require('./initial_ship.js');


const player_real_computer = new player_i();

const player_human_div = document.getElementById("box_1");
const player_computer_div = document.getElementById("box_2");


const playGameRandomNumb = new play_game_random_numb();

const computer = new generate_randomNumb();

const initialShip = new initialship();

let computer_random_play_numb = playGameRandomNumb.generate_play_game_random_numb();
console.log("computer_random_play: " + computer_random_play_numb);

const total_arr = computer.generateNumb();
//p,q,r,s
const p = total_arr[0]; const q = total_arr[1]; const r = total_arr[2]; const s = total_arr[3];
//m,n,o
const m = total_arr[4]; const n = total_arr[5]; const o = total_arr[6];
//j,k,l
const j = total_arr[7]; const k = total_arr[8]; const l = total_arr[9];
//h,i
const h = total_arr[10]; const i = total_arr[11];
//f,g
const f = total_arr[12]; const g = total_arr[13];
//d,e
const d = total_arr[14]; const e = total_arr[15];
//a,b,c
const c = total_arr[16]; const b = total_arr[17]; const a = total_arr[18]; 


let player_human = player_real_computer.player_i_human_or_computer(player_human_div, "Human", 3, 5, 10, 17, 18, 40, 50, 42, 52, 44, 54, 64, 35, 45, 55, 58, 68, 78, 88);


let player_computer = player_real_computer.player_i_human_or_computer(player_computer_div, "Computer",a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);

const initial_ship_computer = initialShip.initial_Ship_1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);

const initial_ship_copy_computer = initialShip.initial_Ship_1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);

const total_arr_computer = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];

const initial_ship_human = initialShip.initial_Ship_1(3, 5, 10, 17, 18, 40, 50, 42, 52, 44, 54, 64, 35, 45, 55, 58, 68, 78, 88);

const initial_ship_copy_human = initialShip.initial_Ship_1(3, 5, 10, 17, 18, 40, 50, 42, 52, 44, 54, 64, 35, 45, 55, 58, 68, 78, 88);

const total_arr_human = [3, 5, 10, 17, 18, 40, 50, 42, 52, 44, 54, 64, 35, 45, 55, 58, 68, 78, 88];

let z_computer = [];
let z_human = [];
let welcome_value_text = document.getElementById("welcome");
let result_value_text = document.getElementById("welcome_turn");

for(let t=0; t<100; t++){
    player_computer[t].onclick = function(){setTimeout(func_play, 100)}

    function func_play(){
        //welcome_value_text.innerText = "Human";
        if(welcome_value_text.innerText == "Human"){
            player_real_computer.setBox_to_X_O(player_computer[t], t, player_computer_div, "Human",initial_ship_computer, initial_ship_copy_computer, total_arr_computer,z_computer);
            welcome_value_text.innerText = "Computer";
            setTimeout(() => {
                // Code to run later goes here.
                
                player_real_computer.setBox_to_X_O(player_human[computer_random_play_numb[t]],computer_random_play_numb[t],player_human_div, "Computer", initial_ship_human, initial_ship_copy_human, total_arr_human,z_human);
                if(!result_value_text.innerText.includes("Win")){
                    welcome_value_text.innerText = "Human";
                }
                else{
                    welcome_value_text.innerText = "";
                }
              }, 3000); // Time till execution, in milliseconds.

            
        }
    }  
}