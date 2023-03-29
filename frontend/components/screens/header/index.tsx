import styles from '@/styles/Home.module.css'
import MonospaceDescriptionBlock from '@/components/primitives/text/description'
import SimpleCard from '@/components/blocks/simpleCard'
import Image from 'next/image'

export default function Header(
    { titleCardText }: { titleCardText: string }
    ) {
    return (
        <div className={styles.description}>
            <MonospaceDescriptionBlock descriptionText={titleCardText} />
            <SimpleCard titleText="Clear this chat window" link="/"/>
        </div>
    )
  }
