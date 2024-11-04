//write a program to print the following pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + " " + i;
    }
    console.log(string);
  }
};
pattern(10);
