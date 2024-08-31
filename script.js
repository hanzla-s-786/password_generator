const passwordbox = document.getElementById("password");
const lenght = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnoprstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&*^()";
const allchars = uppercase + lowercase + number + symbol;

function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (lenght > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
  passwordbox.value = password;
}

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}


