import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hamud | Fintech & Developer</title>
        <meta name="description" content="I specialize in Fintech and IT projects, creating innovative solutions and experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>

      {/* Main Header Section */}
      <Main />
      
      {/* About Section */}
      <About />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
    </div>
  )
}
