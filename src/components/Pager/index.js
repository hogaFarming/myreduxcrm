import React, {Component} from 'react';

import Button from '../Button';

class Pager extends Component {
  constructor(props) {
    super(props);
    this.onBlur = this.onBlur.bind(this);
    this.setPage = this.setPage.bind(this);
  }
  onBlur() {
    this.setPage(this.refs.page.value);
  }
  setPage(newPage) {
    const totalPage = Math.ceil(this.props.total / this.props.size);
    if (newPage < 1) newPage = 1;
    if (newPage > totalPage) newPage = totalPage;
    this.refs.page.value = newPage;
    this.props.onPageChange(newPage);
  }
  componentDidMount() {
    this.refs.page.value = this.props.page;
  }
  render() {
    const { page, size, total } = this.props;
    const totalPage = Math.ceil(total / size);
    return (
      <div className="pager">
        <Button onClick={this.setPage.bind(null, page - 1)}>上一页</Button>
        <input type="text" ref="page" onBlur={this.onBlur}/>
        <Button onClick={this.setPage.bind(null, page + 1)}>下一页</Button>
        <span>总页数：{totalPage}</span>
      </div>
    );
  }
}

export default Pager;
