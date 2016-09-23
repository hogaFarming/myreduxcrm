import React, {Component} from 'react';

import Pager from '../Pager';
import Table from '../Table';

class TableWithPager extends Component {
  render() {
    const { fields, data, selectable } = this.props;
    return (
      <div>
        <Table fields={fields} data={data} selectable={selectable} />
        <Pager { ...this.props.pagerConfig } />
      </div>
    );
  }
}

export default TableWithPager;
