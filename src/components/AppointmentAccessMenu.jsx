import React from 'react'
import { Link } from 'react-router-dom'

const AppointmentAccessMenu = () => {
  return (
    <div className='flex justify-between box-border w-[1000px] h-[39px] bg-white rounded-b-lg items-center shadow-slate-400 text-customTextBlue'>
        <ul className='flex  text-center space-x-8 pl-12 font-bold'>
             <li>
                <Link to="/" className=" hover:text-blue-100 transition">Appointments</Link>
              </li>
              <li>
                <Link to="/patients" className=" hover:text-blue-100 transition">Patients</Link>
              </li>
              <li>
                <Link to="/Prescriptions" className=" hover:text-blue-100 transition">Prescription</Link>
              </li>
        </ul>


        <span className='pr-5 font-bold' >
          Dr. Shubham Makkar 

        </span>

    </div>
  )
}

export default AppointmentAccessMenu