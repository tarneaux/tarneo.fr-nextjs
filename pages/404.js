import Head from "next/head"
import styles from '../styles/404.module.scss'

export default function Page404() {
  return (
    <>
      <Head>
        <title>page not found</title>
        <meta name="description" content="page not found" />
      </Head>
      <div style={{textAlign: "center"}}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.text}>Page not found</p>
      </div>
    </>
  )
}
