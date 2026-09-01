```javascript


/* =====================================
   LOCATION PHOTOS DATA
===================================== */

const locations = {


    hyderabad: {

        title: "📍 Hyderabad Memories",

        quote: "Beautiful places become more beautiful with crazy friends ❤️",

        photos: [

            "images/hyderabad/hyd1.jpg",
            "images/hyderabad/hyd2.jpg",
            "images/hyderabad/hyd3.jpg",
            "images/hyderabad/hyd4.jpg"

        ]

    },


    goa: {

        title: "🏖️ Goa Memories",

        quote: "Sun, beach, friends and unforgettable memories 🌊❤️",

        photos: [

            "images/goa/goa1.jpg",
            "images/goa/goa2.jpg",
            "images/goa/goa3.jpg",
            "images/goa/goa4.jpg"

        ]

    },


    bangalore: {

        title: "🌆 Bangalore Memories",

        quote: "Another city, another adventure, same crazy friends 😎",

        photos: [

            "images/bangalore/blr1.jpg",
            "images/bangalore/blr2.jpg",
            "images/bangalore/blr3.jpg",
            "images/bangalore/blr4.jpg"

        ]

    }

};


/* =====================================
   SHOW LOCATION PHOTOS
===================================== */

function showLocation(location) {

    event.preventDefault();


    const selectedLocation = locations[location];


    document.getElementById("locationTitle").innerText =
        selectedLocation.title;


    document.getElementById("locationQuote").innerText =
        selectedLocation.quote;


    const gallery =
        document.getElementById("photoGallery");


    gallery.innerHTML = "";


    selectedLocation.photos.forEach(function(photo) {


        const photoDiv =
            document.createElement("div");


        photoDiv.classList.add("gallery-photo");


        const image =
            document.createElement("img");


        image.src = photo;


        image.alt =
            selectedLocation.title;


        image.onclick = function() {

            openImage(photo);

        };


        photoDiv.appendChild(image);


        gallery.appendChild(photoDiv);

    });


    document.getElementById("gallery")
        .scrollIntoView({

            behavior: "smooth"

        });

}



/* =====================================
   OPEN IMAGE FULLSCREEN
===================================== */

function openImage(imageSource) {

    const modal =
        document.getElementById("imageModal");


    const modalImage =
        document.getElementById("modalImage");


    modal.style.display = "flex";


    modalImage.src = imageSource;

}



/* =====================================
   CLOSE IMAGE
===================================== */

function closeImage() {

    document.getElementById("imageModal")
        .style.display = "none";

}



/* =====================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================== */

window.onclick = function(event) {

    const modal =
        document.getElementById("imageModal");


    if (event.target === modal) {

        modal.style.display = "none";

    }

};



/* =====================================
   EXPLORE MEMORIES BUTTON
===================================== */

function scrollToGallery() {

    document.getElementById("gallery")
        .scrollIntoView({

            behavior: "smooth"

        });

}
```
