'use client';

import { useState, useRef, useEffect } from 'react';

const OtpInput = ({ length = 5, onComplete, onResend, onEnter }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[activeIndex]) {
      inputRefs.current[activeIndex].focus();
    }
  }, [activeIndex]);

  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      setActiveIndex(index + 1);
    }

    if (newOtp.every(digit => digit !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }
  };

  const handleKeyDown = (index, e) => {

    if (e.key === 'Backspace') {
      e.preventDefault();
      const newOtp = [...otp];
      
      if (otp[index]) {

        newOtp[index] = '';
        setOtp(newOtp);
      } else if (index > 0) {

        setActiveIndex(index - 1);
        newOtp[index - 1] = '';
        setOtp(newOtp);
      }
    }
    

    if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      setActiveIndex(index - 1);
    }
    
    if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      setActiveIndex(index + 1);
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      if (otp.every(digit => digit !== '') && onEnter) {
        onEnter();
      }
    }

    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      navigator.clipboard.readText().then(text => {
        const digits = text.replace(/\D/g, '').slice(0, length);
        const newOtp = Array(length).fill('');
        digits.split('').forEach((digit, i) => {
          if (i < length) newOtp[i] = digit;
        });
        setOtp(newOtp);
        setActiveIndex(Math.min(digits.length, length - 1));
        
        if (digits.length === length && onComplete) {
          onComplete(digits);
        }
      });
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex justify-center space-x-3">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={digit}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={() => handleFocus(index)}
          className={`
            w-12 h-12 text-center text-xl font-semibold border-2 rounded-lg
            focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
            transition-all duration-200
            ${activeIndex === index 
              ? 'border-teal-500 bg-teal-50' 
              : digit 
                ? 'border-teal-300 bg-white' 
                : 'border-gray-300 bg-white hover:border-gray-400'
            }
          `}
        />
      ))}
    </div>
  );
};

export default OtpInput;
