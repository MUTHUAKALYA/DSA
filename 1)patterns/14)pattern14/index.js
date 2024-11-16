//write program to print the following pattern
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
//Input n = 5;
const increasingNumberTrianglePattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let num = 0;
    let str = "";
    for (let j = 1; j <= i; j++) {
      num++;
      str += num + " ";
    }
    console.log(str);
  }
};
increasingNumberTrianglePattern(5);
