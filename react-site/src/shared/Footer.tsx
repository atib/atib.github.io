import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <Container sx={{ py: 2, textAlign: 'center', color: 'text.secondary', borderTop: theme => `1px solid ${theme.palette.divider}` }}>
        <Typography variant="body2">© {year} Atib Chowdhury</Typography>
      </Container>
    </footer>
  )
}
