import React, { useState } from 'react';

const AppointmentDetails = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 5;

        const appointments = [
            { slotId: 1, time: '10:00 AM', patientName: 'John Doe', attendantName: 'Dr. Smith', phoneNumber: '123-456-7890', status: 'Scheduled' },
            { slotId: 2, time: '11:00 AM', patientName: 'Jane Doe', attendantName: 'Dr. Lee', phoneNumber: '234-567-8901', status: 'Visited' },
            { slotId: 3, time: '12:00 PM', patientName: 'Alex Johnson', attendantName: 'Dr. Williams', phoneNumber: '345-678-9012', status: 'Visited' },
            { slotId: 4, time: '1:00 PM', patientName: 'Chris Lee', attendantName: 'Dr. Brown', phoneNumber: '456-789-0123', status: 'Scheduled' },
            { slotId: 5, time: '2:00 PM', patientName: 'Pat Green', attendantName: 'Dr. White', phoneNumber: '567-890-1234', status: 'Visited' },
            // Add more sample data as needed
        ];


  
  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);
  const currentData = appointments.slice(
    (currentPage - 1) * appointmentsPerPage,
    currentPage * appointmentsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  
  const getStatusClass = (status) => {
    switch (status) {
      case 'Visited':
        return 'bg-green-100 text-green-600';
      case 'Scheduled':
        return 'bg-yellow-100 text-yellow-600';
      case 'Waiting':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="w-full max-w-[1000px] bg-white rounded-lg shadow-md overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="">
          <th className="px-4 py-2 text-left">SlotID</th>
            <th className="px-4 py-2 text-left">Time</th>
            <th className="px-4 py-2 text-left">Patient Name</th>
            <th className="px-4 py-2 text-left">Attendant Name</th>
            <th className="px-4 py-2 text-left">Contact Number</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((appointment, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="px-4 py-2">{appointment.slotId}</td>
              <td className="px-4 py-2">{appointment.time}</td>
              <td className="px-4 py-2">{appointment.patientName}</td>
              <td className="px-4 py-2">{appointment.attendantName}</td>
              <td className="px-4 py-2">{appointment.phoneNumber}</td>
              
              
              <td className="px-4 py-2">
                <span className={`px-2 py-1 text-sm font-medium rounded-full ${getStatusClass(appointment.status)}`}>
                  {appointment.status}
                </span>
              </td>
              <td className="px-4 py-2">
                {appointment.status === 'Scheduled' && (
                  <button className="text-blue-600 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                  <path d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
                  <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z" />
                </svg>
                </button>
                )}
                {appointment.status === 'Visited' && (
                  <button className="text-blue-600 hover:underline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                  <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clip-rule="evenodd" />
                </svg>
                </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center p-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 text-white bg-blue-500 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 text-white bg-blue-500 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AppointmentDetails;
