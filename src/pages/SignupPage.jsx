import React from 'react';
import SignupForm from '../components/SignupForm';
import backgroundImage from '../assets/hero-bg.jpg'; 
import LoginForm from '../components/LoginForm';

const SignupPage = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >

<div 
        className="absolute text-left p-8 backdrop-blur-sm" 
        style={{
          width: '300px',
          left: '100px', 
          top: '100px',
        }}
      >
        <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          <span className="text-blue-400 tracking-wide">Welcome to</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Vaidya
          </span>
        </h2>
        <p className="text-gray-100 text-lg leading-relaxed opacity-90 drop-shadow-md tracking-wide">
          <span className="text-black">
            Appointments made easy. Join us in making health management simpler and more accessible for everyone!
          </span>
          
        </p>
      </div>
      <div
        className="absolute bg-white shadow-lg rounded-lg p-8" 
        style={{
          width: '676px',
          height: '600px',
          left: '740px',  
          top: '64px', 
        }}
      >
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
