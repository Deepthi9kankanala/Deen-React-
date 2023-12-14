import React, { useState } from 'react';
import './CareerComponent.css';

const jobs = [
  {
    title: "Software Engineer",
    image: "/images/software-engineer.jpg",
    details:
      "Responsible for designing, developing and maintaining software systems and applications.",
    openPositions: "2",
    link: "#",
  },

  {
    title: "Data Scientist",
    image: "/images/data-scientist.jpg",
    details:
      "Responsible for collecting, analyzing and interpreting large data sets to help organizations make better decisions.",
    openPositions: "3",
    link: "#",
  },

  {
    title: "Project Manager",
    image: "/images/project-manager.jpg",
    details:
      "Responsible for planning, executing and closing projects on time and within budget.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "Product Manager",
    image: "/images/product-manager.jpg",
    details:
      "Responsible for managing the entire product life cycle, from ideation to launch and post-launch maintenance.",
    openPositions: "1",
    link: "#",
  },

  {
    title: "Sales Representative",
    image: "/images/sales-representative.jpg",
    details:
      "Responsible for reaching out to potential customers and closing sales deals.",
    openPositions: "4",
    link: "#",
  },

  {
    title: "Marketing Manager",
    image: "/images/marketing-manager.jpg",
    details:
      "Responsible for creating and executing marketing strategies to promote a company or product.",
    openPositions: "1",
    link: "#",
  },
];

const CareerComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const createJobListingCards = () => {
    return jobs
      .filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((job, index) => (
        <div className="job" key={index}>
          <img src={job.image} alt={job.title} />
          <h3 className="job-title">{job.title}</h3>
          <div className="details">{job.details}</div>
          <a href={job.link} className="details-btn">
            More Details
          </a>
          <span className="open-positions">
            {job.openPositions === 1
              ? `${job.openPositions} open position`
              : `${job.openPositions} open positions`}
          </span>
        </div>
      ));
  };

  return (
    <div className="jobs-list-container">
      <h2>{jobs.length} Jobs</h2>
      <input
        className="job-search"
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="jobs">{createJobListingCards()}</div>
    </div>
  );
};

export default CareerComponent;
