import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} className={classes.button}>
      {props.name}
    </button>
  );
};

export default Button;
