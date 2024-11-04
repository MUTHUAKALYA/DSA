//write a program to print the following pattern
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

const pattern = () => {
  for (let i = 1; i <= 5; i++) {
    let string = "";
    for (let j = 1; j <= 2; j++) {
      string = string + " " + j;
    }
    console.log(string);
  }
};
pattern();
