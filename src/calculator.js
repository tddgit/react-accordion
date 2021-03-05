// @ts-check
/**
 * Student Name
 * @type {string}
 */

const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<number|boolean>}
 */
const grades = [98, 97.7, 76, 89, true];

/**
 *
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1,
    text: 'Hello',
    test: 1,
};
/**
 * Calculate tax
 * @param amount - Total amount
 * @param tax - Tax percentage
 * @returns {string}  - Total with a dollar sign
 */
const calculateTax = (amount, tax) => `$${amount} + ${tax * amount}`;

/**
 * A Student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student status
 * */

/**
 * @type {Student}
 */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20,
};
