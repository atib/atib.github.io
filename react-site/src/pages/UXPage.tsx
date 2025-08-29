import Header from '../shared/Header'
import Footer from '../shared/Footer'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Img = ({ src, alt = '' }: { src: string; alt?: string }) => (
  <Box component="img" src={src} alt={alt} sx={{ width: '100%', display: 'block', borderRadius: 1, border: theme => `1px solid ${theme.palette.divider}` }} />
)

export default function UXPage() {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>UX Research | Process</Typography>
          <Typography color="text.secondary" sx={{ textAlign: 'center', mb: 5, maxWidth: 880, mx: 'auto' }}>
            A selection of works showing UX research, user journeys, personas, prototypes as well as low‑ and high‑fidelity wireframes. Includes solo and collaborative work.
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>UX Research</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>A sample of user journeys, personas and background research from a project I led.</Typography>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, mb: 2 }}>
            <Img src="/img/ux/ux_image2.jpg" />
            <Img src="/img/ux/ux_image5.jpg" />
          </Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/ux_image3.jpg" /></Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)' }, mb: 2 }}>
            <Img src="/img/ux/ux_image6.jpg" />
            <Img src="/img/ux/ux_image7.jpg" />
          </Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/group_UX.jpg" /></Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/timeline.png" /></Box>
          <Box sx={{ mb: 2, maxWidth: 640, mx: 'auto' }}><Img src="/img/ux/blueprint.jpg" /></Box>

          <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 1 }} id="ux_lowhi">UX Wireframes: Low‑Fidelity</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>A collection of low‑fi wireframes from various projects.</Typography>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, mb: 2 }}>
            {['scan1.jpeg','scan2.jpeg','scan4.jpeg','scan5.jpeg'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['scan3.jpeg','scan6.jpeg','scan7.jpeg'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/home.png" /></Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['scan8.jpeg','scan9.jpeg','scan10.jpeg'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/drawn_wireframes.JPG" /></Box>

          <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>UX Wireframes: High‑Fidelity</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>A collection of high‑fi wireframes from various projects.</Typography>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['gy_1.jpg','gy_2.jpeg','gy_3.jpg'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['gy_4.jpg','gy_5.jpg','gy_6.jpeg'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['high_wf_1.png','high_wf_2.png','high_wf_3.png'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['high_wf_4.png','high_wf_5.png','high_wf_6.png'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>

          <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 1 }}>UX Mockups / Applications</Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>Images from live and prototype applications.</Typography>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['sn1.png','sn2.png','sn3.png'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(3,1fr)' }, mb: 2 }}>
            {['sn4.png','sn5.png','sn6.png'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, mb: 2 }}>
            {['gyt_1.jpg','gyt_2.jpg','gyt_3.jpg','gy_t4.jpg'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/in_1.png" /></Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(2,1fr)' }, mb: 2 }}>
            {['in_4.png','in_3.png'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
          <Box sx={{ mb: 2 }}><Img src="/img/ux/in_2.png" /></Box>
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: 'repeat(1,1fr)', sm: 'repeat(2,1fr)' }, mb: 2 }}>
            {['in_6.png','in_5.png'].map(n => (
              <Img key={n} src={`/img/ux/${n}`} />
            ))}
          </Box>
        </Container>
      </main>
      <Footer />
    </>
  )
}
