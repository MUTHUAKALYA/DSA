//write a program to print the following pattern
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n - i; j++) {
      string = string + "_" + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + "*" + " ";
    }
    for (let j = 1; j <= n - i; j++) {
      string = string + "_" + " ";
    }
    console.log(string);
  }
};
pattern(5);
