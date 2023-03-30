import { Splide } from "@splidejs/splide";

var splide = new Splide( '#main-carousel', {
    pagination: false,
  } );
  
  splide.mount();


  // Collects LI elements:
var thumbnails = document.getElementsByClassName( 'thumbnail' );

for ( var i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

// The function to initialize each thumbnail.
function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    // move the carousel
  } );
}