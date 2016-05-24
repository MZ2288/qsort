import React, {Component, PropTypes} from 'react'

export default class App extends Component {

  static propTypes = {
    qsort: PropTypes.array.isRequired
  }

  renderArray = (a, side = false) => {
    return a.map((num, i) => {
      const classes = 'item ' + ((!side && i === 0) ? 'first' : '')
      return (
        <div key={i} className={classes}>
          <div className='number'>{num}</div>
        </div>
      )
    })
  }

  renderSides = (l, r) => {
    return (
      <div>
        <div className='side'>{this.renderArray(l, true)}</div>
        <div className='side'>{this.renderArray(r, true)}</div>
      </div>
    )
  }

  renderQsort = (qsort) => {
    return qsort.map((q, i) => {
      return (
        <div key={i} className='qsort'>
          <span className='qsort-array'>
            {this.renderArray(q.a)}
          </span>
          <span className='qsort-sides'>
            {this.renderSides(q.left, q.right)}
          </span>
        </div>
      )
    })
  }

  renderHeader (quickSort) {
    return (
      <div className='header'>
        <h2>QuickSort Visualizer App</h2>
        <pre className='code'>{`
          function qsort(a) {
            if (a.length <= 1) {
              return a
            }

            const left = [], right = [], pivot = a[0]

            a.forEach((item, index) => {
              if (index !== 0) {
                (item < pivot) ? left.push(item) : right.push(item)
              }
            })

            return this.qsort(left).concat(pivot, this.qsort(right))
          }
        `}</pre>
        <button onClick={quickSort}>Quicksort</button>
      </div>
    )
  }

  render () {
    const {qsort, quickSort} = this.props
    return (
      <div>
        {this.renderHeader(quickSort)}
        {this.renderQsort(qsort)}
      </div>
    )
  }
}
