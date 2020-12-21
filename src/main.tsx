import { h, render, Component } from 'preact';
import ClassCom from './Components/ClassCom';
import './style.css';

class App extends Component {
  render() {
		return (
			<div>
				<h1>Hello, world</h1>
				<ClassCom name='44@qq.com' />
			</div>
		)
  }
}

let fragment = document.createElement('div');
document.body.appendChild(fragment)
render(<App />, fragment);
