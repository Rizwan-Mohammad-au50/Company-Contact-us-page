import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <div>
        <button  className={styles.cht_call_btns} onClick={props.funOne || props.funTwo}> {props.icon} {props.text} </button>
    </div>
  )
}

const EmailButton = (props) => {
  return (
    <div>
        <button className={styles.mail_btn} onClick={props.funThree}> {props.icon} {props.text} </button>
    </div>
  )
}

export {Button, EmailButton}