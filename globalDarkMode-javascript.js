// dark mode/light mode customization
function toggleDarkMode() {
    // Define the stylesheetId for the dark mode stylesheet link element
    const darkModeStylesheetId = 'dark-mode-stylesheet';
    // Define the stylesheetId for the global stylesheet link element
    const globalStylesheetId = 'global-stylesheet';

    // Get the dark mode stylesheet link element by its ID
    const darkModeStylesheet = document.getElementById(darkModeStylesheetId);
    // Get the global stylesheet link element by its ID
    const globalStylesheet = document.getElementById(globalStylesheetId);

    // Check if the dark mode stylesheet is disabled
    if (darkModeStylesheet.disabled) {
        // If it is disabled, enable it
        darkModeStylesheet.disabled = false;
    } else {
        // If it is enabled, disable it
        darkModeStylesheet.disabled = true;
    }

    // Check if the global stylesheet is disabled
    if (globalStylesheet.disabled) {
        // If it is disabled, enable it
        globalStylesheet.disabled = false;
    } else {
        // If it is enabled, disable it
        globalStylesheet.disabled = true;
    }
}

  