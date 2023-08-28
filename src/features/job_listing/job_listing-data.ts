import { JobDetails, JobDetailsSummary } from "./job_listing-types";

export const fakeJobData: JobDetails[] = [
  {
    id: 0,
    company: {
      name: "Example Company 1",
      link: "https://www.example.com/company1",
      imgURL: "/images/mockData/job_0.png",
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
      similarJobSalary: {
        currency: "USD",
        min: 80000,
        max: 100000,
        isEstimate: true,
      },
    },
    techJobType: "Fullstack",
    seniority: ["Junior", "Mid"],
    yoe: "1-3 years",
    jobDescription: `Activate Interactive Pte Ltd (Activate) is a leading IT solution and service provider headquartered in Singapore with a presence in Malaysia and Indonesia. Our clients are empowered with quality, cost-effective, and impactful end-to-end application development, like mobile and web applications, and cloud technology that remove technology roadblocks and increase their business efficiency.\n\nWe believe in positively impacting the lives of people around us and the environment we live in through the use of technology. Hence, we are committed to providing a conducive environment for all employees to realize their full potential, who in turn have the opportunity to continuously drive innovation.\n\nWe are searching for our next team members to join our growing team.\n\nIf you love the idea of being part of a growing company with exciting prospects in mobile and web technologies that create a positive impact on peoples lives, then we would love to hear from you.\n\nWe are seeking a talented and motivated Mobile Applications Developer to join our growing team. In this role, you will be responsible for designing, building, and maintaining high-quality mobile applications that deliver exceptional user experiences. You will work closely with cross-functional teams, including designers, product managers, and backend engineers, to create seamless and engaging mobile experiences for our users.\n\n\n## What will you do?\n\n- Mobile application development and applied research on Android, iOS, and/or Appcelerator platforms\n- J2EE/ASP.NET software development, involving the use of databases\n- Software support and maintenance of deployed products and solutions.\n\n\n## Requirements\n\n- Knowledge of Object-Oriented Programming and SQL\n- At least 2-3 years of experience with native mobile features such as GPS, accelerometer, push notifications, etc.\n- At least 2-3 years of experience in cross-platform mobile development tools such as React Native Framework (mandatory) and Titanium Appcelerator\n- Experienced in developing on Unix/Linux environments\n- Enjoy constant learning and working with new technologies\n\n\n ## Benefits\n\n- Fun working environment\n- Employee Wellness Program\n- Flexible Benefits\n\nActivate Interactive Singapore is an equal opportunity employer. Employment decisions will be based on merit, qualifications, and abilities. Activate Interactive Pte Ltd does not discriminate in employment opportunities or practices based on race, color, religion, sex, sexuality, national origin, age, disability, marital status, or any other characteristics protected by law.\n\nProtecting your privacy and the security of your data are longstanding top priorities for Activate Interactive Pte Ltd.\n\nYour personal data will be processed for the purposes of managing Activate Interactive Pte Ltds recruitment-related activities, which include setting up and conducting interviews and tests for applicants, evaluating and assessing the results, and as is otherwise needed in the recruitment and hiring processes.\n\nPlease consult our [Privacy Notice](https://www.activate.sg/privacy-policy) to know more about how we collect, use, and transfer the personal data of our candidates. Here you can find how you can request for access, correction, and/or withdrawal of your Personal Data.`,
    rating: 3.2,
    similarJobType: "Software Engineer",
  },
  {
    id: 1,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_1.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 2,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_2.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 3,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_3.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 4,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_4.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 5,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_5.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 6,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_6.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 7,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_7.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 8,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_8.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 9,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_9.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
  {
    id: 10,
    company: {
      name: "Example Company 2",
      link: "https://www.example.com/company2",
      imgURL: "/images/mockData/job_10.png",
    },
    jobTitle: "Frontend Developer",
    location: "San Francisco, CA",
    datePosted: new Date("2023-08-23T15:30:00Z"),
    techStacks: ["HTML", "CSS", "Vue.js"],
    jobType: "Part-Time",
    seniority: ["Junior"],
    yoe: "0-2 years",
    techJobType: "QA",
    jobDescription:
      "We are seeking a *frontend developer* with experience in building responsive web applications.",
    rating: 2.1,
    similarJobType: "Cybersecurity Engineer",
  },
];
