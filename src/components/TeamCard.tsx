
import React from 'react';
import { Link } from 'react-router-dom';

interface TeamCardProps {
  id: number;
  name: string;
  shortName: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  titles: number;
  matches: number;
}

const TeamCard: React.FC<TeamCardProps> = ({
  id,
  name,
  shortName,
  logo,
  primaryColor,
  secondaryColor,
  titles,
  matches
}) => {
  // Convert hex color to rgba for gradient overlay
  const getRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const gradientStyle = {
    background: `linear-gradient(to bottom right, ${getRgba(primaryColor, 0.9)}, ${getRgba(secondaryColor, 0.9)})`,
  };

  return (
    <Link to={`/teams/${id}`} className="block">
      <div className="cricket-card h-full group">
        <div className="relative h-48 overflow-hidden">
          {/* Team color overlay */}
          <div style={gradientStyle} className="absolute inset-0 z-10"></div>
          
          {/* Team logo */}
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6 transform group-hover:scale-110 transition-transform duration-300">
            <img 
              src={logo || 'https://via.placeholder.com/150'} 
              alt={`${name} logo`} 
              className="max-h-28 max-w-full object-contain"
            />
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="heading-tertiary text-center mb-3">{name}</h3>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-gray-500 text-sm">Titles</p>
              <p className="text-xl font-semibold">{titles}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Matches</p>
              <p className="text-xl font-semibold">{matches}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
