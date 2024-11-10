class play_game_random_numb{
    generate_play_game_random_numb(){

        var arr = [];
        while(arr.length < 100){
            var r = Math.floor(Math.random() * 100) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
        
    }
  
}



module.exports = play_game_random_numb;