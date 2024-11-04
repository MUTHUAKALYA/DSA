// write a program to print the following rectangular number pattern
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n; j++) {
      string = string + " " + j;
    }
    console.log(string);
  }
};
pattern(5);
