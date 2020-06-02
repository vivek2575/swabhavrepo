
abstract class Person {
    name:string;

    constructor(n:string) {
        this.name=n;
    }
    display=():void => {
        console.log(this.name);
    }

    getperson=(n:string):void =>{
        this.name=n;
    }
}

class employee extends Person {
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id=id;
    }
}

let emp = new employee("vk",1);
emp.display();