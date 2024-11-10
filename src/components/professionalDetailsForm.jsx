import React from 'react';

const ProfessionalDetailsForm = ({ formData, handleInputChange, nextStep, prevStep }) => {
  return (
    <div className="space-y-6">
      {/* Specialization */}
      <div className="flex flex-col">
        <label htmlFor="specialization" className="text-lg font-semibold text-gray-700">Specialization</label>
        <input
          id="specialization"
          name="specialization"
          type="text"
          value={formData.specialization}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Pediatrician"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Qualification */}
      <div className="flex flex-col">
        <label htmlFor="qualification" className="text-lg font-semibold text-gray-700">Qualification</label>
        <input
          id="qualification"
          name="qualification"
          type="text"
          value={formData.qualification}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., MBBS, MD"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Experience */}
      <div className="flex flex-col">
        <label htmlFor="experience" className="text-lg font-semibold text-gray-700">Experience (in years)</label>
        <input
          id="experience"
          name="experience"
          type="number"
          value={formData.experience}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., 5"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col">
        <label htmlFor="gender" className="text-lg font-semibold text-gray-700">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          className="mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ width: '534px', height: '45px', fontSize: '16px' }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
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

export default ProfessionalDetailsForm;
