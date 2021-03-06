import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Overview from '../adminPages/Overview';
import AddDevices from '../adminPages/AddDevices';
import ViewBranches from '../adminPages/ViewBranches';
import ViewDevices from '../adminPages/ViewDevices';
import ViewOrganisation from '../adminPages/ViewOrganisation';
import Messages from '../adminPages/Messages';
import Error from '../adminPages/Error';

import ScrollToTop from '../helpers/ScrollToTop';

import AdminHeader from '../components/AdminHeader';
import TopBar from '../components/AdminTopBar';

function AdminPages() {
  return (
    <div>
      <AdminHeader />

      <main className='auth-container'>
        <TopBar />

        <ScrollToTop>
          <div className='page-content'>
            <Switch>
              <Route exact path='/' component={Overview} />
              <Route path='/add-devices' component={AddDevices} />
              <Route path='/view-branches' component={ViewBranches} />
              <Route path='/view-devices' component={ViewDevices} />
              <Route path='/view-organisation' component={ViewOrganisation} />
              <Route path='/messages' component={Messages} />

              <Route component={Error} />
            </Switch>
          </div>
        </ScrollToTop>
      </main>
    </div>
  );
}

export default AdminPages;
