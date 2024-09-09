import styles from "./cardBody.module.scss";

interface cardBodyProps {
  cardBody: string | string[];
}
const CardBody = ({ cardBody }: cardBodyProps) => {
  return (
    <div className={styles.cardBody}>
      {Array.isArray(cardBody) ? (
        cardBody.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      ) : (
        <p>{cardBody}</p>
      )}
    </div>
  );
};

export default CardBody;
