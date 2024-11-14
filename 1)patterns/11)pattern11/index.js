// write a program to print the following pattern
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
//4 th rule applies in this pattern. Observe symmetry.
//n=5
function rotatedTriangle(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let str = "";
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }
    for (let j = 1; j <= stars; j++) {
      str += "*" + " ";
    }
    console.log(str);
  }
}
rotatedTriangle(5);
