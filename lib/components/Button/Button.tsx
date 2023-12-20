import styles from "./Button.module.scss";
import "../../main.css";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return (
    <button className={`${className} ${styles.button} text-3xl`} {...restProps}>
      hello!
    </button>
  );
}
