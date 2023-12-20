---
title: Certified Containers Deployment
slug: certified-containers-deployment
sidebar_position: 1
---

The platform offers the most popular [software stacks](/quickstart/software-stack-versions) as pre-configured and managed solutions for quick deployment and comfortable management. All of these certified containers are thoroughly tested and optimized specifically for use within the platform. Customizations include regular updates to the latest software version and additional integrations (such as auto-optimization based on the assigned resources, automated SSL certificates installation and application deployment, built-in [auto-clustering](/application-setting/scaling-and-clustering/auto-clustering-of-instances), etc.).

1. The deployment of certified containers is performed via the [topology wizard](/environment-management/setting-up-environment), which can be opened by clicking the **New Environment** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CertifiedContainersDeployment/01-paas-main-buttons.png)

</div>

2. Within the opened window, switch to the tab with the preferred programming language (_Java, PHP, Ruby, .NET, Node.js, or Python_).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CertifiedContainersDeployment/02-certified-containers-programming-languages.png)

</div>

3. Certified containers are added via the topology part on the left of the wizard. Here stacks are grouped by their purpose:

- **[Load Balancers](/load-balancers/load-balancing)** - stacks that operate as an entry point for the environment to distribute incoming requests and create even load on other nodes
- **[Application Servers](/java/java-app-servers/tomcat-and-tomee/tomcat-server)** (compute nodes) - web servers that run your application
- **[Databases](/database/database-hosting/db-hosting-overview)** (SQL & NoSQL) - database solutions to store and manage data
- **[Cache Node](/memcached/memcached-system)** - a Memcached object caching system for speeding up web applications through alleviating database load
- **[Shared Storage](/data-storage-container/shared-storage-container)** - dedicated storage node with NFSv4 support, enlarged disk space, and optimized performance
- **[Elastic VPS](/elastic-vps/elastic-vps-overview/general-information)** - virtual private servers on top of the CentOS, Ubuntu, Debian, and Windows OS
- **[Build Node](/java/build-node/java-vcs-deployment-with-maven)** - a build automation tool for Java projects
- **Extra** (custom layers) - some extra services or any of the stacks mentioned above

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CertifiedContainersDeployment/03-certified-containers-in-topology-wizard.png)

</div>

Use this section as a constructor that helps to visualize and easily adjust your topology.

:::tip Tip

The sequence of blocks displayed above is the default order. However, you can mix and match them in any preferable way to create your custom topologies.

:::

4. The platform offers multiple options of certified containers for each role within your environment topology. Just click on the required section to expand a list of the most popular solutions. For example, certified load balancers are represented via the following options:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CertifiedContainersDeployment/04-certified-stack-versions.png)

</div>

If you cannot find the required stack, you can check other categories (e.g. application servers, databases) using the **More** option or just type the name to **Search** among all the platform certified templates.

:::tip Tip

If the required software is not available as a certified template, you can try installing it as a [custom container](/container/container-deployment/custom-containers-deployment). Click the **Docker Image** option and search for the appropriate image on Docker Hub.

:::

5. You can [configure](/environment-management/setting-up-environment) added nodes (_vertical and horizontal scaling, disk limit, public IPs, etc._) via the central part of the wizard. Certified containers can have additional options, e.g. [Auto-Clustering](/application-setting/scaling-and-clustering/auto-clustering-of-instances).

![Locale Dropdown](./img/CertifiedContainersDeployment/05-environment-with-certified-containers.png)

That’s all! Click **Create** and wait a few minutes for the environment with certified containers to be deployed.
