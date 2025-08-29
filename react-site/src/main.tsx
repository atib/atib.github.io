import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import HomePage from './pages/HomePage'
import CaseStudyPage from './pages/CaseStudyPage'
import UXPage from './pages/UXPage'
import AboutPage from './pages/AboutPage'
import { ColorModeProvider } from './theme/ColorModeProvider'
import PortfolioPage from './pages/PortfolioPage'

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/ux', element: <UXPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/portfolio', element: <PortfolioPage /> },
  { path: '/case/:slug', element: <CaseStudyPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  </StrictMode>,
)
