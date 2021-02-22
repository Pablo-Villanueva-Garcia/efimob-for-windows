import "./css/App.css";
import "./css/estructura.css";
import "./css/reset.css";
import Myhome from "./pages/Home/index";
import Organization from "./pages/Organization/list/Organizationlist";
import Chargetpoint from "./pages/Chargetpoint/list/Chargetpointlist";
import { Oneorganization } from "./pages/Organization/one_organization/index";
import { Onechargetpoint } from "./pages/Chargetpoint/one_chargetpoint/index";
import HeaderMain from "./components/header/header";
import { Createorganization } from "./pages/Organization/new_organization/neworganization";
import { Createchargetpoint } from "./pages/Chargetpoint/new_chargetpoint/newchargetpoint";
import { Editorganization } from "./pages/Organization/edit_organization/editorganization";
import { Editchargetpoint } from "./pages/Chargetpoint/edit_chargetpoint/editchargetpoint";
import LoginPage from "./pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  organizationList,
  organizationbyid,
  organizationnew,
  home,
  login,
  editorganizationof,
  editchargetpointof,
  chargetpointnew,
} from "./constants/urls";

function App() {
  return (
    <div>
      <Router>
        <HeaderMain />
        <Switch>
          <Route path={editorganizationof(":id")}>
            <Editorganization />
          </Route>

          <Route path={organizationnew}>
            <Createorganization />
          </Route>

          <Route path={organizationbyid}>
            <Oneorganization />
          </Route>
          <Route path={login}>
            <LoginPage />
          </Route>

          <Route path={editchargetpointof(":id")}>
            <Editchargetpoint />
          </Route>

          <Route path={chargetpointnew}>
            <Createchargetpoint />
          </Route>

          <Route path="/chargetpoint/:id">
            <Onechargetpoint />
          </Route>
          <Route path="/chargetpoint">
            <Chargetpoint />
          </Route>

          <Route path={organizationList}>
            <Organization />
          </Route>

          <Route exact path={home}>
            <Myhome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
