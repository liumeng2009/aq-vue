export function useDesign(scope: string) {
  const values = process.env.VUE_APP_NAME.toLowerCase();

  return {
    prefixCls: `${values}-${scope}`,
  };
}
