//CLASS

class Do {

    Stname: string;
    Stid: number;

    constructor(name: string,id: number){
        this.Stname=name;
        this.Stid=id;
    }
}
let obj=new Do("vivek",58);

console.log(obj.Stname,obj.Stid);