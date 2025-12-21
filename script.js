//your JS code here. If required.
 const submitBtn = document.getElementById("submit");
  const existingBtn = document.getElementById("existing");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const checkbox = document.getElementById("checkbox");

// 1️⃣ Show "Existing User" button if credentials exist
function checkExistingUser() {
  if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
}

// Run on page load
checkExistingUser();

// 2️⃣ Handle form submission
document.getElementById("loginForm").addEventListener("submit", function(event){
  event.preventDefault(); // prevent actual form submission

  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove stored credentials
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Update existing user button visibility
  checkExistingUser();
});

// 3️⃣ Handle "Login as existing user" button
existingBtn.addEventListener("click", function() {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  } else {
    alert("No saved credentials found!");
    existingBtn.style.display = "none"; // hide button if no data
  }
});