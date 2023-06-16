const redirect = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (email == "ailuj@gmail.com" && password == 16062023) {
    window.location.assign("/pages/home.html");
    alert("tudo ok!");
  } else {
    alert("email ou senha incorreta!");
  }
};
