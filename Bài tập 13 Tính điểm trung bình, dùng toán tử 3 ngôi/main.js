let dtb = Number(prompt("Nhập điểm trung bình của bạn:"));
// if (!isNaN(dtb) && dtb >= 0 && dtb <= 10) {
//   if (dtb >= 8) {
//     console.log("Bạn là học sinh giỏi");
//   } else if (dtb < 8 && dtb >= 6.5) {
//     console.log("Bạn là học sinh khá");
//   } else if (dtb < 6.5 && dtb >= 5) {
//     console.log("Bạn là học sinh trung bình");
//   } else {
//     console.log("Bạn là học sinh yếu");
//   }
// } else console.log("Bạn nhập sai vui lòng nhập lại!!!");
dtb =
  !isNaN(dtb) && dtb >= 0 && dtb <= 10
    ? dtb >= 8
      ? console.log("Bạn là học sinh giỏi")
      : dtb < 8 && dtb >= 6.5
      ? console.log("Bạn là học sinh khá")
      : dtb < 6.5 && dtb >= 5
      ? console.log("Bạn là học sinh trung bình")
      : console.log("Bạn là học sinh yếu")
    : console.log("Bạn nhập sai vui lòng nhập lại!!!");
