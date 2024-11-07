
function showTab(tab) {
  const tabContent = document.getElementById('tab-content');
  const tabs = document.querySelectorAll('.tabs button');

  tabs.forEach(button => button.classList.remove('active'));

  if (tab === 'description') {
    tabContent.textContent = '상품에 대한 상세설명이 여기에 표시됩니다.';
    tabs[0].classList.add('active');
  } else if (tab === 'reviews') {
    tabContent.textContent = '리뷰가 여기에 표시됩니다.';
    tabs[1].classList.add('active');
  } else if (tab === 'shipping') {
    tabContent.textContent = '배송 정보가 여기에 표시됩니다.';
    tabs[2].classList.add('active');
  }
}
