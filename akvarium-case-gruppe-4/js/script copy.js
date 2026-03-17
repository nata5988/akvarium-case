"use strict";

// Opbygger vores data-strukturer med med et Array som indeholder JS objekter
const fishInfo = [
   {
      className: "nemo",
      info: "Klovnfisk. Mit navn er nemo, jeg er 15 år gammel og kan findes i Stillehavet, det Indiske Ocean og the Great Barrier Reef i Australien. Jeg spiser både Plankton, Alger, Fiske-larver og æg. Jeg bor i den samme havanemone hele mit liv"
      
   },
   
   {
      className: "blob",
      info: "Blå Chromis fisk. Hej jeg hedder Blob. Jeg bliver ca. 13 år gammel. Jeg lever i det østlige Indiske ocean. Når solen rammer mig skinner jeg som en stjerne. Jeg spiser både Plankton, Alger og mini-rejer. Jeg bliver ca. 7-10 cm lang"

   },

   {
      className: "dory",
      info:"Paletkirurgfisk. Hej jeg hedder DoryJeg bliver ca. 10-20 år gammel. Jeg lever i Stillehavet og det Indiske Ocean, blandt andet ved Great Barrier Reef i Australien. Jeg spiser plankton, små dyr i vandet og alger.Jeg bor ved et koralrev, hvor jeg svømmer rundt mellem korallerne og finder mad."
   },
   {
      className: "palle",
      info:"Pudsefisk. Hej jeg hedder Palle Pudsefisk Jeg bliver ca. 4-6 år gammelJeg lever i Stillehavet og Det Indiske OceanJeg spiser parasitter, dødt hud og små dyr, som sidder på andre fiskJeg bor ved en “rengøringsstation” på koralrevet, hvor andre fisk kommer for at blive gjort rene"
   }
];


// Venter med at kører JS koden indtil hele HTML-siden er indlæst
document.addEventListener("DOMContentLoaded", () => {

   // finder tooltip id og gemmer det i en variabel
   const tooltip = document.getElementById("tooltip");

// Funktion der viser tooltip med biloplysninger
   // Parameter: html = den tekst indeholdende html-tags som vi vil vise i tooltip'en
   function showTooltip(html) {
      // Tjekker om tooltip-elementet eksisterer i DOM'en
      if (tooltip) {
         // Indsætter teksten i tooltip'en
         tooltip.innerHTML = html;
         // Gør tooltip'en synlig med css klassen
         tooltip.classList.add("is-visible");

         // Sætter en timer til at skjule tooltip'en efter 8 sekunder
         setTimeout( function() {
            // Fjerner css klassen så tooltip'en skjules igen
            tooltip.classList.remove("is-visible");
         },8000);
      }
   }

   // Gennemløber alle bil-objekter i carInfo array'et
   carInfo.forEach((car) => {
      // Finder alle HTML-elementer med den aktuelle bils className
      document.querySelectorAll("." + car.className).forEach((elem) => {
            // Tilføjer mouseover event listener til hvert element
            elem.addEventListener("mouseover", () => {
               // Opretter HTML-strengen med bilens detaljer
               const carDetails = `

               <strong>${car.carBrand}</strong><br>
               Model: ${car.carModel}<br>
               Release Year: ${car.releaseYear}<br>
               Color: ${car.color}<br>
               Fuel Type: ${car.fuelType}
               `;
               // Kalder showTooltip funktionen med bilens detaljer
               showTooltip(carDetails);
            });

      });
   });

   // Hent DOM Elementer 
   const getRedCar = document.getElementById("redCar");
   const getPoliceCar = document.getElementById("policeCar");
   const getBlueCar = document.getElementById("blueCar");
   const sun = document.querySelector(".sun");
   const scene = document.querySelector(".scene");


   // Opretter lydObjekter
   const soundRedCar = new Audio();
   soundRedCar.src = "../sound/red-car-horn.wav";
   const soundPoliceCar = new Audio();
   soundPoliceCar.src = "../sound/police-car-sound.wav";
   const soundBlueCar = new Audio();
   soundBlueCar.src = "../sound/blue-car-sound.wav";

   // Tjekker om getRedCar-elementet eksisterer i DOM'en
   if (getRedCar) {
      // Tilføjer click event listener til getRedCar-elementet
      getRedCar.addEventListener("click", () => {
         // Afspiller lyden soundRedCar
         soundRedCar.play();
      });
   }

   // Tjekker om getRedCar-elementet eksisterer i DOM'en
   if (getBlueCar) {
      // Tilføjer click event listener til getBlueCar-elementet
      getBlueCar.addEventListener("click", () => {
         // Afspiller lyden soundBlueCar
         soundBlueCar.play();
      });
   }

   // Tjekker om getRedCar-elementet eksisterer i DOM'en
   if (getPoliceCar) {
      // Tilføjer click event listener til getPoliceCar-elementet
      getPoliceCar.addEventListener("click", () => {
         // Afspiller lyden soundPoliceCar
         soundPoliceCar.play();
      });
   }
   
   // Tjekker om getRedCar-elementet eksisterer i DOM'en
   if (sun && scene) {
      // Tilføjer click event listener til sun-elementet
      sun.addEventListener("click", () => {
         // Tilføjer class-listen "night" til scene-elemente som man kan toggle mellem.
         scene.classList.toggle("night");
      });
   }
});
