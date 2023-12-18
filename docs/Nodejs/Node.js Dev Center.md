---
title: Node.js dev center
slug: node.js-dev-center
sidebar_position: 1
---

## Node.js Hosting

The platform provides an out-of-box integration of the fast, lightweight and highly scalable NodeJS application server. It is automatically supplied with numerous optimization and management tools to make the hosting process maximally convenient for developers. In this article, we’ll go through the main tools and features available on the platform to provide the required level of Node.js hosting.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/01-nodejs-cloud-hosting.png)

</div>

Use the table of content below to find required information within the guide quicker:

- [Node.js Environment Hosting](/docs/Nodejs/Node.js%20Dev%20Center#nodejs-hosting)
- [Node.js Versioning](/docs/Nodejs/Node.js%20Dev%20Center#nodejs-versioning)
- [Node.js Application Deployment](/docs/Nodejs/Node.js%20Dev%20Center#nodejs-application-deployment)
- [Node.js Package Managers](/docs/Nodejs/Node.js%20Dev%20Center#nodejs-package-managers)
- [Node.js Process Managers](/docs/Nodejs/Node.js%20Dev%20Center#nodejs-process-managers)
- [Domains Management](/docs/Nodejs/Node.js%20Dev%20Center#domains-management)
- [Automatic Vertical Scaling](/docs/Nodejs/Node.js%20Dev%20Center#automatic-vertical-scaling)
- [Manual Horizontal Scaling](/docs/Nodejs/Node.js%20Dev%20Center#manual-horizontal-scaling)
- [Automatic Horizontal Scaling](/docs/Nodejs/Node.js%20Dev%20Center#automatic-horizontal-scaling)

## Node.js Environment Hosting

To run your Node.js application, you need to [set up](/docs/EnvironmentManagement/Setting%20Up%20Environment#choosing-programming-language-or-specific-deployment-option) the appropriate environment using the powerful and intuitive **Topology Wizard**. Switch to the **_Node.js_** tab, select the required engine version for your application server and add any other [software stack](/docs/QuickStart/Software%20Stack%20Versions) required. If needed, adjust other parameters, such as cloudlets and nodes count, Public IPv4 and IPv6, etc.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/02-nodejs-topology-wizard.png)

</div>

:::tip Note

Each instance is a completely [isolated container](/docs/PlatformOverview/Isolated%20Container#isolated-containers-live-migration), fully independent and uninfluenced by other stacks. Additionally, scaled out nodes are automatically distributed across the physical servers (or VMs) ensuring [high availability](/docs/PlatformOverview/Isolated%20Container#high-availability-for-applications).

:::

## Node.js Versioning

Currently (at the time of this writing), the following Node.js versions are supported:

- 14.21.3
- 16.20.0
- 18.18.0
- 20.8.0

:::tip

The up-to-date list of the releases available on the platform is provided via the dedicated, regularly (weekly) updated [Software Stack Versions](/docs/QuickStart/Software%20Stack%20Versions) document.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/03-nodejs-versions.png)

</div>

You can select the required [version of Node.js](/docs/Nodejs/Node.js%20Versions#nodejs-versions) directly from the topology wizard during the creation of a new environment and adjust it for the existing one via [container redeployment](/docs/Container/Container%20Redeploy).

## Node.js Application Deployment

The platform automates the deployment process for the managed NodeJS application servers using:

- application _archive_ uploaded from the local machine or via external URL
- remote _VCS_ repository (e.g. GitHub)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/04-deploy-nodejs-application.png)

</div>

:::tip

Usually, due to the [ports auto-redirect](/docs/Container/Container%20Configuration/Ports#ports-auto-redirect) algorithm, the deployed projects are instantly accessible without any additional manipulations. Herewith, for greater accuracy, you can manually exclude some of the services from the auto-redirect search by listing the appropriate ports via the **_REDIRECT_EXCLUDE_PORTS_** [variable](/docs/Container/Container%20Configuration/Variables).

:::

You can read the appropriate documents to learn more about the deployment of the Node.js applications:

- [Deployment Manager](/docs/Deployment/Deployment%20Manager)
- [Deployment Guide](/docs/Deployment/Deployment%20Guide)
- [Auto-Deploy Overview](/docs/Deployment/Git%20&%20SVN%20Auto-Deploy/Auto-Deploy%20Overview)
- [Deployment Hooks](/docs/Deployment/Deployment%20Hooks)

## Node.js Package Managers

For greater convenience, each NodeJS application server contains a built-in development tool called [**Package Manager**](/docs/Nodejs/Nodejs%20Apps%20Specifications/Package%20Managers#nodejs-package-managers), which provides standardization and automation of the installation, update, configuration, and removal processes.

The platform supports two types of package managers:

- [**_npm_**](https://www.npmjs.com/) - manages your project requirements by installing the additional modules, packages, and ready-to-use applications
- [**_yarn_**](https://classic.yarnpkg.com/en/) - operates the same requirements as in _npm_ (so no changes are required for the existing applications), while providing higher speed, reliability, and convenience

By default, the npm package manager is used for the NodeJS application servers, but, if necessary, it can be easily switched to yarn. For that, access the [container variables](/docs/Container/Container%20Configuration/Variables) frame and set the appropriate **_PACKAGE_MANAGER_** value (either _npm_ or _yarn_).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/05-nodejs-package-manager.png)

</div>

## Node.js Process Managers

[**Process Managers**](/docs/Nodejs/Nodejs%20Apps%20Specifications/Process%20Managers#nodejs-process-managers) provide the ability to control application lifecycle, monitor running services and maintain the project operability. The platform provides support of the following process managers for the NodeJS stack:

- [**_npm_**](https://docs.npmjs.com/cli/v8/commands/npm-run-script) - provides the ability to start the application
- [**_pm2_**](https://pm2.keymetrics.io/) - provides a huge variety of application management features, including the launched Node.js processes monitoring
- [**_forever_**](https://www.npmjs.com/package/forever) - allows running your Node.js processes continuously and automatically restarting them upon failure
- [**_supervisor_**](https://www.npmjs.com/package/supervisor) - monitors running applications for changes and automatically restarts required ones to keep them up-to-date

Users can choose the necessary process manager during container [redeployment](/docs/Container/Container%20Redeploy) or by adjusting the **_PROCESS_MANAGER_** [variable](/docs/Container/Container%20Configuration/Variables) (using _forever_, _npm_, _pm2_, or _supervisor_ as value, container restart is needed to apply new options).

## Domains Management

Your Node.js application can be easily supplemented with the [custom domain](/docs/ApplicationSetting/Domain%20Name%20Management/Custom%20Domain%20Name#custom-domain-name) name to be used instead of the default one. There are two options based on your environment topology:

- **CNAME redirect** if using Shared Load Balancer; is recommended for **_dev_** and **_test_** environments
- **DNS A Record** if using Public IP; can handle high traffic load and is suitable for **_production_** environments

Also, you can quickly switch traffic between your environments (e.g. to redirect customers to the newer application version without downtime) by utilizing the [swap domains](/docs/ApplicationSetting/Domain%20Name%20Management/Swap%20Domains#swap-domains) functionality or with the help of the **_SwapExtIps_** [API](https://docs.jelastic.com/api/#!/api/environment.Binder-method-SwapExtIps)/[CLI](/docs/Deployment%20Tools/API%20&%20CLI/Platform%20CLI/Swap%20Public%20IPs#cli-tutorial-public-ips-external-addresses-swap) method.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/06-nodejs-domain-management.png)

</div>

## Automatic Vertical Scaling

The platform dynamically provides the exact amount of resources (RAM and CPU) required by your nodes according to the current load with no manual intervention required. As a result, you never overpay for unused resources and save your time as the platform eliminates the need to handle the load-related adjustments or architectural changes.

You just need to set the upper [cloudlets](/docs/PlatformOverview/Cloudlet#what-is-a-cloudlet) limit (each one equals to _128 MiB_ of RAM and _400 MHz_ of CPU) for your NodeJS application server and everything else will be handled by platform automatically.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/07-nodejs-vertical-scaling.png)

</div>

Refer to the [automatic vertical scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Automatic%20Vertical%20Scaling#automatic-vertical-scaling) documentation for more information.

## Manual Horizontal Scaling

To scale out/in NodeJS application servers, you need to access the topology wizard and click the **+/-** buttons within the _Horizontal Scaling_ section to set the required number of nodes. Also, starting with the 5.5 platform version, you can adjust the preferred scaling mode:

- **_Stateless_** - simultaneously creates all new nodes from the base image template
- **_Stateful_** - sequentially copies file system of the master container into the new nodes

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/08-nodejs-horizontal-scaling.png)

</div>

The maximum number of the same-type servers within a single environment layer depends on a particular hosting provider settings (usually this limit stands for 16 nodes and can be enlarged by sending the appropriate request to support).

Also, for the proper requests distribution, a [load balancer](/docs/Load%20Balancers/Load%20Balancing#load-balancing) instance is automatically added upon NodeJS server scaling. Refer to the [horizontal scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Horizontal%20Scaling#horizontal-scaling-inside-the-cloud-multi-node) documentation for more details.

## Automatic Horizontal Scaling

Access the environment **Settings > Monitoring > Auto Horizontal** Scaling section to set up special tunable triggers, which allow to increase or decrease the number of nodes due to the application load. Configure type of resource to be monitored (**CPU**, **RAM**, **Network**, **Disk**) and the exact condition of scaling.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsDevCenter/09-nodejs-automatic-horizontal-scaling.png)

</div>

Learn more about [automatic horizontal scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Automatic%20Horizontal%20Scaling#automatic-horizontal-scaling) in the linked document.

In addition, hosting at the platform allows using other inbuilt tools and features, for example:

- Custom or Built-In SSL
- Public IPv4 and IPv6
- A wide range of managed software stacks
- Container firewalls, endpoints, and environment isolation
- User-friendly UI and direct SSH access for management
- Open API and Cloud Scripting for automation
- Pay-as-you-use pricing model
- Collaboration functionality for teamwork
- Multi-cloud distribution

As you can see, the platform provides all the necessary conditions for smooth Node.js hosting!
