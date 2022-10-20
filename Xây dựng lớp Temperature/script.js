class Temperature {
    doc;
    constructor(doc) {
       this.doc = doc;
    }
    getDoc() {
        return this.doc;
    }
    setDoc(doc) {
        this.doc = doc;
    }
    getDof() {
        return (this.doc * 1.8) + 32;
    }
    getDok() {
        return (this.doc + 273.15);
    }
}

let myTemperature = new Temperature(25);
document.write('Nhiệt độ F: ' + myTemperature.getDof() + '</br>');
document.write('Nhiệt độ K: ' + myTemperature.getDok() + '</br>');