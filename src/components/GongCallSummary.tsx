import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from 'remark-gfm';

interface GongCallSummaryProps {
  id: string;
}

const GongCallSummary: React.FC<GongCallSummaryProps> = ({ id }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get(`https://api.pantheorai.stevebresnick.net/api/gong/${id}`);
        setSummary(response.data.summary);
        setTitle(response.data.title);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) { // Check if it's an Axios error
          if (err.response.status === 404) {
            setError(err.response.data.message || `Missing call ID # ${id}`); // Display the specific message from the backend or a default
          } else if (err.response.status === 404) {
            setError("Summary not found for this ID");
          } else {
            setError("An error occurred while fetching the summary.");
          }
        } else {
          console.error("Error:", err);
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!summary) {
    return <p>No summary found.</p>;
  }

  return (
    <div className="gong-call-summary">
      <h2>Call Summary: {title}</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{summary}</Markdown>
    </div>
  );
};

export default GongCallSummary;