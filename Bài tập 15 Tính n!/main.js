console.log("Tính n giai thừa n!");
let numN = Number(prompt("Vui lòng nhập vào số n không âm"));
// Kiểm tra điều kiện nếu sai nhập nào đúng thì thôi
// Điều kiện số n không phải là số nguyên
// n là không phải số
// n < 0
// do là hoặc || nên chỉ cần đúng 1 cái thì vẫn đúng điều kiện
// ===> ĐÚng hết điều kiện bắt nhập lại
while (!Number.isInteger(numN) || isNaN(numN) || numN < 0) {
  numN = Number(prompt("Số không hợp lệ vui lòng nhập lại số n không âm"));
}
let tich = 1; // Muốn tính n! thì tich lúc nào cũng = 1 để 1 * 1 = 1
// 1> DÙng for
for (let i = 1; i <= numN; i++) {
  // Mỗi lần i = 1 thì tich * i
  tich *= i;
  // VD: 4! = 1 * 2 * 3 * 4
  // i = 1; tich = 1 * 1 = 1; i++
  // i = 2; tich = 1 * 2 = 2; i++
  // i = 3; tich = 2 * 3 = 6; i++
  // i = 4; tich = 6 * 4 = 24; Dừng do i <= numN mà numN = 4
  console.log(i);
}
console.log(`${numN}! = ${tich}`);

// Dùng while
// let i = 1;
// while (i <= numN) {
//   tich *= i;
//   i++;
// }
// console.log(`${numN}! = ${tich}`);
