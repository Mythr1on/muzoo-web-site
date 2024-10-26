let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlide ? 'block' : 'none';
    });
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Initialize the slider by showing the first slide
showSlide(currentSlide);


// INFO POPUP

function info_popup(){
    window.alert('Um som estridente é um som que causa ruidos agudos e penetrantes.')
}

function info_popup2(){
    window.alert('Aves de rapina são aves predadoras conhecidas por suas habilidades excepcionais de caça. Elas possuem características distintas que as tornam eficientes caçadoras, como garras afiadas e curvadas para agarrar e matar suas presas, bicos fortes e pontiagudos para despedaçar a carne, e uma visão aguçada para localizar suas presas a grandes distâncias. Entre as principais famílias de aves de rapina estão as falconídeos (falcos e falcões), os accipitrídeos (águias, gaviões e milhafres) e os buteonídeos (buzzards e gaviões). Essas aves desempenham um papel importante no equilíbrio ecológico, controlando populações de pequenos mamíferos, aves e insetos.')
}
