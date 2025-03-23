
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';
import StatCard from '../components/StatCard';
import { Input } from '@/components/ui/input';
import { Search, TrendingUp, Trophy, Calendar } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const teamsMockData = [
  {
    id: 1,
    name: 'Mumbai Indians',
    shortName: 'MI',
    logo: 'https://via.placeholder.com/150/0078BC/FFFFFF?text=MI',
    primaryColor: '#0078BC',
    secondaryColor: '#003B7A',
    titles: 5,
    matches: 248,
  },
  {
    id: 2,
    name: 'Chennai Super Kings',
    shortName: 'CSK',
    logo: 'https://via.placeholder.com/150/FDB913/FFFFFF?text=CSK',
    primaryColor: '#FDB913',
    secondaryColor: '#F25C19',
    titles: 5,
    matches: 234,
  },
  {
    id: 3,
    name: 'Royal Challengers Bangalore',
    shortName: 'RCB',
    logo: 'https://via.placeholder.com/150/EC1C24/FFFFFF?text=RCB',
    primaryColor: '#EC1C24',
    secondaryColor: '#851419',
    titles: 0,
    matches: 242,
  },
  {
    id: 4,
    name: 'Kolkata Knight Riders',
    shortName: 'KKR',
    logo: 'https://via.placeholder.com/150/3A225D/FFFFFF?text=KKR',
    primaryColor: '#3A225D',
    secondaryColor: '#5E2F92',
    titles: 2,
    matches: 237,
  },
  {
    id: 5,
    name: 'Delhi Capitals',
    shortName: 'DC',
    logo: 'https://via.placeholder.com/150/0078BC/FFFFFF?text=DC',
    primaryColor: '#0078BC',
    secondaryColor: '#282C70',
    titles: 0,
    matches: 233,
  },
  {
    id: 6,
    name: 'Punjab Kings',
    shortName: 'PBKS',
    logo: 'https://via.placeholder.com/150/A4282A/FFFFFF?text=PBKS',
    primaryColor: '#A4282A',
    secondaryColor: '#DD1F2D',
    titles: 0,
    matches: 227,
  },
  {
    id: 7,
    name: 'Rajasthan Royals',
    shortName: 'RR',
    logo: 'https://via.placeholder.com/150/254AA5/FFFFFF?text=RR',
    primaryColor: '#254AA5',
    secondaryColor: '#EC008C',
    titles: 1,
    matches: 230,
  },
  {
    id: 8,
    name: 'Sunrisers Hyderabad',
    shortName: 'SRH',
    logo: 'https://via.placeholder.com/150/F7A721/FFFFFF?text=SRH',
    primaryColor: '#F7A721',
    secondaryColor: '#F54C00',
    titles: 1,
    matches: 165,
  },
  {
    id: 9,
    name: 'Gujarat Titans',
    shortName: 'GT',
    logo: 'https://via.placeholder.com/150/1C1C1C/FFFFFF?text=GT',
    primaryColor: '#1C1C1C',
    secondaryColor: '#15BAB1',
    titles: 1,
    matches: 48,
  },
  {
    id: 10,
    name: 'Lucknow Super Giants',
    shortName: 'LSG',
    logo: 'https://via.placeholder.com/150/A1D4ED/FFFFFF?text=LSG',
    primaryColor: '#A1D4ED',
    secondaryColor: '#3479B7',
    titles: 0,
    matches: 48,
  },
];

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTeams = teamsMockData.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.shortName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 bg-gradient-to-b from-cricket-pitch/10 to-white">
        <div className="section-container py-8">
          <h1 className="heading-primary text-center mb-4">IPL Teams</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Explore the franchises that have shaped the Indian Premier League since its inception in 2008.
          </p>
        </div>
      </div>
      
      <main className="flex-grow section-container">
        {/* Key Team Stats */}
        <div className="mb-12">
          <div className="stats-grid">
            <StatCard 
              title="Most Titles" 
              value="MI & CSK (5)" 
              icon={<Trophy className="w-6 h-6 text-cricket-ball" />}
              color="bg-gradient-to-br from-white to-cricket-ball/10"
            />
            <StatCard 
              title="Highest Win Rate" 
              value="64.5%" 
              icon={<TrendingUp className="w-6 h-6 text-cricket-accent" />}
              color="bg-gradient-to-br from-white to-cricket-accent/10"
            />
            <StatCard 
              title="Most Matches" 
              value="MI (248)" 
              icon={<Calendar className="w-6 h-6 text-cricket-sky" />}
              color="bg-gradient-to-br from-white to-cricket-sky/10"
            />
            <StatCard 
              title="Total Teams" 
              value="15" 
              icon={<Trophy className="w-6 h-6 text-cricket-pitch" />}
              color="bg-gradient-to-br from-white to-cricket-pitch/10"
            />
          </div>
        </div>
        
        {/* Search & Filter */}
        <div className="mb-8 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder="Search teams..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {/* Teams Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredTeams.map((team) => (
            <TeamCard key={team.id} {...team} />
          ))}
          
          {filteredTeams.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">No teams found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teams;
