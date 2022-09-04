export const firePottery = (potteryObj, temp) => {
    let potteryObjectCopy = { ...potteryObj } //making a copy of potteryObj so that the original will not be changed when we make changes and the function will return a new object with the changes on it
    potteryObjectCopy.fired = true
    if (temp > 2200) {
        potteryObjectCopy.cracked = true
    }
    else {
        potteryObjectCopy.cracked = false
    }
    return potteryObjectCopy
}