import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Header from '../shared/Header'
import Footer from '../shared/Footer'

function trackDownload(label: string) {
  const w = window as any
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'portfolio_download', {
      event_category: 'engagement',
      event_label: label,
      transport_type: 'beacon',
    })
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: 'portfolio_download', label })
  } else {
    // Fallback
    try { console.debug('[track] portfolio_download', label) } catch {}
  }
}

export default function PortfolioPage() {
  const pdfPath = '/Atib_DesignPortfolio.pdf'
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
              <Button href={pdfPath} target="_blank" rel="noopener" variant="contained" onClick={() => trackDownload('open_pdf')}>
                Open PDF
              </Button>
              <Button href={pdfPath} download variant="outlined" onClick={() => trackDownload('download_pdf')}>
                Download
              </Button>
            </Box>
            <Box sx={{ border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2, overflow: 'hidden' }}>
              <object data={pdfPath} type="application/pdf" width="100%" height="900px">
                <Box sx={{ p: 2 }}>
                  <Typography variant="body1">Your browser can’t display embedded PDFs.</Typography>
                  <Typography variant="body2">
                    <a href={pdfPath} target="_blank" rel="noopener" onClick={() => trackDownload('open_pdf_fallback')}>Click here to view the portfolio.</a>
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
