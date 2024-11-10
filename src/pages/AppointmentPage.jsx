import React from 'react';
import Header from '../components/Header'; // Make sure to include Header if it's part of the layout
import AppointmentAccessMenu from '../components/AppointmentAccessMenu';
import AppointmentSearch from '../components/AppointmentSearch';
import AppointmentDetails from '../components/AppointmentDetails';

const AppointmentPage = () => {
  return (
    <div>
      <Header />
    <div className="bg-customBlue min-h-screen flex flex-col items-center">
      
      

      <div className="w-full max-w-[1000px] mt-10 px-4">
        <AppointmentAccessMenu />

        <div className="mt-6">
          <AppointmentSearch />
        </div>

        <div className="mt-6"> 
          <AppointmentDetails />
        </div>
      </div>
    </div>
    </div>
  );
};

export default AppointmentPage;
