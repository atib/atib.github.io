import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Header from '../shared/Header'
import Footer from '../shared/Footer'
import StickyCTA from '../shared/StickyCTA'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Box component="section" sx={{ py: { xs: 8, md: 14 } }}>
          <Container maxWidth="lg">
            <Typography variant="h2" sx={{ fontWeight: 700, mb: 1 }}>Product & UX Designer</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 820, mb: 3 }}>
              Designing usable, accessible products. Turning research into clear, fast interfaces.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <Button href="#work" variant="contained">See selected work</Button>
              <Button href="/Atib_DesignPortfolio.pdf" target="_blank" rel="noopener" variant="outlined">Download portfolio</Button>
            </Box>
          </Container>
        </Box>

        <Box id="work" component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>Selected work</Typography>
              <Typography color="text.secondary">Case studies and shipped projects across education, fintech, and hospitality.</Typography>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 2 }}>
              {[
                { href: '/ux', src: '/img/ux/ux_image1.jpg', title: 'UX Research & Process', meta: 'Personas, journeys, wireframes, prototypes' },
                { href: 'http://rainesfoundation.org.uk', src: '/img/work/raines_school.png', title: "Raine's Foundation School", meta: 'Branding, UI, CMS', ext: true },
                { href: 'http://citygatesschool.org.uk', src: '/img/work/city.png', title: 'City Gates School', meta: 'UX, UI, Support', ext: true },
                { href: 'http://zencaasset.com', src: '/img/work/zenca.png', title: 'Zenca Asset Management', meta: 'Branding, UI', ext: true },
                { href: 'http://retechnica.com', src: '/img/work/retechnica.png', title: 'Retechnica', meta: 'UX, Branding, UI', ext: true },
                { href: 'http://apexaccountant.com', src: '/img/work/apex.png', title: 'Apex Accountants', meta: 'UX, UI', ext: true },
                { href: 'https://www.ingeniapi.com', src: '/img/work/ingenia.png', title: 'Ingenia', meta: 'UX Research, UI', ext: true },
                { href: 'http://thegaylorde14.co.uk', src: '/img/work/gaylord.png', title: 'The Gaylord Restaurant', meta: 'UX, UI', ext: true },
                { href: '/ux#ux_lowhi', src: '/img/work/tab.png', title: 'Tablet Menu', meta: 'Product concept, UX, UI' },
              ].map(card => (
                <Box key={card.title}>
                  <a href={card.href} target={card.ext ? '_blank' : undefined} rel={card.ext ? 'noopener' : undefined} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Box sx={{ border: theme => `1px solid ${theme.palette.divider}`, borderRadius: 2, overflow: 'hidden', '&:hover': { boxShadow: 6 } }}>
                      <Box component="img" src={card.src} alt={card.title} sx={{ display: 'block', width: '100%', height: 200, objectFit: 'cover', background: '#f3f4f6' }} />
                      <Box sx={{ p: 1.5, borderTop: theme => `1px solid ${theme.palette.divider}` }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{card.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{card.meta}</Typography>
                      </Box>
                    </Box>
                  </a>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>

        <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 3 }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>About me</Typography>
                <Typography color="text.primary" sx={{ mb: 2 }}>I’m Atib, a product and UX designer. I blend research, interaction design, and front‑end craft to deliver inclusive, easy‑to‑use experiences.</Typography>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                  <Button href="/CV_ProductDesign_Atib.pdf" target="_blank" rel="noopener" variant="outlined">Download CV</Button>
                  <Button href="/ux" variant="text">View UX Work</Button>
                </Box>
              </Box>
              <Box sx={{ minHeight: 240, borderRadius: 2, border: theme => `1px solid ${theme.palette.divider}`, backgroundImage: 'url(/img/about.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </Box>
          </Container>
        </Box>

        <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Get in touch</Typography>
            <Typography color="text.secondary" sx={{ mb: 1 }}>Have a project in mind or just want to say hi?</Typography>
            <Typography><a href="mailto:pummello.design@gmail.com">pummello.design@gmail.com</a></Typography>
          </Container>
        </Box>
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
