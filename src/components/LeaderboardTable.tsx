
import React from 'react';
import { ChevronUp, ChevronDown, Minus } from 'lucide-react';

interface LeaderboardItem {
  id: number;
  rank: number;
  previousRank?: number;
  name: string;
  teamLogo?: string;
  teamName?: string;
  statValue: number | string;
  statLabel: string;
}

interface LeaderboardTableProps {
  title: string;
  items: LeaderboardItem[];
  className?: string;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({
  title,
  items,
  className = ""
}) => {
  const getRankChangeIcon = (current: number, previous?: number) => {
    if (!previous) return <Minus className="w-4 h-4 text-gray-400" />;
    
    if (current < previous) {
      return <ChevronUp className="w-4 h-4 text-green-500" />;
    } else if (current > previous) {
      return <ChevronDown className="w-4 h-4 text-red-500" />;
    } else {
      return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className={`cricket-card bg-white ${className}`}>
      <div className="px-6 py-4 border-b">
        <h3 className="heading-tertiary">{title}</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full min-w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 bg-gray-50">
              <th className="px-6 py-3 w-16">Rank</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3 text-right">{items[0]?.statLabel || 'Stat'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.rank}</span>
                    {getRankChangeIcon(item.rank, item.previousRank)}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    {item.teamLogo && (
                      <img 
                        src={item.teamLogo} 
                        alt={item.teamName || ''} 
                        className="w-8 h-8 object-contain"
                      />
                    )}
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.teamName && (
                        <div className="text-xs text-gray-500">{item.teamName}</div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right font-semibold">{item.statValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
