import React from 'react';

const ClinicDetailsForm = ({ formData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-6">
      {/* Clinic Name */}
      <div className="flex flex-col">
        <label htmlFor="clinic-name" className="text-lg font-semibold text-gray-700" style={{ fontSize: '16px' }}>Clinic Name</label>
        <input
          id="clinic-name"
          name="clinicName" // Ensure name matches formData key
          type="text"
          value={formData.clinicName} // Bind value to formData
          onChange={handleInputChange} // Call handler on change
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Health Clinic"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Opening Time */}
      <div className="flex flex-col">
        <label htmlFor="opening-time" className="text-lg font-semibold text-gray-700" style={{ fontSize: '16px' }}>Opening Time</label>
        <input
          id="opening-time"
          name="openingTime" // Ensure name matches formData key
          type="time"
          value={formData.openingTime} // Bind value to formData
          onChange={handleInputChange} // Call handler on change
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Closing Time */}
      <div className="flex flex-col">
        <label htmlFor="closing-time" className="text-lg font-semibold text-gray-700" style={{ fontSize: '16px' }}>Closing Time</label>
        <input
          id="closing-time"
          name="closingTime" // Ensure name matches formData key
          type="time"
          value={formData.closingTime} // Bind value to formData
          onChange={handleInputChange} // Call handler on change
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Address */}
      <div className="flex flex-col">
        <label htmlFor="address" className="text-lg font-semibold text-gray-700" style={{ fontSize: '16px' }}>Address</label>
        <input
          id="address"
          name="address" // Ensure name matches formData key
          type="text"
          value={formData.address} // Bind value to formData
          onChange={handleInputChange} // Call handler on change
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 123 Main St"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          className="py-2 px-4 bg-gray-300 rounded-lg text-gray-700 hover:bg-gray-400"
          onClick={prevStep}
        >
          Previous
        </button>
        <button
          type="button"
          className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClinicDetailsForm;
