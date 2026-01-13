export const RoutesConfig = {
  HOME: "/",
  PROJECTS: "/projects",
  PROJECT: (id: number): string => `/projects/${id}`,
  CAREER: "/career",
  CONTACT: "/contact"
};