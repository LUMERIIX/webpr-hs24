// todo: implement the times function

Number.prototype.times = function (callback) {
  //const result = [];
  //for (let i = 0; i < this; i++) {
  //  result.push(callback(i));
  //}
  //return result;
  return Array.from({ length: this }, (_, i) => callback(i));
};
