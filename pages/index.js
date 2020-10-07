import Head from 'next/head'
import styles from '../styles/Dashboard.module.css'
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'


export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to Click N Share.
        </h1>

        <p className={styles.description}>
          Create, View, Share Snippets
        </p>
        <p>
          <Link href="/share"> Ready to share? </Link>
        </p>

        {/* <div className={styles.grid}> */}
          {/* <div className={styles.column} >
          <p>Group 1</p>
          <p>Group 1</p>
          <p>Group 1</p>
          <p>Group 1</p>
          </div> */}
          <div className={styles.column}>

            <div className={styles.card}>
              <ReactPlayer 
                // width='100%'
                // height='100%'  
                url='https://www.youtube.com/watch?v=dZ64tx8Bi0k' />
              <p>
                Caption Here
              </p>
              <div>
                Published by: Blah Blah
              </div>
              <div>Media Buttons</div>
            </div>

            <div className={styles.card}>
              <ReactPlayer 
                // width='100%'
                // height='100%'  
                url='https://streamable.com/eo152' />
              <p>
                Caption Here
              </p>
              <div>
                Published by: Blah Blah
              </div>
              <div>Media Buttons</div>
            </div>
          {/* </div> */}
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
