'use client';

const Checkbox = ({ 
  name, 
  checked, 
  onChange, 
  error, 
  children, 
  className = '' 
}) => {
  return (
    <div>
      <label className={`flex items-start space-x-3 ${className}`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <span className="text-sm text-gray-600">
          {children}
        </span>
      </label>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Checkbox;
