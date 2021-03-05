// @ts-check

const { add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.jsx is the root file fo this example app
 * @author Stas
 * @see <a href="https://google.com">Stas</a>
 */

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
    isActive: true,
};

class Person {
    /**
     *
     * @param {Object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {number} age Persons age
         */
        this.age = personInfo.name;

        /**
         * @property {function} greet A greeting for person
         */
    }

    greet() {
        console.log(`Hello my name is ${this.name} and age is ${this.age}`);
    }
}

/**
 * Person one
 * See {@link Person}
 * @type {Person}
 */
const person1 = new Person({
    name: 'John Doe',
    age: 30,
});
