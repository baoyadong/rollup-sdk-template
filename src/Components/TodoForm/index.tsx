import {h, Component} from 'preact';
import styles from './index.scss';

interface Iprops {}

interface IState {
  value: string
}

class TodoForm extends Component<Iprops, IState> {
  state = { value: '' };

  onSubmit = e => {
    alert("Submitted a todo");
    e.preventDefault();
  }

  onInput = e => {
    const { value } = e.target;
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return (
    <form onSubmit={this.onSubmit} className={styles.formCon}>
        <input type="text" value={value} onInput={this.onInput} />
        <p>You typed this value: {value}</p>
        <button type="submit">Submit</button>
    </form>
    );
  }
}

export default TodoForm
