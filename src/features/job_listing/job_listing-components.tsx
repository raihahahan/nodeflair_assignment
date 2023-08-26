import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  DefaultMantineColor,
  Divider,
  StarIcon,
  Text,
  Variants,
} from "@mantine/core";
import { CARD_BORDER_RADIUS } from "../theme/theme-data";
import useTheme from "../theme/theme-hooks";
import { colorThemeType } from "../theme/theme-types";
import { JobDetails, JobDetailsSummary } from "./job_listing-types";
import { useState } from "react";
import { formatSalaryRange, timeAgo } from "./job_listing-utils";
import { FiMap, FiMapPin, FiStar } from "react-icons/fi";
import Image from "next/image";
import styles from "./job_listing.module.css";
import { fakeJobData } from "./job_listing-data";
import { IconDoorEnter, IconShare } from "@tabler/icons-react";

export function JobCard({
  jobDetails,
  colorTheme,
  onClickCard,
  selectedJob,
}: {
  jobDetails: JobDetailsSummary;
  colorTheme: colorThemeType;
  onClickCard: (j: JobDetailsSummary) => void;
  selectedJob: JobDetailsSummary;
}) {
  return (
    <Card
      className={styles.container}
      withBorder
      onClick={() => onClickCard(jobDetails)}
      style={{
        cursor: "pointer",
        padding: 17,
        width: 417,
        backgroundColor: colorTheme.surface,
        marginBottom: 6,
        margin: 10,
        borderWidth: 3.5,
        borderColor:
          selectedJob.id == jobDetails.id
            ? colorTheme.primary.main
            : colorTheme.surface,
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

export function JobDetailsCard({
  colorTheme,
  jobDetails,
}: {
  colorTheme: colorThemeType;
  jobDetails: JobDetails | null;
}) {
  if (jobDetails == null) {
    return <Text>Oops! An error occurred. Job not found.</Text>;
  }

  return (
    <div>
      <Card
        style={{
          padding: 17,
          width: 660,
          height: 793,
          backgroundColor: colorTheme.surface,
          marginBottom: 6,
          margin: 10,
          borderWidth: 3.5,
          borderRadius: CARD_BORDER_RADIUS,
        }}
        color={colorTheme.surface}
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
            width={65}
            height={65}
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
                <Text
                  style={{ marginLeft: 8 }}
                  color={colorTheme.on.on_surface}
                >
                  {jobDetails.rating}
                </Text>
                <FiStar
                  color={colorTheme.on.on_primary}
                  style={{ marginLeft: 4 }}
                />
              </div>
            </div>
            <Anchor
              href={jobDetails.company.link}
              target="_blank"
              style={{
                color: colorTheme.primary.main,
                textDecoration: "underline",
              }}
            >
              Go to Company Page
            </Anchor>
            <Text style={{ fontWeight: "bolder" }}>{jobDetails.jobTitle}</Text>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#838383" }}>
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
                <JobButton
                  onClick={() => null}
                  icon={<IconDoorEnter />}
                  text={"Apply"}
                  color="green"
                />
                <JobButton
                  onClick={() => null}
                  text="Save"
                  color="green"
                  variant="outline"
                />
                <IconJobButton
                  color="green"
                  variant="outline"
                  onClick={() => null}
                  icon={<IconShare />}
                />
              </div>
            </div>
          </div>
        </div>
        <Divider
          my="sm"
          style={{ marginTop: 14, marginLeft: -17, marginRight: -17 }}
        />
        {/* SECTION */}
      </Card>
    </div>
  );
}

export function IconJobButton({
  onClick,
  icon,
  color,
  variant,
}: {
  onClick: () => void;
  icon?: React.ReactNode;
  color?: DefaultMantineColor;
  variant?: Variants<
    "light" | "outline" | "default" | "white" | "gradient" | "filled" | "subtle"
  >;
}) {
  return (
    <ActionIcon
      style={{
        borderRadius: CARD_BORDER_RADIUS,
        borderWidth: 2,
        marginRight: 12,
        padding: 0,
        minWidth: 33,
        minHeight: 33,
      }}
      size="xl"
      color={color}
      variant={variant}
      className={styles.container}
      onClick={onClick}
    >
      {icon}
    </ActionIcon>
  );
}

export function JobButton({
  text,
  onClick,
  icon,
  color,
  variant,
}: {
  text?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  color?: DefaultMantineColor;
  variant?: Variants<
    "light" | "outline" | "default" | "white" | "gradient" | "filled" | "subtle"
  >;
}) {
  return (
    <Button
      size="md"
      style={{
        borderRadius: CARD_BORDER_RADIUS,
        borderWidth: 2,
        marginRight: 12,
      }}
      color={color}
      variant={variant}
      leftIcon={icon}
      className={styles.container}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export function JobListings({
  jobListings,
}: {
  jobListings: JobDetailsSummary[];
}) {
  const { colorTheme } = useTheme();
  const [selectedJob, setSelectedJob] = useState<JobDetailsSummary>(
    fakeJobData[0]
  );
  const [fullJobDetails, setFullJobDetails] = useState<JobDetails | null>(
    fakeJobData[0]
  );
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
                setSelectedJob(j);
                const _fullJobDetailsQuery = fakeJobData.filter(
                  (i) => i.id == j.id
                );
                if (_fullJobDetailsQuery.length == 1) {
                  setFullJobDetails(_fullJobDetailsQuery[0]);
                } else {
                  setFullJobDetails(null);
                }
              }}
            />
          );
        })}
      </div>
      <JobDetailsCard colorTheme={colorTheme} jobDetails={fullJobDetails} />
    </div>
  );
}
