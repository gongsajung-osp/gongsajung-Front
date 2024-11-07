
function checkDuplicate() {
  alert("중복확인 기능은 아직 구현되지 않았습니다.");
}

function sendVerificationCode() {
  alert("인증번호 발송 기능은 아직 구현되지 않았습니다.");
}

function register() {
  alert("가입하기 버튼이 클릭되었습니다.");
}

document.getElementById('confirm_password').addEventListener('input', function () {
  const password = document.getElementById('password').value;
  const confirmPassword = this.value;
  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    document.getElementById("confirm-msg").innerHTML = "일치하지 않습니다.";
  } 
  //이거 왜 작동 안되지.....ㅡ 젠장
});
