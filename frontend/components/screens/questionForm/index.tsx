import styles from '@/styles/Home.module.css'
import FormTextField from '@/components/blocks/formTextField'
import SubmitButton from '@/components/primitives/button/simpleSubmitArrow'
export default function Header() {
    return (
        <form className={styles.form} action="/send-question" method="post">
        <FormTextField 
        id="question"
        name="question"
        placeholder="Send a question to mAIte, your junior AI assistant"
        />
        <SubmitButton/>
        </form>
    )
  }
