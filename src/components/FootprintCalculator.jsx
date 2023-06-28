import React, { useState } from 'react';

const FootprintCalculator = () => {
  const [electricityUsage, setElectricityUsage] = useState('');
  const [naturalGasUsage, setNaturalGasUsage] = useState('');
  const [transportationUsage, setTransportationUsage] = useState('');
  const [totalEmissions, setTotalEmissions] = useState(null);

  const calculateEmissions = (event) => {
    event.preventDefault();

    // Calculate total emissions based on user inputs
    const emissions = calculateTotalEmissions(electricityUsage, naturalGasUsage, transportationUsage);

    // Update the total emissions state
    setTotalEmissions(emissions);

    // Clear the form fields
    setElectricityUsage('');
    setNaturalGasUsage('');
    setTransportationUsage('');
  };

  const calculateTotalEmissions = (electricity, naturalGas, transportation) => {
    // Calculate emissions based on specific formulas for each category
    const electricityEmissions = electricity * 0.5; // Example calculation for electricity emissions
    const naturalGasEmissions = naturalGas * 0.7; // Example calculation for natural gas emissions
    const transportationEmissions = transportation * 0.9; // Example calculation for transportation emissions

    // Sum up the emissions from each category
    const totalEmissions = electricityEmissions + naturalGasEmissions + transportationEmissions;

    return totalEmissions;
  };

  return (
    <div className="footprint-calculator">
      <h2>Footprint Calculator for SMEs</h2>
      <form onSubmit={calculateEmissions}>
        <div className="form-group">
          <label htmlFor="electricity-usage">Electricity Usage (kWh)</label>
          <input
            type="number"
            id="electricity-usage"
            value={electricityUsage}
            onChange={(event) => setElectricityUsage(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="natural-gas-usage">Natural Gas Usage (m³)</label>
          <input
            type="number"
            id="natural-gas-usage"
            value={naturalGasUsage}
            onChange={(event) => setNaturalGasUsage(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="transportation-usage">Transportation Usage (km)</label>
          <input
            type="number"
            id="transportation-usage"
            value={transportationUsage}
            onChange={(event) => setTransportationUsage(event.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate Emissions</button>
      </form>
      {totalEmissions !== null && (
        <div className="result">
          <h3>Total Emissions: {totalEmissions} tons CO2e</h3>
        </div>
      )}
    </div>
  );
};

export default FootprintCalculator;
