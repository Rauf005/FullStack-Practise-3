import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductsProvider from "./Context/BasketContext.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
)
