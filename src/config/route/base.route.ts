import { EROUT } from "./routes";

interface IRouteBase {
  name: string;
  sidebarVisible: boolean;
  icon?: string;
}

export interface IRoute extends IRouteBase {
  path: string;
}

export type IAppRoute = Array<IRoute>;

export class AppRoute {
  private static readonly routes: IAppRoute = [
    {
      path: EROUT.USERS,
      name: "users",
      sidebarVisible: false,
      icon: "fa fa-dashboard",
    },
    {
      path: EROUT.PROFILE,
      name: "profile",
      sidebarVisible: true,
      icon: "fa fa-picture-o",
    },
    {
      path: EROUT.SEARCH,
      name: "search",
      sidebarVisible: true,
      icon: "fa fa-search-o",
    },
    {
      path: EROUT.MESSAGE,
      name: "Message",
      icon: "fa fa-link",
      sidebarVisible: true,
    },
  ];

  static getRoutes(): IAppRoute {
    return this.routes;
  }
}
