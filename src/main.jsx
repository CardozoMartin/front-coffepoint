import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Router from './Router'
import { Toaster } from 'sonner'


const queryCliente = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryCliente}>
      <Router></Router>
      <Toaster richColors position="top-center" />
    </QueryClientProvider>
  </StrictMode>,
)
