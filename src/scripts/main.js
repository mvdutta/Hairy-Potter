// Imports go first

import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 3)
let platter = makePottery("platter", 2, 4)
let vase = makePottery("vase", 3, 4)
let bowl = makePottery("bowl", 5, 6)
let catShape = makePottery("catShape", 2, 4)
// console.log(mug)
// console.log(platter)
// console.log(catShape)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2265)
let firedPlatter = firePottery(platter, 2000)
let firedVase = firePottery(vase, 1995)
let firedBowl = firePottery(bowl, 2400)
let firedCatShape = firePottery(catShape, 1500)
console.log(firedMug)
console.log(firedCatShape)
console.log(firedBowl)



// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



