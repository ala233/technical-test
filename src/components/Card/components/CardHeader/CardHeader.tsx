import styles from './cardHeader.module.scss'

interface CardHeaderProps{
  cardHeader:string;
}

const CardHeader = ({cardHeader}:CardHeaderProps) => {
  return (
    <p className={styles.cardHeader}>{cardHeader}</p>
  )
}

export default CardHeader