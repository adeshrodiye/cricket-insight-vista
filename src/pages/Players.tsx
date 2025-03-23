
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlayerCard from '../components/PlayerCard';
import StatCard from '../components/StatCard';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  TrendingUp, 
  Trophy, 
  Users,
  Filter
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data - in a real app, this would come from an API
const playersMockData = [
  {
    id: 1,
    name: 'Virat Kohli',
    role: 'Batsman',
    teamName: 'Royal Challengers Bangalore',
    teamColor: '#EC1C24',
    imageUrl: 'https://via.placeholder.com/300x400?text=Virat+Kohli',
    stats: {
      matches: 246,
      runs: 7263,
      average: 37.24,
      strikeRate: 130.02,
    },
  },
  {
    id: 2,
    name: 'Rohit Sharma',
    role: 'Batsman',
    teamName: 'Mumbai Indians',
    teamColor: '#0078BC',
    imageUrl: 'https://via.placeholder.com/300x400?text=Rohit+Sharma',
    stats: {
      matches: 243,
      runs: 6211,
      average: 29.30,
      strikeRate: 130.26,
    },
  },
  {
    id: 3,
    name: 'Jasprit Bumrah',
    role: 'Bowler',
    teamName: 'Mumbai Indians',
    teamColor: '#0078BC',
    imageUrl: 'https://via.placeholder.com/300x400?text=Jasprit+Bumrah',
    stats: {
      matches: 120,
      wickets: 157,
      economyRate: 7.39,
    },
  },
  {
    id: 4,
    name: 'MS Dhoni',
    role: 'Wicket-keeper Batsman',
    teamName: 'Chennai Super Kings',
    teamColor: '#FDB913',
    imageUrl: 'https://via.placeholder.com/300x400?text=MS+Dhoni',
    stats: {
      matches: 250,
      runs: 5082,
      average: 39.09,
      strikeRate: 135.92,
    },
  },
  {
    id: 5,
    name: 'Yuzvendra Chahal',
    role: 'Bowler',
    teamName: 'Rajasthan Royals',
    teamColor: '#254AA5',
    imageUrl: 'https://via.placeholder.com/300x400?text=Yuzvendra+Chahal',
    stats: {
      matches: 145,
      wickets: 187,
      economyRate: 7.67,
    },
  },
  {
    id: 6,
    name: 'Ravindra Jadeja',
    role: 'All-rounder',
    teamName: 'Chennai Super Kings',
    teamColor: '#FDB913',
    imageUrl: 'https://via.placeholder.com/300x400?text=Ravindra+Jadeja',
    stats: {
      matches: 226,
      runs: 2692,
      wickets: 151,
      average: 26.12,
      economyRate: 7.74,
    },
  },
  {
    id: 7,
    name: 'KL Rahul',
    role: 'Batsman',
    teamName: 'Lucknow Super Giants',
    teamColor: '#A1D4ED',
    imageUrl: 'https://via.placeholder.com/300x400?text=KL+Rahul',
    stats: {
      matches: 119,
      runs: 4163,
      average: 46.26,
      strikeRate: 134.53,
    },
  },
  {
    id: 8,
    name: 'Rashid Khan',
    role: 'Bowler',
    teamName: 'Gujarat Titans',
    teamColor: '#1C1C1C',
    imageUrl: 'https://via.placeholder.com/300x400?text=Rashid+Khan',
    stats: {
      matches: 103,
      wickets: 133,
      economyRate: 6.75,
    },
  },
];

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [teamFilter, setTeamFilter] = useState('all');
  
  const filteredPlayers = playersMockData.filter(player => {
    // Apply search filter
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Apply role filter
    const matchesRole = roleFilter === 'all' || 
      player.role.toLowerCase().includes(roleFilter.toLowerCase());
    
    // Apply team filter
    const matchesTeam = teamFilter === 'all' || 
      player.teamName.toLowerCase().includes(teamFilter.toLowerCase());
    
    return matchesSearch && matchesRole && matchesTeam;
  });

  // Extract unique teams from player data
  const teams = [...new Set(playersMockData.map(player => player.teamName))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-16 bg-gradient-to-b from-cricket-sky/10 to-white">
        <div className="section-container py-8">
          <h1 className="heading-primary text-center mb-4">IPL Players</h1>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the cricketing stars who have made the IPL the spectacle it is today.
          </p>
        </div>
      </div>
      
      <main className="flex-grow section-container">
        {/* Key Player Stats */}
        <div className="mb-12">
          <div className="stats-grid">
            <StatCard 
              title="Most Runs" 
              value="Virat Kohli (7263)" 
              icon={<Trophy className="w-6 h-6 text-cricket-ball" />}
              color="bg-gradient-to-br from-white to-cricket-ball/10"
            />
            <StatCard 
              title="Most Wickets" 
              value="Yuzvendra Chahal (187)" 
              icon={<TrendingUp className="w-6 h-6 text-cricket-accent" />}
              color="bg-gradient-to-br from-white to-cricket-accent/10"
            />
            <StatCard 
              title="Most Matches" 
              value="MS Dhoni (250)" 
              icon={<Users className="w-6 h-6 text-cricket-sky" />}
              color="bg-gradient-to-br from-white to-cricket-sky/10"
            />
            <StatCard 
              title="Highest Strike Rate" 
              value="Nicolas Pooran (173.38)" 
              icon={<TrendingUp className="w-6 h-6 text-cricket-pitch" />}
              color="bg-gradient-to-br from-white to-cricket-pitch/10"
            />
          </div>
        </div>
        
        {/* Search & Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search players..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="batsman">Batsman</SelectItem>
                <SelectItem value="bowler">Bowler</SelectItem>
                <SelectItem value="all-rounder">All-rounder</SelectItem>
                <SelectItem value="wicket">Wicket-keeper</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <Select value={teamFilter} onValueChange={setTeamFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by team" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Teams</SelectItem>
                {teams.map((team, index) => (
                  <SelectItem key={index} value={team.toLowerCase()}>
                    {team}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Players Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} {...player} />
          ))}
          
          {filteredPlayers.length === 0 && (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-500">No players found matching your criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Players;
