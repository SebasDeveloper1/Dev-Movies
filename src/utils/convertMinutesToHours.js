const convertMinutesToHours = (time) => {
  if (Number.isInteger(time)) {
    if (time > 0) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;

      return `${hours}h ${minutes}m`;
    }
    return time;
  }
  throw new Error(`Invalid time: ${time}`);
};

export default convertMinutesToHours;
