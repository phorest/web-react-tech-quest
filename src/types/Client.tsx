import { Project } from "./Project.tsx";

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  primaryProjectId: string;
  primaryProject: Project;
  email?: string;
  age?: number
  vip: boolean;
}
