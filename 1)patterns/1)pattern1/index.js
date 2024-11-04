//write a program to print the following pattern
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

const pattern = () => {
  for (let i = 1; i <= 5; i++) {
    let string = "";
    for (let j = 1; j <= 5; j++) {
      string = string + " " + "*";
    }
    console.log(string);
  }
};
pattern();

//By observing the above rectangular pattern , the number of rows and column are sam . We can get the number dynamically to print rectangualr pattern with different no of rows or columns
const pattern1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let string = "";
    for (let j = 1; j <= n; j++) {
      string = string + " " + "*";
    }
    console.log(string);
  }
};
pattern1(15);
