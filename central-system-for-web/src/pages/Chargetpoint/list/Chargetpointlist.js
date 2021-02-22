import {
  faFastBackward,
  faFastForward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { UseGetChargetpointList } from "../../../hooks/api/index";
import { useState } from "react";
import logo from "../../../logo.svg";
const ChargetpointList = (props) => {
  return (
    <div className="xs90 m40 l30 mb20 mt20 flex backgroundpage box just_AR ">
      <Link to={"/chargetpoint/" + props._id}>
        <div className="xs100 mb20 p20 textbox">
          <h1 className="size30">{props.identify}</h1>
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

const Chargetpoint = () => {
  const [page, setpage] = useState(0);
  const [pagesize] = useState(9);
  const location = useLocation();
  const queryString = parseQueryString(location.search);

  const { response, loading, error } = UseGetChargetpointList({
    identify: queryString.search,
    page,
    pagesize,
  });

  const chargetpoint = response;

  if (loading) {
    return (
      <div className="just_center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

  if (error) {
    return <div className="just_center flex_dir_col">
    <img src={logo} className="App-logo" alt="logo" />
    <p className="font just_center">It is possible that the connection with the server is not being established</p>
  </div>
  }

  const pages = Math.ceil(chargetpoint?.totalElements / 10);

  return (
    <div>
      <div className="xs100 just_AR flex_frw ">
        {chargetpoint?.contents.map((r) => (
          <ChargetpointList {...r} />
        ))}
      </div>

      <div className="just_AR absoluto xs100 panelbuttons">
        {page > 0 && (
          <button onClick={() => setpage(page - 1)}>
            <FontAwesomeIcon icon={faFastBackward} />
          </button>
        )}
        <p className="xs20 font">Pages :{pages}</p>
        {page + 1 < pages && (
          <button onClick={() => setpage(page + 1)}>
            <FontAwesomeIcon icon={faFastForward} />
          </button>
        )}
        <p className="xs40 font">
          Total Elements :{chargetpoint?.contents.length}
        </p>
      </div>
    </div>
  );
};

export default Chargetpoint;
