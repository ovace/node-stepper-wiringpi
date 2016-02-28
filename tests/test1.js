/**
 * Sample for the stepper-wiringpi.js.
 * 
 * Here we are testing a Stepper motor that has 200 steps per revolution
 * which equates to 360/200 = 1.8 degrees per step.
 */

console.log("Starting stepper-wiringpi - test1");

var stepperWiringpi = require("stepper-wiringpi");
var pinIN1 = 5;  // Stepper Red
var pinIN2 = 6;  // Stepper Blue
var pinIN3 = 13 ;// Stepper Green
var pinIN4 = 19; // Stepper Black
stepperWiringPi.setup(200, pinIN1, pinIN2, pinIN3, pinIN4);
stepperWiringPi.step(200);

console.log("Test complete.");