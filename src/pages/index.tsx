import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { JobListings } from "@/features/job_listing/job_listing-components";
import { JobDetailsSummary } from "@/features/job_listing/job_listing-types";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { fakeJobData } from "@/features/job_listing/job_listing-data";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  jobListingsSummary,
}: {
  jobListingsSummary: JobDetailsSummary[];
}) {
  return <JobListings jobListings={jobListingsSummary} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = JSON.parse(JSON.stringify(fakeJobData));
  return { props: { jobListingsSummary: data } };
};
