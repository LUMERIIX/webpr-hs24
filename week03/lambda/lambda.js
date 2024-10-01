// id
const id = (x) => x;

// konst
const konst = (x) => (y) => x;

const snd = konst(id);
// const snd = x => y => y;

// const expr == x ? tc : fc;
//const T = (tc) => (fc) => tc;
const T = konst;

//const F = (tc) => (fc) => fc;
const F = snd;

const and = (c1) => (c2) => c1(c2(T)(F))(c2(F)(F));
//                      first arguemnt returned if c1 = true; => return b
//                      second argument returned if c1 = false => return
// simplified to; const and = c1 => c2 => c1 (c2(T)(F)) (F)
// simplified further to: const and => c1 => c2 => c1 (c2) (F)
// simplified further to: const and => c1 => c2 => c1 (c2) (c1)
// ==> second value is evaluated if c1 is false so return false!

const or = (c1) => (c2) => c1(T)(c2);
// return first value if c1 == true
// return second value if c1 == false

const Pair = (first) => (last) => (firstOrLast) => firstOrLast(first)(last);
//const firstname = first => last => first;
const firstname = konst;
//const lastname = first => last => last;
const lastname = snd;

// ----- special -----

const Tuple = (n) => [
  parmStore(n + 1)([])((parms) =>
    parms.reduce((accu, it) => accu(it), parms.pop())
  ), // ctor
  ...Array.from({ length: n }, (it, idx) => iOfN(n)(idx)()), // selectors
];

const iOfN =
  (n) =>
  (i) =>
  (
    value // from n curried params, take argument at position i,
  ) =>
    n === 0 ? value : (x) => iOfN(n - 1)(i - 1)(i === 0 ? x : value);

const parmStore =
  (n) =>
  (args) =>
  (
    onDone // n args to come
  ) =>
    n === 0 ? onDone(args) : (arg) => parmStore(n - 1)([...args, arg])(onDone); // store parms in array

const Choice = (n) => [
  ...Array.from({ length: n }, (it, idx) =>
    parmStore(n + 1)([])((parms) => parms[idx + 1](parms[0]))
  ), // ctors
  id,
];
