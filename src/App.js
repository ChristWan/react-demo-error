import {useEffect, useState} from 'react'

const useUpdate = (fn, dep) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(x => x + 1)
  }, [dep])

  useEffect(() => {
    if (count > 2) {
      fn()
      console.log('n: ' + dep)
      console.log('count ' + count)
      console.log('-----------')
    }
  }, [count, fn, dep])
}

const App = props => {
  const [n, setN] = useState(0)
  useEffect(() => {
    console.log('use effect')
  }, [])

  useUpdate(() => {
    console.log('n changed')
  }, n)

  return (
    <div>
      n: {n}
      <button onClick={() => setN(n + 1)}>+1</button>
    </div>
  )
}

export default App