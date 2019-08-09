import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import HeroImage from './containers/heroImage/heroImage';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';
import Mission from './components/OurMission/OurMission';
import Careers from './components/Careers/Careers';
import Contact from './components/ContactUs/ContactUs';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/mission" component={Mission} />
          <Route path="/careers" component={Careers} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={HeroImage} />

          
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
