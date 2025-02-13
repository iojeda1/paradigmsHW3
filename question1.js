// Isabel Ojeda
// HW 3
// Q1

function fibonacci() {
    // if we change curr or prev outside of function, they won't change and sequence will be accurate
    let prev = 0; 
    let curr = 1; 

    return function() {
        let next = prev;
        prev = curr; // move prev
        curr += next;
        return next;
    };

}

let fibGenerator1 = fibonacci(); // fibonacci() returns a closure
let fibGenerator2 = fibonacci(); // fibonacci() returns a closure

console.log(fibGenerator1()); // prints 0, i.e., F(0)
console.log(fibGenerator1()); // prints 1, i.e., F(1)
console.log(fibGenerator1()); // prints 1, i.e., F(2)
console.log(fibGenerator1()); // prints 2, i.e., F(3)
console.log(fibGenerator1()); // prints 3, i.e., F(4)

console.log(fibGenerator2()); // prints 0, i.e., F(0)
console.log(fibGenerator2()); // prints 1, i.e., F(1)
console.log(fibGenerator2()); // prints 1, i.e., F(2)
console.log(fibGenerator2()); // prints 2, i.e., F(3)
console.log(fibGenerator2()); // prints 3, i.e., F(4)