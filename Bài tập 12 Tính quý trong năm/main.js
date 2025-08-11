let thang = parseInt(prompt("Vui lòng nhập vào tháng bất kì: (1-12)"));
if (!isNaN(thang) && thang >= 1 && thang <= 12) {
  if (thang === 1 || thang === 2 || thang === 3) {
    console.log(`Thang ${thang} là thuộc quý 1`);
  } else if (thang === 4 || thang === 5 || thang === 6) {
    console.log(`Thang ${thang} là thuộc quý 2`);
  } else if (thang === 7 || thang === 8 || thang === 9) {
    console.log(`Thang ${thang} là thuộc quý 3`);
  } else {
    console.log(`Thang ${thang} là thuộc quý 4`);
  }
} else {
  console.log("bạn đã nhập sai yêu cầu");
}
