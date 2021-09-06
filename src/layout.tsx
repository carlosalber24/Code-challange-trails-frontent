import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from './components/header';
import Home from './containers/home';
import Register from './containers/register';

const Layout: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Switch>
            <Route path="/app" component={Home} />
            <Route path="/register" component={Register} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
};

export default Layout;