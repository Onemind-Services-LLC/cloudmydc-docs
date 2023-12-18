---
title: Certified containers deployment
slug: certified-containers-deployment
sidebar_position: 1
---

The platform offers the most popular [software stacks](/docs/QuickStart/Software%20Stack%20Versions) as pre-configured and managed solutions for quick deployment and comfortable management. All of these certified containers are thoroughly tested and optimized specifically for use within the platform. Customizations include regular updates to the latest software version and additional integrations (such as auto-optimization based on the assigned resources, automated SSL certificates installation and application deployment, built-in [auto-clustering](/docs/ApplicationSetting/Scaling%20And%20Clustering/Auto-Clustering%20of%20Instances), etc.).

1. The deployment of certified containers is performed via the [topology wizard](/docs/EnvironmentManagement/Setting%20Up%20Environment), which can be opened by clicking the **New Environment** button.

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

- **[Load Balancers](/docs/Load%20Balancers/Load%20Balancing)** - stacks that operate as an entry point for the environment to distribute incoming requests and create even load on other nodes
- **[Application Servers](/docs/Java/Java%20App%20Servers/Tomcat%20and%20TomEE/Tomcat%20Server)** (compute nodes) - web servers that run your application
- **[Databases](/docs/Database/Database%20Hosting/DB%20Hosting%20Overview)** (SQL & NoSQL) - database solutions to store and manage data
- **[Cache Node](/docs/Memcached/Memcached%20System)** - a Memcached object caching system for speeding up web applications through alleviating database load
- **[Shared Storage](/docs/Data%20Storage%20Container/Shared%20Storage%20Container)** - dedicated storage node with NFSv4 support, enlarged disk space, and optimized performance
- **[Elastic VPS](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/General%20Information)** - virtual private servers on top of the CentOS, Ubuntu, Debian, and Windows OS
- **[Build Node](/docs/Java/Build%20Node/Java%20VCS%20Deployment%20with%20Maven)** - a build automation tool for Java projects
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

If the required software is not available as a certified template, you can try installing it as a [custom container](/docs/Container/Container%20Deployment/Custom%20Containers%20Deployment). Click the **Docker Image** option and search for the appropriate image on Docker Hub.

:::

5. You can [configure](/docs/EnvironmentManagement/Setting%20Up%20Environment) added nodes (_vertical and horizontal scaling, disk limit, public IPs, etc._) via the central part of the wizard. Certified containers can have additional options, e.g. [Auto-Clustering](/docs/ApplicationSetting/Scaling%20And%20Clustering/Auto-Clustering%20of%20Instances).

![Locale Dropdown](./img/CertifiedContainersDeployment/05-environment-with-certified-containers.png)

That’s all! Click **Create** and wait a few minutes for the environment with certified containers to be deployed.
