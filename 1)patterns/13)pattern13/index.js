//write a program to print the following pattern
// 1      1
// 12    21
// 123  321
// 12344321
const numberCrown = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    for (let k = 1; k <= 2 * (n - i); k++) {
      str += " ";
    }
    for (let j = n - 1; j <= 1; j++) {
      str += j + " ";
    }
    console.log(str);
  }
};
numberCrown(4);
