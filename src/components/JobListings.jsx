import { useState } from 'react';
import { useEffect } from 'react';
import JobListing from './JobListing'

const JobListings = ( {isHome = false} ) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchJobs = async () => {
      try{
        const res = await fetch('http://localhost:8000/jobs');
        const data = await res.json();
        setJobs(data)
      }
      catch{
        console.log("error fetching data", error)
      }
      finally{
        setLoading(false);
      }
      
    }
  }, []);

  // const jobListings = isHome? jobs.slice(0, 3) : jobs;


  return (
    <div>
          {/* <!-- Browse Jobs --> */}
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome? "Recent jobs": "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
        {jobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}


          {/* <!-- Job Listing  --> */}
          
          
        </div>
      </div>
    </section>
    </div>
  )
}

export default JobListings
