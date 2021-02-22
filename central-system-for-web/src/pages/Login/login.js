import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="xs100 just_center mt20">
      <div className="centrado flex_dir_col ali_center">
        <h1>insert a temporary login user, for access</h1>
        <div className="xs100 mt20 just_center">
          <input type="text" placeholder="User"></input>
          <Link to="/chargetpoint">
            <button>LOGIN</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
