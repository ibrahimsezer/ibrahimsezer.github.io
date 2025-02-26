import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-url.com'  // Replace with your deployed backend URL
  : 'http://localhost:5000';

const useGitHubContributions = (username: string) => {
  const [contributions, setContributions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/github/contributions/${username}`);
        const contributionData = response.data.data.user.contributionsCollection.contributionCalendar;
        setContributions(contributionData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contributions:', error);
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  return { contributions, loading };
};

export default useGitHubContributions;
