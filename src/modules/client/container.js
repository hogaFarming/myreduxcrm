import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as clientAcitons from './actions';

// import ToolBar from '../../components/ToolBar';
import TableWithPager from '../../components/TableWithPager';

const MENUS = [
  {
    options: [
      { title: '全部客户', value: '0' },
      { title: '我负责的客户', value: '1' },
      { title: '我参与的客户', value: '2' }
    ],
    changeHandler: null
  }
];

class Client extends Component {
  static propTypes = {
    fetchClientList: PropTypes.func,
    pager: PropTypes.shape({
      page: PropTypes.number.isRequired,
      size: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
    }),
    keyword: PropTypes.string,
    selectedMenus: PropTypes.arrayOf(PropTypes.string),
    fields: PropTypes.array,
    data: PropTypes.array,
  }
  state = {
    selectedData: [],
  }
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }
  componentDidMount() {
    this.onPageChange(1);
  }
  onMenuChange() {

  }
  onSearch(event) {

  }
  onPageChange(page) {
    const params = {
      page: page,
      size: 1
    };
    this.props.fetchClientList(params);
  }
  renderMenu() {
    const selects = MENUS.map((menu, i) => {
      const options = menu.options.map(option => {
        return (
          <option key={option.value} value={option.value}>{option.title}</option>
        );
      });
      return (
        <select key={i}>{options}</select>
      );
    });
    return selects;
  }
  render() {
    const { fields, data } = this.props;
    const { page, size, total } = this.props.pager;
    return (
      <div>
        {/*<ToolBar
          title="客户"
          menus={MENUS}
          onMenuChange={this.onMenuChange}
          buttons={BUTTONS}
        />*/}
        <div className="toolbar">
          {this.renderMenu()}
          <input type="text" ref="keyword"/>
          <button onClick={this.onSearch}>搜索</button>
          <button onClick={this.addClient}>新增客户</button>
        </div>
        <TableWithPager
          fields={fields}
          data={data}
          selectable={true}
          pagerConfig={{
            page: page,
            size: size,
            total: total,
            onPageChange: this.onPageChange
          }}
        />
      </div>
    );
  }
}

const ClientContainer = connect(
  state => state.client,
  dispatch => bindActionCreators(clientAcitons, dispatch)
)(Client);

export default ClientContainer;