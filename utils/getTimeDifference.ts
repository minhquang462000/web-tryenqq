export function getTimeDifference(dateString: string) {
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const differenceInMs = currentDate.getTime() - givenDate.getTime();
  const seconds = Math.floor(differenceInMs / 1000);
  const minutes = Math.floor(differenceInMs / (1000 * 60));
  const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
  const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  const result: {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds: number;
  } = { seconds };

  if (days > 0) {
    result.days = days;
  } else if (hours > 0) {
    result.hours = hours;
  } else if (minutes > 0) {
    result.minutes = minutes;
  }

  return result;
}
type TimeDifference = {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds: number;
};
export const formatTimeDifference = (timeDifference: TimeDifference) => {
  if (timeDifference.days) {
    return `${timeDifference.days} ngày`;
  } else if (timeDifference.hours) {
    return `${timeDifference.hours} giờ`;
  } else if (timeDifference.minutes) {
    return `${timeDifference.minutes} phút`;
  } else {
    return `${timeDifference.seconds} giây`;
  }
};
export const timeFormat = (time: string) =>
  formatTimeDifference(getTimeDifference(time));
