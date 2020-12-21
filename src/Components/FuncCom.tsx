import { h } from 'preact'
import { useState, useCallback } from 'preact/hooks'

interface Iprops {
	name?: string
}

function Counter (props: Iprops) {
	const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div>
      {props.name }: {value}
      <div><button onClick={increment}>Increment</button></div>
    </div>
  );
}

Counter.defaultProps = {
	name: 'Counter'
}

export default Counter
