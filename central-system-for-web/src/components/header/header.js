import "./header.css";
import { usePages } from "../../hooks/usePages/Usepages";

import { Link } from "react-router-dom";

function HeaderMain() {
  const {
    isOrganizationPage,
    isOrganizationList,
    ischargetpointPage,
    ischargetpointList,
    isLoginPage,
    isHome,
    gotolist,
    gotolistcharget,
  } = usePages();

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      const search = e.target.value;
      gotolist(search);
    }
  };

  const searchHandlercharget = (e) => {
    if (e.key === "Enter") {
      const search = e.target.value;
      gotolistcharget(search);
    }
  };

  return (
    <div className="xs100 relativo">
      <div className="header just_AR flex_frw">
        {isHome && <h1>HOME</h1>}
        {isOrganizationPage && <h1>ORGANIZATION</h1>}
        {isLoginPage && <h1>LOGIN PAGE</h1>}
        {isOrganizationList && <h1>LIST ORGANIZATION</h1>}
        {isOrganizationList && (
          <input
            className="mb20"
            type="text"
            placeholder="search"
            onKeyPress={searchHandler}
          ></input>
        )}
        {isOrganizationPage && (
          <button className="font" onClick={(e) => gotolist()}>
            Back
          </button>
        )}
        {isOrganizationList && (
          <Link to="/organization/new">
            <p>Create</p>
          </Link>
        )}
        {ischargetpointPage && <h1>CHARGETPOINT</h1>}
        {ischargetpointList && <h1 className="pt10">LIST CHARGETPOINT</h1>}
        {ischargetpointList && (
          <input
            className="mb20"
            type="text"
            placeholder="search"
            onKeyPress={searchHandlercharget}
          ></input>
        )}
        {ischargetpointPage && (
          <button className="font" onClick={(e) => gotolistcharget()}>
            Back
          </button>
        )}
        {ischargetpointList && (
          <Link to="/chargetpoint/new">
            <p>Create</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default HeaderMain;
