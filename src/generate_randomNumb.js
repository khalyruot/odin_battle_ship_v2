class generate_randomNumb{
    generateNumb(){
        let total_arr_enough_size = [];
        total_arr_enough_size = generate_randomNumb_size();
        
        console.log(total_arr_enough_size);

        if(total_arr_enough_size.length != 19){
        
            window.location.reload();
          
        }

        return total_arr_enough_size;

    }

    
}

function generate_randomNumb_size(){
    const computer_numb = [];

    //p,q,r,s
    const p = Math.floor((Math.random() * 69) + 1);
    const q = p + 10;
    const r = p + 20;
    const s = p + 30;
    computer_numb.push(p);
    computer_numb.push(q);
    computer_numb.push(r);
    computer_numb.push(s);

    //m,n,o
    const m_1 = Math.floor((Math.random() * 79) + 1);
    const n_1 = m_1 + 10;
    const o_1 = m_1 + 20;
    if(!computer_numb.includes(m_1) && !computer_numb.includes(n_1) && !computer_numb.includes(o_1)){
        const m = m_1;
        const n = n_1;
        const o = o_1;
        computer_numb.push(m);
        computer_numb.push(n);
        computer_numb.push(o);
    }

    //j,k,l
    const j_1 = Math.floor((Math.random() * 79) + 1);
    const k_1 = j_1 + 10;
    const l_1 = j_1 + 20;
    if(!computer_numb.includes(j_1) && !computer_numb.includes(k_1) && !computer_numb.includes(l_1)){
        const j = j_1;
        const k = k_1;
        const l = l_1;
        computer_numb.push(j);
        computer_numb.push(k);
        computer_numb.push(l);
    }

    //h,i
    const h_1 = Math.floor((Math.random() * 89) + 1);
    const i_1 = h_1 + 10;
    if(!computer_numb.includes(h_1) && !computer_numb.includes(i_1)){
        const h = h_1;
        const i = i_1;
        computer_numb.push(h);
        computer_numb.push(i);
    }

    //f,g
    const f_1 = Math.floor((Math.random() * 89) + 1);
    const g_1 = f_1 + 10;
    if(!computer_numb.includes(f_1) && !computer_numb.includes(g_1)){
        const f = f_1;
        const g = g_1;
        computer_numb.push(f);
        computer_numb.push(g);
    }

    //d,e
    const d_1 = Math.floor((Math.random() * 99) + 1);
    const e_1 = d_1 + 1;
    const d_1_condition = [0,10,20,30,40,50,60,70,80,90];
    const e_1_condition = [9,19,29,39,49,59,69,79,89,99];
    if(!computer_numb.includes(d_1) && !computer_numb.includes(e_1) && 
       !e_1_condition.includes(d_1) && !d_1_condition.includes(e_1)){
        const d = d_1;
        const e = e_1;
        computer_numb.push(d);
        computer_numb.push(e);
    }

    //a,b,c
    const c_1 = Math.floor((Math.random() * 99) + 1);
    if(!computer_numb.includes(c_1)){
        const c = c_1;
        computer_numb.push(c);
    }

    const b_1 = Math.floor((Math.random() * 99) + 1);
    if(!computer_numb.includes(b_1)){
        const b = b_1;
        computer_numb.push(b);
    }

    const a_1 = Math.floor((Math.random() * 99) + 1);
    if(!computer_numb.includes(a_1)){
        const a = a_1;
        computer_numb.push(a);
    }

    return computer_numb; 
    //return [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s];
}

module.exports = generate_randomNumb;