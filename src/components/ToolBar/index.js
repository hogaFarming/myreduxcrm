import React, {Component} from 'react';

import Button from '../Button';
import css from './style.css';

class ToolBar extends Component {
  renderSelects() {
    return this.props.menus.map((menu, i) => {
      const options = menu.options.map(opt => (
        <option key={opt.title} value={opt.value}>{opt.title}</option>
      ));
      return (
        <select key={i}>{options}</select>
      );
    });
  }

  renderButtons() {
    return this.props.buttons.map(btn => {
      return (
        <Button key={btn.title} onClick={btn.click}>{btn.title}</Button>
      );
    });
  }

  render() {

    return (
      <div className={css.toolbar}>
        <div className={css.title}>客户</div>
        <div className={css.selectsWrap}>{this.renderSelects()}</div>

        <div className={css.right}>
          <div className={css.search}>
            <input type="text" ref="keyword"/>
            <Button>搜索</Button>
          </div>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}


export default ToolBar;
