'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormCard from '../../../components/ui/FormCard';
import Button from '../../../components/ui/Button';

export default function QrCodePage() {
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

  const handleBack = () => {
    router.push('/twofactor/enable');
  };

  const handleNext = () => {
    alert('QR Code scanned! Next step would be to verify the setup.');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <FormCard 
      title="Scan QR Code" 
      subtitle="Use your authenticator app to scan this code"
    >
      <div className="space-y-6">
        <div className="text-center space-y-4">
          <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              <p className="text-sm text-gray-500">QR Code Placeholder</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-gray-600">
              Open your authenticator app and scan this QR code to set up two-step verification.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Secret Key:</strong> JBSWY3DPEHPK3PXP
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleNext}
            className="w-full"
          >
            I've scanned the code
          </Button>
          
          <Button
            variant="outline"
            onClick={handleBack}
            className="w-full"
          >
            Back
          </Button>
        </div>
      </div>
    </FormCard>
  );
}
