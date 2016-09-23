import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import css from './style.css';

class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    status: PropTypes.oneOf(['normal', 'primary', 'info', 'success', 'danger']),
    children: PropTypes.node,
  };
  static defaultProps = {
    status: 'normal'
  };
  render() {
    let {
      status,
      text,
      children,
      ...rest
    } = this.props;

    // 有子元素时，忽略text属性
    if (!children) {
      children = text;
    }

    const base = [css.btn, css[status]];
    const cn = classNames(base);

    return (
      <button className={cn} {...rest}>
        {children}
      </button>
    );
  }
}

export default Button;