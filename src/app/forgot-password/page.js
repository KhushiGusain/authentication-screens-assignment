'use client';

import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import FormCard from '../../components/ui/FormCard';

export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Reset link sent to:', formData.email);
      setIsSuccess(true);
      
    } catch (error) {
      console.error('Error sending reset link:', error);
      alert('Failed to send reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const footer = (
    <div className="space-y-3">
      <p className="text-sm text-gray-600">
        Remember your password?{' '}
        <Link href="/login" className="underline" style={{ color: '#1a414b' }} onMouseEnter={(e) => e.target.style.color = '#0f2a30'} onMouseLeave={(e) => e.target.style.color = '#1a414b'}>
          Sign in
        </Link>
      </p>
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/register" className="underline" style={{ color: '#1a414b' }} onMouseEnter={(e) => e.target.style.color = '#0f2a30'} onMouseLeave={(e) => e.target.style.color = '#1a414b'}>
          Create account
        </Link>
      </p>
    </div>
  );

  if (isSuccess) {
    return (
      <FormCard 
        title="Check Your Email" 
        subtitle=""
        footer={footer}
      >
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <div className="space-y-3">
            <p className="text-gray-600">
              We've sent a password reset link to:
            </p>
            <p className="font-medium underline text-gray-900">
              {formData.email}
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              Check your email and click the reset link to continue. The link expires in 1 hour.
            </p>
          </div>

          <Button
            onClick={() => {
              setIsSuccess(false);
              setFormData({ email: '' });
            }}
          >
            Send Another Link
          </Button>
        </div>
      </FormCard>
    );
  }

  return (
    <FormCard 
      title="Forgot Password" 
      subtitle="Enter your email address and we'll send you a reset link"
      footer={footer}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            error={errors.email}
            icon={FaEnvelope}
          />
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
        >
          Send Reset Link
        </Button>
      </form>
    </FormCard>
  );
}
