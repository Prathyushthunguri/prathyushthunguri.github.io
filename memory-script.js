const memoryImages = {
    Cooking: [
        { src: "img/memories/Cooking/Cooking-1.jpeg", caption: "French Toast" },
        { src: "img/memories/Cooking/Cooking-2.jpeg", caption: "Sambar" },
        { src: "img/memories/Cooking/Cooking-3.jpeg", caption: "Chicken" },
        { src: "img/memories/Cooking/Cooking-4.jpeg", caption: "Dosa + Chicken" },
        { src: "img/memories/Cooking/Cooking-5.jpeg", caption: "Lemon Rice + Chicken" },
        { src: "img/memories/Cooking/Cooking-6.jpeg", caption: "Paratha + Chicken" },
        { src: "img/memories/Cooking/Cooking-7.jpeg", caption: "Veg Biryani" },
        { src: "img/memories/Cooking/Cooking-8.jpeg", caption: "Veg Noodels" },
        { src: "img/memories/Cooking/Cooking-9.jpeg", caption: "Lady's Finger" },
        { src: "img/memories/Cooking/Cooking-10.jpeg", caption: "Mango Dal" },
        { src: "img/memories/Cooking/Cooking-11.jpeg", caption: "Dal + Boiled Egg curry" },
        { src: "img/memories/Cooking/Cooking-12.jpeg", caption: "Onion Pakoda" },
        { src: "img/memories/Cooking/Cooking-13.jpeg", caption: "Panner Masala" },
        { src: "img/memories/Cooking/Cooking-14.jpeg", caption: "Fish Curry" },
        { src: "img/memories/Cooking/Cooking-15.jpeg", caption: "Chicken Biryani" }
    ],
    trips: [
        { src: "images/trip1.jpg", caption: "Beach sunset" },
        { src: "images/trip2.jpg", caption: "Mountain hike" },
        { src: "images/trip3.jpg", caption: "City lights at night" }
    ],
    Comicon: [
        { src: "img/memories/Comicon/Comicon-2.jpg", caption: "Marvel" },
        { src: "img/memories/Comicon/Comicon-3.jpg", caption: "Spiderman" },
        { src: "img/memories/Comicon/Comicon-4.jpg", caption: "Jujutsu Kaisen + Spiderman" },
        { src: "img/memories/Comicon/Comicon-5.jpg", caption: "Jujutsu Kaisen" },
        { src: "img/memories/Comicon/Comicon-6.jpg", caption: "Akatsuki" },
        { src: "img/memories/Comicon/Comicon-7.jpg", caption: "Demon Slayer" },
        { src: "img/memories/Comicon/Comicon-8.jpg", caption: "Demon Slayer" },
        { src: "img/memories/Comicon/Comicon-9.jpg", caption: "Pokemon" },
        { src: "img/memories/Comicon/Comicon-10.jpg", caption: "Me" },

    ]
};

function openLightbox(category) {
    const lightbox = document.getElementById("lightbox");
    const lightboxContent = document.getElementById("lightbox-content");

    // Clear existing images
    lightboxContent.innerHTML = "";

    // Populate grid with images and captions
    memoryImages[category].forEach(item => {
        const container = document.createElement("div");
        container.classList.add("lightbox-item");

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = category;

        const caption = document.createElement("p");
        caption.textContent = item.caption;

        container.appendChild(img);
        container.appendChild(caption);
        lightboxContent.appendChild(container);
    });

    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
