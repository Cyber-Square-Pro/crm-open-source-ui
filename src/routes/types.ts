export interface RouteDataType {
  path: string;
  component: React.ComponentType;
  isPrivate: boolean;
  isMonkeysRemove?: boolean;
  sidebarDisable?: boolean;
}
