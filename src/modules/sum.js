export const sum = (...args) => {
  if (args.length === 0) {
    throw Error('sum required at least 1 argument')
  }

  return args.reduce((res, curr) => res + curr, 0);
}
