import "./styles.css";
const player_i = require('./player_i.js');
const generate_randomNumb = require('./generate_randomNumb.js');
const play_game_random_numb = require('./play_game_random_numb.js');
const initialship = require('./initial_ship.js');
const create_ship = require('./create_ship.js');

const createShip = new create_ship();




const player_real_computer = new player_i();

const player_human_div = document.getElementById("box_1");
const player_computer_div = document.getElementById("box_2");

const ship_to_move = createShip.create_ship(player_computer_div);
console.log(ship_to_move);




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


function ship_set_to_green(a){
    for(let i = 0; i<a.length; i++){
        a[i].style.backgroundColor = "green";
    }
}


let ship_0 = [ship_to_move[0],ship_to_move[1],ship_to_move[2],ship_to_move[3]];
let ship_1 = [ship_to_move[4],ship_to_move[5]];
let ship_2 = [ship_to_move[6]];
let ship_3 = [ship_to_move[7]];
let ship_4 = [ship_to_move[8],ship_to_move[9]];
let ship_5 = [ship_to_move[10],ship_to_move[11]];
let ship_6 = [ship_to_move[12],ship_to_move[13],ship_to_move[14]];
let ship_7 = [ship_to_move[15]];
let ship_8 = [ship_to_move[16],ship_to_move[17],ship_to_move[18]];

let total_ship = [ship_0, ship_1, ship_2, ship_3, ship_4, ship_5, ship_6, ship_7, ship_8];

let box_human_select = [];

let box_computer_selected = [];

let box_computer_selected_arr = [];

//console.log(rearrangeArray_Index(a));

function rearrangeArray_Index(a){
  
    a.sort((a, b) => a.length - b.length);
    return a.flat(); 
}

