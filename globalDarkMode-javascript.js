// dark mode/light mode customization
function toggleDarkMode() {
    // Define the stylesheetId for the dark mode stylesheet link element
    const darkModeStylesheetId = 'dark-mode-stylesheet';
    // Define the stylesheetId for the global stylesheet link element
    const globalStylesheetId = 'global-stylesheet';
    // Define the stylesheetId for the global shopping cart stuff link element
    const shoppingCartStylesheetId = 'shopping-cart-stylesheet';
    // Define the stylesheetId for the dark mode global shopping cart stuff link element
    const darkModeShoppingCartStylesheetId = 'dark-mode-shopping-cart-stylesheet';

    // Get the dark mode stylesheet link element by its ID
    const darkModeStylesheet = document.getElementById(darkModeStylesheetId);
    // Get the global stylesheet link element by its ID
    const globalStylesheet = document.getElementById(globalStylesheetId);
    // Get the shopping cart stylesheet link element by its ID
    const shoppingCartStylesheet = document.getElementById(shoppingCartStylesheetId);
     // Get the dark mode shopping cart stylesheet link element by its ID
     const darkModeShoppingCartStylesheet = document.getElementById(darkModeShoppingCartStylesheetId);

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
    
    // Check if the Shopping Cart Style is disabled
    if (shoppingCartStylesheet.disabled) {
        // If it is disabled, enable it
        shoppingCartStylesheet.disabled = false;
    } else {
        // If it is enabled, disable it
        shoppingCartStylesheet.disabled = true;
    }

    // Check if the Dark Mode Shopping Cart Style is disabled
    if (darkModeShoppingCartStylesheet.disabled) {
        // If it is disabled, enable it
        darkModeShoppingCartStylesheet.disabled = false;
    } else {
        // If it is enabled, disable it
        darkModeShoppingCartStylesheet.disabled = true;
    }
}
