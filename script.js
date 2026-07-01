//your JS code here. If required.
const form = document.querySelector("form");
const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");

// Apply saved preferences when page loads
window.onload = function () {
  const cookies = document.cookie.split("; ");

  cookies.forEach((cookie) => {
    const [key, value] = cookie.split("=");

    if (key === "fontsize") {
      document.documentElement.style.setProperty("--fontsize", value);
      fontSize.value = parseInt(value);
    }

    if (key === "fontcolor") {
      document.documentElement.style.setProperty("--fontcolor", value);
      fontColor.value = value;
    }
  });
};

// Save preferences
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const size = fontSize.value + "px";
  const color = fontColor.value;

  // Save cookies
  document.cookie = `fontsize=${size}`;
  document.cookie = `fontcolor=${color}`;

  // Apply immediately
  document.documentElement.style.setProperty("--fontsize", size);
  document.documentElement.style.setProperty("--fontcolor", color);
});