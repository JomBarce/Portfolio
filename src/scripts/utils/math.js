const PI = Math.PI;
const DEG_TO_RAD = PI / 180;
const RAD_TO_DEG = 180 / PI;

// Clamps a value between a minimum and maximum.
const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
};

// Linearly interpolates between two values based on the amount (0 to 1).
const lerp = (min, max, amount) => {
    return min + amount * (max - min);
};

// Modulo that always returns a positive result.
const mod = (value, modulus) => {
    return ((value % modulus) + modulus) % modulus;
};

// Raises a value to the given exponent.
const power = (value, exponent) => {
    return Math.pow(value, exponent);
};

// Raises a random number (between 0 and 1) to the given exponent.
const powerRandom = (exponent) => {
    return Math.pow(Math.random(), exponent);
};

// Returns a random number between min (inclusive) and max (exclusive).
const rangeRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

// Returns a random integer between min (inclusive) and max (exclusive).
const rangeRandomFloor = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

// Rounds a number down to the nearest integer
const floorValue = (value) => {
    return Math.floor(value);
};

// Random number between 0 and the given value
const randomFloor = (value) => {
    return Math.floor(Math.random() * value);
};

export {
    PI,
    DEG_TO_RAD,
    RAD_TO_DEG,
    clamp,
    lerp,
    mod,
    power,
    powerRandom,
    rangeRandom,
    rangeRandomFloor,
    floorValue,
    randomFloor
};
