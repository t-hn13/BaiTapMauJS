let a, b, c;
a = parseFloat(prompt("Vui lòng nhập vào só a:"));
b = parseFloat(prompt("Vui lòng nhập vào só b:"));
c = parseFloat(prompt("Vui lòng nhập vào só c:"));
let delta = b ** 2 - 4 * a * c;
if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
  console.log(`${b}^2 - 4 * ${a} * ${c} = ${delta}`);
  if (delta < 0) {
    console.log("Phương trình vô nghiệm");
  } else if (delta > 0) {
    console.log("Phương trình có 2 nghiệm phân biệt");
    console.log(`x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}`);
    console.log(`x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`);
  } else {
    console.log("Phương trình có nghiệm kép");
    console.log(`x1 = x2 = ${-(b / (2 * a))}`);
  }
} else {
  console.log("Bạn đã nhập sai yêu cầu");
}
