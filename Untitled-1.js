var storedTheme = localStorage.getItem("theme") || (window.matchMedia("prefers-color-scheme: dark").matches ? "dark" : "light");


if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme)
}
else {
    localStorage.setItem("theme", "light")
    document.documentElement.setAttribute("data-theme", "light")
}

console.log(document.documentElement.getAttribute("data-theme"));

function darkmodetoggle() {
    
        var currentTheme = document.documentElement.getAttribute("data-theme");
        var targetTheme = "light";
    
        if (currentTheme === "light") {
            targetTheme = "dark";
        }
    
        document.documentElement.setAttribute("data-theme", targetTheme)
        localStorage.setItem("theme", targetTheme)
        console.log(document.documentElement.getAttribute("data-theme"));

        
}


