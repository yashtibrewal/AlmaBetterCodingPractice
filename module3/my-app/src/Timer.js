import { useEffect, useState } from "react"


export function Timer() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {

    const id = setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => {
      clearTimeout(id);
    }

  }, [timer])

  return (
    <>
      <h1>Timer: {timer} s</h1>
    </>
  )

}