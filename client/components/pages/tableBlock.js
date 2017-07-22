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
    index: 1
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
      index: this.state.index + 2
    });
  }

  prevPage = ::this.prevPage
  prevPage() {
    if (this.state.index >= 2) {
      this.setState({
          index: this.state.index - 2
      });
    }
  }

  render() {
    const { isSortable, columns, rows } = this.props;
    console.log(this.state.index)
    const headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let wages = [
      [ "Accountant", "30.58", "23", "88.96", "30.28", "7", "85.71", "30.51", "30", "88.20", "101.00", null ],
      [ "Accountant,Prin", "38.75", "23", "59.96", "37.64", "7", "7.00", "38.49", "30", "47.60", "102.95", null ],
      [ "Accountant,Sr", "34.48", "23", "60.61", "33.89", "6", "43.67", "34.36", "29", "57.10", "101.75", null ],
      [ "Act Exec", "43.10", "4", "146.00", "42.02", "7", "106.29", "42.42", "11", "120.73", "102.56", null ],
      [ "Actg Tech I", "22.56", "1", "156.00", null, null, null, "22.56", "1", "156.00", null, "no men in title" ],
      [ "Actg Tech I-BU", "22.56", "10", "81.80", "22.56", "2", "35.50", "22.56", "12", "74.08", "100.00", null ],
      [ "Actg Tech II", "23.98", "7", "112.71", "24.35", "1", "75.00", "24.03", "8", "108.00", "98.49", null ],
      [ "Actg Tech II-BU", "24.19", "74", "103.23", "24.21", "18", "134.50", "24.20", "92", "109.35", "99.95", null ],
      [ "Actg Tech III", "26.64", "7", "51.57", null, null, null, "26.64", "7", "51.57", null, "no men in title" ],
      [ "Actg Tech III-BU", "26.69", "32", "89.97", "26.18", "5", "51.20", "26.63", "37", "84.73", "101.96", null ],

    ];
    wages = wages.slice(this.state.index, this.state.index+2)
    const componentTypes = {
      string: (item) => (item),
      number: (item) => (item)
    };
    // console.log(pagination());
    return (
      <div>
        <table className="ws_data_table" >
          <thead className="ws_data_table th">
            <tr>
              {headers.map((header, i) => {
                return (<th key={i}>header</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {wages.map((row, i) => {
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