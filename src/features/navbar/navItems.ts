export enum NavItems {
  Home = "خانه",
  Projects = "پروژه ها",
  Resume = "رزومه",
  Blog = "بلاگ",
  CloudSpace = "فضای ابری",
}

export const navItems = [
  {
    title: NavItems.Home,
    url: `/`,
  },
  {
    title: NavItems.Projects,
    url: `/projects`,
  },
  {
    title: NavItems.Resume,
    url: `/resume`,
  },
  {
    title: NavItems.Blog,
    url: `/blogs`,
  },
  {
    title: NavItems.CloudSpace,
    url: `/cloude-space`,
  },
];
