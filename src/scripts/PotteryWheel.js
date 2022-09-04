let primaryKey = 1

export const makePottery = (shape, weight, height) => {
  let potteryPiece = {
        id: primaryKey,
        shape: shape,
        height: height,
        weight: weight,
    }
    primaryKey += 1 //same thing as saying primaryKey = primaryKey +1
    return potteryPiece
}
