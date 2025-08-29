import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useColorMode } from '../theme/ColorModeProvider'

export default function Header() {
  const { mode, toggle } = useColorMode()
  const isDark = mode === 'dark'
  return (
    <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
      <Container>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button href="/" color="inherit" sx={{ letterSpacing: 2, fontWeight: 700 }}>ATIB</Button>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button href="/ux" color="inherit">Work</Button>
            <Button href="/about" color="inherit">About</Button>
            <Button href="#contact" color="inherit">Contact</Button>
            <Button href="/CV_ProductDesign_Atib.pdf" target="_blank" rel="noopener" variant="outlined">CV</Button>
            <IconButton aria-label="Toggle dark mode" onClick={toggle} color="inherit">
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
