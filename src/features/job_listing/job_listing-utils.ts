import { salaryRange } from "./job_listing-types";

export function timeAgo(date: Date): string {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);

  if (months >= 1) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks >= 1) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days >= 1) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (seconds >= 1) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  } else {
    return "Today";
  }
}

export function formatSalaryRange(salary: salaryRange): string {
  const formatter = new Intl.NumberFormat("en", {
    style: "currency",
    currency: salary.currency,
  });
  const formattedMin = formatter.format(salary.min);
  const formattedMax = formatter.format(salary.max);
  return `${formattedMin} - ${formattedMax} / mth`;
}
