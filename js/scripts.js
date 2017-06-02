// Scripts
// Store Banner Images
var img0 = 'img/img1';
var img1 = 'img/img2';
var img2 = 'img/img3';

// Random Number Generator
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

//// Swap Out Banner
//$('header img').attr('src', eval('img' + randNum) );

// Lightgallery
$('figure').lightGallery({
    selector: 'a', 
    mode: 'lg-lollipop',
    thumbnail: true
});

// Random Background
$('body').addClass( 'bg' + randNum );