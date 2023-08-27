export interface JobDetailsSummary {
  id: number;
  company: {
    name: string;
    link: string;
    imgURL: string;
  };
  jobTitle: string;
  location: string;
  datePosted: Date;
  techStacks: string[];
  jobType?: string;
  techJobType: string;
  salaryRange?: salaryRange;
  rating: number;
}

export interface JobDetails extends JobDetailsSummary {
  seniority: string[];
  yoe: string;
  jobDescription: string; // format in Markdown
  similarJobType: string;
}

export interface salaryRange {
  currency: string;
  min: number;
  max: number;
  isEstimate: boolean;
  similarJobSalary?: salaryRange
}

export interface JobDetailsSalarySummary {
  salaryRange: salaryRange;
}
