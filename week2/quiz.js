
// Q6: alpha-equivalency; 
/*
In logic and type theory, α -equivalence is the principle that two syntactic expressions (types, terms, propositions, contexts, whatever) are equivalent for all purposes if their only difference is the renaming of bound variables.
*/
const F1 = x => (x => x);
const F2 = y => (y => y);

// Q6: proper beta-reduction
const id = x => x
const a1 = y => id(y);
const a2 = y => y;
// this is not a beta-reduction!

// Q6b
const id1 = y => y;
const fst = x => y => x;
//const snd = x => y => y;
//const snd = x => y => fst(y)(x)
const snd = x => y => fst(id1)(id1)(id1); 
const x_ = Math.random();
const y_ = Math.random();
console.log(snd(x_)(y_) === y_);