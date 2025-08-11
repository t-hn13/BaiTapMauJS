let thang = parseInt(prompt("Vui lòng nhập tháng bất kì 1-12:"));
let nam;
if (!isNaN(thang) && thang >= 1 && thang <= 12) {
  if (
    thang === 1 ||
    thang === 3 ||
    thang === 5 ||
    thang === 7 ||
    thang === 8 ||
    thang === 10 ||
    thang === 12
  ) {
    console.log(`Thang ${thang} có 31 ngày`);
  } else if (thang === 2) {
    nam = parseInt(prompt("Vui lòng nhập năm"));
    if (nam % 400 === 0 || (nam % 4 === 0 && nam % 100 !== 0)) {
      console.log(`Nam ${nam} là năm nhuận`);
      console.log(`Do là năm nhuận nên tháng ${thang} có 29 ngày`);
    } else {
      console.log(`Nam ${nam} là năm không nhuận`);
      console.log(`Do là năm không nhuận nên tháng ${thang} có 28 ngày`);
    }
  } else {
    console.log(`Thang ${thang} có 30 ngày`);
  }
} else {
  console.log("Bạn đã nhập sai tháng");
}
