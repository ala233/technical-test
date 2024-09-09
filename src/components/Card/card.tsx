import { StaticImageData } from "next/image";
import styles from "./card.module.scss";
import Button from "./components/Button";
import CardHeader from "./components/CardHeader";
import CardBody from "./components/CardBody";
import CardImage from "./components/CardImage";
import classNames from "classnames";

interface CardProps {
  cardImage: StaticImageData;
  cardAltText: string;
  cardHeader: string;
  cardBody: string | string[];
  buttonText: string;
  onClick: () => void;
  isActive: boolean;
}
const Card = ({
  cardImage,
  cardAltText,
  cardHeader,
  cardBody,
  buttonText,
  onClick,
  isActive,
}: CardProps) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles.active]: isActive,
      })}
    >
      <CardImage cardImage={cardImage} cardAltText={cardAltText} />
      <div className={styles.cardContent}>
        <CardHeader cardHeader={cardHeader} />
        <CardBody cardBody={cardBody} />
      </div>
      <Button buttonText={buttonText} onClick={onClick} />
    </div>
  );
};

export default Card;
