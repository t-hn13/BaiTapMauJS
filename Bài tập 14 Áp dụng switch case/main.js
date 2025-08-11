// let chon = parseInt(prompt("Nhập lựa chọn của bạn: (1-4)"));
// console.log(`
//     Chọn cách tìm kiếm:
//     1. TÌm theo tên
//     2. Tìm theo tác giả
//     3. Tìm theo nhà xuất bản
//     4. TÌm theo tiêu đề
//     Thoát nếu phím bấm không hợp lệ

//     `);
// switch (chon) {
//   case 1:
//     console.log("1. TÌm theo tên");
//     break;
//   case 2:
//     console.log("2. Tìm theo tác giả");
//     break;
//   case 3:
//     console.log("3. Tìm theo nhà xuất bản");
//     break;
//   case 4:
//     console.log("4. TÌm theo tiêu đề");
//     break;
//   default:
//     console.log("Thoát");
//     break;
// }
let chon = parseInt(
  prompt(`
    Chọn cách tìm kiếm:
    1. TÌm theo tên
    2. Tìm theo tác giả
    3. Tìm theo nhà xuất bản
    4. TÌm theo tiêu đề
    Thoát nếu phím bấm không hợp lệ
    
    `)
);
switch (chon) {
  case 1:
    alert("1. TÌm theo tên");
    break;
  case 2:
    alert("2. Tìm theo tác giả");
    break;
  case 3:
    alert("3. Tìm theo nhà xuất bản");
    break;
  case 4:
    alert("4. TÌm theo tiêu đề");
    break;
  default:
    alert("Thoát");
    break;
}
