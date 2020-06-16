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

export const alph = arr => arr.sort(compareKey('name'))
export const revAlph = arr => arr.sort(compareKey('name')).reverse()
export const lowPrice = arr => arr.sort((a, b) => +a.price - +b.price)
export const highPrice = arr => arr.sort((a, b) => +b.price - +a.price)

