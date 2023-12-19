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
    url: "http://localhost:3000/docs/container/container-types",
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
    url: "http://localhost:3000/docs/quickstart/getting-started",
  },
  {
    title: "Dashboard Guide",
    url: "http://localhost:3000/docs/quickstart/dashboard-guide",
  },
  {
    title: "Deployment Guide",
    url: "http://localhost:3000/docs/deployment/deployment-guide",
  },
  {
    title: "Database Сonnection",
    url: "/docs/Database/Database%20Hosting/Database%20Connection%20Strings",
  },
  {
    title: "Software Stack Versions",
    url: "http://localhost:3000/docs/quickstart/software-stack-versions",
  },
];

export const RecommendedList: RecommendedItem[] = [
  {
    title: "Automatic Vertical Scaling",
    url: "http://localhost:3000/docs/application-setting/scaling-and-clustering/automatic-vertical-scaling",
  },
  {
    title: "Automatic Horizontal Scaling",
    url: "http://localhost:3000/docs/application-setting/scaling-and-clustering/automatic-horizontal-scaling",
  },
  {
    title: "Custom Domain Name",
    url: "http://localhost:3000/docs/application-setting/domain-name-management/custom-domain-name",
  },
  {
    title: "Traffic Distributor",
    url: "http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-overview",
  },
  {
    title: "Accounts Collaboration",
    url: "/docs/Account&Pricing/Accounts%20Collaboration/Collaboration%20Overview",
  },
];

export const GettingInfoList: GettingInfoItem[] = [
  {
    title: "Release Notes",
    url: "http://localhost:3000/docs/platform-overview/release-notes/release-notes-8.3.2",
  },
  // { title: "Platform API", url: "#" },
  { title: "Cloud Scripting", url: "https://docs.cloudscripting.com/" },
  {
    title: "Platform CLI",
    url: "http://localhost:3000/docs/deployment-tools/api-&-cli/platform-cli/platform-cli-overview",
  },
  // { title: "Ops Docs", url: "#" },
];
