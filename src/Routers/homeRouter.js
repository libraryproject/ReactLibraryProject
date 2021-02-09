import React, { useState } from 'react';
import Header from '../Home/header';
import News from '../Home/newsBox';
import Quote from '../Home/quotation';
import SuggestionBox from '../Home/suggestionBox';
import Footer from '../Home/footer';
import data from '../Home/body.json';
import newsData from "../Home/home.json";
import blogdata from "../Home/blogs.json";
import Books from '../Home/Books';
import Blogs from '../Home/blogs';
import Vision from '../Home/Vision';
import visiondata from '../Home/Vision.json';
import Volunteer from '../Home/Volunteer';
import volunteerdata from '../Home/Volunteer.json';
import careerdata from '../Home/Career.json';
import Contactus from '../ContactUs/CForm';
import Donate from '../Home/Donate';
import Signin from '../Login/loginForm';
import AdminSignin from '../Login/adminSignin';
import signup from '../Signup/Form';
import Userhome from '../Routers/userRouting';
import AdminHome from '../Routers/adminRouting';
import home1 from '../Routers/userRouting'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
const news = newsData.newsBox;
function HomeRouter() {
  const [logged, setLogged] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/Home" component={home1} />
        <Route exact path="/Vision" render={() => (<Vision data={visiondata} />)} />
        <Route exact path="/Volunteer" render={() => (<Volunteer data={volunteerdata} />)} />
        <Route exact path="/Blogs" render={() => (<Blogs data={blogdata} />)} />
        <Route exact path="/Careers" render={() => (<Volunteer data={careerdata} />)} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/Contact Us" component={Contactus} />
        <Route exact path="/Contactus" component={Contactus} />
        <Route exact path="/Donate" component={Donate} />
        <Route exact path="/signin" render={() => (<Signin setLogged={setLogged} data={true} />)} />
        <Route exact path="/Membership" component={signup} />
        <Route exact path="/signin/userhome" render={() => logged ? <Userhome /> : (<Signin setLogged={setLogged} data={false} />)} />
        <Route exact path="/Admin" render={() => (<AdminSignin setLogged={setLogged} data={true} />)} />
        <Route  exact path="/Admin/AdminHome" render={() => logged ? <AdminHome /> : (<AdminSignin logged={setLogged} data={false} />)} />
      </Switch>
    </Router>
  )

}
const content = data.Content;
let obj;
const home = () => (
  <div>
    <Header />
    <Quote />
    <News news={news} />
    {
      content
        .map(childObj => {
          obj = childObj[Object.keys(childObj)]
          return <SuggestionBox genre={obj} />
        }
        )
    }
    <Footer />
  </div>
);

export default HomeRouter