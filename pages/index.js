import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import RaffleEntrance from '../components/RaffleEntrance'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Raffle</title>
        <meta name="description" content="Smart Contract Raffle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RaffleEntrance />
    </div>
  )
}
