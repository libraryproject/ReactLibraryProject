import React from 'react';
import SuggestionBox from '../Home/suggestionBox';
import Footer from '../Home/footer';
import data from '../UserHome/body.json';
import Contactus from '../ContactUs/CForm';
import Donate from '../Home/Donate';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../UserHome/header';
import Profile from '../UserHome/Profile';
import History from '../UserHome/History';
import Returns from '../UserHome/Returns';
import Blogs from '../Home/blogs';
import Vision from '../Home/Vision';
import visiondata from '../Home/Vision.json';
import Volunteer from '../Home/Volunteer';
import volunteerdata from '../Home/Volunteer.json';
import careerdata from '../Home/Career.json';
import Contactus1 from '../ContactUs/CForm';
import blogdata from "../Home/blogs.json";
import Books from '../Home/Books';

function UserRouting() {
    return (
        <Router>
            <Switch>
                <Route exact path="/Home" component={home} />
                <Route exact path="/Vision" render={() => (<Vision data={visiondata} />)} />
                <Route exact path="/Volunteer" render={() => (<Volunteer data={volunteerdata} />)} />
                <Route exact path="/Blogs" render={() => (<Blogs data={blogdata} />)} />
                <Route exact path="/Careers" render={() => (<Volunteer data={careerdata} />)} />
                <Route exact path="/Books" component={Books} />
                <Route exact path="/Contact Us" component={Contactus1} />
                <Route exact path="/signin/userhome" component={home} />
                <Route exact path="/signin/userhome/history" component={History} />
                <Route exact path="/signin/userhome/Donate" component={Donate} />
                <Route exact path="/signin/userhome/Returns" component={Returns} />
                <Route exact path="/signin/userhome/ContactUs" component={Contactus} />
                <Route exact path="/signin/userhome/profile" component={Profile} />
            </Switch>
            <Footer />
        </Router>
    )

}
const content = data.Content;
let obj;
const home = () => (
    <div>
        <Header name="User Name" />
        {
            content
                .map(childObj => {
                    obj = childObj[Object.keys(childObj)]
                    return <SuggestionBox genre={obj} />
                }
                )
        }

    </div>
);

export default UserRouting