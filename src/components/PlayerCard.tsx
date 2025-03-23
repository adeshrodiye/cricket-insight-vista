
import React from 'react';
import { Link } from 'react-router-dom';

interface PlayerCardProps {
  id: number;
  name: string;
  role: string;
  teamName: string;
  teamColor: string;
  imageUrl: string;
  stats: {
    matches?: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strikeRate?: number;
    economyRate?: number;
  };
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  id,
  name,
  role,
  teamName,
  teamColor,
  imageUrl,
  stats
}) => {
  const isBatsman = role.toLowerCase().includes('bat');
  const isBowler = role.toLowerCase().includes('bowl');
  const isAllRounder = role.toLowerCase().includes('all');
  
  const getMainStats = () => {
    if (isBatsman) {
      return [
        { label: 'Runs', value: stats.runs || 0 },
        { label: 'Average', value: stats.average?.toFixed(2) || '0.00' },
        { label: 'SR', value: stats.strikeRate?.toFixed(2) || '0.00' },
      ];
    } else if (isBowler) {
      return [
        { label: 'Wickets', value: stats.wickets || 0 },
        { label: 'Economy', value: stats.economyRate?.toFixed(2) || '0.00' },
        { label: 'Matches', value: stats.matches || 0 },
      ];
    } else {
      return [
        { label: 'Runs', value: stats.runs || 0 },
        { label: 'Wickets', value: stats.wickets || 0 },
        { label: 'Matches', value: stats.matches || 0 },
      ];
    }
  };

  return (
    <Link to={`/players/${id}`} className="block">
      <div className="cricket-card h-full overflow-hidden bg-white group">
        <div className="relative h-56 overflow-hidden">
          {/* Team color accent */}
          <div 
            className="absolute top-0 left-0 right-0 h-2 z-10"
            style={{ backgroundColor: teamColor }}
          ></div>
          
          {/* Player image */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-100">
            <img 
              src={imageUrl || 'https://via.placeholder.com/300?text=Player'} 
              alt={name}
              className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-3">
            <span 
              className="inline-block px-2 py-1 text-xs font-medium rounded-full text-white mb-2"
              style={{ backgroundColor: teamColor }}
            >
              {teamName}
            </span>
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-center text-sm">
            {getMainStats().map((stat, index) => (
              <div key={index} className="p-1">
                <p className="text-gray-500 text-xs">{stat.label}</p>
                <p className="font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlayerCard;
