// Mục tiêu: Viết chương trình nhập vào chiều cao, cân nặng, tính BMI và xuất ra thông báo phân loại cơ thể.

// Các mức phân loại:

// BMI < 15: Thân hình quá gầy

// 15 ≤ BMI < 16: Thân hình gầy

// 16 ≤ BMI < 18.5: Thân hình hơi gầy

// 18.5 ≤ BMI < 25: Thân hình bình thường

// 25 ≤ BMI < 30: Thân hình hơi béo

// 30 ≤ BMI < 35: Thân hình béo

// BMI ≥ 35: Thân hình quá béo
let chieuCao = Number(prompt("Nhập vào chiều cao của bạn"));
let canNang = Number(prompt("Nhập vào cân nặng của bạn"));
let BMI = canNang / chieuCao ** 2;
console.log(chieuCao);
console.log(canNang);

console.log(BMI.toFixed(2));

if (!isNaN(chieuCao) && !isNaN(canNang)) {
  if (BMI < 15) {
    console.log("Thân hình quá gầy");
  } else if (BMI >= 15 && BMI < 16) {
    console.log("Thân hình gầy");
  } else if (BMI >= 16 && BMI < 18.5) {
    console.log("Thân hình hơi gầy");
  } else if (BMI >= 18.5 && BMI < 25) {
    console.log("Thân hình bình thường");
  } else if (BMI >= 25 && BMI < 30) {
    console.log("Thân hình hơi béo");
  } else if (BMI >= 30 && BMI < 35) {
    console.log("Thân hình béo");
  } else {
    console.log("Thân hình quá béo");
  }
} else console.log("Bạn nhập không đúng, vui lòng nhập lại");
