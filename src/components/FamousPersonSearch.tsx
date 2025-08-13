import { useState } from 'react';
import { searchFamousPerson } from '../services/famousPersonService';
import './FamousPersonSearch.css';

interface FamousPerson {
  name: string;
  birthDate?: string;
  nationality?: string;
  profession?: string;
  achievements?: string;
  biography?: string;
  interestingFacts?: string;
}

const FamousPersonSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState<FamousPerson | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setError(null);
    setPerson(null);

    try {
      const result = await searchFamousPerson(searchTerm);
      setPerson(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '검색 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="famous-person-search">
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="유명인의 이름을 입력하세요 (예: 알베르트 아인슈타인)"
            className="search-input"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="search-button"
            disabled={isLoading || !searchTerm.trim()}
          >
            {isLoading ? '검색 중...' : '🔍 검색'}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-message">
          ❌ {error}
        </div>
      )}

      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>AI가 유명인 정보를 분석하고 있습니다...</p>
        </div>
      )}

      {person && (
        <div className="person-card">
          <div className="person-header">
            <h2>{person.name}</h2>
            {person.profession && (
              <span className="profession">{person.profession}</span>
            )}
          </div>
          
          <div className="person-details">
            {person.birthDate && (
              <div className="detail-item">
                <strong>생년월일:</strong> {person.birthDate}
              </div>
            )}
            
            {person.nationality && (
              <div className="detail-item">
                <strong>국적:</strong> {person.nationality}
              </div>
            )}
            
            {person.achievements && (
              <div className="detail-item">
                <strong>주요 업적:</strong> {person.achievements}
              </div>
            )}
            
            {person.biography && (
              <div className="detail-item">
                <strong>약력:</strong> {person.biography}
              </div>
            )}
            
            {person.interestingFacts && (
              <div className="detail-item">
                <strong>흥미로운 사실:</strong> {person.interestingFacts}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FamousPersonSearch;
