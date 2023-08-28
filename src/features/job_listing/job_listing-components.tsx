import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  Code,
  DefaultMantineColor,
  Divider,
  Grid,
  ScrollArea,
  Text,
  Variants,
} from "@mantine/core";
import { CARD_BORDER_RADIUS } from "../theme/theme-data";
import useTheme, { useGlobalMediaQuery } from "../theme/theme-hooks";
import { colorThemeType } from "../theme/theme-types";
import { JobDetails, JobDetailsSummary } from "./job_listing-types";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { formatSalaryRange, timeAgo } from "./job_listing-utils";
import { FiMapPin, FiStar } from "react-icons/fi";
import Image from "next/image";
import styles from "./job_listing.module.css";
import { fakeJobData } from "./job_listing-data";
import { IconDoorEnter, IconShare } from "@tabler/icons-react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";

//#region common
export function GreyCard({
  colorTheme,
  title,
}: {
  colorTheme: colorThemeType;
  title: string;
}) {
  return (
    <Card
      style={{
        backgroundColor: colorTheme.placeholder,
        padding: 7,
        margin: 7,
      }}
    >
      <Code
        color={"grey"}
        style={{ fontWeight: "bold", fontSize: 14, textAlign: "center" }}
      >
        {title}
      </Code>
    </Card>
  );
}
//#endregion

//#region LHS
export function JobCard({
  jobDetails,
  colorTheme,
  onClickCard,
  selectedJob,
  isSmall,
}: {
  jobDetails: JobDetailsSummary;
  colorTheme: colorThemeType;
  onClickCard: (j: JobDetailsSummary) => void;
  selectedJob: JobDetailsSummary;
  isSmall?: boolean;
}) {
  return (
    <Card
      className={styles.container}
      withBorder
      onClick={() => onClickCard(jobDetails)}
      style={{
        cursor: "pointer",
        padding: 17,
        width: isSmall ? "80vw" : 417,
        backgroundColor: colorTheme.surface,
        marginBottom: 6,
        margin: 10,
        borderWidth: selectedJob.id == jobDetails.id ? 3.5 : 0.2,
        borderColor:
          selectedJob.id == jobDetails.id ? colorTheme.primary.main : "#e1e0dd",
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
          src={jobDetails.company.imgURL}
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
          return <GreyCard key={i} colorTheme={colorTheme} title={i} />;
        })}
      </div>
    </Card>
  );
}
//#endregion

//#region RHS Components
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
          backgroundColor: colorTheme.surface,
          marginBottom: 6,
          margin: 10,
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
        <MetaDataSection jobDetails={jobDetails} colorTheme={colorTheme} />

        <Divider
          my="sm"
          style={{ marginTop: 30, marginLeft: -17, marginRight: -17 }}
        />

        {/* SECTION */}
        <DescriptionSection jobDetails={jobDetails} />

        <JobButton
          text="Search Similar Jobs"
          color="green"
          variant="light"
          onClick={() => null}
          style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
        />
      </Card>
    </div>
  );
}

