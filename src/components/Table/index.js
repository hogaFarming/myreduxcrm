import React, {Component} from 'react';

import css from './style.css';

class Table extends Component {
  render() {
    const { fields, data } = this.props;
    const th = fields.map(field => (
      <th key={field.key}>{field.name}</th>
    ));
    const tr = data.map((item, i) => {
      const td = fields.map(field => (
        <td key={field.key}>{item[field.key]}</td>
      ));
      return this.props.selectable ?
        (<tr key={i}>
          <td><input type="checkbox" onClick={() => { this.onSelect(item); }}/></td>
          {td}
        </tr>) :
        <tr key={i}>{td}</tr>;
    });
    return (
      <div className={css.tableWrap}>
        <table className={css.table}>
          <thead>
            <tr>
              {this.props.selectable ?
                <th><input type="checkbox"/></th> : ''}
              {th}
            </tr>
          </thead>
          <tbody>{tr}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
