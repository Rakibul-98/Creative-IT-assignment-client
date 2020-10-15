import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Sponsor from '../Sponsor/Sponsor';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sponsor></Sponsor>
            <Services></Services>
            <Projects></Projects>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;