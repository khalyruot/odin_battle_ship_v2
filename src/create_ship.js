
const gameboard = require('./gameboard.js');
const gameBoard = new gameboard();


class create_ship {
    create_ship(a) {

        const ship_0 = [0, 10, 20, 30];
        const ship_1 = [5, 15];
        const ship_2 = [22];
        const ship_3 = [50];
        const ship_4 = [67, 77];
        const ship_5 = [70, 71];
        const ship_6 = [74, 84, 94];
        const ship_7 = [19];
        const ship_8 = [35, 45, 55];
        const ship = [ship_0, ship_1, ship_2, ship_3, ship_4, ship_5, ship_6, ship_7, ship_8];
        const board = gameBoard.gridboard(a);
        const board_to_return = [];
        //board[ship[0][1]].style.backgroundColor="red";
        //board[ship[0][2]].style.backgroundColor="red";

        for (let i = 0; i < ship.length; i++) {
            for (let j = 0; j < ship[i].length; j++) {
                const a = board[ship[i][j]];
                a.innerText = i;
                a.style.backgroundColor = "red";
                board_to_return.push(a);
            }
        }

        return board_to_return;
    }
}

module.exports = create_ship;