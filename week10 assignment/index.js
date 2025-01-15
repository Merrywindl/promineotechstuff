let id =0;


document.getElementById(`Add`).addEventListener(`click`, () => { //event listener that relies on user clicking button to add grocery item
    let createDate = new Date();
    let table = document.getElementById(`list`);
    let row = table.insertRow(table.rows.length); //adds a new row at the end of the list of rows
    row.setAttribute(`id`, `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById(`new-grocery-item`).value; //inserts grocery item provided by user
    row.insertCell(1).innerHTML = document.getElementById(`item-brand`).value;
    row.insertCell(2).innerHTML = document.getElementById(`item-quantity`).value;    
    let actions = row.insertCell(3);
    actions.appendChild(createDeleteButton(id++)); //creates a button to delete the row of data in each new row
    
})

function createDeleteButton(id) {
    let btn = document.createElement(`button`);
    btn.className = `btn btn-primary`;
    btn.id = id;
    btn.innerHTML = `Delete`;
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}

// Selects my existing button element by its id
let buttonFun = document.getElementById('Add');

// Change text on mouse hover
buttonFun.addEventListener('mouseover', () => {
    buttonFun.innerText = 'YES';
});

// Change text back when not hovering mouse over button
buttonFun.addEventListener('mouseout', () => {
    buttonFun.innerText = 'Add';
});