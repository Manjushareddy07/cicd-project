import React, { useEffect, useState } from "react";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const recruiterEmail = localStorage.getItem("recruiterEmail");

  useEffect(() => {
    if (!recruiterEmail) return;

    fetch(`http://localhost:8082/api/jobs/recruiter/${encodeURIComponent(recruiterEmail)}/jobs`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch jobs");
        return res.json();
      })
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, [recruiterEmail]);

  return (
    <div>
      <h2>My Jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> - {job.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyJobs;
