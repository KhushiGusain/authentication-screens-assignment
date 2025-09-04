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
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-md focus:ring-2 transition-colors text-sm ${
          hasError ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        style={{
          '--tw-ring-color': '#1a414b',
          '--tw-border-opacity': '1'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#1a414b';
          e.target.style.boxShadow = '0 0 0 2px rgba(26, 65, 75, 0.2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = hasError ? '#ef4444' : '#d1d5db';
          e.target.style.boxShadow = 'none';
        }}
          {...props}
        />
        {type === 'password' && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
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
