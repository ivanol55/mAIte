import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SimpleSubmitArrow() {
    return (
    <button className={styles.submit} type="submit">
        <h3 className={inter.className}><span className={styles.arrowSpan}>-&gt;</span></h3>
      </button>
    )
}