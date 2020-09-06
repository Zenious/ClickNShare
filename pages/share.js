import Head from 'next/head'
import styles from '../styles/Dashboard.module.css'

export default function Share() {
return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      <h1 className={styles.title}>
          Share your bits!
        </h1>

        <form>
            <label>
                URL: <input />
            </label>
            <input type="Submit" value="Submit"/>
        </form>
      </main>
    </div>
)
}