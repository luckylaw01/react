import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
  
  const { id } = useParams(); // Call useParams as a function
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        console.log(data);
        setJob(data);
      } catch (error) { // Add error parameter here
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJob(); // Call the fetchJob function inside useEffect
  }, [id]); // Add id as a dependency
  
  return (
    loading ? <Spinner /> : <h1>{job.title}</h1>
  );
}

export default JobPage;
