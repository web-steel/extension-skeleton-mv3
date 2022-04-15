import React from 'react'
import { createRoot } from 'react-dom/client';

const popup =  <p>Hello</p>

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container!);
root.render(popup)
