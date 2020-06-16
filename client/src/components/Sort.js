const compareKey = key => 
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

export const AZ = arr => arr.sort(compareKey('name'))
export const ZA = arr => arr.sort(compareKey('name')).reverse()
export const lowerstFirst = arr => arr.sort((a, b) => +a.price - +b.price)
export const highestFirst = arr => arr.sort((a, b) => +b.price - +a.price)