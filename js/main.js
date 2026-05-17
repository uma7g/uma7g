/* ============================================================
   PORTFOLIO — Main JavaScript
   Author: Umang Pandya
   ============================================================ */

/**
 * 3D Model Rotator
 * Cycles through GLB models in the hero model-viewer every 6 seconds.
 * Place your .glb files in the /models/ folder and list them here.
 */

// Disable Right Click + Copy
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("copy", e => e.preventDefault());

// 3D MODEL ROTATOR

const models = [
  "assets/models/magic_frog.glb",
  "assets/models/character1.glb",
  "assets/models/character.glb"
];

let currentModel = 0;

setInterval(() => {

  currentModel++;

  if (currentModel >= models.length) {
    currentModel = 0;
  }

  document
    .getElementById("heroCharacter")
    .setAttribute("src", models[currentModel]);

}, 12000);

// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";

});

