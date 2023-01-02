import classes from "./ProfileForm.module.css";
import { useRef } from "react";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();

  const changePwFormHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;
    console.log(enteredNewPassword);
  };
  return (
    <form className={classes.form} onSubmit={changePwFormHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
