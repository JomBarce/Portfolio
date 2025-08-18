const PI = Math.PI;
const DEG_TO_RAD = PI / 180;
const RAD_TO_DEG = 180 / PI;

const clamp = (value, min, max) => {
    return Math.max(min, Math.min(max, value));
};

const lerp = (min, max, amount) => {
	return min + amount * (max - min);
};

const mod = (value, modulus) => {
    return ((value % modulus) + modulus) % modulus;
};

const random = (min, max) => {
    return Math.random() * (max - min) + min;
};

export {
    PI,
    DEG_TO_RAD,
    RAD_TO_DEG,
    clamp,
    lerp,
    mod,
    random
};