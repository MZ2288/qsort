import React, {Component, PropTypes} from 'react'

export default class App extends Component {

  static propTypes = {
    qsort: PropTypes.array.isRequired
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

  renderQsort = (qsort) => {
    return qsort.map((q, i) => {
      return (
        <div key={i} className='qsort'>
          <div className='qsort-array'>
            {this.renderArray(q.a)}
          </div>
          <div className='qsort-sides'>
            <div className='side'>{this.renderArray(q.left, true)}</div>
            <div className='side'>{this.renderArray(q.right, true)}</div>
          </div>
        </div>
      )
    })
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

}
