import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'

createRoot(document.querySelector('#root')!).render(
  <React.Suspense>
    <App/>
  </React.Suspense>
)
