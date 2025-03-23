
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import PowerBIEmbed from '../components/PowerBIEmbed';
import LeaderboardTable from '../components/LeaderboardTable';
import TeamCard from '../components/TeamCard';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronRight, Trophy, Users, Calendar, TrendingUp } from 'lucide-react';

// Mock data - in a real app, this would come from an API or context
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
  }
];

const topRunScorersMock = [
  { id: 1, rank: 1, previousRank: 1, name: 'Virat Kohli', teamName: 'RCB', teamLogo: 'https://via.placeholder.com/150/EC1C24/FFFFFF?text=RCB', statValue: 7763, statLabel: 'Runs' },
  { id: 2, rank: 2, previousRank: 3, name: 'Shikhar Dhawan', teamName: 'PBKS', teamLogo: 'https://via.placeholder.com/150/A4282A/FFFFFF?text=PBKS', statValue: 6617, statLabel: 'Runs' },
  { id: 3, rank: 3, previousRank: 2, name: 'Rohit Sharma', teamName: 'MI', teamLogo: 'https://via.placeholder.com/150/0078BC/FFFFFF?text=MI', statValue: 6211, statLabel: 'Runs' },
  { id: 4, rank: 4, previousRank: 5, name: 'David Warner', teamName: 'DC', teamLogo: 'https://via.placeholder.com/150/0078BC/FFFFFF?text=DC', statValue: 6087, statLabel: 'Runs' },
  { id: 5, rank: 5, previousRank: 4, name: 'MS Dhoni', teamName: 'CSK', teamLogo: 'https://via.placeholder.com/150/FDB913/FFFFFF?text=CSK', statValue: 5082, statLabel: 'Runs' },
];

const topWicketTakersMock = [
  { id: 1, rank: 1, previousRank: 2, name: 'Yuzvendra Chahal', teamName: 'RR', teamLogo: 'https://via.placeholder.com/150/254AA5/FFFFFF?text=RR', statValue: 187, statLabel: 'Wickets' },
  { id: 2, rank: 2, previousRank: 1, name: 'Dwayne Bravo', teamName: 'CSK', teamLogo: 'https://via.placeholder.com/150/FDB913/FFFFFF?text=CSK', statValue: 183, statLabel: 'Wickets' },
  { id: 3, rank: 3, previousRank: 4, name: 'Piyush Chawla', teamName: 'MI', teamLogo: 'https://via.placeholder.com/150/0078BC/FFFFFF?text=MI', statValue: 179, statLabel: 'Wickets' },
  { id: 4, rank: 4, previousRank: 3, name: 'Bhuvneshwar Kumar', teamName: 'SRH', teamLogo: 'https://via.placeholder.com/150/F7A721/FFFFFF?text=SRH', statValue: 170, statLabel: 'Wickets' },
  { id: 5, rank: 5, previousRank: 5, name: 'Ravichandran Ashwin', teamName: 'RR', teamLogo: 'https://via.placeholder.com/150/254AA5/FFFFFF?text=RR', statValue: 171, statLabel: 'Wickets' },
];

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Key Stats Section */}
        <section className="section-container">
          <div className="mb-12 text-center">
            <h2 className="heading-secondary mb-4">IPL by the Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A statistical overview of the Indian Premier League from 2008 to 2024
            </p>
          </div>
          
          <div className="stats-grid">
            <StatCard 
              title="Total Matches" 
              value="1000+" 
              icon={<Calendar className="w-6 h-6 text-cricket-sky" />}
              color="bg-gradient-to-br from-white to-cricket-sky/10"
            />
            <StatCard 
              title="Tournament Winners" 
              value="8" 
              icon={<Trophy className="w-6 h-6 text-cricket-ball" />}
              color="bg-gradient-to-br from-white to-cricket-ball/10"
            />
            <StatCard 
              title="Total Players" 
              value="900+" 
              icon={<Users className="w-6 h-6 text-cricket-accent" />}
              color="bg-gradient-to-br from-white to-cricket-accent/10"
            />
            <StatCard 
              title="Highest Score" 
              value="286/5" 
              icon={<TrendingUp className="w-6 h-6 text-cricket-pitch" />}
              color="bg-gradient-to-br from-white to-cricket-pitch/10"
            />
          </div>
        </section>
        
        {/* Featured Dashboard Section */}
        <section className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="mb-12 text-center">
              <h2 className="heading-secondary mb-4">Interactive Dashboards</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the data through our interactive Power BI dashboards
              </p>
            </div>
            
            <div className="animate-slide-up">
              {/* Note: This is a placeholder. In production, use actual Power BI embed URL */}
              <PowerBIEmbed 
                embedUrl="about:blank" 
                title="IPL Overview Dashboard"
                className="shadow-xl"
              />
              
              <div className="mt-6 text-center">
                <Link to="/dashboards" className="inline-flex items-center text-cricket-dark hover:text-cricket-accent">
                  View all dashboards
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Teams Section */}
        <section className="section-container">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="heading-secondary mb-2">Featured Teams</h2>
              <p className="text-gray-600">
                The legendary franchises that make the IPL exciting
              </p>
            </div>
            <Link to="/teams" className="mt-4 md:mt-0 btn-primary">
              View All Teams
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamsMockData.map((team) => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </section>
        
        {/* Leaderboards Section */}
        <section className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="mb-12 text-center">
              <h2 className="heading-secondary mb-4">Player Leaderboards</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Top performers across all seasons of the IPL
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <LeaderboardTable 
                title="Top Run Scorers"
                items={topRunScorersMock}
              />
              <LeaderboardTable 
                title="Top Wicket Takers"
                items={topWicketTakersMock}
              />
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/players" className="btn-primary">
                View All Players
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
