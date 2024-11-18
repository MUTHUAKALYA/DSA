//write a program to print the following pattern
// A
// A B
// A B C
// A B C D
// A B C D E
const increasingLetterTrianglePattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 65; j < 65 + i; j++) {
      str += `${String.fromCharCode(j)} `;
    }
    console.log(str);
  }
};
increasingLetterTrianglePattern(5);
