class MathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return radius*2;
    }
    static getCircumference(radius){
        return 2* this.PI * radius;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}

//const MathUtil1 = new MathUtil();  no need of object

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));



class User {
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");
const user4 = new User("Mohit");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(user4.username);
console.log(User.userCount);