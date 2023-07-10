import { useState} from 'react'

const Counter = () => {
    const [counter, setCounter] = useState({ a: 3, b: 9, c: 10 })
    const incrementCounter = (key) => {
        setCounter((prevState) => ({
          ...prevState,
          [key]: prevState[key] + 1,
        }));
      };
    const decrementCounter = (key) => {
        setCounter((prevState) => ({
          ...prevState,
          [key]: prevState[key] - 1,
        }));
      };
  return (
    <div className='mt-5'>
        {Object.keys(counter).map((key) => (
        <div key={key} className='d-flex justify-content-center mt-3'>
          <p><span className='fs-1 mx-4'> {key} </span> <span className='fs-1 mx-3 bg-primary text-white px-2'> {counter[key]}</span></p>
          <button onClick={() => incrementCounter(key)} className='btn btn-dark mx-2'>+</button>
          <button onClick={() => decrementCounter(key)} className='btn btn-dark mx-2'>-</button>
        </div>
      ))}
    </div>
  )
}

export default Counter
