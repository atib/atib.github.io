import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'

const Skill = ({ label }: { label: string }) => <Chip label={label} variant="outlined" sx={{ mr: 1, mb: 1 }} />

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Box sx={{ py: 9, background: 'linear-gradient(180deg, #f8fafc, #ffffff)' }}>
          <Container>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>About me</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 900, mb: 3 }}>
              I’m Atib, a product and UX designer focused on inclusive, user‑centred interfaces. I turn research into clear interaction patterns and ship fast, accessible UIs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <Button href="/CV_ProductDesign_Atib.pdf" target="_blank" rel="noopener" variant="contained">Download CV</Button>
              <Button href="mailto:pummello.design@gmail.com" variant="outlined">Email me</Button>
            </Box>
          </Container>
        </Box>

        <Container sx={{ py: 9 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '6fr 3fr 3fr' }, gap: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>What I do</Typography>
              <Typography sx={{ mb: 2 }}>I collaborate across research, product, and engineering to define problems, validate solutions, and deliver interfaces that feel effortless. I value clarity, speed, and accessibility.</Typography>
              <Typography>My background spans education, fintech, and hospitality—balancing UX research with hands‑on UI engineering to move from concept to shipped product quickly.</Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Skills</Typography>
              <Box>
                {['UX research','Personas & journeys','Information architecture','Wireframes & prototypes','Interaction design','Accessibility (a11y)','Design systems','Front‑end (HTML, CSS, JS)'].map(s => <Skill key={s} label={s} />)}
              </Box>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Tools</Typography>
              <Box>
                {['Figma','Illustrator','Axure/Balsamiq','Notion','Jira','VS Code'].map(s => <Skill key={s} label={s} />)}
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  )
}
