// Strings..

console.log("test ");
console.log('test ');

// handling double-quotes and single-quotes
console.log("That's it!");
console.log('Hello "Time"');

// Templating string
const x = "Tim"
console.log(`Hello ${x}`);

// Lamda Calculus
/// alpha translation
const id = (x) => x;
console.log(id("Hello alpha"));

/// beta reduction I
const test_beta1 = (x => x)("Hello Beta1")
console.log(test_beta1)
/* evaluates too:
(x => 1)(1)
1
*/

/// beta reduction II
let test_beta2 = (f => x => f(x))(id)("Hello beta2")
console.log(test_beta2)
/* evaluates too:
(x => 1)(1)
1
*/

/// eta reduction I
const foo = () => "Hello eta1";
console.log((x => foo(x))());
/* evaluates too:
foo
*/

/// eta reduction II
x => y => both(x)(y)
/* evaluates too:
both
*/