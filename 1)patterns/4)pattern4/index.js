//program to print following numerical triangle
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string = string + " " + j;
    }
    console.log(string);
  }
};
pattern(5);
