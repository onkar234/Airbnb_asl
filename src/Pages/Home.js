import React from 'react';
import './Home.css';
import Menu from './Menu';
import SecondSection from './secondsection';
import Card from './Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Home() {
  return (
    <>
    <SecondSection/>
    <Menu/>
      {/* <div classname='h_section'>
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.99(153) . United States"
          desciption="Plan The Perfect New York Vacation"
          price="From ₹1,299/ person"
          />
        <Card
          src="{require('../images/tajmahal.jpg')}"
          Rating="5.0(1) . Spain"
          desciption="Design your trip to Barcelona with Gemma"
          price="From ₹3,131/ person"
        />
        <Card
          src="{require('../images/tajmahal.jpg')}"
          Rating="4.97(60) · South Korea"
          desciption="Craft a custom trip to Korea with Jay"
          price="From ₹3,475/ person"
        />
        <Card
          src=""
          Rating="4.63(8) . Mexico"
          desciption="Live Tulum like a local"
          price="From ₹620/ person"
        />
        <Card
          src=""
          Rating="5.0(7) . United States"
          desciption="Discover Sunny Fort Lauderdale"
          price="From ₹1,726/ person"
        />
        <Card
          src=""
          Rating="4.75(12) . United States"
          desciption="Plan a trip to amazing Austin"
          price="From ₹2,055/ person"
        />
        </div> */}
        <h5>Plan a trip with help from local Hosts around the world</h5>
        <div className='h_section'>
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.99(153) . United States"
          desciption="Plan The Perfect New York Vacation"
          price="From ₹1,299/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="5.0(1) . Spain"
          desciption="Design your trip to Barcelona with Gemma and Rock"
          price="From ₹3,131/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.97(60) · South Korea"
          desciption="Craft a custom trip to Korea with Jay"
          price="From ₹3,475/ person"
        />
        <Card
           src={require('../images/tajmahal.jpg')}
           Rating="4.63(8) . Mexico"
           desciption="Live Tulum like a local and Enjoy"
           price="From ₹620/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="5.0(7) . United States"
          desciption="Discover Sunny Fort Lauderdale and new People"
          price="From ₹1,726/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.75(12) . United States"
          desciption="Plan a trip to amazing Austin"
          price="From ₹2,055/ person"
        />
      </div>

        <h1>Top Seller</h1>

      <div className='h_section'>
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.86(571) . Poland"
          desciption="Murder Mystery Escape Room Game-perfect for"
          price="From ₹1,299/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.98(3,314) . Itlay"
          desciption="Pasta With the Grandmas and pizzas"
          price="From ₹1,299/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.82(120) . France"
          desciption="'From Paris with laughs' The Scavenger Hunt"
          price="From ₹1,154/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.91(2,594) . Spain"
          desciption="'No Spain no Game' The Fabulous game "
          price="From ₹1,319/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.92(3,344) . Czech"
          desciption="The Plague Doctor of Prague-Halloween"
          price="From ₹1,345/ person"
        />
        <Card
          src={require('../images/tajmahal.jpg')}
          Rating="4.98(4,482) . Mexico"
          desciption="make Mexican Street Tacos with a Pro Chef"
          price="From ₹2,067/ person"
        />
      </div>
    </>
  )
}

export default Home
