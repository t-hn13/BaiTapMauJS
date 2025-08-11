// Bài tập 07: Tìm 𝑥,𝑦
// x,y khi biết tổng và hiệu của chúng.

// Case test:
// Tổng = 14, Hiệu = 4 →
// 𝑥=9x=9, 𝑦=5y=5

// Case 2:
// Tổng = 8, Hiệu = 5 → 𝑥=6.5x=6.5, 𝑦=1.5
// y=1.5
let tong = Number(prompt("Vui lòng nhập vào tổng 2 số:"));
let hieu = Number(prompt("Vui lòng nhập vào hiệu 2 số:"));
if (!isNaN(tong) && !isNaN(hieu)) {
  let x = (tong + hieu) / 2;
  let y = x - hieu;
  console.log(`Tong 2 số là: ${tong}`);
  console.log(`Hieu 2 số là: ${hieu}`);
  console.log(`Gia trị x cần tìm là: ${x}`);
  console.log(`Gia trị y cần tìm là: ${y}`);
} else {
  console.log("Bạn đã nhập sai vui lòng nhập lại");
}
