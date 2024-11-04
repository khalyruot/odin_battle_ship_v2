class gameboard{

    gridboard(container){

        //const container = document.getElementById("container");
        //console.log(container);

        let box_all_element = [];
        
       

        for(let i = 0; i<10; i++){
            const box_axb_row = document.createElement('div');
            box_axb_row.classList.add('content');
            container.appendChild(box_axb_row);
        
            for(let j = 0; j < 10; j++){
                const box_axb = document.createElement('div');
                box_axb.textContent = "";
                box_axb_row.appendChild(box_axb);
                box_axb.classList.add('sub_content');
                box_all_element.push(box_axb);
              
            }
            
        }
        return box_all_element;
        
    }
}

module.exports = gameboard;