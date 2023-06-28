import React, { useState } from 'react';

function FootprintCalculator() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    energyConsumption: '',
    transportation: '',
    wasteManagement: '',
    supplyChain: '',
    isLoading: false,
    error: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      businessName,
      energyConsumption,
      transportation,
      wasteManagement,
      supplyChain
    } = formData;

    if (!name || !email || !businessName || !energyConsumption || !transportation || !wasteManagement || !supplyChain) {
      setFormData({ ...formData, error: 'Please fill in all the required fields.' });
      return;
    }

    setFormData({ ...formData, isLoading: true, error: '' });

    // Simulate sending data to the server and generating the report
    setTimeout(() => {
      // Perform server request
      // ...

      // After receiving the response, handle the generated report
      const report = { /* Received report data from the server */ };
      setFormData({ ...formData, isLoading: false });

      console.log('Generated report:', report);
    }, 2000); // Simulating a delay of 2 seconds
  };

  return (
    <div className='profile-container'>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="businessName">Business Name:</label>
          <input type="text" id="businessName" name="businessName" value={formData.businessName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="energyConsumption">Energy Consumption:</label>
          <input type="number" id="energyConsumption" name="energyConsumption" value={formData.energyConsumption} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="transportation">Transportation:</label>
          <input type="text" id="transportation" name="transportation" value={formData.transportation} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="wasteManagement">Waste Management:</label>
          <input type="text" id="wasteManagement" name="wasteManagement" value={formData.wasteManagement} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="supplyChain">Supply Chain:</label>
          <input type="text" id="supplyChain" name="supplyChain" value={formData.supplyChain} onChange={handleChange} required />
        </div>
        {formData.error && <div>{formData.error}</div>}
        <button type="submit" disabled={formData.isLoading}>{formData.isLoading ? 'Loading...' : 'Submit'}</button>
      </form>
    </div>
  );
}

export default FootprintCalculator;
