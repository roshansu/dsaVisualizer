import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sorting from './components/Sorting/Sorting'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sorting/>
  </StrictMode>,
)
