import React, { useEffect }  from 'react';
import { Button, Container, ProgressBar, Row } from 'react-bootstrap';
import './appealsDonations.css'
import Slider from "react-slick";
import { useDispatch } from 'react-redux';
import { fetchUserDonationData } from '../../../features/counter/volunteerSlice';
import { useSelector } from 'react-redux';
import SingleDonationCard from '../SingleDonationCard/SingleDonationCard';

const AppealsDonations = () => {
  const dispatch = useDispatch();
  const donationData = useSelector( state => state.volunteerData.donationData )
  console.log(donationData);

  useEffect( ()=>{
    dispatch(fetchUserDonationData())
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
        <div className='appeal-donation-container'>
            <Container>
                <h5 style={{fontFamily: "Dancing Script, cursive"}} className='text-center'>We Change Your Life & World</h5>
                <h1 style={{fontWeight:'bold'}} className='text-center display-4'>Appeals & Donations</h1>

        <Slider {...settings}>
          {
            donationData.map( dt => <SingleDonationCard key={dt.id} data={dt}/> )
          }
        </Slider>

            </Container>
        </div>
    );
};

export default AppealsDonations;