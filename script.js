// Maak jacket + H groter
document.addEventListener("DOMContentLoaded", function () {
  var baseballJack = document.querySelector(".baseballJack");
  var letterH = document.querySelector(".H");

  baseballJack.addEventListener("click", function () {
    // Toggle de klasse 'enlarged' bij het klikken op de afbeelding
    baseballJack.classList.toggle("enlarged");
    letterH.classList.toggle("enlarged"); // Vergroot de H afbeelding ook
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const baseballJack = document.querySelector('.baseballJack');
  const varsityH = document.querySelector('.H');
  const svgElement = document.getElementById('your-svg');

  function startAnimation() {
    svgElement.classList.add('start-animation'); // Voeg de klasse toe om de animatie te starten
  }

  baseballJack.addEventListener('click', startAnimation);
  varsityH.addEventListener('click', startAnimation);
});









// Voeg schaduw toe aan baseball nadat animatie is gestopt :)
const img = document.querySelector(".baseball");

// Voeg een event listener toe voor de animatie-einde
img.addEventListener("animationend", () => {
  img.classList.add("still"); // Voeg de klasse toe als de animatie eindigt
});

const video = document.getElementById('myVideo');
const hoverArea = document.querySelector('.hover-area');

// Zet autoplay één keer uit nadat de video is afgespeeld
video.addEventListener('ended', function() {
    video.pause(); // Zet de video op pauze als deze klaar is
});

// Start de video opnieuw wanneer je over de hover-area gaat
hoverArea.addEventListener('mouseover', function() {
    video.currentTime = 0; // Zet de tijd van de video terug naar het begin
    video.play(); // Speel de video opnieuw af
});

// Stop de video wanneer de muis de hover-area verlaat
hoverArea.addEventListener('mouseleave', function() {
    video.pause(); // Zet de video op pauze als de muis het hover-gebied verlaat
});




//kenmerken
const blokletters = document.querySelector('.blokletters');
const achternaam = document.querySelector('.achternaam');


blokletters.addEventListener('mouseenter', () => {
achternaam.style.fontVariationSettings = '"XOPQ" 900, "XTRA" 100, "OPSZ" 16, "GRAD" 20, "YTRA" 750, "CNTR" 0, "YOPQ" 800, "SERF" 0, "YTAS" 0, "YTLC" 650, "YTDE" 2.4, "SELE" -20'; // Terug naar standaard instellingen
});


blokletters.addEventListener('mouseleave', () => {
achternaam.style.fontVariationSettings = "'XOPQ' 661.09, 'XTRA' 367.73, 'OPSZ' 13.69, 'GRAD' 0, 'YTRA' 750, 'CNTR' 0, 'YOPQ' 100, 'SERF' 0, 'YTAS' 0, 'YTLC' 650, 'YTDE' 0, 'SELE' 0"; // Terug naar standaard instellingen
});



// Selecteer de geometrisch span en het getal
const geometrisch = document.querySelector('.geometrisch');
const numberText = document.querySelector('.number-text'); // Selecteer de tekst met beide getallen

// Voeg een hover event listener toe
geometrisch.addEventListener('mouseenter', () => {
numberText.style.transform = 'rotate(180deg)'; // Draai de "86" 180 graden
numberText.style.transition = 'transform 0.5s ease'; // Maak de overgang soepel
});

geometrisch.addEventListener('mouseleave', () => {
numberText.style.transform = 'rotate(0deg)'; // Draai terug naar 0 graden
});




// Selecteer de benodigde elementen
const smallText = document.querySelector('.smallText');


// Voeg event listeners toe voor mouseenter en mouseleave
smallText.addEventListener('mouseenter', () => {
achternaam.style.fontFamily = "Egyptienne", "Roboto Slab", "Courier New", 'serif'; 
achternaam.style.textTransform = 'none';
});

smallText.addEventListener('mouseleave', () => {
achternaam.style.fontFamily = '"Graduate", "Roboto Slab", "Courier New", serif'; // Verander het lettertype // Of stel dit in op je standaard lettertype
achternaam.style.textTransform = 'uppercase';
});





const duidelijkheid = document.querySelector('.duidelijkheid');
const shirtSVGs = document.querySelectorAll('.shirt article svg'); // Selecteer alle SVG's in het shirt artikel

duidelijkheid.addEventListener('mouseenter', () => {
shirtSVGs.forEach(svg => {
  svg.style.transform = 'translateX(-50%) scale(1.1)'; // Schaal de SVG met 10%
});
});

duidelijkheid.addEventListener('mouseleave', () => {
shirtSVGs.forEach(svg => {
  svg.style.transform = 'translateX(-50%) scale(1)'; // Zet de schaal terug naar normaal
});
});



const bordersSpan = document.querySelector('.borders');
const borderSvg = document.querySelector('.border-svg');

// Voeg event listeners toe voor mouseenter en mouseleave
bordersSpan.addEventListener('mouseenter', () => {
borderSvg.style.opacity = '1'; // Maak de border-svg zichtbaar
});

bordersSpan.addEventListener('mouseleave', () => {
borderSvg.style.opacity = '0'; // Maak de border-svg onzichtbaar
});




// Selecteer het branding element en de hva afbeeldingen
const brandingElement = document.querySelector('.branding');
const hvaImages = document.querySelectorAll('.hva');

// Voeg de event listener toe voor het hover event
brandingElement.addEventListener('mouseenter', () => {
hvaImages.forEach((image) => {
image.style.opacity = '1'; // Maak de afbeeldingen zichtbaar
image.style.pointerEvents = 'auto'; // Zorg dat ze klikbaar worden
});
});

// Voeg de event listener toe voor het verlaten van hover
brandingElement.addEventListener('mouseleave', () => {
hvaImages.forEach((image) => {
image.style.opacity = '0'; // Verberg de afbeeldingen weer
image.style.pointerEvents = 'none'; // Maak ze niet-klikbaar
});
});



// Select the trigger element
const triggerElement = document.querySelector('.strak');

// Select the SVG that should get the gooey effect
const svgElement = document.querySelector('.second-svg');

// Add hover events
triggerElement.addEventListener('mouseenter', () => {
// Add the gooey effect class on hover
svgElement.classList.add('gooey-effect');
});

triggerElement.addEventListener('mouseleave', () => {
// Remove the gooey effect class when not hovering
svgElement.classList.remove('gooey-effect');
});


const hoofdletters = document.querySelector('.hoofdletters');


hoofdletters.addEventListener('mouseenter', () => {
achternaam.style.fontVariationSettings = "'XOPQ' 661.09, 'XTRA' 367.73, 'OPSZ' 8, 'GRAD' 0, 'YTRA' 750, 'CNTR' 0, 'YOPQ' 100, 'SERF' 0, 'YTAS' 0, 'YTLC' 650, 'YTDE' 0, 'SELE' 0"; // Terug naar standaard instellingen
});


hoofdletters.addEventListener('mouseleave', () => {
achternaam.style.fontVariationSettings = "'XOPQ' 661.09, 'XTRA' 367.73, 'OPSZ' 13.69, 'GRAD' 0, 'YTRA' 750, 'CNTR' 0, 'YOPQ' 100, 'SERF' 0, 'YTAS' 0, 'YTLC' 650, 'YTDE' 0, 'SELE' 0"; // Terug naar standaard instellingen
});




//Charset
const items = document.querySelectorAll('.shootable');

// Verkrijg het detail element
const detail = document.querySelector('.charset-detail span');

// Voeg een click event listener toe aan elk <li> element
items.forEach(item => {
    item.addEventListener('click', () => {
        // Verkrijg de tekst van de geklikte knop
        const selectedChar = item.querySelector('button').innerText;

        // Toon de geselecteerde karakter in het detail element
        detail.innerText = selectedChar;

        // Voeg een actieve klasse toe aan de geklikte knop
        items.forEach(i => i.querySelector('button').classList.remove('active')); // Verwijder actieve klasse van andere knoppen
        item.querySelector('button').classList.add('active'); // Voeg actieve klasse toe aan de geklikte knop
    });
});

function animateCharset(char) {
    const charsetDisplay = document.getElementById('charsetDisplay');
    charsetDisplay.textContent = char; // Update de weergegeven letter
    
    // Reset de animatie
    charsetDisplay.classList.remove('charset-detail--animated');
    
    // Forceer een reflow om de animatie opnieuw te laten starten
    void charsetDisplay.offsetWidth; 

    // Voeg de animatieklasse toe
    charsetDisplay.classList.add('charset-detail--animated');

    // Maak het element zichtbaar
    charsetDisplay.classList.add('charset-detail--visible');
}

// Optioneel: als je wilt dat de animatie ook bij de initiële pagina-load gebeurt
window.onload = function() {
    animateCharset('A'); // Of een andere standaard letter
};