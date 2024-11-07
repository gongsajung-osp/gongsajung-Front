function isColliding(standard, fixed) {
    const at1 = standard.getBoundingClientRect();
    const at2 = fixed.getBoundingClientRect();
  
    return !(
      at1.top > at2.bottom ||
      at1.bottom < at2.top ||
      at1.left > at2.right ||
      at1.right < at2.left
    );
}
  
const element1 = document.getElementById('touched');
const element2 = document.getElementById('tap');
  
if (isColliding(element1, element2)) {
    element2.classList.add('fixed');
};