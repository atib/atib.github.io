import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>Portfolio</Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Latest work selection from my portfolio.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
              <Button href="/Atib_DesignPortfolio.pdf" target="_blank" rel="noopener" variant="contained">Open PDF</Button>
              <Button href="/Atib_DesignPortfolio.pdf" download variant="outlined">Download</Button>
            </Box>
            <Box sx={{ border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2, overflow: 'hidden' }}>
              <object data="/Atib_DesignPortfolio.pdf" type="application/pdf" width="100%" height="900px">
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">Your browser can’t display embedded PDFs.</Typography>
                  <Typography variant="body2">
                    <a href="/Atib_DesignPortfolio.pdf" target="_blank" rel="noopener">Click here to view the portfolio.</a>
                  </Typography>
                </Box>
              </object>
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </>
  )
}
