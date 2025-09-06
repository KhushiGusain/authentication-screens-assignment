'use client';

const Button = ({ 
  type = 'button', 
  children, 
  isLoading = false, 
  disabled = false, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-md font-medium focus:ring-2 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm sm:text-base';
  
  const variants = {
    primary: 'text-white focus:ring-gray-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={variant === 'primary' ? {
        backgroundColor: '#1a414b',
        '--tw-ring-color': '#1a414b'
      } : {}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#0f2a30';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.target.style.backgroundColor = '#1a414b';
        }
      }}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Creating Account...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
