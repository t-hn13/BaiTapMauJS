let nam = parseInt(prompt("Vui lòng nhập vào 1 năm bất kì"));
if (!isNaN(nam)) {
  if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
    console.log(`Nam ${nam} là năm nhuận`);
  } else {
    console.log(`Nam ${nam} không là năm nhuận`);
  }
} else {
  console.log("Bạn đã nhập sai");
}
