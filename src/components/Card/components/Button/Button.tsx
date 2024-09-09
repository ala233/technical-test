import styles from "./button.module.scss";

interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

const Button = ({ buttonText, onClick }: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;