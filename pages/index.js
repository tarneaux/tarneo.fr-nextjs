import Footer from '../components/footer'
import Head from 'next/head'
import {List, ListItem} from '../components/list'

export default function Home() {
  return (
    <>
      <Head>
        <title>tarneo&apos;s landing page</title>
        <meta name="description" content="tarneo&apos;s landing page" />
        <link rel="preload" href="/Hasklug.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </Head>
      <h3>Hello, I&apos;m tarneo!</h3>
      <p>I am a college student and computer science enthusiast. I just make any project that can be useful to me, like <a href="https://github.com/boa-mc/">boamc</a>.</p>
      <List label="Also me">
        <ListItem icon='' label='email'>tarneo@tarneo.fr</ListItem>
        <ListItem icon='' label='Github'><a href="https://github.com/tarneaux">tarneaux</a></ListItem>
        <ListItem icon='' label='discord'>tarneo#1560</ListItem>
      </List>
      <Footer />
    </>
  )
}
