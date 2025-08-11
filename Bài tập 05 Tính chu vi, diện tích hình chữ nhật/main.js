// Bài tập 05: Tính chu vi, diện tích hình chữ nhật

// Viết chương trình nhập vào 2 số thực dương a, b từ bàn phím, trong đó:

// a là chiều dài

// b là chiều rộng của hình chữ nhật.

// In ra màn hình chu vi và diện tích của hình chữ nhật đó.

// Gợi ý:

// Diện tích:
// S=a×b

// Chu vi:
// P=(a+b)×2

let chieuDai, chieuRong, dienTich, chuVi;
chieuDai = Number(prompt("Vui lòng nhập vào chiều dài HCN:"));
chieuRong = Number(prompt("vui lòng nhập ào chiều rộng HCN:"));
chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;
console.log(`Chu vi HCn là: ${chuVi}`);
console.log(`Dien tich HCN là: ${dienTich}`);
