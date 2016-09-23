import React, {Component} from 'react';

import * as loginApi from './api/login';

class Login extends Component {
  login(event) {
    event.preventDefault();

    const user = this.refs.user.value;
    const password = this.refs.password.value;

    loginApi.login(user, password).then(result => {
      if (result.ok) {
        sessionStorage.setItem('session_key', result.sessionKey);
        location.href = '/';
      } else {
        alert('登录失败');
      }
    });
  }
  render() {
    return (
      <div className="app-login">
        <form>
          <p>
            账号: <input type="text" ref="user" />
          </p>
          <p>
            密码: <input type="password" ref="password" />
          </p>
          <button onClick={this.login.bind(this)}>登录</button>
        </form>
      </div>
    );
  }
}

export default Login;