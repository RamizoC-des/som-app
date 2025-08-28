
import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <div className="relative">
      <select
        value={language}
        onChange={handleChange}
        className="appearance-none bg-white border border-gray-300 rounded-md py-2 px-3 pr-8 text-sm font-medium text-gole-dark focus:outline-none focus:ring-2 focus:ring-gole-blue"
      >
        <option value={Language.EN}>English</option>
        <option value={Language.SW}>Kiswahili</option>
        <option value={Language.SO}>Soomaali</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
