class Component {
  constructor() {
    this.someValue = "Instance";
    this.buttonArrow = document.querySelector("#arrow");
    this.buttonArrow.addEventListener("click", this.handleClickArrow);
    this.buttonFunction = document.querySelector("#function");
    //You can bind the value of this to the instance of Component if you uncomment the next line.
    //this.handleClickFunction = this.handleClickFunction.bind(this);
    //When the button is pressed it calls the handleClickFunction, the value of this is the buttonFunction object
    this.buttonFunction.addEventListener("click", this.handleClickFunction);
    //If we don't add someValue to the buttonFunction the code brakes when the button is pressed
    this.buttonFunction.someValue = "Button";
  }

  //In the arrow function the value of this is bound to the actual instance of Component
  //It doesn't matter how handleClickArrow is called
  handleClickArrow = () => {
    console.log("Arrow pressed!");
    console.log("this: ", this);
    console.log("someValue: ", this.someValue);
  };

  //In the regular function the value of this depends how it is called
  handleClickFunction() {
    console.log("Function pressed!");
    console.log("this: ", this);
    console.log("someValue: ", this.someValue);
  }
}

const instance = new Component();
console.log(instance);
instance.handleClickArrow();
//here the value of this is the instance
instance.handleClickFunction();
