'use client';

const FormCard = ({ title, subtitle, children, footer }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-3 sm:p-4 lg:p-6">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-4 sm:p-6 lg:p-8">
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600">{subtitle}</p>
          </div>

          {children}
          {footer && (
            <div className="mt-4 sm:mt-6 lg:mt-8 text-center">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
