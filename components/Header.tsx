
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div>
            <h1 className="text-3xl font-bold text-gole-blue">{t('appName')}</h1>
            <p className="text-sm text-gray-500">{t('tagline')}</p>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={logout}
              className="px-4 py-2 text-md font-semibold text-white bg-gole-red rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gole-red transition-all duration-200"
            >
              {t('logout')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
