import {
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { UseGetOrganizationList } from "../../../hooks/api/index";
import { useState } from "react";
import { chargetpointList } from "../../../constants/urls";
import logo from "../../../logo.svg";
const Organizationlist = (props) => {
  return (
    <div className="xs90 m40 l30 mb20 mt20 flex backgroundpage box just_AR ">
      <Link to={"/organization/" + props._id}>
        <div className="xs100 mb20 p20 textbox">
          <h1 className="size30">{props.name}</h1>
        </div>
      </Link>
    </div>
  );
};

const parseQueryString = (queryString) => {
  if (!queryString) {
    return {};
  }

  var search = queryString.substring(1);
  return JSON.parse(
    '{"' +
      decodeURI(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};

const Organization = () => {
  const [page, setpage] = useState(0);
  const [pagesize] = useState(9);
  const location = useLocation();
  const queryString = parseQueryString(location.search);

  const { response, loading, error } = UseGetOrganizationList({
    name: queryString.search,
    page,
    pagesize,
  });

  const organization = response;

  if (loading) {
    return (
      <div className="just_center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

  if (error) {
    return <div>Error</div>;
  }

  const pages = Math.ceil(organization?.totalElements / 10);

  return (
    <div>
      <div className="xs100 just_AR flex_frw ">
        {organization?.contents.map((r) => (
          <Organizationlist {...r} />
        ))}
      </div>

      <div className="just_AR absoluto xs80 m100 l100 panelbuttons flex_frw">
        {page > 0 && (
          <button onClick={() => setpage(page - 1)}>
            <FontAwesomeIcon icon={faFastBackward} />
          </button>
        )}
        <p className="xs20 l10 font">Pages :{pages}</p>
        {page + 1 < pages && (
          <button onClick={() => setpage(page + 1)}>
            <FontAwesomeIcon icon={faFastForward} />
          </button>
        )}
        <p className="xs40 l20 font">
          Total Elements :{organization?.contents.length}
        </p>
        <Link className="xs30 l20 font" to={chargetpointList}>
          See charging points
        </Link>
      </div>
    </div>
  );
};

export default Organization;
