// Imports go first

import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";
import { makePottery } from "./PotteryWheel.js";



// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 1, 3)
let platter = makePottery("Platter", 2, 4)
let vase = makePottery("Vase", 3, 4)
let bowl = makePottery("Bowl", 5, 6)
let catShape = makePottery("Cat", 7, 2)
// console.log(mug)
// console.log(platter)
// console.log(catShape)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2265)
let firedPlatter = firePottery(platter, 2500)
let firedVase = firePottery(vase, 1995)
let firedBowl = firePottery(bowl, 1400)
let firedCatShape = firePottery(catShape, 1500)
// console.log(firedMug)
// console.log(firedCatShape)
// console.log(firedBowl)

// Determine which ones should be sold, and their price
let pricedMug = toSellOrNotToSell(firedMug)
let pricedPlatter = toSellOrNotToSell(firedPlatter)
let pricedVase = toSellOrNotToSell(firedVase)
let pricedBowl = toSellOrNotToSell(firedBowl)
let pricedCatShape = toSellOrNotToSell(firedCatShape)

// console.log(pricedCatShape)

// Invoke the component function that renders the HTML list
let HTMLString = PotteryList()
console.log(HTMLString)

document.querySelector(".potteryList").innerHTML=HTMLString



