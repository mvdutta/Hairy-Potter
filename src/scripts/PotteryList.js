import { usePottery } from "./PotteryCatalog.js"

export const PotteryList = () => {
    let catalog = usePottery() //now we have our own copy of the catalog to use, which is an array of objects
    let HTMLString = ''
    for (let item of catalog) {
        let itemsHTML= 
        `<section class="pottery" id="pottery--${item.id}">
        <h2 class="pottery__shape">${item.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${item.weight} grams and is ${item.height} cm in height
        </div>
        <div class="pottery__price">Price is $${item.price}</div>
        </section>`
        HTMLString += itemsHTML
    }
    return HTMLString
}