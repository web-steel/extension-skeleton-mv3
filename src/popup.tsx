import React from 'react'
import { createRoot } from 'react-dom/client';

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container!);
root.render(<App />)
