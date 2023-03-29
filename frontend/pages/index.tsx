import Head from 'next/head'
import Header from '@/components/screens/header'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/screens/footer'
import QuestionForm from '@/components/screens/questionForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>mAIte, your junior assistant</title>
        <meta name="description" content="mAIte, your junior assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Header titleCardText="mAIte's office"/>
      <div className={styles.content}>
        <div className={styles.chatbox}>
        </div>
      <QuestionForm/>
      </div>
      <Footer/>
      </main>
    </>
  )
}
