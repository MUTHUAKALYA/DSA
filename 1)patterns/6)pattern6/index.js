//Write a program to print the following pattern
// * * * * *
// * * * *
// * * *
// * *
// *
const pattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n - i + 1; j++) {
      string = string + " " + "*";
    }
    console.log(string);
  }
};
pattern(5);
