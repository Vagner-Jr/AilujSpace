const redirect = () => {
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (email == "ailuj@gmail.com" && password == 16062023) {
    window.location.assign("/pages/home.html");
    alert('boas vindas')
  } 
};

const createAccount = () => {
  window.location.assign("/pages/createAccount.html");
}
