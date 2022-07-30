//Created by bash script
import styles from "./BracketLayout.module.css";

const BracketLayout = (props) => {
  const classes = `${styles.BracketLayout} ${
    props.className ? props.className : ""
  }`;
  return (
    <div className={classes}>
      <div className="squareBrackets">
        <h2>Lorem Ipsum</h2>
        <img src="https://picsum.photos/seed/2/400/200"></img>
        <p>
          Urna nunc id cursus metus aliquam eleifend mi in nulla. Dui faucibus
          in ornare quam. Purus viverra accumsan in nisl nisi scelerisque eu
          ultrices. Leo in vitae turpis massa. Odio facilisis mauris sit amet
          massa vitae tortor. Odio euismod lacinia at quis risus sed vulputate
          odio. Semper risus in hendrerit gravida. Vulputate mi sit amet mauris
          commodo quis imperdiet massa. Leo urna molestie at elementum eu
          facilisis sed odio. Sed ullamcorper morbi tincidunt ornare massa eget
          egestas purus. Donec enim diam vulputate ut.
        </p>
        <button>Click Me</button>
      </div>
      <div className="squareBrackets">
        <h2>Ipsum Test</h2>
        <img src="https://picsum.photos/seed/3/400/200"></img>

        <p>
          Urna nunc id cursus metus aliquam eleifend mi in nulla. Dui faucibus
          in ornare quam. Purus viverra accumsan in nisl nisi scelerisque eu
          ultrices. Leo in vitae turpis massa. Odio facilisis mauris sit amet
          massa vitae tortor. Odio euismod lacinia at quis risus sed vulputate
          odio. Semper risus in hendrerit gravida. Vulputate mi sit amet mauris
          commodo quis imperdiet massa. Leo urna molestie at elementum eu
          facilisis sed odio. Sed ullamcorper morbi tincidunt ornare massa eget
          egestas purus. Donec enim diam vulputate ut.
        </p>
      </div>
      <div className="squareBrackets">
        <h2>Lorem Carre</h2>
        <img src="https://picsum.photos/seed/4/400/200"></img>

        <p>
          Urna nunc id cursus metus aliquam eleifend mi in nulla. Dui faucibus
          in ornare quam. Purus viverra accumsan in nisl nisi scelerisque eu
          ultrices. Leo in vitae turpis massa. Odio facilisis mauris sit amet
          massa vitae tortor. Odio euismod lacinia at quis risus sed vulputate
          odio. Semper risus in hendrerit gravida. Vulputate mi sit amet mauris
          commodo quis imperdiet massa. Leo urna molestie at elementum eu
          facilisis sed odio. Sed ullamcorper morbi tincidunt ornare massa eget
          egestas purus. Donec enim diam vulputate ut.
        </p>
      </div>
    </div>
  );
};
export default BracketLayout;
