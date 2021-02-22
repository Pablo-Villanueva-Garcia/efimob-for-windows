import { Link } from "react-router-dom";

const Myhome = () => {
  return (
    <div className="xs100 flex just_center">
      <div className="flex_dir_col ali_center mt20">
        <h1 className="pl20 size30 font">WELCOME EFIMOB</h1>
        <p className="mt20 pl20 size20 font">
          Access the registry to see the content
        </p>
        <Link to="/login">
          <p className="mt20 boton1 pl20 size20 font">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default Myhome;
