
document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".combo-wrapper");

  wrappers.forEach((wrapper, index) => {
    const list = wrapper.querySelector(".combo-list");
    const leftBtn = wrapper.querySelector(".combo-scroll-btn.left");
    const rightBtn = wrapper.querySelector(".combo-scroll-btn.right");
    const card = list.querySelector(".combo-card");

    if (!card) return; // tránh lỗi nếu chưa có card

    const scrollStep = card.offsetWidth + 16;

    function scrollRight() {
      if (list.scrollLeft + list.offsetWidth >= list.scrollWidth - 10) {
        list.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        list.scrollBy({ left: scrollStep, behavior: 'smooth' });
      }
    }

    function scrollLeft() {
      if (list.scrollLeft <= 0) {
        list.scrollTo({ left: list.scrollWidth, behavior: 'smooth' });
      } else {
        list.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      }
    }

    leftBtn.addEventListener("click", scrollLeft);
    rightBtn.addEventListener("click", scrollRight);

    // Tự động chạy riêng cho từng combo
    setInterval(scrollRight, 30000 + index * 200); // delay lệch nhau tí tránh đồng loạt
  });
});

function decreaseQty() {
  var input = document.getElementById('qty-input');
  var val = parseInt(input.value, 10);
  if(val > 1) input.value = val - 1;
}
function increaseQty() {
  var input = document.getElementById('qty-input');
  var val = parseInt(input.value, 10);
  input.value = val + 1;
}