class Store {
  constructor () {
    this.state = {
      qsort: []
    }
  }

  observe (o) {
    if (this.observer) {
      console.log('multiple observers not supported')
    }
    this.observer = o
    this.emitChange()
  }

  emitChange () {
    this.observer()
  }

  qsort = (a) => {
    if (a.length <= 1) {
      this.emitChange()
      return a
    }

    const left = []
    const right = []
    const pivot = a[0]

    a.forEach((item, index) => {
      if (index !== 0) {
        (item < pivot) ? left.push(item) : right.push(item)
      }
    })

    this.state.qsort.push({a, left, right})

    return this.qsort(left).concat(pivot, this.qsort(right))
  }

  quickSort = () => {
    this.state.qsort = []
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.qsort(this.shuffle(arr))
  }

  shuffle (array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }
}

function createStore () {
  let store
  if (store) {
    return store
  }
  store = new Store()
  return store
}

export default createStore
