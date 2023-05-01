function toggleDarkMode() {
    globalDarkMode();
    aboutUsDarkMode();
  };

// dark mode/light mode customization
function globalDarkMode() {

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

    // Get the shopping cart icon image element
    const shoppingCartIcon = document.querySelector('.shopping-cart-icon');
    // Get the dropdown marker image element
    const dropdownMarker = document.querySelector('.dropdown-marker');

    // Check if the dark mode stylesheet is disabled
    if (darkModeStylesheet.disabled) {
        // If it is disabled, enable it
        darkModeStylesheet.disabled = false;
        // Add the dark-mode class to the body element
        document.body.classList.add('dark-mode');
        // Change the images to dark mode versions
        shoppingCartIcon.src = 'shoppingcarticon2.png';
        dropdownMarker.src = 'dropdown2.png';
    } else {
        // If it is enabled, disable it
        darkModeStylesheet.disabled = true;
        // Remove the dark-mode class from the body element
        document.body.classList.remove('dark-mode');
        // Change the images to light mode versions
        shoppingCartIcon.src = 'shoppingcarticon.png';
        dropdownMarker.src = 'dropdown.png';
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
};

// dark mode/light mode customization
function aboutUsDarkMode() {
    // Define the stylesheetId for the dark mode about us stylesheet link element
    const darkModeAboutUsStylesheetId = 'dark-mode-about-us-stylesheet';
    // Define the stylesheetId for the about us stylesheet link element
    const aboutUsStylesheetId = 'about-us-stylesheet';

    // Get the dark mode stylesheet link element by its ID
    const darkModeAboutUsStylesheet = document.getElementById(darkModeAboutUsStylesheetId);
    // Get the about us stylesheet link element by its ID
    const aboutUsStylesheet = document.getElementById(aboutUsStylesheetId);

    // Check if the global stylesheet is disabled
    if (darkModeAboutUsStylesheet.disabled) {
      // If it is disabled, enable it
      darkModeAboutUsStylesheet.disabled = false;
    } else {
      // If it is enabled, disable it
      darkModeAboutUsStylesheet.disabled = true;
    }

    // Check if the global stylesheet is disabled
    if (aboutUsStylesheet.disabled) {
      // If it is disabled, enable it
      aboutUsStylesheet.disabled = false;
    } else {
      // If it is enabled, disable it
      aboutUsStylesheet.disabled = true;
    }
  };
