function toggleMenu() {
        const nav = document.getElementById("nav-menu");
        const burger = document.querySelector(".hamburger");
        nav.classList.toggle("open");
        burger.classList.toggle("open");
    }

    //Need funtionality for all buttons, and to connect to firebase