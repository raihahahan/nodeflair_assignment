import { JobDetails, JobDetailsSummary } from "./job_listing-types";

export const fakeJobData: JobDetails[] = [
  {
    id: 0,
    company: {
      name: "Example Company 1",
      link: "https://www.example.com/company1",
      imgURL: "images/mockData/job_0.png",
    },
    jobTitle: "Software Engineer",
    location: "New York, NY",
    datePosted: new Date("2023-08-24T10:00:00Z"),
    techStacks: ["JavaScript", "React", "Node.js"],
    jobType: "Full-Time",
    salaryRange: {
      currency: "USD",
      min: 80000,
      max: 100000,
      isEstimate: true,
    },
    techJobType: "Fullstack",
    seniority: "Mid-Level",
    yoe: "3-5 years",
    jobDescription:
      "This is a **software engineer** position requiring experience in front-end development.",
    rating: 3.2,
  },
  {
    id: 1,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "images/mockData/job_1.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: "Junior",
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
  },
];
