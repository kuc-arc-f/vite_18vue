import ReactDOMServer from 'react-dom/server'
import React from 'react'

export function render(url) {
  return ReactDOMServer.renderToString(
    <div>Welcome, Svelte + Vite</div>
  ,
  )
}

