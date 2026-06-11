import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ComponentPlayground from './pages/Testing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ComponentPlayground />
  </StrictMode>,
)
