/* =====================================
   LOCATION PHOTOS DATA
===================================== */

const locations = {


    college: {

        icon: "🎓",

        title: "College Memories",

        quote:
            "Where our friendship started and beautiful memories were created ❤️",

        photos: [

            "image/clg.jpeg",
            
            "image/clg2.jpeg",
           "image/clg3.jpeg",
           "image/clg4.jpeg",
           "image/clg7.jpeg",
           "image/clg8.jpeg",

        ]

    },


    kanchi: {

        icon: "🛕",

        title: "Kanchipuram Memories",

        quote:
            "Beautiful places become more beautiful with crazy friends ❤️",

        photos: [

            "image/kanchi.jpeg",
            "image/kanchi2.jpeg",
            
            "image/kanchi4.jpeg"

        ]

    },


    river: {

        icon: "🌊",

        title: "River Trip Memories",

        quote:
            "Adventure, water, laughter and unforgettable moments 🌊❤️",

        photos: [

            "image/trip.jpeg",
            "image/trip2.jpeg",
            
            "image/trip4.jpeg"

        ]

    },


    tirumala: {

        icon: "🙏",

        title: "Tirumala Memories",

        quote:
            "Blessed moments and beautiful memories together 🙏❤️",

        photos: [
            "image/tpty.jpeg",
            "image/tpty1.jpeg",
            "image/tpty2.jpeg",
            "image/tpty6.jpeg"
            

        ]

    },


    shivalayam: {

        icon: "🛕",

        title: "Shivalayam Memories",

        quote:
            "Peaceful moments shared with beautiful friends ❤️",

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

        quote:
            "The best memories are the ones we create together ❤️♾️",

        photos: [

            "image/both.jpeg",
            "image/both2.jpeg",
            
            "image/both4.jpeg"

        ]

    },


    bangalore: {

        icon: "🌆",

        title: "Bangalore Memories",

        quote:
            "Another city, another adventure, same crazy friends 😎❤️",

        photos: [

           
            "image/bgl2.jpeg"
            

        ]

    }

};


/* =====================================
   SHOW LOCATION
===================================== */

function showLocation(location) {


    const selectedLocation =
        locations[location];


    if (!selectedLocation) {

        return;

    }


    /* Change Icon */

    document
        .getElementById("locationIcon")
        .innerText =
        selectedLocation.icon;


    /* Change Title */

    document
        .getElementById("locationTitle")
        .innerText =
        selectedLocation.title;


    /* Change Quote */

    document
        .getElementById("locationQuote")
        .innerText =
        selectedLocation.quote;


    /* Gallery */

    const gallery =
        document.getElementById(
            "photoGallery"
        );


    /* Clear Old Photos */

    gallery.innerHTML =
        "";


    /* Add New Photos */

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


    /* Scroll To Gallery */

    document
        .getElementById("gallery")
        .scrollIntoView({

            behavior:
                "smooth"

        });

}



/* =====================================
   EXPLORE MEMORIES BUTTON
===================================== */

function scrollToGallery() {


    document
        .getElementById("featured")
        .scrollIntoView({

            behavior:
                "smooth"

        });

}



/* =====================================
   OPEN IMAGE
===================================== */

function openImage(imageSource) {


    const modal =
        document.getElementById(
            "imageModal"
        );


    const modalImage =
        document.getElementById(
            "modalImage"
        );


    modal.style.display =
        "flex";


    modalImage.src =
        imageSource;

}



/* =====================================
   CLOSE IMAGE
===================================== */

function closeImage() {


    document
        .getElementById(
            "imageModal"
        )
        .style.display =
        "none";

}



/* =====================================
   CLOSE OUTSIDE
===================================== */

window.addEventListener(
    "click",

    function(event) {


        const modal =
            document.getElementById(
                "imageModal"
            );


        if (
            event.target === modal
        ) {

            closeImage();

        }


    }

);



/* =====================================
   CLOSE WITH ESC
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