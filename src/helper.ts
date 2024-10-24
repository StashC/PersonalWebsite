export const primaryColor = "#47d653";
export const secondaryColor = "#398242";
export const backgroundColor = "#26292c";
export const darkBackgroundColor = "#1c1d22";
export const textColor = "#ffffff";

// Taken from stack overflow:
// https://stackoverflow.com/questions/18071046/smooth-scroll-to-specific-div-on-click\
export const scrollTo = (classId: string) => {
  const target = document.getElementById(classId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
