const slides = document.getElementsByClassName("slide");
let startingpoint = 1;
const sliderHandler = (initialval) => {
    if (initialval > slides.length) startingpoint = 1
   else if (initialval < 1) startingpoint = slides.length;
   for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[startingpoint -1].style.display = "block";
}
sliderHandler(startingpoint);
setInterval(() => {
    startingpoint++;
    sliderHandler(startingpoint);
},2000);

