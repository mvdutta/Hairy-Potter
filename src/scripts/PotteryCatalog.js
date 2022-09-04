let potteryCatalog = [] //array of items to be sold

export const toSellOrNotToSell = (potteryObj) => {
    let potteryObjectCopy = { ...potteryObj } //spead operator
    if (potteryObjectCopy.cracked === false) {
        if (potteryObjectCopy.weight >= 6) {
            potteryObjectCopy.price = 40
        } 
        if (potteryObjectCopy.weight < 6) {
            potteryObjectCopy.price = 20
        }
        potteryCatalog.push(potteryObjectCopy) //use .push b/c potteryCatalog is an array
    }
    return potteryObjectCopy
}

export const usePottery = () => {
    let potteryCatalogCopy = [] //define an empty array to store a copy of the potteryCatalog
    for (let item of potteryCatalog) { //loop through the potteryCatalog array
        let itemCopy = { ...item } //use spread operator to make a copy of the objects
        potteryCatalogCopy.push(itemCopy) //push the copy of each item to the empty array
    }
    return potteryCatalogCopy
}

