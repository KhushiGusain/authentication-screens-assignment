'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormCard from '../../../components/ui/FormCard';
import Button from '../../../components/ui/Button';

export default function EnableTwoFactorPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const isLoggedIn = localStorage.getItem('isAuthenticated') === 'true';
        
        if (!isLoggedIn) {
          router.push('/login');
          return;
        }
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleSetupAuthenticator = () => {
    router.push('/twofactor/qrcode');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <FormCard 
      title="Enable 2-Step Verification" 
      subtitle="Secure your account with an authenticator app"
    >
      <div className="space-y-4 sm:space-y-6">
        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
          <h3 className="font-medium text-gray-900 text-sm sm:text-base">How it works:</h3>
          <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 sm:space-y-2">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span>Scan a QR code with your authenticator app</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span>Enter a 6-digit code when signing in</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
              <span>Your account stays secure even if your password is compromised</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
            Recommended apps: Google Authenticator, Microsoft Authenticator, Authy
          </p>
          
          <Button
            onClick={handleSetupAuthenticator}
            className="w-full"
          >
            Set up with Authenticator
          </Button>
        </div>
      </div>
    </FormCard>
  );
}
