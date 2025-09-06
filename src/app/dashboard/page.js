'use client';

import { useRouter } from 'next/navigation';
import DashboardLayout from '../../components/layout/DashboardLayout';

export default function DashboardPage() {
  const router = useRouter();

  const dashboardCards = [
    {
      id: 'welcome',
      icon: 'M5 13l4 4L19 7',
      title: 'Welcome',
      subtitle: 'Account verified',
      content: 'Your account is active and secure. Welcome back!',
      type: 'info'
    },
    {
      id: 'activity',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Recent Activity',
      subtitle: 'Last login: Today',
      content: [
        '• Login successful',
        '• Profile updated',
        '• Settings changed'
      ],
      type: 'list'
    },
    {
      id: 'security',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: 'Security Status',
      subtitle: '2FA not enabled',
      action: {
        text: 'Enable 2FA →',
        onClick: () => router.push('/twofactor/enable')
      },
      type: 'action'
    },
    {
      id: 'account',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      title: 'Account Overview',
      subtitle: 'Profile & settings',
      content: [
        '• Profile: Complete',
        '• Email: Verified',
        '• Member since: Jan 2024'
      ],
      type: 'list'
    },
    {
      id: 'actions',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Quick Actions',
      subtitle: 'Common tasks',
      content: [
        { text: 'Update Profile →', onClick: () => router.push('/profile') },
        { text: 'Change Password →', onClick: () => router.push('/change-password') }
      ],
      type: 'buttons'
    },
    {
      id: 'system',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'System Status',
      subtitle: 'All systems operational',
      content: [
        '• Database: Online',
        '• API: Healthy',
        '• Storage: Available'
      ],
      type: 'list'
    }
  ];

  const renderCardContent = (card) => {
    switch (card.type) {
      case 'info':
        return <p className="text-xs sm:text-sm text-gray-600">{card.content}</p>;
      
      case 'list':
        return (
          <div className="space-y-1.5 sm:space-y-2">
            {card.content.map((item, index) => (
              <div key={index} className="text-xs sm:text-sm text-gray-600">{item}</div>
            ))}
          </div>
        );
      
      case 'action':
        return (
          <button
            onClick={card.action.onClick}
            className="text-xs sm:text-sm text-teal-600 hover:text-teal-500 font-medium"
          >
            {card.action.text}
          </button>
        );
      
      case 'buttons':
        return (
          <div className="space-y-1.5 sm:space-y-2">
            {card.content.map((button, index) => (
              <button
                key={index}
                onClick={button.onClick}
                className="block w-full text-left text-xs sm:text-sm text-teal-600 hover:text-teal-500 font-medium"
              >
                {button.text}
              </button>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto p-3 sm:p-4 lg:p-6">
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">Welcome to your Dashboard</h1>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600">Manage your account and security settings</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {dashboardCards.map((card) => (
            <div key={card.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 sm:p-4 lg:p-6">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <div className="ml-2 sm:ml-3 lg:ml-4">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{card.subtitle}</p>
                </div>
              </div>
              {renderCardContent(card)}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}