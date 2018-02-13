class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "";
    this.intervalId;
    this.waitingList = [];
    this.passengers = [];

  }

  start() {
    this.intervalId = setInterval(() =>{
      this.update();
    }, 1000);
  }

  stop() { 
    clearInterval(this.intervalId);
  }

  update() {
    this.log();
    
   }

  _passengersEnter() {
    this.waitingList.forEach((person, index) => {
      if (this.person.originFloor === this.floor){
        this.passengers.push(person);
        console.log(`${person.name} has enter the elevator`)
        this.waitingList.splice(index, 1);
        this.requests.push(person.destinationFloor);
      }

    })
      
  }

  _passengersLeave() {
    this.passengers.forEach((person, index) => {
      if (this.passengers.destinationFloor === this.floor){
        this.passengers.splice(index, 1);
        console.log(`${person.name} has left the elevator`)
      }
    })

  }

  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.direction = "Up";
      this.floor ++;
      this._passengersLeave();
      this._passengersEnter();
    }
  }
  floorDown() { 
    
    if (this.floor > 0 ) {
      this.direction = "Down";
      this.floor --;
      this._passengersLeave();
      this._passengersEnter();
    }
  }
  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);

  }
  log() {
    console.log(`Direction ${this.direction} | Floor ${this.floor}`);
    console.log()

  }
}

module.exports = Elevator;