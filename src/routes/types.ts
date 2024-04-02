export interface RouteDataType {
  path: string;
  component: React.ComponentType;
  isPrivate: boolean;
  sidebarDisable?: boolean;
}
