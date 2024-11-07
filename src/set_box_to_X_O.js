class setbox{
    
    setbox_X(a){
        a.innerText = "X";
        a.setAttribute("id","X_box");
        const X_mark = a.innerText;
        return X_mark;
    }
    setbox_O(b){
        b.innerText = "O";
        b.setAttribute("id","O_box");
        const O_mark = b.innerText;
        return O_mark;
    }
}

module.exports = setbox;