'use client';

import { forwardRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Input = forwardRef(({ 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  error, 
  icon: Icon, 
  showPassword, 
  onTogglePassword,
  className = '',
  ...props 
}, ref) => {
  const hasError = !!error;
  
  return (
    <div>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        )}
        <input
          ref={ref}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-2.5 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm ${
            hasError ? 'border-red-500' : 'border-gray-300'
          } ${className}`}
          {...props}
        />
        {type === 'password' && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
          </button>
        )}
      </div>
      {hasError && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
