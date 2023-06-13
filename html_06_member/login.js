document.addEventListener("DOMContentLoaded", () => {
  const login = () => {
    const login_form = document.querySelector("form#login_form");

    // id 나 class 가 부착되지 않은 input tag 를 select 하는 방법
    const username = login_form.querySelector("input[name='username']");
    const password = login_form.querySelector("input[name='password']");
    if (!username.value) {
      alert("USER NAME 은 반드시 입력해야 합니다");
      username.focus();
      return false;
    }
    if (!password.value) {
      alert("PASSWORD 는 반드시 입력해야 합니다");
      password.focus();
      return false;
    }

    login_form.submit();
  }; // end login 함수

  document.querySelector("#login_button").addEventListener("click", login);

  document.querySelector("#join_button").addEventListener("click", () => {
    document.location.href = "join.html";
  });
});
