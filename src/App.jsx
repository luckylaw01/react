// import React from 'react';

// const App = () => {
//   const name = 'John';
//   const x = 10;
//   const y = 20;
//   const names = ['Brad', 'Mary', 'Joe', 'Sara'];
//   const loggedIn = true;
//   const styles = {
//     color: 'red',
//     fontSize: '55px'
//   };
//   // if(loggedIn){
//   //   return <>Hello Member</>
//   // }
//   return (
//     <>
//       <div className='text-5xl'>
//         App
//       </div>
//       <p style={styles}>Hello</p>
//       <p>The sum of  {x} and {y} is {x+y}</p>
//       <ul>
//       {names.map((name, index) => (
//         <li key={index}>{name}</li>
//       ))}
// </ul>
// {loggedIn && <h1>Hello Member</h1>}
//     </>
//   );
// };

// export default App;


// -------------------------------------------------------

import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import MainLayout from './layouts/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';


const App = () => {
  // Add new Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    console.log('delete' + id); 
  }
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
  
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobsSubmit={addJob}/>} />
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob} />} loader = {jobLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    
    )
  );
  return <RouterProvider router={router}/>
}

export default App
