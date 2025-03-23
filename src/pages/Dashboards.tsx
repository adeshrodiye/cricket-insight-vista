
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PowerBIEmbed from '../components/PowerBIEmbed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dashboards = [
  {
    id: 'overview',
    title: 'IPL Overview',
    description: 'A comprehensive overview of IPL statistics across all seasons',
    embedUrl: 'about:blank', // Replace with actual Power BI embed URL
  },
  {
    id: 'teams',
    title: 'Team Performance',
    description: 'Detailed analysis of team performances, wins, and strategies',
    embedUrl: 'about:blank', // Replace with actual Power BI embed URL
  },
  {
    id: 'players',
    title: 'Player Statistics',
    description: 'In-depth player statistics, rankings, and performance metrics',
    embedUrl: 'about:blank', // Replace with actual Power BI embed URL
  },
  {
    id: 'matches',
    title: 'Match Analysis',
    description: 'Detailed breakdowns of matches, innings, and key moments',
    embedUrl: 'about:blank', // Replace with actual Power BI embed URL
  },
];

const Dashboards = () => {
  const [activeTab, setActiveTab] = useState(dashboards[0].id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 bg-gradient-to-b from-cricket-pitch/10 to-white">
        <div className="section-container py-8">
          <h1 className="heading-primary text-center mb-4">Interactive Dashboards</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our collection of interactive Power BI dashboards that provide deep insights into IPL cricket data from 2008 to 2024.
          </p>
        </div>
      </div>
      
      <main className="flex-grow section-container">
        <Tabs defaultValue={dashboards[0].id} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {dashboards.map((dashboard) => (
              <TabsTrigger 
                key={dashboard.id} 
                value={dashboard.id}
                className="data-[state=active]:bg-cricket-dark data-[state=active]:text-white"
              >
                {dashboard.title}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {dashboards.map((dashboard) => (
            <TabsContent key={dashboard.id} value={dashboard.id} className="animate-fade-in">
              <div className="mb-6">
                <h2 className="heading-secondary mb-2">{dashboard.title}</h2>
                <p className="text-gray-600">{dashboard.description}</p>
              </div>
              
              <PowerBIEmbed 
                embedUrl={dashboard.embedUrl} 
                title={dashboard.title}
                className="shadow-lg"
              />
              
              <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-3">How to use this dashboard</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Use filters on the right to refine the data by season, team, or player</li>
                  <li>Click on any visualization to see more detailed information</li>
                  <li>Hover over charts to see specific data points</li>
                  <li>Use the buttons at the bottom to export or share insights</li>
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboards;
