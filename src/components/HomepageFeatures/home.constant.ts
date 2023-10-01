export type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  url: string;
};

export type QuickStartItem = {
  title: string;
  url: string;
};

export type RecommendedItem = {
  title: string;
  url: string;
};

export type GettingInfoItem = {
  title: string;
  url: string;
};

export const FeatureList: FeatureItem[] = [
  {
    title: "Java",
    Svg: require("@site/static/img/home/java-active.svg").default,
    url: "/404",
  },
  {
    title: "PHP",
    Svg: require("@site/static/img/home/php-active.svg").default,
    url: "/404",
  },
  {
    title: "Node.js",
    Svg: require("@site/static/img/home/node-active.svg").default,
    url: "/404",
  },
  {
    title: "Python",
    Svg: require("@site/static/img/home/python-active.svg").default,
    url: "/404",
  },
  {
    title: "Go Lang",
    Svg: require("@site/static/img/home/go-active.svg").default,
    url: "/404",
  },
  {
    title: "Ruby",
    Svg: require("@site/static/img/home/ruby-active.svg").default,
    url: "/404",
  },
  {
    title: ".NET",
    Svg: require("@site/static/img/home/dotnet.svg").default,
    url: "/404",
  },
  {
    title: "Containers",
    Svg: require("@site/static/img/home/container.svg").default,
    url: "/404",
  },
  {
    title: "Kubernetes",
    Svg: require("@site/static/img/home/kubernetes-icon-b.svg").default,
    url: "/404",
  },
  {
    title: "Databases",
    Svg: require("@site/static/img/home/databases.svg").default,
    url: "/404",
  },
  {
    title: "Load Balancer",
    Svg: require("@site/static/img/home/lb-b.svg").default,
    url: "/404",
  },
  {
    title: "Elastic VPS",
    Svg: require("@site/static/img/home/hosting-b.svg").default,
    url: "/404",
  },
  {
    title: "Storage",
    Svg: require("@site/static/img/home/storage-b.svg").default,
    url: "/404",
  },
  {
    title: "Cache",
    Svg: require("@site/static/img/home/cache.svg").default,
    url: "/404",
  },
];

export const QuickStartList: QuickStartItem[] = [
  { title: "Getting Started", url: "/404" },
  { title: "Dashboard Guide", url: "/404" },
  { title: "Deployment Guide", url: "/404" },
  { title: "Database Сonnection", url: "/404" },
  { title: "Software Stack Versions", url: "/404" },
];

export const RecommendedList: RecommendedItem[] = [
  { title: "Automatic Vertical Scaling", url: "/404" },
  { title: "Automatic Horizontal Scaling", url: "/404" },
  { title: "Custom Domain Name", url: "/404" },
  { title: "Traffic Distributor", url: "/404" },
  { title: "Accounts Collaboration", url: "/404" },
];

export const GettingInfoList: GettingInfoItem[] = [
  { title: "Release Notes", url: "/404" },
  { title: "Platform API", url: "/404" },
  { title: "Cloud Scripting", url: "/404" },
  { title: "Platform CLI", url: "/404" },
  { title: "Ops Docs", url: "/404" },
];
