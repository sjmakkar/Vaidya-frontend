import React, { useState } from 'react';
import Step1 from './PersonalDetailsForm';
import Step2 from './professionalDetailsForm';
import Step3 from './ClinicDetailsForm';
import Step4 from './AccountDetailsForm';

const SignupForm = () => {
  const [step, setStep] = useState(1);


  const [formData, setFormData] = useState({
    fullName: '',
    userEmail: '',
    aadharCard: '',
    specialization: '',
    qualification: '',
    experience: '',
    address: '',
    phoneNumber: '',
    gender: '',
    clinicName: '',
    openingTime: '',
    closingTime: '',
    password: ''
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle moving to the next step
  const nextStep = () => setStep(step + 1);

  // Function to handle moving to the previous step
  const prevStep = () => setStep(step - 1);


  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/doctor/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6" style={{ fontSize: '32px' }}>Signup</h1>

      {step === 1 && (
        <Step1
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleInputChange={handleInputChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          handleSubmit={handleSubmit} // Form submission in the final step
        />
      )}
    </div>
  );
};

export default SignupForm;
