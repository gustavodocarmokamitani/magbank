import React, { useState } from "react";
import Hero from '../components/Hero';
import CreditCard from '../components/CreditCard';
import CardList from "../components/CardList";
import CenteredButton from "../components/CenteredButton";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";

import AccountModal from "../components/AccountModal";
import posts from '../data/posts';


const Home = ({ handleClick }) => {

    const [ showModal, setShowModal ] = useState(false);

    return (
    <>        
        <Hero onClick={() => setShowModal(true)}/>
        <CreditCard />
        <CardList posts={posts} />
        <CenteredButton onClick={() => setShowModal(true)}>Abra sua conta</CenteredButton>
        <Institutional />
        <Faq />      
        
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
    );
}

export default Home;