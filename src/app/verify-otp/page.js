'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormCard from '../../components/ui/FormCard';
import Button from '../../components/ui/Button';
import OtpInput from '../../components/ui/OtpInput';

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleOtpComplete = (completedOtp) => {
    setOtp(completedOtp);
    if (completedOtp.length === 5) {
      handleVerify();
    }
  };

  const handleVerify = async () => {
    if (otp.length !== 5) return;

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('OTP verification successful:', otp);
      router.push('/dashboard');
      
    } catch (error) {
      console.error('OTP verification error:', error);
      alert('Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      console.log('Resending OTP...');
      alert('Code resent');
      
    } catch (error) {
      console.error('Resend error:', error);
      alert('Failed to resend code. Please try again.');
    }
  };

  const footer = (
    <div className="space-y-3">
      <p className="text-xs text-gray-600">
        Didn't receive the code?{' '}
        <button
          onClick={handleResend}
          className="text-teal-600 cursor-pointer hover:text-teal-500 font-medium underline"
        >
          Resend code
        </button>
      </p>
    </div>
  );

  return (
    <>
      <FormCard 
        title="Verify OTP" 
        subtitle="Enter the 5-digit code sent to your email"
        footer={footer}
      >
        <div className="space-y-6">
          <div className="flex justify-center">
            <OtpInput 
              length={5} 
              onComplete={handleOtpComplete}
              onEnter={handleVerify}
            />
          </div>

          <Button
            onClick={handleVerify}
            disabled={otp.length !== 5}
            isLoading={isLoading}
            className="w-full"
          >
            Verify
          </Button>
        </div>
      </FormCard>
    </>
  );
}
