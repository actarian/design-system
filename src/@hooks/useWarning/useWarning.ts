const warningStack: { [key: string]: boolean } = {};

export function useWarning(message: string, component?: string) {

  const tag = component ? ` [${component}]` : ' ';

  const log = `[DesignSystem]${tag}: ${message}`;

  if (typeof console === 'undefined') {
    return;
  }
  if (warningStack[log]) {
    return;
  }
  warningStack[log] = true;
  if (process.env.NODE_ENV !== 'production') {
    return console.error(log);
  }
  console.warn(log);
}
