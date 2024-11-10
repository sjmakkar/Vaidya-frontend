import React from 'react';

const AppointmentSearch = () => {
  return (
    <div className="flex items-center justify-between w-[1000px] h-[45px] space-x-6  p-2 ">

<div className="flex items-center text-lg font-semibold text-customTextBlue space-x-2">
  <span>Appointment</span>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke="currentColor" 
    className="h-5 w-5 text-customTextBlue">
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" 
    />
  </svg>
</div>




        <div class="relative w-[710px]">
        <span class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-customTextBlue">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clip-rule="evenodd" />
            </svg>
        </span>
        <input
            type="text" 
            placeholder="Search Appointments..."
            class="w-full h-full pl-10 pr-3 py-1 rounded-md border placeholder-customTextBlue border-customTextBlue focus:outline-none focus:border-blue-500"
        />
        </div>


     
      <button className="bg-blue-500 text-white font-semibold h-[34px] py-1 px-3 rounded-md hover:bg-blue-600 text-sm flex items-center text-nowrap">
        + New Appointment
      </button>
    </div>
  );
};

export default AppointmentSearch;
