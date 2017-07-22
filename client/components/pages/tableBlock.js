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
    sortedColumn: null,
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

  render() {
    const { isSortable, columns, rows } = this.props;
    console.log(this.state.index)
    const headers = ["Job Title", "Female Avg Hourly Wage", "Male Avg Hourly Wage"];

    const inputData = data.data;
    let outputData = inputData.map((row) => {
      return [row[8], row[9], row[15]];
    });
    outputData = outputData.slice(this.state.index, this.state.index+25);

    const componentTypes = {
      string: (item) => (item),
      number: (item) => (item)
    };
    
    console.log(outputData)
    return (
      <div>
        <table className="ws_data_table" >
          <thead className="ws_data_table th">
            <tr>
              {headers.map((header, i) => {
                return (<th key={i}>{header}</th>)
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
        <button onClick={this.nextPage}>Next Page</button>
        <button onClick={this.prevPage}>Previous Page</button>
      </div>
    );
  }
}