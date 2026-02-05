export const EndpointConfig = {
  CAREERS: "api/careers",
  CAREERS_ID : (id : string) : string => `api/careers/${id}`,
  PROJECTS : "api/projects",
  PROJECTS_ID : (id : string) : string => `api/projects/${id}`,
  SKILLS: "api/skills",
  SKILLS_ID: (id: string) : string => `api/skills/${id}`,
  TOOLS: "api/tools",
};