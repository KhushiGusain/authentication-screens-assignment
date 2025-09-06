'use client';

import { useState, useEffect } from 'react';
import { FaLock } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import FormCard from '../../components/ui/FormCard';

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(true);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const tokenParam = searchParams.get('token');
    setToken(tokenParam || '');
    setIsTokenValid(!!tokenParam);
  }, [searchParams]);

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

    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      
      console.log('Password reset successful for token:', token);
      alert('Password reset successful! Redirecting to login...');
      router.push('/login');
      
    } catch (error) {
      console.error('Password reset error:', error);
      alert('Password reset failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const footer = (
    <div className="space-y-2 sm:space-y-3">
      <p className="text-xs sm:text-sm text-gray-600">
        Remember your password?{' '}
        <Link href="/login" className="text-teal-600 hover:text-teal-500 font-medium">
          Sign in
        </Link>
      </p>
      <p className="text-xs sm:text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/register" className="text-teal-600 hover:text-teal-500 font-medium">
          Create account
        </Link>
      </p>
    </div>
  );

  return (
    <FormCard 
      title="Reset Password" 
      subtitle="Enter your new password"
      footer={footer}
    >

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <Input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            placeholder="Enter new password"
            error={errors.newPassword}
            icon={FaLock}
            showPassword={showNewPassword}
            onTogglePassword={() => setShowNewPassword(!showNewPassword)}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm new password"
            error={errors.confirmPassword}
            icon={FaLock}
            showPassword={showConfirmPassword}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        </div>

        <Button
          type="submit"
          isLoading={isLoading}
        >
          Reset Password
        </Button>
      </form>
    </FormCard>
  );
}