for(let kkkk = 0; kkkk<19; kkkk++){
    
    
    ship_to_move[kkkk].onclick = function(){

        let switch_board = document.getElementById("welcome");
        
        for(let iiii = 0; iiii<total_ship.length; iiii++){
        
          if(total_ship[iiii].includes(ship_to_move[kkkk]) && !box_human_select.includes(total_ship[iiii]) && switch_board.innerText == "Human"){
            ship_set_to_green(total_ship[iiii]);
            switch_board.innerText = "Computer";
            //total_ship.splice(total_ship[iiii],1);
           
            
            for(let x = 0; x<100; x++){
                player_human[x].onclick = function(){
                    
                        //pp, qq, rr, ss
                        let pp = 0; let qq = 0; let rr = 0; let ss = 0;
                        //mm,nn,oo
                        let mm = 0; let nn = 0; let oo = o;
                        //j,k,l
                        let jj = 0; let kk = 0; let ll = 0;
                        //h,i
                        let hh = 0; let ii = 0;
                        //f,g
                        let ff = 0; let gg = 0;
                        //d,e
                        let dd = 0; let ee = 0;
                        //a,b,c
                        let cc = 0; let bb = 0; let aa = 0; 
                    
                    if(total_ship.includes(total_ship[iiii])){
                        
                        if(total_ship[iiii].length==4 && x <= 69 && switch_board.innerText == "Computer" 
                            && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10) && !box_computer_selected.includes(x+20)
                            && !box_computer_selected.includes(x+30) && !box_human_select.includes(total_ship[iiii])){
                           
                            pp = x;
                            qq = pp + 10;
                            rr = pp + 20;
                            ss = pp + 30;
                            box_computer_selected.push(pp);
                            box_computer_selected.push(qq);
                            box_computer_selected.push(rr);
                            box_computer_selected.push(ss);
                            box_computer_selected_arr.push([pp,qq,rr,ss]);
                            ship_set_to_green([player_human[pp],player_human[qq],player_human[rr],player_human[ss]]);
                            switch_board.innerText = "Human";
                            box_human_select.push(total_ship[iiii]);
                           
                            
                        }

                        else if(total_ship[iiii].length==3 && x <= 79 && switch_board.innerText == "Computer" && total_ship[iiii]===ship_8 && !box_human_select.includes(total_ship[iiii]) 
                            && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10) && !box_computer_selected.includes(x+20)){
                            mm = x;
                            nn = mm + 10;
                            oo = mm + 20;
                            box_computer_selected.push(mm);
                            box_computer_selected.push(nn);
                            box_computer_selected.push(oo);
                            box_computer_selected_arr.push([mm,nn,oo]);
                            ship_set_to_green([player_human[mm],player_human[nn],player_human[oo]]);
                            switch_board.innerText = "Human";
                            box_human_select.push(total_ship[iiii]);
                           
                            
                        }
                        else if(total_ship[iiii].length==3 && x <= 79 && switch_board.innerText == "Computer" && total_ship[iiii]===ship_6 && !box_human_select.includes(total_ship[iiii])
                            && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10) && !box_computer_selected.includes(x+20)){
                            jj = x;
                            kk = jj + 10;
                            ll = jj + 20;
                            box_computer_selected.push(jj);
                            box_computer_selected.push(kk);
                            box_computer_selected.push(ll);
                            box_computer_selected_arr.push([jj,kk,ll]);
                            ship_set_to_green([player_human[jj],player_human[kk],player_human[ll]]);
                            switch_board.innerText = "Human";
                            box_human_select.push(total_ship[iiii]);
                           
                            
                        }
                        else if(total_ship[iiii].length==2 && x <= 89 && switch_board.innerText == "Computer" && !box_human_select.includes(total_ship[iiii])
                            && total_ship[iiii]===ship_1 && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+10)){
                            hh = x;
                            ii = hh + 10;
                            box_computer_selected.push(hh);
                            box_computer_selected.push(ii);
                            box_computer_selected_arr.push([hh,ii]);
                            ship_set_to_green([player_human[hh],player_human[ii]]);
                            switch_board.innerText = "Human";
                            box_human_select.push(total_ship[iiii]);
                           
                            
                        }

                        else if(total_ship[iiii].length==2 && x <= 89 && switch_board.innerText == "Computer" && !box_human_select.includes(total_ship[iiii])
                            && total_ship[iiii]===ship_4 && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+ 10)){
                                ff = x;
                                gg = ff + 10;
                                box_computer_selected.push(ff);
                                box_computer_selected.push(gg);
                                box_computer_selected_arr.push([ff,gg]);
                                ship_set_to_green([player_human[ff],player_human[gg]]);
                                switch_board.innerText = "Human";
                                box_human_select.push(total_ship[iiii]);
                               
                                
                            }
                        else if(total_ship[iiii].length==2 && ![9,19,29,39,49,59,69,79,89,99].includes(x) 
                                && switch_board.innerText == "Computer" && !box_human_select.includes(total_ship[iiii])
                                && total_ship[iiii]===ship_5 && !box_computer_selected.includes(x) && !box_computer_selected.includes(x+1)){
                                    dd = x;
                                    ee = dd + 1;
                                    box_computer_selected.push(dd);
                                    box_computer_selected.push(ee);
                                    box_computer_selected_arr.push([dd,ee]);
                                    ship_set_to_green([player_human[dd],player_human[ee]]);
                                    switch_board.innerText = "Human";
                                    box_human_select.push(total_ship[iiii]);
                                    console.log(box_computer_selected_arr);
                                   
                                    
                            }
                        else if(total_ship[iiii].length==1 && switch_board.innerText == "Computer" && !box_human_select.includes(total_ship[iiii])
                                && total_ship[iiii]===ship_3 && !box_computer_selected.includes(x)){
                                    cc = x;
                                    box_computer_selected.push(cc);
                                    ship_set_to_green([player_human[cc]]);
                                    box_computer_selected_arr.push([cc]);
                                    switch_board.innerText = "Human";
                                    box_human_select.push(total_ship[iiii]);
                                    

                            }
                        else if(total_ship[iiii].length==1 && switch_board.innerText == "Computer" && !box_human_select.includes(total_ship[iiii])
                                && total_ship[iiii]===ship_2 && !box_computer_selected.includes(x)){
                                    bb = x;
                                    box_computer_selected.push(bb);
                                    ship_set_to_green([player_human[bb]]);
                                    box_computer_selected_arr.push([bb]);
                                    switch_board.innerText = "Human";
                                    box_human_select.push(total_ship[iiii]);
                                    
                                    
                            }
                        else if(total_ship[iiii].length==1 && switch_board.innerText == "Computer" && !box_human_select.includes(total_ship[iiii])
                                && total_ship[iiii]===ship_7 && !box_computer_selected.includes(x)){
                                    aa = x;
                                    box_computer_selected.push(aa);
                                    ship_set_to_green([player_human[aa]]);
                                    box_computer_selected_arr.push([aa]);
                                    switch_board.innerText = "Human";
                                    box_human_select.push(total_ship[iiii]);
                                    console.log("last pp: " + pp);
                                    
                            }
                         
                            
                            
                            if(box_human_select.length==9){
                                console.log(box_computer_selected_arr);
                                let re_arrange_arr = rearrangeArray_Index(box_computer_selected_arr);
                                player_computer_div.innerText = "";
                                player_human_div.innerText = "";
                                let player_human = player_real_computer.player_i_human_or_computer(player_human_div, "Human", re_arrange_arr);
                            
                                let player_computer = player_real_computer.player_i_human_or_computer(player_computer_div, "Computer",[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]);

                                const initial_ship_computer = initialShip.initial_Ship_1([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]);

                                const initial_ship_copy_computer = initialShip.initial_Ship_1([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s]);

                                const total_arr_computer = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];

                                const initial_ship_human = initialShip.initial_Ship_1(re_arrange_arr);

                                const initial_ship_copy_human = initialShip.initial_Ship_1(re_arrange_arr);

                                const total_arr_human = re_arrange_arr;

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
                                            }, 300); // Time till execution, in milliseconds.

                                            
                                        }
                                    }  
                                }

                            }
                           
                            
                    }
                   
                    
                    
                }
            }
       
          }  
          
        }

    }
   
}




