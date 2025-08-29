import Fab from '@mui/material/Fab'
import EmailIcon from '@mui/icons-material/Email'

export default function StickyCTA() {
  return (
    <Fab color="primary" href="mailto:pummello.design@gmail.com" aria-label="Contact"
      sx={{ position: 'fixed', right: 16, bottom: 16 }}>
      <EmailIcon />
    </Fab>
  )
}
