//write a program to print the following Binary number Triangle pattern
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
const binaryNumberTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      num = 1;
    } else num = 0;
    for (let j = 1; j <= i; j++) {
      str = num + " ";
      num = 1 - num;
    }
    console.log(str);
  }
};
binaryNumberTriangle(5);
