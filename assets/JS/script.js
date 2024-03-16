let storedUsername = "admin";
let storedEmail = "";
let storedPassword = "admin";

const form = document.querySelector(".form");
const formWrapper = document.querySelector(".form-wrapper");
const button = document.querySelector("#_button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");

  if (button.textContent === "Sign Up") {
    const emailInput = document.querySelector("#email");

    storedUsername = usernameInput.value;
    storedEmail = emailInput.value;
    storedPassword = passwordInput.value;

    console.log("Stored username: " + storedUsername);
    console.log("Stored email: " + storedEmail);
    console.log("Stored password: " + storedPassword);
  } else {
    if (
      usernameInput.value === storedUsername &&
      passwordInput.value === storedPassword
    ) {
      console.log("Login successful");
    } else {
      console.log("Invalid username or password");
    }
  }

  window.open("info.html", "_self");
});

document.querySelector("#_button").addEventListener("click", function () {
  const form = document.querySelector(".form");
  const formWrapper = document.querySelector(".form-wrapper");
  const button = this;
  formWrapper.classList.toggle("active");

  setTimeout(function () {
    if (button.textContent === "Log In") {
      button.textContent = "Sign Up";
      form.innerHTML = `
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter your username"required />
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter your password" required/>
            </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
        `;
    } else {
      button.textContent = "Log In";
      form.innerHTML = `
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter your username" />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password" />
        </div>
        <button type="submit" class="btn btn-primary">Log In</button>
    `;
    }

    formWrapper.classList.add("active");
  }, 500);
});
