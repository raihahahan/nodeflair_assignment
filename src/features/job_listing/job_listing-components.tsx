import { Card, Divider, StarIcon, Text } from "@mantine/core";
import { CARD_BORDER_RADIUS } from "../theme/theme-data";
import useTheme from "../theme/theme-hooks";
import { colorThemeType } from "../theme/theme-types";
import { JobDetailsSummary } from "./job_listing-types";
import { useState } from "react";
import { formatSalaryRange, timeAgo } from "./job_listing-utils";
import { FiMap, FiMapPin, FiStar } from "react-icons/fi";
import Image from "next/image";
import styles from "./job_listing.module.css";

export function JobCard({
  jobDetails,
  colorTheme,
  onClickCard,
  selectedJob,
}: {
  jobDetails: JobDetailsSummary;
  colorTheme: colorThemeType;
  onClickCard: (j: JobDetailsSummary) => void;
  selectedJob: number;
}) {
  return (
    <Card
      className={styles.container}
      withBorder={selectedJob == jobDetails.id}
      onClick={() => onClickCard(jobDetails)}
      style={{
        cursor: "pointer",
        padding: 17,
        width: 470,
        backgroundColor: colorTheme.surface,
        marginBottom: 10,
        margin: 10,
        borderWidth: selectedJob == jobDetails.id ? 3.5 : 0,
        borderColor:
          selectedJob == jobDetails.id ? colorTheme.primary.main : undefined,
      }}
      radius={CARD_BORDER_RADIUS}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          alt={`${jobDetails.company.name} logo`}
          src={`/images/mockData/job_${jobDetails.id}.png`}
          width={45}
          height={45}
          style={{ marginRight: 10 }}
        />
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ color: colorTheme.on.on_surface }}>
              {jobDetails.company.name}
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ marginLeft: 8 }} color={colorTheme.on.on_surface}>
                {jobDetails.rating}
              </Text>
              <FiStar
                color={colorTheme.on.on_primary}
                style={{ marginLeft: 4 }}
              />
            </div>
          </div>
          <Card
            style={{
              position: "absolute",
              top: 17,
              right: 17,
              backgroundColor: colorTheme.primary.variantLight,
              padding: 7,
              marginLeft: 7,
            }}
          >
            <Text
              color={colorTheme.primary.variantDark}
              style={{ fontWeight: "bold" }}
            >
              {jobDetails.techJobType}
            </Text>
          </Card>

          <Text style={{ fontWeight: "bolder" }}>{jobDetails.jobTitle}</Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: colorTheme.primary.main }}
            >
              {timeAgo(jobDetails.datePosted)}
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FiMapPin
                size={20}
                color={"#838383"}
                style={{ marginRight: 7, marginLeft: 10 }}
              />
              <Text color={"#838383"}>{jobDetails.location}</Text>
            </div>
          </div>
          <div style={{ marginTop: 10 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {jobDetails.salaryRange && (
                <Text style={{ fontWeight: "600" }}>
                  {formatSalaryRange(jobDetails.salaryRange)}
                </Text>
              )}
              {jobDetails.salaryRange?.isEstimate && (
                <Card
                  style={{
                    backgroundColor: colorTheme.placeholder,
                    padding: 7,
                    paddingTop: 4,
                    paddingBottom: 4,
                    marginLeft: 7,
                  }}
                >
                  <Text style={{ color: colorTheme.on.on_placeholder }}>
                    EST
                  </Text>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
      <Divider my="sm" />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {jobDetails.techStacks.map((i) => {
          return <TechStackCard colorTheme={colorTheme} stack={i} />;
        })}
      </div>
    </Card>
  );
}

export function TechStackCard({
  colorTheme,
  stack,
}: {
  colorTheme: colorThemeType;
  stack: string;
}) {
  return (
    <Card
      style={{
        backgroundColor: colorTheme.placeholder,
        padding: 7,
        marginLeft: 7,
      }}
    >
      <Text color={colorTheme.on.on_placeholder} style={{ fontWeight: "bold" }}>
        {stack}
      </Text>
    </Card>
  );
}

export function JobDetailsCard({ colorTheme }: { colorTheme: colorThemeType }) {
  return <div>he</div>;
}

export function JobListings({
  jobListings,
}: {
  jobListings: JobDetailsSummary[];
}) {
  const { colorTheme } = useTheme();
  const [selectedJob, setSelectedJob] = useState<number>(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {jobListings.map((i) => {
          i.datePosted = new Date(i.datePosted);
          return (
            <JobCard
              jobDetails={i}
              colorTheme={colorTheme}
              selectedJob={selectedJob}
              onClickCard={(j: JobDetailsSummary) => {
                setSelectedJob(j.id);
              }}
            />
          );
        })}
      </div>
      <JobDetailsCard colorTheme={colorTheme} />
    </div>
  );
}