export function DescriptionSection({ jobDetails }: { jobDetails: JobDetails }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>Job Description</h3>
      <div style={{ marginTop: 30 }}></div>
      <div style={{ padding: 7 }}>
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          rehypePlugins={[rehypeRaw as any]}
        >
          {jobDetails.jobDescription.replace(/\n/gi, "&nbsp; \n")}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export function ExtraDataCard({
  colorTheme,
  jobDetails,
}: {
  colorTheme: colorThemeType;
  jobDetails: JobDetails | null;
}) {
  if (jobDetails == null) {
    return <div>An error occurred.</div>;
  }
  return (
    <Card
      style={{
        padding: 17,
        width: 660,
        backgroundColor: colorTheme.surface,
        marginBottom: 6,
        margin: 10,
        borderWidth: 3.5,
        borderRadius: CARD_BORDER_RADIUS,
      }}
      color={colorTheme.surface}
    >
      <Text
        style={{ fontWeight: "bolder", marginBottom: 10, fontSize: 17 }}
      >{`Salaries of ${jobDetails.similarJobType} at ${jobDetails.company.name}`}</Text>
      <Text style={{ color: "#878787", fontWeight: "300", marginBottom: 10 }}>
        {jobDetails.salaryRange?.similarJobSalary
          ? `Salaries from ${jobDetails.company.name} that are similar to ${jobDetails.jobTitle}`
          : `There are salaries from ${jobDetails.company.name} that are similar to ${jobDetails.similarJobType}`}
      </Text>
      {jobDetails.salaryRange?.similarJobSalary && (
        <Text style={{ fontWeight: "bolder", marginBottom: 10, fontSize: 17 }}>
          {formatSalaryRange(jobDetails.salaryRange.similarJobSalary)}
        </Text>
      )}
      {jobDetails.salaryRange?.isEstimate && (
        <Text style={{ color: "#878787", fontWeight: "300", marginBottom: 30 }}>
          Estimated Salary
        </Text>
      )}

      <Anchor
        href="#"
        color="green"
        style={{ textDecoration: "none" }}
      >{`View more salaries from ${jobDetails.company.name} →`}</Anchor>
    </Card>
  );
}

export function MetaDataSection({
  jobDetails,
  colorTheme,
}: {
  jobDetails: JobDetails;
  colorTheme: colorThemeType;
}) {
  return (
    <Grid justify="space-between" gutter="xl">
      {jobDetails.salaryRange && (
        <Grid.Col span={6}>
          <MetaDataItem
            title={"Salary"}
            contents={<Text>{formatSalaryRange(jobDetails.salaryRange)}</Text>}
          />
        </Grid.Col>
      )}
      <Grid.Col span={6}>
        <MetaDataItem
          title={"Job Type"}
          contents={<Text>{jobDetails.jobType ?? "-"}</Text>}
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <MetaDataItem
          title={"Seniority"}
          contents=<Grid style={{ marginTop: 1 }}>
            {jobDetails.seniority.map((i) => {
              return <GreyCard key={i} colorTheme={colorTheme} title={i} />;
            })}
          </Grid>
        />
      </Grid.Col>

      <Grid.Col span={6}>
        <MetaDataItem
          title={"Years of Experience"}
          contents={<Text>{jobDetails.yoe}</Text>}
        />
      </Grid.Col>

      <Grid.Col span={12}>
        <MetaDataItem
          title={"Tech Stacks"}
          contents={
            <Grid style={{ marginTop: 1 }}>
              {jobDetails.techStacks.map((i) => {
                return <GreyCard key={i} colorTheme={colorTheme} title={i} />;
              })}
            </Grid>
          }
        />
      </Grid.Col>
    </Grid>
  );
}

export function MetaDataItem({
  title,
  contents,
}: {
  title: string;
  contents: React.ReactElement;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: 300,
        flexDirection: "column",
      }}
    >
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      {contents}
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
  style,
}: {
  text?: string;
  onClick: () => void;
  icon?: React.ReactNode;
  color?: DefaultMantineColor;
  variant?: Variants<
    "light" | "outline" | "default" | "white" | "gradient" | "filled" | "subtle"
  >;
  style?: CSSProperties;
}) {
  return (
    <Button
      size="md"
      style={{
        borderRadius: CARD_BORDER_RADIUS,
        borderWidth: 2,
        marginRight: 12,
        ...style,
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

//#endregion

//#region MAIN
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
  const b = useGlobalMediaQuery();
  if (b.md) {
    return (
      <div
        style={{
          backgroundColor: colorTheme.background,
          paddingTop: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LeftComponent
          isSmall={b.md}
          colorTheme={colorTheme}
          jobListings={jobListings}
          selectedJob={selectedJob}
          setSelectedJob={setSelectedJob}
          setFullJobDetails={setFullJobDetails}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: colorTheme.background,
        paddingTop: 0,
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <LeftComponent
        colorTheme={colorTheme}
        jobListings={jobListings}
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        setFullJobDetails={setFullJobDetails}
      />

      <RightComponent colorTheme={colorTheme} fullJobDetails={fullJobDetails} />
    </div>
  );
}

export function RightComponent({
  colorTheme,
  fullJobDetails,
}: {
  colorTheme: colorThemeType;
  fullJobDetails: JobDetails | null;
}) {
  return (
    <ScrollArea
      h={"100vh"}
      offsetScrollbars
      scrollbarSize={12}
      scrollHideDelay={0}
      type="always"
      style={{ overflow: "hidden" }}
    >
      <div style={{ width: "auto" }}>
        <JobDetailsCard colorTheme={colorTheme} jobDetails={fullJobDetails} />
        <ExtraDataCard colorTheme={colorTheme} jobDetails={fullJobDetails} />
      </div>
    </ScrollArea>
  );
}

export function LeftComponent({
  colorTheme,
  jobListings,
  selectedJob,
  setSelectedJob,
  setFullJobDetails,
  isSmall,
}: {
  colorTheme: colorThemeType;
  jobListings: JobDetailsSummary[];
  selectedJob: JobDetailsSummary;
  setSelectedJob: React.Dispatch<React.SetStateAction<JobDetailsSummary>>;
  setFullJobDetails: React.Dispatch<React.SetStateAction<JobDetails | null>>;
  isSmall?: boolean;
}) {
  const CommonComponent = ({ i }: { i: JobDetailsSummary }) => (
    <JobCard
      isSmall={isSmall}
      jobDetails={i}
      colorTheme={colorTheme}
      selectedJob={selectedJob}
      onClickCard={(j: JobDetailsSummary) => {
        setSelectedJob(j);
        const _fullJobDetailsQuery = fakeJobData.filter((i) => i.id == j.id);
        if (_fullJobDetailsQuery.length == 1) {
          setFullJobDetails(_fullJobDetailsQuery[0]);
        } else {
          setFullJobDetails(null);
        }
      }}
    />
  );

  if (isSmall) {
    return (
      <div
        style={{
          flexDirection: "column",
        }}
      >
        {jobListings.map((i) => {
          i.datePosted = new Date(i.datePosted);
          return <CommonComponent key={i.id} i={i} />;
        })}
      </div>
    );
  }
  return (
    <div
      style={{
        flexDirection: "column",
      }}
    >
      <ScrollArea h={"100vh"} type="never">
        {jobListings.map((i) => {
          i.datePosted = new Date(i.datePosted);
          return <CommonComponent key={i.id} i={i} />;
        })}
      </ScrollArea>
    </div>
  );
}

//#endregion
