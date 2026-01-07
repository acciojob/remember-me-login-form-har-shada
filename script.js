const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if credentials exist in localStorage
window.onload = () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "block"; // Show existing user button
  }
};

// Form submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent form submission reload
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (!username || !password) {
    alert("Please enter username and password");
    return;
  }

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    existingBtn.style.display = "block"; // Show existing user button
  } else {
    // Remove credentials if checkbox unchecked
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    existingBtn.style.display = "none"; // Hide button
  }

});