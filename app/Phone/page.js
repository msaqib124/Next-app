"use client"
import { useState } from 'react';

const countryCodes = {
    US: '+1',
    CA: '+1',
    GB: '+44',
    AU: '+61',
    // Add more country codes as needed
  };
  
  const countryNames = {
    US: 'United States',
    CA: 'Canada',
    GB: 'United Kingdom',
    AU: 'Australia',
    // Add more country names as needed
  };

   

export default function Phone() {
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    for (const [code, prefix] of Object.entries(countryCodes)) {
        if (value.startsWith(prefix)) {
          setCountry(code);
          break;
        }
      }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        country: countryNames[country] || '',
        phone,
      };
      console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="country">Country:</label>
        <select id="country" value={country} onChange={(e) => {setCountry(e.target.value)}}>
            <option value="">Select a country</option>
            {Object.entries(countryNames).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}