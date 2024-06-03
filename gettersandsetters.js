class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  set height(newheight) {
    if (newheight > 0) {
      this._height = newheight;
    } else {
      console.error("Width must be a positive number");
    }
  }

  get width() {
      return this._width;
}

  get height() {
    return this._height;
  }
  get area(){
    return this._width * this._height;
  }
}
    const rectangle = new Rectangle(3, 4);

    console.log(rectangle.width);
    console.log(rectangle.height);
    console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(this.firstName==="string" && newFirstName.length>0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastName){
        if(this.lastName==="string" && newLastName.length>0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }
    set age(newAge){
        if(typeof newAge==="number" && newAge >=0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
}
    const person = new Person(25,98, "age");

    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);


