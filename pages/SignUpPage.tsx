import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSwitcher from '../components/LanguageSwitcher';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [community, setCommunity] = useState('');

  const { login } = useAuth(); // Simulate signup by logging in
  const { t } = useTranslation();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // In a real app, you would register the user here
    console.log({ name, email, password, community });
    login();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gole-sand p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 relative">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gole-blue">{t('appName')}</h1>
        </div>
        
        <h2 className="text-2xl font-semibold text-center text-gole-green mb-6">{t('signUpTitle')}</h2>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">{t('fullNameLabel')}</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="input-field" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('emailLabel')}</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input-field" />
          </div>
          <div>
            <label htmlFor="password" aria-label="Password" className="block text-gray-700 text-sm font-bold mb-2">{t('passwordLabel')}</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input-field" />
          </div>
          <div>
            <label htmlFor="confirmPassword" aria-label="Confirm Password" className="block text-gray-700 text-sm font-bold mb-2">{t('confirmPasswordLabel')}</label>
            <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="input-field" />
          </div>
           <div>
            <label htmlFor="community" className="block text-gray-700 text-sm font-bold mb-2">{t('communityLabel')}</label>
            <select id="community" value={community} onChange={(e) => setCommunity(e.target.value)} required className="input-field">
              <option value="" disabled>{t('communityLabel')}</option>
              <option value="youth">{t('youthOption')}</option>
              <option value="women">{t('womenOption')}</option>
              <option value="pwd">{t('pwdOption')}</option>
            </select>
          </div>
          <style>{`.input-field { box-shadow: none; appearance: none; border: 1px solid #d1d5db; border-radius: 0.25rem; width: 100%; padding: 0.75rem 1rem; color: #374151; line-height: 1.25; } .input-field:focus { outline: none; box-shadow: 0 0 0 2px #0a9396; }`}</style>
          <button
            type="submit"
            className="w-full bg-gole-red hover:bg-red-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 text-lg"
          >
            {t('signUpButton')}
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          {t('haveAccount')}{' '}
          <Link to="/login" className="font-medium text-gole-blue hover:underline">
            {t('signInLink')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
