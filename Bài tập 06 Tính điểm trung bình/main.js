// Bài tập 06:
// Viết chương trình nhập vào điểm ba môn Toán, Văn, Anh của một học sinh, tính điểm trung bình và xuất kết quả làm tròn 2 chữ số sau dấu phẩy.
let diemToan, diemVan, diemAnh;

diemAnh = Number(prompt("Vui lòng nhập vào điểm anh:"));
diemToan = Number(prompt("Vui lòng nhập vào điểm toán:"));
diemVan = Number(prompt("Vui lòng nhập vào điểm văn:"));

let dtb = (diemAnh + diemToan + diemVan) / 3;

console.log(`Điểm trung bình của bạn là: ${dtb.toFixed(2)}`);
