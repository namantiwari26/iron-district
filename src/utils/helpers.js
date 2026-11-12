/**
 * Split a string into word/char spans for GSAP text animations
 */
export function splitToLines(text) {
  return text.split(" ").map((word, i) => (
    `<span class="word-wrap" key="${i}"><span class="word">${word}</span></span> `
  )).join("");
}

export function splitToChars(text) {
  return text.split("").map((char, i) => (
    `<span class="char" style="display:inline-block" key="${i}">${char === " " ? "&nbsp;" : char}</span>`
  )).join("");
}

/**
 * Clamp a number between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map a value from one range to another
 */
export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

