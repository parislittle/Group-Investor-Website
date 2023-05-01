// dark mode/light mode customization
function toggleDarkMode() {
    // Define the stylesheetId for the dark mode stylesheet link element
    const stylesheetId = 'dark-mode-stylesheet';
  
    // Get the dark mode stylesheet link element by its ID
    const darkModeStylesheet = document.getElementById(stylesheetId);
  
    // Check if the dark mode stylesheet is disabled
    if (darkModeStylesheet.disabled) {
      // If it is disabled, enable it
      darkModeStylesheet.disabled = false;
    } else {
      // If it is enabled, disable it
      darkModeStylesheet.disabled = true;
    }
  }
  
  