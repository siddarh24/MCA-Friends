/* =====================================
   IMAGE MODAL
===================================== */

function openImage(imageSource) {

    const modal =
        document.getElementById("imageModal");

    const modalImage =
        document.getElementById("modalImage");


    if (!modal || !modalImage) {

        return;

    }


    modal.style.display =
        "flex";


    modalImage.src =
        imageSource;

}



/* =====================================
   CLOSE IMAGE
===================================== */

function closeImage() {

    const modal =
        document.getElementById("imageModal");


    if (!modal) {

        return;

    }


    modal.style.display =
        "none";

}



/* =====================================
   CLOSE MODAL OUTSIDE CLICK
===================================== */

window.addEventListener(
    "click",

    function(event) {

        const modal =
            document.getElementById(
                "imageModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeImage();

        }

    }
);



/* =====================================
   CLOSE MODAL WITH ESC KEY
===================================== */

document.addEventListener(
    "keydown",

    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeImage();

        }

    }
);



/* =====================================
   EXPLORE MEMORIES BUTTON
===================================== */

function scrollToGallery() {

    const gallery =
        document.getElementById(
            "featured"
        );


    if (gallery) {

        gallery.scrollIntoView({

            behavior: "smooth"

        });

    }

}



/* =====================================
   SHOW LOCATION
   OLD SYSTEM SUPPORT
===================================== */

function showLocation(location) {

    /*
        Ee function old pages kosam.

        Kotha homepage lo direct links
        use chestunnam.

        Future lo dynamic gallery
        add cheyyali ante ee function
        use cheyochu.
    */

    const selectedLocation =
        locations[location];


    if (!selectedLocation) {

        return;

    }


    const title =
        document.getElementById(
            "locationTitle"
        );


    const quote =
        document.getElementById(
            "locationQuote"
        );


    const gallery =
        document.getElementById(
            "photoGallery"
        );


    if (
        !title ||
        !quote ||
        !gallery
    ) {

        return;

    }


    title.innerText =
        selectedLocation.title;


    quote.innerText =
        selectedLocation.quote;


    gallery.innerHTML =
        "";


    selectedLocation.photos.forEach(
        function(photo) {


            const photoDiv =
                document.createElement(
                    "div"
                );


            photoDiv.classList.add(
                "gallery-photo"
            );


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                photo;


            image.alt =
                selectedLocation.title;


            image.loading =
                "lazy";


            image.onclick =
                function() {

                    openImage(photo);

                };


            photoDiv.appendChild(
                image
            );


            gallery.appendChild(
                photoDiv
            );

        }
    );


    const gallerySection =
        document.getElementById(
            "gallery"
        );


    if (gallerySection) {

        gallerySection.scrollIntoView({

            behavior: "smooth"

        });

    }

}



/* =====================================
   LOCATION PHOTOS DATA
===================================== */

const locations = {


    hyderabad: {

        title:
            "🎓 College Memories",

        quote:
            "Beautiful days, crazy friends and unforgettable college memories ❤️",

        photos: [

            "images/hyderabad/hyd1.jpg",

            "images/hyderabad/hyd2.jpg",

            "images/hyderabad/hyd3.jpg",

            "images/hyderabad/hyd4.jpg"

        ]

    },


    goa: {

        title:
            "🛕 Kanchipuram Memories",

        quote:
            "Beautiful places become more beautiful with crazy friends ❤️",

        photos: [

            "images/goa/goa1.jpg",

            "images/goa/goa2.jpg",

            "images/goa/goa3.jpg",

            "images/goa/goa4.jpg"

        ]

    },


    bangalore: {

        title:
            "🌆 Bangalore Memories",

        quote:
            "Another city, another adventure, same crazy friends 😎",

        photos: [

            "images/bangalore/blr1.jpg",

            "images/bangalore/blr2.jpg",

            "images/bangalore/blr3.jpg",

            "images/bangalore/blr4.jpg"

        ]

    }

};