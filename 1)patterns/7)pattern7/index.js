//write a program to print the following pattern
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (j = 1; j <= n - i + 1; j++) {
      string = string + " " + j;
    }
    console.log(string);
  }
};
pattern(5);
