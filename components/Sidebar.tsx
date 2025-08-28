
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const SurveysIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
const InsightsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>;

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center px-4 py-3 text-md font-medium rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-gole-blue text-white shadow-md'
        : 'text-gray-600 hover:bg-gole-sand hover:text-gole-dark'
    }`;

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white p-4 flex-shrink-0 border-r border-gray-200">
        <h2 className="text-xl font-bold text-gole-dark mb-6 pl-2">{t('appName')}</h2>
      <nav className="space-y-2">
        <NavLink to="/" end className={navLinkClasses}>
          <DashboardIcon />
          <span className="ml-3">{t('sidebarDashboard')}</span>
        </NavLink>
        <NavLink to="/surveys" className={navLinkClasses}>
          <SurveysIcon />
          <span className="ml-3">{t('sidebarSurveys')}</span>
        </NavLink>
        <NavLink to="/data-insights" className={navLinkClasses}>
          <InsightsIcon />
          <span className="ml-3">{t('sidebarDataInsights')}</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
