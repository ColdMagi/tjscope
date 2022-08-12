const getTargetId = (target: string) =>
  +(/(?:u\/)?(\d+)/.exec(target) || [])[1] || 0;

export { getTargetId };
