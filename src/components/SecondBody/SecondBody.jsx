import { useState } from "react";
import { Button, EmailButton } from "../Button/Button";
import styles from "./SecondBody.module.css";

import { BsChatLeftText } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";


const SecondBody = () => {
  const onViaChat = () => {
    console.log("This is from Via Chat Button");
  };
  const onViaCall = () => {
    console.log("This is from Via Call Button");
  };
  const onViaEmail = () => {
    console.log("This is from Via Email Button");
  };

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Your_Text, setYour_Text] = useState("");

  const [Message, setMessage] = useState("");

  const onSubmitt = (event) => {
    event.preventDefault();

    // Name = event.target[0].value;
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setYour_Text(event.target[2].value);

    
    setMessage("✓ Form Submitted Successfully..!!!");      

    // console.log("Name :" ,event.target[0].value);
    // console.log("Email :" ,event.target[1].value);
    // console.log("Text :" ,event.target[2].value);
  };
  return (
    <>
      <div className={styles.form_and_24Support}>
        {/* Button part */}
        <div>
          <div className={styles.cht_and_call_btn}>
            <Button
              funOne={onViaChat}
              icon={<BsChatLeftText />}
              text="Via Support Chat"
            />
            <Button funTwo={onViaCall} icon={<MdCall />} text="Via Call" />
          </div>
          <div className={styles.mail_btn}>
            <EmailButton
              funThree={onViaEmail}
              icon={<MdOutlineMailOutline />}
              text="Via Email Form"
            />
          </div>
          <div>
            <form onSubmit={onSubmitt}>
              <div className={styles.form_controller}>
                <label className={styles.nameAndEmailLabel} htmlFor="name">Name</label>
                <input type="text" name="name" required />

                <label className={styles.nameAndEmailLabel} htmlFor="email">E-Mail</label>
                <input type="email" name="email" required />

                <label className={styles.textLabel} htmlFor="text">Text</label>
                <textarea
                  className={styles.txtarea}
                  name="text"
                  rows="6"
                  required
                ></textarea>

                
                <div className={styles._Message}>
                    <Button text="SUBMIT" />
                    {Message}
                </div>
              </div>
            </form>
          </div>
          <div className={styles.userDataDiv}>
            <>
              <div className={styles.userData}>
                {"Name :" + " " + Name} <br />
                {"Email :" + " " + Email}
                <br />
                <p className={styles.userDataText}>{"Text :" + " " + Your_Text}</p>
              </div>
              
            </>
          </div>
        </div>

        {/* Form part */}

        <div>
          <img
            className={styles._247pic}
            src="images/Service 24_7-pana.svg"
            alt="24Support_Photo"
          />
        </div>
      </div>
    </>
  );
};

export default SecondBody;
