//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");

// ✅ Helper to set a cookie
function setCookie(name, value, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
}

// ✅ Helper to get a cookie
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  name = name + "=";
  for (let c of ca) {
    c = c.trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

// ✅ Apply preferences from cookies
function applyPreferences() {
  const savedSize = getCookie("fontsize");
  const savedColor = getCookie("fontcolor");

  if (savedSize) {
    document.documentElement.style.setProperty("--fontsize", savedSize + "px");
    fontSizeInput.value = savedSize;
  }
  if (savedColor) {
    document.documentElement.style.setProperty("--fontcolor", savedColor);
    fontColorInput.value = savedColor;
  }
}

// ✅ Save preferences on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const size = fontSizeInput.value;
  const color = fontColorInput.value;

  // Save in cookies
  setCookie("fontsize", size);
  setCookie("fontcolor", color);

  // Apply immediately
  applyPreferences();
});

// Apply saved prefs when page loads
applyPreferences();
