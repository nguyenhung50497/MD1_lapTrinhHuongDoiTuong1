const GAMEDRIVE_WIDTH = 1900;
const GAMEDRIVE_HEIGHT = 900;

const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";

const CAR_WIDTH = 50;
const CAR_HEIGHT = 80;

const DEFAULT_CAR_X_POSITION = 0;
const DEFAULT_CAR_Y_POSITION = 0;
const DEFAULT_CAR_SPEED = 20;

function Car(){
    this.xPosition = DEFAULT_CAR_X_POSITION;
    this.yPosition = DEFAULT_CAR_Y_POSITION;
    this.orientation = ORIENTATION_DOWN;
    this.speed = DEFAULT_CAR_SPEED;
    this.step = 1;
    this.carwidth = CAR_WIDTH;
    this.carheight = CAR_HEIGHT;
    this.buildImage = function(){
        this.image = this.orientation + this.step + '.png';
    };

    this.buildImage();

    this.move = function(){
        switch (this.orientation) {
            case ORIENTATION_DOWN:
                this.yPosition += this.speed;
                break;
            case ORIENTATION_UP:
                this.yPosition -= this.speed;
                break;
            case ORIENTATION_LEFT:
                this.xPosition -= this.speed;
                break;
            case ORIENTATION_RIGHT:
                this.xPosition += this.speed;
                break;
        }
        if(this.step === 2){
            this.step = 1;
        } else {
            this.step = 2;
        }
        this.buildImage();
    };

    this.turn = function(orientation){
        this.orientation = orientation;
        this.step = 1;
        this.buildImage();
    };

    this.show = function(ctx){
        let image = new Image();
        let xPosition = this.xPosition;
        let yPosition = this.yPosition;
        image.onload = function(){
            ctx.drawImage(image, xPosition, yPosition, 100, 100);
        };
        image.src = './images/' + this.image;
    }
}

function GameDrive() {
    this.car = new Car();
    this.ctx = undefined;
    this.start = function(){
        this.ctx = document.getElementById('gameCanvas').getContext('2d');
        this.car.show(this.ctx);
    };

    this.render = function(){
        this.ctx.clearRect(0, 0, GAMEDRIVE_WIDTH, GAMEDRIVE_HEIGHT);
        this.car.show(this.ctx);
    };

    this.moveCar = function(event){
        let orientation = 0;
        switch (event.which){
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }

        if(orientation){
            if(this.car.orientation !== orientation){
                this.car.orientation = orientation;
            } else {
                this.car.move();
            }
            this.render();
        }
    }
}

let gameDrive = new GameDrive();
gameDrive.start();

function createBox() {

}

function createMultipleBox() {
    for (let i = 0; i < 10; i++) {
        createBox();
    }
}
createMultipleBox();

