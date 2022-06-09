import Head from "next/head"

export default function Page404() {
  return (
    <>
      <Head>
        <title>page not found</title>
      </Head>
      <div style={{textAlign: "center"}}>
        <h1>404</h1>
        <p>Page not found</p>
      </div>
    </>
  )
}
