import { Inter } from "next/font/google";
import { JobListings } from "@/features/job_listing/job_listing-components";
import { JobDetailsSummary } from "@/features/job_listing/job_listing-types";
import type { GetStaticProps } from "next";
import { fakeJobData } from "@/features/job_listing/job_listing-data";
import useTheme from "@/features/theme/theme-hooks";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  jobListingsSummary,
}: {
  jobListingsSummary: JobDetailsSummary[];
}) {
  const { colorTheme } = useTheme();
  return (
    <div style={{ backgroundColor: colorTheme.background, padding: 20 }}>
      <JobListings jobListings={jobListingsSummary} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = JSON.parse(JSON.stringify(fakeJobData));
  return { props: { jobListingsSummary: data } };
};
