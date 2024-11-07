const subCategories = {
  knit: ["아우터", "바지", "셔츠"],
  sticker: ["축구", "농구", "야구"],
  stationery: ["공예", "음악", "사진"],
  postcard: ["여행", "캠핑", "피크닉"],
  ceramics: ["과자", "음료", "건강식품"],
  daily: ["유아용품", "장난감", "의류"],
  food: ["반지", "목걸이", "귀걸이"],
  poster: ["가방", "모자", "시계"],
  glass: ["휴대폰", "노트북", "태블릿"],  
  beads: ["휴대폰", "노트북", "태블릿"],
  leather: ["휴대폰", "노트북", "태블릿"],
  felt: ["휴대폰", "노트북", "태블릿"]
};

document.addEventListener('DOMContentLoaded', () => {
  showSubNav('knit', document.querySelector('.nav li'));
});

function showSubNav(category, element) {
  const subNavBar = document.getElementById('sub-nav');
  subNavBar.innerHTML = "";
  
  subCategories[category].forEach((subCat, index) => {
    const subDiv = document.createElement("div");
    subDiv.textContent = subCat;
    subDiv.classList.add("sub-category-item");
    
    if (index === 0) {
      subDiv.classList.add("active");
    }

    subDiv.onclick = () => {
      document.querySelectorAll('.sub-nav-bar div').forEach(div => div.classList.remove('active'));
      subDiv.classList.add('active');
      alert(`${subCat} 선택됨`);
    };
    
    subNavBar.appendChild(subDiv);
  });

  document.querySelectorAll('.nav li').forEach(li => li.classList.remove('active'));
  element.classList.add('active');
}

function showSettingOptions() {
  alert("눌림");
}