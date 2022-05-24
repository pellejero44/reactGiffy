import { useState, useEffect } from 'react';
import getTrendingTerms from 'services/getTrendingTermsService';
import { Link } from 'wouter';

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(function () {
    const controller = new AbortController();
    getTrendingTerms({ signal: controller.signal })
      .then(setTrends)
      .catch((err) => {});

    return () => controller.abort();
  }, []);

  return (
    <ul>
      {trends.map((popularGift) => (
        <li key={popularGift}>
          <Link to={`/search/${popularGift}`}> Gifts of {popularGift}</Link>
        </li>
      ))}
    </ul>
  );
}
