# Mô tả dự án: Sành Fruit — Menu bán trái cây online

## Tổng quan

Sành Fruit là thương hiệu trái cây mix thuần Việt, bán online qua Zalo, Instagram và Messenger. Dự án cần một menu điện tử dạng landing page tĩnh — không có chức năng đặt hàng tích hợp, không có nút tương tác, chỉ trưng bày sản phẩm và hướng dẫn khách liên hệ qua kênh có sẵn.

---

## Sản phẩm & Giá

Hộp mix trái cây thuần Việt, quý khách tự chọn loại trong gói:

| Gói | Số loại | Giá |
|---|---|---|
| Mix 3 loại | 3 loại tự chọn | 30.000đ |
| Mix 4 loại | 4 loại tự chọn | 35.000đ |
| Mix 5 loại | 5 loại tự chọn | 40.000đ |

Danh sách trái cây không cố định — hiển thị dạng minh hoạ, có thể thay đổi theo mùa. Ví dụ: ổi, xoài, dưa hấu, mận, thanh long, v.v.

---

## Hình ảnh

Đường dẫn tương đối từ file HTML: `../../images/`

| File | Dùng cho |
|---|---|
| `overview.jpg` | Ảnh banner/hero — giới thiệu tổng quan các hộp mix |
| `3-mon.jpg` | Ảnh minh hoạ cho gói Mix 3 loại |
| `4-mon.jpg` | Ảnh minh hoạ cho gói Mix 4 loại |
| `5-mon.jpg` | Ảnh minh hoạ cho gói Mix 5 loại |

Bố trí đề xuất: `overview.jpg` đặt ở section hero hoặc banner giới thiệu. Ba ảnh còn lại đặt trong card tương ứng của từng gói mix.

---

## Luồng đặt hàng (hiển thị trên menu, không tương tác)

1. Chọn gói — Mix 3, 4 hoặc 5 loại tuỳ nhu cầu
2. Nhắn tin — liên hệ qua Zalo / Messenger / Instagram để đặt hàng
3. Xác nhận đơn — shop xác nhận đơn và thông báo thời gian giao hàng
4. Nhận hàng — hộp mix tươi ngon được giao tận nơi

---

## Thông tin liên hệ

- **Zalo:** 0342 661 892
- **Instagram:** [@sanhfruit\_mlem](https://www.instagram.com/sanhfruit_mlem?igsh=MXRvdnh5OW8xc2Q2aA==)

---

## Yêu cầu kỹ thuật

File HTML duy nhất, CSS nhúng trong cùng file, menu tĩnh hoàn toàn — không JavaScript, không form, không nút bấm.

Phần lớn khách hàng xài bằng điện thoại hãy giúp tôi thiết kế sao tối ưu cho giao diện điện thoại nhất

---

## Yêu cầu nội dung & giọng văn

Ngôn ngữ lịch sự, trân trọng khách hàng. Dùng "quý khách" thay vì "bạn". Tránh từ ngữ thông tục hoặc quá thân mật. Giữ giọng văn tươi mát, thân thiện nhưng vẫn chuyên nghiệp — phù hợp với phong cách buôn bán Việt Nam.

---

## Bộ màu

| Nhóm | Mã màu | Dùng cho |
|---|---|---|
| Xanh rừng | `#1a4a2e` `#2d6e45` `#1e5c38` | Hero, footer, bước hướng dẫn |
| Vàng nắng | `#ffd166` `#e8a020` `#c4851a` | Badge, accent, gói nổi bật |
| Kem đất | `#f7f2ea` `#fff8ec` `#e8ddd0` | Nền trang, banner, viền card |
| Xanh nhạt | `#f0f9f3` `#c5e6d0` `#1a5c33` | Pill trái cây, tag |
| Vàng kem | `#fdf5e6` `#f0d99a` `#7a5500` | Pill xác nhận lựa chọn |
| Nâu đất | `#2d2218` `#9a8a72` `#b0a090` | Chữ chính, mô tả, nhãn phụ |
