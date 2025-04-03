import "server-only"; // This is  used in server component, so we can use server-side utilities

export const serverSideUtils = () => {
  console.log(
    "server-side utility function called.",
    "server-side-utils.ts",
    "serverSideUtils",
    "interact with database",
    "process confidential data"
  );
  return "server-side result ";
};
