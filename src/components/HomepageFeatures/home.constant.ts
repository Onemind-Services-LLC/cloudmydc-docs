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
    url: "/docs/Java/Java%20Dev%20Center",
  },
  {
    title: "PHP",
    Svg: require("@site/static/img/home/php-active.svg").default,
    url: "/docs/PHP/PHP%20Dev%20Center",
  },
  {
    title: "Node.js",
    Svg: require("@site/static/img/home/node-active.svg").default,
    url: "/docs/Nodejs/Node.js%20Dev%20Center",
  },
  {
    title: "Python",
    Svg: require("@site/static/img/home/python-active.svg").default,
    url: "/docs/Python/Python%20Dev%20Center",
  },
  {
    title: "Go Lang",
    Svg: require("@site/static/img/home/go-active.svg").default,
    url: "/docs/Go%20Lang/Go%20Dev%20Center",
  },
  {
    title: "Ruby",
    Svg: require("@site/static/img/home/ruby-active.svg").default,
    url: "/docs/Ruby/Ruby%20Dev%20Center",
  },
  {
    title: ".NET",
    Svg: require("@site/static/img/home/dotnet.svg").default,
    url: "/docs/Windows&.NET/DOT%20NET%20Core",
  },
  {
    title: "Containers",
    Svg: require("@site/static/img/home/container.svg").default,
    url: "/docs/Container/Container%20Types",
  },
  {
    title: "Kubernetes",
    Svg: require("@site/static/img/home/kubernetes-icon-b.svg").default,
    url: "/docs/Kubernetes%20Hosting/Kubernetes%20Cluster/Kubernetes%20Overview",
  },
  {
    title: "Databases",
    Svg: require("@site/static/img/home/databases.svg").default,
    url: "/docs/Database/Database%20Hosting/DB%20Hosting%20Overview",
  },
  {
    title: "Load Balancer",
    Svg: require("@site/static/img/home/lb-b.svg").default,
    url: "/docs/Load%20Balancers/Load%20Balancing",
  },
  {
    title: "Elastic VPS",
    Svg: require("@site/static/img/home/hosting-b.svg").default,
    url: "/docs/Elastic%20VPS/Elastic%20VPS%20Overview/General%20Information",
  },
  {
    title: "Storage",
    Svg: require("@site/static/img/home/storage-b.svg").default,
    url: "/docs/Data%20Storage%20Container/Data%20Storage%20Overview",
  },
  {
    title: "Cache",
    Svg: require("@site/static/img/home/cache.svg").default,
    url: "/docs/Memcached/Memcached%20System",
  },
];

export const QuickStartList: QuickStartItem[] = [
  {
    title: "Getting Started",
    url: "/docs/QuickStart/Getting%20Started",
  },
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
