import React from 'react'
import Navbar from '../components/Navbar' 
import HeroImg2 from '../components/HeroImg2'
import Footer from '../components/Footer'
import Form from '../components/Form'

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT." text="Let's have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contacts