class Clock {
    constructor() {
      // 1. Create a Date object.
      // 2. Store the hours, minutes, and seconds.
      // 3. Call printTime.
      // 4. Schedule the tick at 1 second intervals.
        let date = new Date();
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        this.printTime();
        this._tick();

    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
        let time = `${this.hours}:${this.minutes}:${this.seconds}`
        console.log(time)
    }
  
    _tick() {
      // 1. Increment the time by one second.
      // 2. Call printTime.
      setInterval(() => {
        this.seconds++;
        this.printTime();
      }, 1000)
    }
  }
  
//   const clock = new Clock();

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        const response = rl.question("Input number", answer => {
            let input = parseInt(answer);
            sum = input + sum;
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else if (numsLeft === 0) {
        completionCallback(sum);
        rl.close();
    }
}
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

Function.prototype.myBind = function(context) {
    // console.log(this)
    let func = () => {
        console.log(this)
        // console.log(context)
        this.apply(context);
    };

    return func;
}
class Lamp {
    constructor() {
      this.name = "a lamp";
    }
  }
  
  const turnOn = function() {
    console.log("Turning on " + this.name);
  };
  
  const lamp = new Lamp();
  
//   turnOn(); // should not work the way we want it to
  
  const boundTurnOn = turnOn.bind(lamp);
  const myBoundTurnOn = turnOn.myBind(lamp);
  
  boundTurnOn(); // should say "Turning on a lamp"
  myBoundTurnOn(); // should say "Turning on a lamp"