import {h, Component} from 'preact';
import Clock from './Clock'
import FuncCom from './FuncCom'
import TodoCom from './TodoForm'

interface HelloWorldProps {
  name: string
}

class HelloWorld extends Component<HelloWorldProps, any> {
  render (props: HelloWorldProps) {
    console.log(props)
    return (
      <div>
        <p>Hellod {props.name}!</p>
        <FuncCom />
        <Clock />
        <TodoCom />
      </div>
    )
  }
}

export default HelloWorld
