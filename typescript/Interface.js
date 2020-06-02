//The interface contains only the declaration of the methods and fields, but not the implementation. We cannot use it to build anything.
//It is inherited by a class, 
//and the class which implements interface defines all members of the interface.
var display = function (type) {
    console.log(type.name, type.id);
};
var s = { name: 'vivek', id: 58 };
display(s);
