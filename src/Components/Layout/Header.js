import image from "../../Assests/meals.jpeg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = () => {
  return (
    <>
      <header class={classes.header}>
        <h1>React Meals </h1>
        <HeaderCardButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="some_image" />
      </div>
    </>
  );
};

export default Header;
