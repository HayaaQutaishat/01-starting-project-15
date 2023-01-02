import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const changePwFormHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={changePwFormHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
