import React from 'react';
import data from '../data/rows.json';


export default class TableBlock extends React.Component {
  static propTypes = {
    columns: React.PropTypes.array,
    rows: React.PropTypes.array,
    isSortable: React.PropTypes.bool,
    columnName: React.PropTypes.string
  }

  static defaultProps = {
    isSortable: false
  }

  state = {
    sortedColumn: 0,
    isAscending: false,
    index: 0
  };

  onClick = ::this.onClick
  onClick(columnName) {
    this.setState({
      sortedColumn: columnName,
      isAscending: !this.state.isAscending,
    });

  }

  nextPage = ::this.nextPage
  nextPage() {
    this.setState({
      index: this.state.index + 25
    });
  }

  prevPage = ::this.prevPage
  prevPage() {
    if (this.state.index >= 2) {
      this.setState({
        index: this.state.index - 25
      });
    }
  }

  comparator = ::this.comparator
  comparator(a, b) {
    if (a[this.state.sortedColumn] < b[this.state.sortedColumn]) return -1;
    if (a[this.state.sortedColumn] > b[this.state.sortedColumn]) return 1;
    return 0;
  }

  sort = ::this.sort
  sort(i) {
    this.setState({
      sortedColumn: i,
      index: 0
    })
  }

  render() {
    const { isSortable, columns, rows } = this.props;
    const headers = ["Job Title", "Female Avg Hourly Wage", "Male Avg Hourly Wage"];
    const indexStart = this.state.index;
    const indexEnd = this.state.index + 24;
    const inputData = data.data;
    let outputData = [];
    inputData.forEach((row) => {
      if (row[9] && row[15] && row[9] !== row[15]) {
        outputData.push([row[8], row[9], row[15]]);
      }
    });
    outputData = outputData.sort(this.comparator);
    outputData = outputData.slice(indexStart, indexEnd);
    const componentTypes = {
      string: (item) => (item),
      number: (item) => (item)
    };
    
    return (
      <div>
        <table className="ws_data_table" >
          <thead className="ws_data_table th">
            <tr>
              {headers.map((header, i) => {
                return (<th key={i} onClick={() => this.sort(i)}>{header}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {outputData.map((row, i) => {
              return(<tr key={i}>{row.map((r, j) => {
                return (<td key={j}>{r}</td>)
              })}
              </tr>)
            })}
          </tbody>
        </table>
        <div className="ws_pagination">
          <button className="ws_pagination_prev" onClick={this.prevPage}>{"<<"}</button>
          <span>{`${indexStart + 1}-${indexEnd+1}`}</span>
          <button className="ws_pagination_next" onClick={this.nextPage}>{">>"}</button>
        </div>
      </div>
    );
  }
}