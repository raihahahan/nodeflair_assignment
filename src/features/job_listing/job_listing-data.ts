import { JobDetailsSummary } from "./job_listing-types";

export const fakeJobData: JobDetailsSummary[] = [
  {
    id: 0,
    company: {
      name: "Example Company 1",
      link: "https://www.example.com/company1",
      imgURL: "https://www.example.com/images/company1.png",
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
    rating: 4.4,
  },
  {
    id: 1,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "https://www.example.com/images/company2.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    techJobType: "Frontend",
    rating: 2.1,
  },
];
