import React from 'react';
import meal1 from '../img/meals/meal1.jpg';
import logo from '../img/logo1.png';
import tw from '../img/tw.svg';
import fb from '../img/fb.svg';
import pint from '../img/pint.svg';
import gp from '../img/gp.svg';
import vi from '../img/vi.svg';

const ReservationPage = () => {
    const reservations = [
      {
        id: 1,
        title: 'Meal 1',
        image: meal1,
      },
    ];

    return (
        <div className="h-screen flex justify-between">
          <div className="flex flex-col justify-between border-r-4 border-gray-100 p-0 w-1/4 ml-2 mb-2">
            <div className="">
              <img src={logo} alt="logoImg" className="w-36 mb-3" />
              <ul className="flex flex-col gap-0 ">
                <li className="w-full bg-green hover:bg-green active:bg-green focus:ring hover:text-white p-2"><a href="#new" className="">Meal</a></li>
                <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">Reserve</a></li>
                <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">My Reservation</a></li>
                <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">Add meal</a></li>
                <li className="w-full hover:bg-green active:bg-green hover:text-white p-2"><a href="#new" className="">Delete meal</a></li>
              </ul>
            </div>
        
