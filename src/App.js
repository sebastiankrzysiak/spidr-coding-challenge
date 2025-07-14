import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [guess, setGuess] = useState('');
  const [spidrPin, setSpidrPin] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [guessError, setGuessError] = useState('');
  const [spidrPinError, setSpidrPinError] = useState('');

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setFirstNameError('');
    setLastNameError('');
    setPhoneNumberError('');
    setEmailError('');
    setGuessError('');
    setSpidrPinError('');
    setSuccessMessage('');

    const nameRegex = /^[A-Za-z]+$/;

    if (!firstName) {
      setFirstNameError('First name is required');
      return;
    } else if (!nameRegex.test(firstName)) {
      setFirstNameError('First name must contain only letters');
      return;
    } else {
      setFirstNameError('');
    }

    if (!lastName) {
      setLastNameError('Last name is required');
      return;
    } else if (!nameRegex.test(lastName)) {
      setLastNameError('Last name must contain only letters');
      return;
    } else {
      setLastNameError('');
    }

    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required');
      return;
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Phone number must be in format 123-456-7890');
      return;
    } else {
      setPhoneNumberError('');
    }

    if (!email) {
      setEmailError('Email is required');
      return;
    } else if (!email.includes('@')) {
      setEmailError("Email must contain an '@' symbol");
      return;
    } else {
      setEmailError('');
    }

    const guessRegex = /^\d+(\.\d{2})?$/;

    if (!guess || parseFloat(guess) <= 0 || !guessRegex.test(guess)) {
      setGuessError('A valid amount of money is required');
      return;
    } else {
      setGuessError('');
    }

    const pinRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

    if (!spidrPin) {
      setSpidrPinError('Spidr PIN is required');
      return;
    } else if (!pinRegex.test(spidrPin)) {
      setSpidrPinError("PIN must be 16 digits in format ####-####-####-####");
      return;
    } else {
      setSpidrPinError('');
    }

    setSuccessMessage('Form submitted successfully!');

    console.log({
      firstName,
      lastName,
      phoneNumber,
      email,
      guess,
      spidrPin
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={firstName ? 'filled' : ''}>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {firstNameError && <p className="error">{firstNameError}</p>}
      </div>
      <div className={lastName ? 'filled' : ''}>
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {lastNameError && <p className="error">{lastNameError}</p>}
      </div>
      <div className={phoneNumber ? 'filled' : ''}>
        <label>Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          placeholder="123-456-7890"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {phoneNumberError && <p className="error">{phoneNumberError}</p>}
      </div>
      <div className={email ? 'filled' : ''}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <div className={guess ? 'filled' : ''}>
        <label>Guess Amount ($)</label>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="0.00"
        />
        {guessError && <p className="error">{guessError}</p>}
      </div>
      <div className={spidrPin ? 'filled' : ''}>
        <label>Spidr PIN </label>
        <input
          type="text"
          value={spidrPin}
          onChange={(e) => setSpidrPin(e.target.value)}
          placeholder="####-####-####-####"
        />
        {spidrPinError && <p className="error">{spidrPinError}</p>}
      </div>
      <button type="submit">Submit</button>
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
}

export default App;