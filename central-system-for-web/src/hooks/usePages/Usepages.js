import { useHistory, useLocation } from "react-router-dom";
import {
  organizationList,
  chargetpointList,
  home,
  organizationof,
  chargetpointof,
} from "../../constants/urls";

export const usePages = () => {
  const history = useHistory();
  let location = useLocation();
  const isLoginPage = location.pathname.startsWith("/login/");
  const isOrganizationPage = location.pathname.startsWith("/organization/");
  const isOrganizationList = location.pathname === organizationList;
  const ischargetpointPage = location.pathname.startsWith("/chargetpoint/");
  const ischargetpointList = location.pathname === chargetpointList;
  const isHome = location.pathname === home;

  return {
    isOrganizationPage,
    isOrganizationList,
    isHome,
    ischargetpointList,
    ischargetpointPage,
    isLoginPage,

    gotolist: (search) =>
      history.push(organizationList + (search ? "?search=" + search : "")),
    gotolistcharget: (search) =>
      history.push(chargetpointList + (search ? "?search=" + search : "")),
    gotoOrganizationpage: (id) => history.push(organizationof(id)),
    gotochargetpointpage: (id) => history.push(chargetpointof(id)),
    gohome: () => history.push(home),
  };
};
