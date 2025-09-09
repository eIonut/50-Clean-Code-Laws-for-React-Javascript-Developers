/* BEFORE 

const calculateArea = (radius) =>  3.14159 * radius * radius;   // used here

const calculateCircumference = (radius) => 2 * 3.14159 * radius;        // and here

*/

/* AFTER */

const PI = Math.PI; // or 3.14159

const calculateArea = (radius) => PI * radius * radius;
const calculateCircumference = (radius) => 2 * PI * radius;
