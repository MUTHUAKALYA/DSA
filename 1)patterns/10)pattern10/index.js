//write a program to print the following pattern
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *
const pattern = (n) => {
  //upper triangle
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n - i; j++) {
      string = string + "-" + " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      string = string + "*" + " ";
    }
    for (let j = 1; j <= n - i; j++) {
      string = string + "-" + " ";
    }
    console.log(string);
  }
  //lower triangle
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i - 1; j++) {
      string = string + "-" + " ";
    }
    for (let k = 1; k <= (n - i) * 2 + 1; k++) {
      string = string + "*" + " ";
    }
    for (let j = 1; j <= i - 1; j++) {
      string = string + "-" + " ";
    }
    console.log(string);
  }
};
pattern(5);
