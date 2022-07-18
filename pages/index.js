import Footer from '../components/footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>tarneo&apos;s landing page</title>
        <meta name="description" content="tarneo&apos;s landing page" />
      </Head>
      <h3>Hello, I&apos;m tarneo!</h3>
      <p>I am a college student and computer science enthusiast. I just make any project that can be useful to me, like <a href="github.com/boa-mc/">boamc</a>.</p>
      <b>Also me:</b>
      <ul>
        <li><text className='icon'></text><b> e-mail:</b> tarneo@tarneo.fr</li>
        <li><text className='icon'></text><b> Github:</b> <a href="https://github.com/tarneaux">tarneaux</a></li>
        <li><text className='icon'></text><b> discord:</b> tarneo#1560</li>
      </ul>
      <Footer />
    </>
  )
}
