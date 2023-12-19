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
    url: "/docs/java/java-dev-center",
  },
  {
    title: "PHP",
    Svg: require("@site/static/img/home/php-active.svg").default,
    url: "/docs/php/php-dev-center",
  },
  {
    title: "Node.js",
    Svg: require("@site/static/img/home/node-active.svg").default,
    url: "/docs/nodejs/node.js-dev-center",
  },
  {
    title: "Python",
    Svg: require("@site/static/img/home/python-active.svg").default,
    url: "/docs/python/python-dev-center",
  },
  {
    title: "Go Lang",
    Svg: require("@site/static/img/home/go-active.svg").default,
    url: "/docs/go-lang/go-dev-center",
  },
  {
    title: "Ruby",
    Svg: require("@site/static/img/home/ruby-active.svg").default,
    url: "/docs/ruby/ruby-dev-center",
  },
  {
    title: ".NET",
    Svg: require("@site/static/img/home/dotnet.svg").default,
    url: "/docs/windows-and-.NET/dot-net-core",
  },
  {
    title: "Containers",
    Svg: require("@site/static/img/home/container.svg").default,
    url: "/docs/container/container-types",
  },
  {
    title: "Kubernetes",
    Svg: require("@site/static/img/home/kubernetes-icon-b.svg").default,
    url: "/docs/kubernetes-hosting/kubernetes-cluster/kubernetes-overview",
  },
  {
    title: "Databases",
    Svg: require("@site/static/img/home/databases.svg").default,
    url: "/docs/database/database-hosting/db-hosting-overview",
  },
  {
    title: "Load Balancer",
    Svg: require("@site/static/img/home/lb-b.svg").default,
    url: "/docs/load-balancers/load-balancing",
  },
  {
    title: "Elastic VPS",
    Svg: require("@site/static/img/home/hosting-b.svg").default,
    url: "/docs/elastic-vps/elastic-vps-overview/general-information",
  },
  {
    title: "Storage",
    Svg: require("@site/static/img/home/storage-b.svg").default,
    url: "/docs/data-storage-container/data-storage-overview",
  },
  {
    title: "Cache",
    Svg: require("@site/static/img/home/cache.svg").default,
    url: "/docs/memcached/memcached-system",
  },
];

export const QuickStartList: QuickStartItem[] = [
  {
    title: "Getting Started",
    url: "/docs/quickstart/getting-started",
  },
  {
    title: "Dashboard Guide",
    url: "/docs/quickstart/dashboard-guide",
  },
  {
    title: "Deployment Guide",
    url: "/docs/deployment/deployment-guide",
  },
  {
    title: "Database Сonnection",
    url: "/docs/database/database-hosting/database-connection-strings",
  },
  {
    title: "Software Stack Versions",
    url: "/docs/quickstart/software-stack-versions",
  },
];

export const RecommendedList: RecommendedItem[] = [
  {
    title: "Automatic Vertical Scaling",
    url: "/docs/application-setting/scaling-and-clustering/automatic-vertical-scaling",
  },
  {
    title: "Automatic Horizontal Scaling",
    url: "/docs/application-setting/scaling-and-clustering/automatic-horizontal-scaling",
  },
  {
    title: "Custom Domain Name",
    url: "/docs/application-setting/domain-name-management/custom-domain-name",
  },
  {
    title: "Traffic Distributor",
    url: "/docs/application-setting/traffic-distributor/traffic-distributor-overview",
  },
  {
    title: "Accounts Collaboration",
    url: "/docs/account-and-pricing/accounts-collaboration/collaboration-overview",
  },
];

export const GettingInfoList: GettingInfoItem[] = [
  {
    title: "Release Notes",
    url: "/docs/platform-overview/release-notes/release-notes-8.3.2",
  },
  // { title: "Platform API", url: "#" },
  { title: "Cloud Scripting", url: "https://docs.cloudscripting.com/" },
  {
    title: "Platform CLI",
    url: "/docs/deployment-tools/api-&-cli/platform-cli/platform-cli-overview",
  },
  // { title: "Ops Docs", url: "#" },
];
