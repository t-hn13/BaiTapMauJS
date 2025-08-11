// Bài tập 04: Tính chu vi, diện tích hình tròn
// Viết chương trình nhập vào từ bàn phím bán kính r của đường tròn, in ra kết quả.

// a. Chu vi = ?

// b. Diện tích = ?

// Gợi ý:

// Chu vi: chu vi = 2 * PI * r

// Diện tích: dientich = PI * r * r

let chuVi, dienTich, r;
r = Number(prompt("Vui lòng nhập vào bán kính r:"));
chuVi = 2 * Math.PI * r;
dienTich = Math.PI * r * r; //r**2
console.log(`Ban kính r bạn nhập là: ${r}`);
console.log(`Chu vi của hình tròn là: ${chuVi}`);
console.log(`Dien tích của hình tròn là: ${dienTich}`);
