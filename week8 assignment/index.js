


class FunkoPop {
    constructor(name, number, show) {
        this.name = name;
        this.number = number;
        this.show = show;
    }
}

class Menu {
    constructor() {
        this.FunkoPops = [];//sets empty array for our menu items
    }

    showMainMenu() {
        return prompt(`
          Main Menu:
          --------------
          0) Exit
          1) Add FunkoPop
          2) Delete FunkoPop
          3) View All FunkoPops
        `);
    }
//starts the menu
    start() {
        let selection = this.showMainMenu();

        while (selection != 0) { //while loop that shows the menu until user makes a choice then executes the associated function for whichever choice
            switch (selection) {
                case "1": 
                    this.addFunko(); 
                    break;
                case "2": 
                    this.deleteFunko(); 
                    break;
                case "3": 
                    this.viewFunkoPops(); 
                    break;
                default: 
                    selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert("You are now exiting this demo....GOODBYE");
    }

    addFunko() { //adds new funko collectible code should be self explanatory for adding deleting and viewing
        let funkoName = prompt("Enter Funko Character Name");
        let funkoNumber = prompt("Enter Funko #");
        let funkoShow = prompt("Enter what show Funko Character is from");
        
        this.FunkoPops.push(new FunkoPop(funkoName, funkoNumber, funkoShow));
    }

    deleteFunko() {
        let funkoIndex = prompt("Enter FunkoPop index to DELETE:");
        funkoIndex = parseInt(funkoIndex); //used parseInt to convert the string to an integer that is a whole number no decimals expected

        if (funkoIndex >= 0 && funkoIndex < this.FunkoPops.length) {
            this.FunkoPops.splice(funkoIndex, 1);
            alert("FunkoPop successfully deleted.");
        } else {
            alert("Invalid index. Please try again.");// added if/else statement to check for correct input
        }
    }

    viewFunkoPops() {
        let showFunkos = '';
        for (let i = 0; i < this.FunkoPops.length; i++) {
            showFunkos += `${i}) ${this.FunkoPops[i].name} - #${this.FunkoPops[i].number} From: ${this.FunkoPops[i].show}`;
        }
//simple if/else to account for if the array is empty or not
        if (showFunkos === '') {
            alert('No Funko Pops to display.');
        } else {
            alert(`My Collectibles:${showFunkos}`);
        }
    }
}

let menu = new Menu();
menu.start();