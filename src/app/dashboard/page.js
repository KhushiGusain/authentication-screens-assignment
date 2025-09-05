'use client';

import { useRouter } from 'next/navigation';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto p-4 sm:p-4 lg:p-6">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Welcome to your Dashboard</h1>
          <p className="text-sm sm:text-base text-gray-600">Manage your account and security settings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Welcome</h3>
                <p className="text-xs sm:text-sm text-gray-600">Account verified</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">Your account is active and secure. Welcome back!</p>
          </div>


          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h3>
                <p className="text-xs sm:text-sm text-gray-600">Last login: Today</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">• Login successful</div>
              <div className="text-sm text-gray-600">• Profile updated</div>
              <div className="text-sm text-gray-600">• Settings changed</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Security Status</h3>
                <p className="text-xs sm:text-sm text-gray-600">2FA not enabled</p>
              </div>
            </div>
            <button
              onClick={() => router.push('/twofactor/enable')}
              className="text-sm text-teal-600 hover:text-teal-500 font-medium"
            >
              Enable 2FA →
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Account Overview</h3>
                <p className="text-xs sm:text-sm text-gray-600">Profile & settings</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">• Profile: Complete</div>
              <div className="text-sm text-gray-600">• Email: Verified</div>
              <div className="text-sm text-gray-600">• Member since: Jan 2024</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Quick Actions</h3>
                <p className="text-xs sm:text-sm text-gray-600">Common tasks</p>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => router.push('/profile')}
                className="block w-full text-left text-sm text-teal-600 hover:text-teal-500 font-medium"
              >
                Update Profile →
              </button>
              <button
                onClick={() => router.push('/change-password')}
                className="block w-full text-left text-sm text-teal-600 hover:text-teal-500 font-medium"
              >
                Change Password →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">System Status</h3>
                <p className="text-xs sm:text-sm text-gray-600">All systems operational</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">• Database: Online</div>
              <div className="text-sm text-gray-600">• API: Healthy</div>
              <div className="text-sm text-gray-600">• Storage: Available</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}