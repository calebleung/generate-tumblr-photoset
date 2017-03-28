var lightboxPhotoset = [];

var lightboxImages = document.getElementsByClassName('zetlightbox');

function populateLightbox(img) {
    var lightboxImage = {
    
    "width" : img.naturalWidth,
    "height" : img.naturalHeight,
    "low_res" : img.src,
    "high_res" : img.src,
    //"caption" : img.title,
    
    };
    
    lightboxPhotoset.push( lightboxImage );
}

function linkImages(img, index) {
    img.setAttribute("onClick", "Tumblr.Lightbox.init( lightboxPhotoset, " + (index + 1) + " );");
    img.setAttribute("style", "cursor:pointer;");
}

for (var i = 0; i < lightboxImages.length; i++) {
    populateLightbox( lightboxImages[i] );
    linkImages( lightboxImages[i], i );
}
