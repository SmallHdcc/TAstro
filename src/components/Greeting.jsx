
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div> 
      <h3>{greeting}! 欢迎你的到来，朋友!</h3>
      <button onClick={() => setGreeting(randomMessage())} class = "greetBtn">
        新的问候语
      </button>
    </div>
  );
}