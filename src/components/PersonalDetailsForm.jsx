import React from 'react';

const PersonalDetailsForm = ({ formData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-6">
      {/* Full Name */}
      <div className="flex flex-col">
        <label htmlFor="full-name" className="text-lg font-semibold text-gray-700">Full Name</label>
        <input
          id="full-name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., John Doe"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="userEmail" className="text-lg font-semibold text-gray-700">Email</label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          value={formData.userEmail}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., john.doe@example.com"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-lg font-semibold text-gray-700">Phone Number</label>
        <input
          id="phone"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 9876543210"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Aadhar Card */}
      <div className="flex flex-col">
        <label htmlFor="aadhar" className="text-lg font-semibold text-gray-700">Aadhar Card</label>
        <input
          id="aadhar"
          name="aadharCard"
          type="text"
          value={formData.aadharCard}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 1234-5678-9012"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Button Container */}
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

export default PersonalDetailsForm;
