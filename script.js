
/* =====================================
   LOCATION PHOTOS DATA
===================================== */

const locations = {

    college: {
        icon: "🎓",
        title: "College Memories",
        quote: "Where our friendship started and beautiful memories were created ❤️",

        photos: [
            "image/clg.jpeg",
            "image/clg2.jpeg",
            "image/clg3.jpeg",
            "image/clg4.jpeg",
            "image/clg7.jpeg",
            "image/clg8.jpeg"
        ]
    },


    kanchi: {
        icon: "🛕",
        title: "Kanchipuram Memories",
        quote: "Beautiful places become more beautiful with crazy friends ❤️",

        photos: [
            "image/kanchi.jpeg",
            "image/kanchi2.jpeg",
            "image/kanchi4.jpeg"
        ]
    },


    river: {
        icon: "🌊",
        title: "River Trip Memories",
        quote: "Adventure, water, laughter and unforgettable moments 🌊❤️",

        photos: [
            "image/trip.jpeg",
            "image/trip2.jpeg",
            "image/trip4.jpeg"
        ]
    },


    tirumala: {
        icon: "🙏",
        title: "Tirumala Memories",
        quote: "Blessed moments and beautiful memories together 🙏❤️",

        photos: [
            "image/tpty.jpeg",
            "image/tpty1.jpeg",
            "image/tpty2.jpeg",
            "image/tpty6.jpeg"
        ]
    },


    shivalayam: {
        icon: "🕉️",
        title: "Shivalayam Memories",
        quote: "Peaceful moments shared with beautiful friends ❤️",

        photos: [
            "image/siv.jpeg",
            "image/siv1.jpeg",
            "image/siv2.jpeg",
            "image/siv5.jpeg"
        ]
    },


    ours: {
        icon: "❤️",
        title: "Our Beautiful Photos",
        quote: "The best memories are the ones we create together ❤️♾️",

        photos: [
            "image/both.jpeg",
            "image/both2.jpeg",
            "image/both4.jpeg"
        ]
    },


    bangalore: {
        icon: "🌆",
        title: "Bangalore Memories",
        quote: "Another city, another adventure, same crazy friends 😎❤️",

        photos: [
            "image/bgl2.jpeg"
        ]
    }

};


/* =====================================
   GET HTML ELEMENTS SAFELY
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const dropdown = document.querySelector(".dropdown");
const locationMenu = document.querySelector(".location-menu");


/* =====================================
   MOBILE MENU
===================================== */

function toggleMenu() {

    if (navLinks) {
        navLinks.classList.toggle("active");
    }

}


function closeMenu() {

    if (navLinks) {
        navLinks.classList.remove("active");
    }

}


/* HAMBURGER CLICK */

if (menuToggle) {

    menuToggle.addEventListener("click", function (event) {

        event.stopPropagation();

        toggleMenu();

    });

}


/* =====================================
   MOBILE LOCATIONS DROPDOWN
===================================== */

if (locationMenu && dropdown) {

    locationMenu.addEventListener("click", function (event) {

        if (window.innerWidth <= 768) {

            event.preventDefault();

            event.stopPropagation();

            dropdown.classList.toggle("active");

        }

    });

}


/* =====================================
   SHOW LOCATION PHOTOS
===================================== */

function showLocation(location) {

    const selectedLocation = locations[location];

    if (!selectedLocation) {

        console.log("Location not found:", location);

        return;

    }


    /* GET ELEMENTS */

    const locationIcon =
        document.getElementById("locationIcon");

    const locationTitle =
        document.getElementById("locationTitle");

    const locationQuote =
        document.getElementById("locationQuote");

    const gallery =
        document.getElementById("photoGallery");


    /* SAFETY CHECK */

    if (
        !locationIcon ||
        !locationTitle ||
        !locationQuote ||
        !gallery
    ) {

        console.log("Gallery HTML elements not found");

        return;

    }


    /* CHANGE LOCATION DETAILS */

    locationIcon.innerText =
        selectedLocation.icon;

    locationTitle.innerText =
        selectedLocation.title;

    locationQuote.innerText =
        selectedLocation.quote;


    /* CLEAR OLD PHOTOS */

    gallery.innerHTML = "";


    /* ADD NEW PHOTOS */

    selectedLocation.photos.forEach(function (photo) {

        const photoDiv =
            document.createElement("div");

        photoDiv.className =
            "gallery-photo";


        const image =
            document.createElement("img");

        image.src = photo;

        image.alt =
            selectedLocation.title;

        image.loading =
            "lazy";


        image.addEventListener(
            "click",
            function () {

                openImage(photo);

            }
        );


        photoDiv.appendChild(image);

        gallery.appendChild(photoDiv);

    });


    /* CLOSE MOBILE MENU */

    closeMenu();

    if (dropdown) {
        dropdown.classList.remove("active");
    }


    /* SCROLL TO GALLERY */

    setTimeout(function () {

        const gallerySection =
            document.getElementById("gallery");

        if (gallerySection) {

            gallerySection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }, 100);

}


/* =====================================
   EXPLORE MEMORIES BUTTON
===================================== */

function scrollToGallery() {

    const featured =
        document.getElementById("featured");

    if (featured) {

        featured.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* =====================================
   OPEN IMAGE
===================================== */

function openImage(imageSource) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");


    if (!modal || !modalImage) {
        return;
    }


    modal.style.display = "flex";

    modalImage.src = imageSource;

    document.body.style.overflow = "hidden";

}


/* =====================================
   CLOSE IMAGE
===================================== */

function closeImage() {

    const modal =
        document.getElementById("imageModal");


    if (modal) {

        modal.style.display = "none";

    }


    document.body.style.overflow = "auto";

}


/* =====================================
   CLOSE MODAL OUTSIDE CLICK
===================================== */

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("imageModal");


    if (
        modal &&
        event.target === modal
    ) {

        closeImage();

    }

});


/* =====================================
   CLOSE WITH ESC
===================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeImage();

    }

});


/* =====================================
   CLOSE MENU OUTSIDE CLICK
===================================== */

document.addEventListener("click", function (event) {

    const navbar =
        document.querySelector(".navbar");


    if (
        window.innerWidth <= 768 &&
        navbar &&
        !navbar.contains(event.target)
    ) {

        closeMenu();

        if (dropdown) {
            dropdown.classList.remove("active");
        }

    }

});


/* =====================================
   RESET DESKTOP MENU
===================================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        closeMenu();

        if (dropdown) {
            dropdown.classList.remove("active");
        }

    }

});


