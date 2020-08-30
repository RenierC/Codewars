// check if i'm passing a number or a function
let checker = (num, op) => (op ? op(num) : num);

let zero = (op) => checker(0, op);
let one = (op) => checker(1, op);
let two = (op) => checker(2, op);
let three = (op) => checker(3, op);
let four = (op) => checker(4, op);
let five = (op) => checker(5, op);
let six = (op) => checker(6, op);
let seven = (op) => checker(7, op);
let eight = (op) => checker(8, op);
let nine = (op) => checker(9, op);

let plus = (a) => (b) => b + a;
let minus = (a) => (b) => b - a;
let times = (a) => (b) => b * a;
let dividedBy = (a) => (b) => Math.floor(b / a);
