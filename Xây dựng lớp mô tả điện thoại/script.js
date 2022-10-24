 let mainInboxN = '';
 let mainInboxI = '';
// Noikia
let Nokia = function (battery, memoryArea1, memoryArea2, memoryArea3) {
    this.battery = battery;
    this.memoryArea1 = memoryArea1;
    this.memoryArea2 = memoryArea2;
    this.memoryArea3 = memoryArea3;
    this.checkStatusNOnOff = function () {
        if (this.battery > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    this.turnOn = function () {
        alert("Turn on");
    };
    this.turnOff = function () {
        alert("Turn off");
    };
    this.charge = function () {
        this.battery++;
        alert("Charge " + this.battery + "%");
    };
    this.writeMessenger = function () {
        memoryArea1 = prompt("This is a messenger");
        this.battery--;
    };
    this.sendMessenger = function () {
        alert("Messenger đã gửi");
        memoryArea2 = memoryArea1;
        mainInboxI = memoryArea2;
        this.battery--;
    };
    this.messageSent = function () {
        alert(memoryArea2);
        this.battery--;
    }
    this.inBoxN = function () {
        memoryArea3 = mainInboxN;
        alert(memoryArea3);
        this.battery--;
    };
    this.afterUse = function () {
        alert("Battery now: " + this.battery + "%");
    }
};
let nokia = new Nokia(50, 100, 100, 100);
function mainNokia() {
    nokia.turnOn();
}
function mainNokia1() {
    nokia.turnOff();
}
function mainNokia2() {
    nokia.charge();
}
function mainNokia3() {
    nokia.writeMessenger();
}
function mainNokia4() {
    nokia.sendMessenger();
}
function mainNokia5() {
    nokia.messageSent();
}
function mainNokia6() {
    nokia.inBoxN();
}
function mainNokia7() {
    nokia.afterUse();
}

 // Iphone
 let Iphone = function (batteryI, memoryAreaI1, memoryAreaI2, memoryAreaI3) {
     this.batteryI = batteryI;
     this.memoryAreaI1 = memoryAreaI1;
     this.memoryAreaI2 = memoryAreaI2;
     this.memoryAreaI3 = memoryAreaI3;
     this.checkStatusIOnOff = function () {
         if (this.batteryI > 0) {
             return true;
         } else {
             return false;
         }
     };
     this.turnOnI = function () {
         alert("Turn on");
     };
     this.turnOffI = function () {
         alert("Turn off");
     };
     this.chargeI = function () {
         this.batteryI++;
         alert("Charge " + this.batteryI + "%");
     };
     this.writeMessengerI = function () {
         memoryAreaI1 = prompt("This is a messenger");
         this.batteryI--;
     };
     this.sendMessengerI = function () {
         alert("Messenger đã gửi");
         memoryAreaI2 = memoryAreaI1;
         mainInboxN = memoryAreaI2;
         this.batteryI--;
     };
     this.messageSentI = function () {
         alert(memoryAreaI2);
         this.batteryI--;
     }
     this.inBoxI = function () {
         memoryAreaI3 = mainInboxI;
         alert(memoryAreaI3);
         this.batteryI--;
     }
     this.afterUseI = function () {
         alert("Battery now: " + this.batteryI + "%");
     }
 };
 let iphone = new Iphone(50, 100, 100, 100);
 function mainIphone() {
     iphone.turnOnI();
 }
 function mainIphone1() {
     iphone.turnOffI();
 }
 function mainIphone2() {
     iphone.chargeI();
 }
 function mainIphone3() {
     iphone.writeMessengerI();
 }
 function mainIphone4() {
     iphone.sendMessengerI();
 }
 function mainIphone5() {
     iphone.messageSentI();
 }
 function mainIphone6() {
     iphone.inBoxI();
 }
 function mainIphone7() {
     iphone.afterUseI();
 }