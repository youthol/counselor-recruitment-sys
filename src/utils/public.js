export function generateId(prefix = 'id', separator = '_') {
  const random_date = new Date().getTime().toString(16).slice(2, 8);
  const random_nums = Math.random().toString(16).slice(2, 8);
  return `${prefix}${separator}${random_date}${separator}${random_nums}`;
}
