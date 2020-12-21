import {h, Component} from 'preact';
import styles from './index.scss';

interface Iprops {}

interface IState {
  time: number
}

class Clock extends Component<Iprops, IState> {
  timer
  constructor() {
    super();
    this.state = { 
      time: Date.now() 
    };
  }

  componentDidMount() {
    // update time every second
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let time = new Date(this.state.time).toLocaleTimeString();
    return (
      <div className={styles.clockCon}>
          <span className={styles.time}>{time}</span>
      </div>
    )
  }
}

export default Clock
