import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { t } = useTranslation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // In a real app, you'd validate credentials here
      login();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gole-sand p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 relative">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gole-blue">{t('appName')}</h1>
          <p className="text-gole-dark mt-2">{t('tagline')}</p>
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-gole-green mb-6">{t('loginTitle')}</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              {t('emailLabel')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gole-green"
            />
          </div>
          <div>
            <div className="flex justify-between items-baseline">
              <label htmlFor="password" aria-label="Password" className="block text-gray-700 text-sm font-bold mb-2">
                {t('passwordLabel')}
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-gole-blue hover:underline">
                {t('forgotPasswordLink')}
              </Link>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-gole-green"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gole-red hover:bg-red-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 text-lg"
          >
            {t('signInButton')}
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          {t('noAccount')}{' '}
          <Link to="/signup" className="font-medium text-gole-blue hover:underline">
            {t('signUpLink')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;