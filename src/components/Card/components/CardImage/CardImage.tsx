import Image, { StaticImageData } from 'next/image';
import styles from './cardImage.module.scss'

interface CardImageProps{
  cardImage:StaticImageData;
  cardAltText:string;
}
const CardImage = ({cardImage, cardAltText}:CardImageProps) => {
  return (
    <div className={styles.cardImage}>
      <Image src={cardImage} alt={cardAltText} layout='fill' objectFit='cover' />
    </div>
  )
}

export default CardImage