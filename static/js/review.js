// 댓글창 보이게
document.querySelectorAll('.react-comment').forEach((commentButton, index) => {
  commentButton.addEventListener('click', function() {
    const viewComment = document.querySelectorAll('.view-comment')[index];

    if (viewComment) {
      if (viewComment.style.display === 'none' || !viewComment.style.display) {
        viewComment.style.display = 'block';
      } else {
        viewComment.style.display = 'none';
      }
    }
  });
});


//tab 클릭
function showTab(tabId, event) {
  const contents = document.querySelectorAll('.tab-content')
  contents.forEach(content => {
    content.style.display = 'none';
  });

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = 'block';
  }

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  if (event) {
    event.currentTarget.classList.add('active');
  }
}


//tab 고정 시 효과 --> 왜안되지... 일단 borderraidus 없애뒀음
// const tabs = document.querySelectorAll('.tap');


// tabs.forEach((tab, index) => {
//   const stickyPoint = tab.getBoundingClientRect();

//   tab.addEventListener('scroll', function() {

//     const stickyPosition = 13 * 16;
  
//     if (stickyPoint.top <= stickyPosition) {
//         tab.style.borderRadius = '0 0 150px 150px';
//     } else {
//         tab.style.borderRadius = '0px';
//     }
//   });
// });