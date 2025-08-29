import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

type Mode = 'light' | 'dark'

type ColorModeContextType = {
  mode: Mode
  toggle: () => void
}

const ColorModeContext = createContext<ColorModeContextType>({ mode: 'light', toggle: () => {} })

function getInitialMode(): Mode {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('color-mode') as Mode | null
  if (saved === 'light' || saved === 'dark') return saved
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function buildTheme(mode: Mode) {
  const isDark = mode === 'dark'
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#7C3AED', // Purple 600
        light: '#A78BFA', // Purple 300
        dark: '#5B21B6', // Purple 800
        contrastText: '#ffffff',
      },
      secondary: { main: isDark ? '#E5E7EB' : '#111827' },
      background: {
        default: isDark ? '#0b0c0f' : '#ffffff',
        paper: isDark ? '#111317' : '#ffffff',
      },
      text: {
        primary: isDark ? '#E5E7EB' : '#111827',
        secondary: isDark ? '#9CA3AF' : '#6B7280',
      },
      divider: isDark ? 'rgba(229,231,235,0.12)' : 'rgba(17,24,39,0.12)'
    },
    typography: {
      fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      h2: { fontWeight: 700, letterSpacing: -0.5 },
      h3: { fontWeight: 700, letterSpacing: -0.4 },
      h4: { fontWeight: 700 },
      button: { textTransform: 'none', fontWeight: 600 },
      subtitle1: { fontWeight: 600 },
    },
    shape: { borderRadius: 10 },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isDark ? '#0b0c0f' : '#ffffff',
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
      },
      MuiAppBar: {
        styleOverrides: { root: { backdropFilter: 'blur(8px)' } },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
    },
  })
}

export function ColorModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>(getInitialMode)

  useEffect(() => {
    try { window.localStorage.setItem('color-mode', mode) } catch {}
  }, [mode])

  const value = useMemo<ColorModeContextType>(() => ({
    mode,
    toggle: () => setMode(prev => (prev === 'light' ? 'dark' : 'light')),
  }), [mode])

  const theme = useMemo(() => buildTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  return useContext(ColorModeContext)
}
