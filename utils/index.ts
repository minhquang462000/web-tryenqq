// Convert string to slug
import slugify from "slugify";
export const convertToSlug = (str: string) => {
  if (!str) return "";
  str = slugify(str, {
    lower: true,
    locale: "vi",
  });
  return str;
};
// Convert number
export const convertNumber = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number.toString();
  }
};
//Format date
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const year = date.getFullYear();
  return ` ${hour}:${minute} - ${day}/${month}/${year}`;
};
// Calculate days since release
export function daysSinceRelease(updatedAt: string) {
  const release = new Date(updatedAt);
  const today = new Date();
  const timeDiff = today.getTime() - release.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysDiff;
}
