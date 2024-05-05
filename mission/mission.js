const themeSelector = document.getElementById("theme-select");
const body = document.body;
function changeTheme() {
    var currentValue = themeSelector.value;
    var img = document.getElementById("logo");
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    if (currentValue == "dark")
    {
        body.classList.add("dark");
        img.src = "images/byui-logo_dark.png";
    }
    else
    {
        body.classList.remove("dark");
        img.src = "images/byui-logo_blue.webp";
    }
// if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('click', changeTheme);