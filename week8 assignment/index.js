


class FunkoPop {
    constructor(name, number, show) {
        this.name = name;
        this.number = number;
        this.show = show;
    }
}

class Menu {
    constructor() {
        this.FunkoPops = [];
    }

    addFunko() {
        let funkoName = prompt("Enter Funko Character Name");
        let funkoNumber = prompt("Enter Funko #");
        let funkoShow = prompt("Enter what show Funko Character is from");
        
        this.FunkoPops.push(new FunkoPop(funkoName, funkoNumber, funkoShow));
    }

    deleteFunko(){
        let funkoIndex = prompt("Enter FunkoPop index to DELETE:");
        this.FunkoPops.splice(funkoIndex, 1);
    }

    viewFunkoPops(){
        let showFunkos = ``;
        for(let i=0; i < this.FunkoPops.length; i++){

            showFunkos += `${this.FunkoPops[i].name} ${this.FunkoPops[i].number} ${this.FunkoPops[i].show}`
        }

        alert(`My Collectibles: ${showFunkos}`);
    }
}


let menu = new Menu();
menu.addFunko();
menu.viewFunkoPops();
