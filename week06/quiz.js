// Q13
//function Empty() { }
//
//const empty = new Empty();
//
//Empty.prototype.answer = 42;
//console.log(empty.answer === 42);

//const Empty = ( () => {
//    function Empty() {}
//    return Empty;
//}) ();
//
//const empty = Empty();
//
//console.log(empty instanceof Empty);

const Empty = ( () => {
    function Empty() {}
    return Empty;
}) ();

const empty = new Empty();
const also = new Empty();

Empty.prototype.answer = 42;
console.log(empty.answer === 42&& also.answer === 42);



//Q14
const Person = name => {
    let age = 0;
    return {
        getName: () => name,
        getAge: () => age,
        setAge: newAge => age = newAge,
        setName: newName => name = newName
    }
}

const p = Person("Hans");
p.age = 50;
console.log(p.getAge() === 50);

const p2 = Person("Hans");
p2.name = "***";
console.log(p2.getName() === "***");

const p3 = Person("Hans");
p3.setAge(50);
console.log(p3.getAge() === 50);

const p4 = Person("Hans");
p4.setName("***");
console.log(p4.getName() === "***");