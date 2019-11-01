const imagesToLoad = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgOberserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgOberserver.unobserve(entry.target);
        }
    })
}, imgOptions);

imagesToLoad.forEach(image => {
    imgObserver.observe(image);
});


// get modified date
var modifiedDate = "";
modifiedDate = document.lastModified;
document.getElementById("currentYear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = "Last Modified: " + modifiedDate;
document.getElementById("lastModified").style.fontSize = ".85em";
document.getElementById("lastModified").style.color = "#000000";