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
            <input type="text" class="form-control" id="username" placeholder="Enter your username" />
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password" />
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
