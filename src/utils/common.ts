const getTargetId = (target: string) =>
  +(/(?:u\/)?(\d+)/.exec(target || "") || [])[1] || 0;

const getMonths = () => [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export { getTargetId, getMonths };
