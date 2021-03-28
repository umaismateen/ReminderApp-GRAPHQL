import React from 'react';
import {Route,Switch, Redirect,withRouter} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import GetCat from './containers/Reminders/Reminders';
import NewReminder from './containers/NewReminder/NewReminder';



const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/addReminder" exact component={NewReminder} />
        <Route path="/" exact component={GetCat} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
}

export default withRouter(App);
 