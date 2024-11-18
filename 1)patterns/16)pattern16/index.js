//write a program to print the following pattern
// A B C D E
// A B C D
// A B C
// A B
// A
const reverseLetterTriangle = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 65; j <= 65 + (n - i); j++) {
      str += `${String.fromCharCode(j)} `;
    }
    console.log(str);
  }
};
reverseLetterTriangle(5);
