import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'
import AddWordPage from "./page/AddWordPage";
import LoginPage from "./page/LoginPage";
import Topbar from "./component/Topbar"
import MainPage from "./page/MainPage";
import RegisterPage from "./page/RegisterPage";

const StyledWrapper = styled.div`

`

const App = () => {

  return (
    <StyledWrapper>

      {/* <div><Link to="/">Home Page</Link></div>
      <div><Link to="/add-word">Add Word Page</Link></div>
      <div><Link to="/login">Login Page</Link></div>
      <div><Link to="/regist">Register Page</Link></div> */}

      <Switch>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/regist">
          <RegisterPage />
        </Route>

        <Route path="/">
          <MainPage />
        </Route>

      </Switch>

    </StyledWrapper>
  );
}

export default App;