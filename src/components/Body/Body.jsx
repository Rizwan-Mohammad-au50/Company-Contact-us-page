
import SecondBody from "../SecondBody/SecondBody";
import styles from "./Body.module.css";

const Body = () => {
  return (
    <>
    <div>
        <h1 className={styles.contactHeading}>CONTACT US</h1>
    </div>
    <div>
        <p className={styles.someDesc}>LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
    </div>
    <SecondBody />
    </>
  )
}

export default Body