import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header class={classes.header}>
        <h1>React Meals </h1>
        <button>Cart</button>
      </header>
      <div>{/* <img src={meals} alt="some_image" /> */}</div>
    </>
  );
};

export default Header;
