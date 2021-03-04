const generateText = (name, age) => `${name} (${age} years old)`; // Returns output text

const createElement = (type, text, className) => {
    // Creates a new HTML element and returns it
    const newElement = document.createElement(type);
    newElement.classList.add(className);
    newElement.textContent = text;
    return newElement;
};

const validateInput = (text, notEmpty, isNumber) => {
    // Validate user input with two pre-defined rules
    if (!text) {
        return false;
    }
    if (notEmpty && text.trim().length === 0) {
        return false;
    }
    if (isNumber && text.isNaN) {
        return false;
    }
    return true;
};

const checkAndGenerate = (name, age) => {
    if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
        return false;
    }
    return generateText(name, age);
};

module.exports = {
    generateText,
    createElement,
    validateInput,
    checkAndGenerate,
};
