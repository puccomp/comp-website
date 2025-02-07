import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider, Toolbar, Box } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// STYLES
import theme from './styles/theme'

// CONTEXTS
import { MembersProvider } from './contexts/MembersContext'

// COMPONENTS
import Header from './components/Header'
import Footer from './components/Footer'
import CustomScrollbar from './components/CustomScrollbar'

// PAGES
import Home from './pages/home/Home'
import About from './pages/About'
import Team from './pages/Team'
import Apply from './pages/Apply'
import ProjectSubmission from './pages/ProjectSubmission'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CustomScrollbar />
        <MembersProvider>
          <BrowserRouter>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Header />
              <Toolbar />
              <Box
                component="main"
                sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sobre" element={<About />} />
                  <Route path="/equipe" element={<Team />} />
                  <Route path="/torna-se-parte" element={<Apply />} />
                  <Route path="/desenvolva" element={<ProjectSubmission />} />
                </Routes>
              </Box>
              <Footer />
            </Box>
          </BrowserRouter>
        </MembersProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </>
)
