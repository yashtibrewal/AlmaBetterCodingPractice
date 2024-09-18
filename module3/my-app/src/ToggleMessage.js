
import { useRef, useState } from 'react';

export default function ToggleMessage() {

  const [showMessage, setShowMessage] = useState(false);

  function toggle() {
    setShowMessage(!showMessage);
  }
  return (
    <div style={{ marginTop: '20px' }}>
      <button
        style={{ width : '200px'}}
        onClick={toggle}>{showMessage ? 'Hide' : 'Show'} Message</button>
      <div>
        <h1>
          {
            showMessage && 'Message'
          }
        </h1>
      </div>
    </div>)

}