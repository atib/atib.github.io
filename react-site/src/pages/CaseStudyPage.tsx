import Header from '../shared/Header'
import Footer from '../shared/Footer'
import { useParams, Link } from 'react-router-dom'

export default function CaseStudyPage() {
  const { slug } = useParams()
  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <p><Link to="/">← Back to home</Link></p>
            <h1 className="cs-title">Case study: {slug}</h1>
            <p className="cs-intro">Overview, problem, approach, outcomes. Replace this with real content per project.</p>
            <hr />
            <h2>Overview</h2>
            <p>Goals, audience, scope.</p>
            <h2>Process</h2>
            <p>Research, insights, IA, flows, wireframes, UI.</p>
            <h2>Impact</h2>
            <p>Metrics, learnings, next steps.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
