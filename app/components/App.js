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
        <div key={i} className='qsort' style={{padding: '10px 0', borderBottom: '1px solid #efefef'}}>
          <div className='qsort-array'>
            Array to be sorted: {this.renderArray(q.a, 0)}
          </div>
          <div className='qsort-sides'>
            Left and right partitions:
            <div className='side'>{this.renderArray(q.left)}</div>
            <div className='side'>{this.renderArray(q.right)}</div>
          </div>
          <div className='qsort-sides'>
            Returned sorted array:
            <div className=''>{this.renderArray(q.left.slice().sort())}</div>
            <div className=''>{this.renderArray(q.a.slice(0, 1), 0)}</div>
            <div className=''>{this.renderArray(q.right.slice().sort())}</div>
          </div>
        </div>
      )
    })
  }

  renderArray = (a, pivot) => {
    return a.map((num, i) => {
      const classes = 'item ' + ((i === pivot) ? 'first' : '')
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
              if (index > 0) {
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
