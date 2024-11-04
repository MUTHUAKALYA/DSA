//Write a program to print triangle star pattern
// *
// * *
// * * *
// * * * *
// * * * * *
const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let string = "";
    for (let j = 0; j <= i; j++) {
      string = string + " " + "*";
    }
    console.log(string);
  }
};
pattern(10);
