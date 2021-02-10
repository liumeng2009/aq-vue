import ParentLayout from '@/layouts/default/content/ParentView.vue';

/**
 * @description: page-layout
 */
export const getParentLayout = (name: string) => {
  return () =>
    new Promise((resolve) => {
      resolve({
        ...ParentLayout,
        name,
      });
    });
};
