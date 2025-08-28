
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashboardOverviewPage from './DashboardOverviewPage';
import SurveysPage from './SurveysPage';
import DataInsightsPage from './DataInsightsPage';

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
             <Routes>
                <Route path="/" element={<DashboardOverviewPage />} />
                <Route path="/surveys" element={<SurveysPage />} />
                <Route path="/data-insights" element={<DataInsightsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
