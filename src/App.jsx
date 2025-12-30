import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="chatbox">
        
        <div className="chat-header">
           Job Apllication Helper
        </div>

        <div className="chat-messages">
          <div className="msg">
            Hello !!
          </div>
        </div>

        <div className="chat-input">
          <div className="upload-btn">+</div>
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>

      </div>
    </div>
  );
}

export default App;
