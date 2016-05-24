import React, {Component, PropTypes} from 'react'

export default class App extends Component {

  static propTypes = {
    qsort: PropTypes.array.isRequired
  }

  renderArray = (a) => {
    return a.map((num, i) => {
      return (
        <div key={i} className={'item ' + (i == 0 ? 'first' : '')}>
          <div className="number">{num}</div>
        </div>
      )
    })
  }

  renderSides = (l, r) => {
    return (
      <div>
        <div className='side'>{this.renderArray(l)}</div>
        <div className='side'>{this.renderArray(r)}</div>
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
            if (a.length &lt;= 1) return a;

              var left = [], right = [], pivot = a[0];

              for (var i = 1; i &lt; a.length; i++) {
                  a[i] &lt; pivot ? left.push(a[i]) : right.push(a[i]);
              }

              return qsort(left).concat(pivot, qsort(right));
          }`}
        </pre>
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
