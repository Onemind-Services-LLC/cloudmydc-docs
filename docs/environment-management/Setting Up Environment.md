---
title: Setting Up Environment
slug: setting-up-environment
sidebar_position: 1
---

The first step of any application hosting is a creation of the [environment](/platform-overview/basics-&-terminology#environment) with the required isolated containers. The platform provides a powerful and intuitive UI to create and configure environments up to your specific needs. This document will guide you through all the needed steps, giving an extended explanation of available specifics and features.

1. Log in to the platform dashboard and click the **New Environment** button in the upper-left corner.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/01-paas-main-buttons.png)

</div>

2. Within the opened **_topology wizard_** dialog, you can set up all the necessary customizations. We recommend performing adjustments in the following order:

- [choose programming language](/environment-management/setting-up-environment#choosing-programming-language-or-specific-deployment-option) or specialized deployment solution (Docker Engine or Kubernetes Cluster)
- [set up topology](/environment-management/setting-up-environment#configuring-topology) by adding required software stacks
- [configure nodes](/environment-management/setting-up-environment#configuring-nodes-resources-and-specifics) resources and specifics
  review estimations, name the environment and [confirm the creation](/environment-management/setting-up-environment#reviewing-and-confirming-environment-creation)

![Locale Dropdown](./img/SettingUpEnvironment/02-configure-environment-via-wizard.png)

Below, we’ll review each of these points in detail, providing explanations on all of the available possibilities. The process may seem complex at first, but after familiarizing yourself, you’ll be able to configure a new (or adjust existing) environment in under a minute.

## Choosing Programming Language or Specific Deployment Option

As the first step of your environment creation, you need to select the deployment solution required for your project. PaaS is an extremely versatile platform that supports multiple options for application development and hosting thus it suits even the most demanding clients.

1. The most common and recommended choice (unless you are pursuing a specific application/architecture) is **certified containers**. These [stacks](/quickstart/software-stack-versions) are specifically configured and managed by the platform (e.g. version updates, security patches). By default, they support all platform features (scaling, automated deployment, redeploy, SSL, etc.) for the most smooth and convenient hosting and development.

![Locale Dropdown](./img/SettingUpEnvironment/03-environment-programming-languages-in-wizard.png)

Click on the tab with the required programming language (Java, PHP, Ruby, .NET, Node.js, or Python) tab to proceed with the platform certified containers.

2. The other deployment options are available via the Custom tab. All the variants listed below utilize the basic platform’s [system container](/platform-overview/system-container) (so-called OS container), which makes them compatible with the most (but not all) of the platform-distinguishing features (e.g. vertical and horizontal scaling).

![Locale Dropdown](./img/SettingUpEnvironment/04-topology-wizard-docker-tab.png)

- **Custom Container Images** - any Docker image (based on the [supported OS](/container/container-image-requirements)) deployed into the system container. Compared to the **managed containers**, this option provides access to a greater variety of solutions, search the entire Docker Hub registry or use your private repository. However, the software operability and compatibility with the platform cannot be guaranteed as the content is managed by respective image maintainers. It’s recommended to build custom container images based on [platform certified images](https://hub.docker.com/u/jelastic) using [FROM instruction](https://docs.docker.com/engine/reference/builder/#from).

- **Docker Engine** - a Docker Engine CE deployed into the system container. It provides access to all the Docker native functionality, including deployment, scaling, and management of multiple [application containers](/platform-overview/application-container) inside.

- **Kubernetes Cluster** - ready-to-go _[Kubernetes cluster](/kubernetes-hosting/kubernetes-cluster/kubernetes-overview)_ with a preconfigured control plane and worker nodes created based on the system containers. The deployment, scaling, and orchestration of the microservices inside are handled by Kubernetes control units, while the platform scales and manages control plane and worker nodes.

3. Also, it is recommended to select the preferred [region](/environment-management/environment-regions/choosing-a-region) (if available) before proceeding further.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/05-environment-regions-list.png)

</div>

## Configuring Topology

You can configure environment topology ([layers](/platform-overview/basics-&-terminology#layer) structure) via the left part of the wizard. Сonsider it as a constructor that helps you to create your environment. Here, the following blocks are available:

- **[Load Balancers](/load-balancers/load-balancing)** - stacks that operate as an entry point for the environment to distribute incoming request and create even load on other nodes
- **[Application Servers](/java/java-app-servers/tomcat-and-tomee/tomcat-server)** (compute nodes) - web servers that run your application
- **[Databases](/database/database-hosting/db-hosting-overview)** (SQL & NoSQL) - database solutions to store and manage data
- **[Cache Node](/memcached/memcached-system)** - a Memcached object caching system for speeding up web applications through alleviating database load
- **[Shared Storage](/data-storage-container/shared-storage-container)** - dedicated storage node with NFSv4 support, enlarged disk space and optimized performance
- **[Elastic VPS](/elastic-vps/elastic-vps-overview/general-information)** - virtual private servers on top of the CentOS, Ubuntu, Debian, and Windows OS
- **[Build Node](/java/build-node/java-vcs-deployment-with-maven)** - a build automation tool for Java projects
- **Extra** (custom layers) - any of the stacks mentioned above

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/06-environment-topology-builder-ui.png)

</div>

:::tip Tip

The sequence of blocks displayed above is the default order. However, you can mix and match them in any preferable way to create your custom topologies.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/06-1-custom-topology-order.png)

</div>

:::

1. The platform offers a number of the most popular options for each of these sections based on the default role. If you want to add a [stack](https://cloudmydc.com/) of a different role, click the **More** option at the bottom of the list. Also, you can use **Search** to quickly find any platform-managed stack.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/07-categorized-stacks-with-search.png)

</div>

:::tip Tip

If you cannot find a required software solution, you can add it as a [custom container](/container/container-deployment/custom-containers-deployment) from Docker Hub or your private repository.

:::

2. An **SSL** protection can be configured for your environment via the same-named section. Here, two options are available:

- **[Built-In SSL](/application-setting/ssl/built-in-ssl)** - enables an already trusted SSL certificate, avoiding any additional checks and saving your time on the certificate validation. However, it is applied to the default environment domain name only (i.e. with the hoster’s domain at the end) and does not work if [public IP](/application-setting/external-access-to-applications/public-ip) is attached to your servers.

- **[Custom SSL](/application-setting/ssl/custom-ssl)** - shows the pre-conditions of using your custom SSL certificates for the environment. Click the **Enable** button to automatically fulfill the requirements (e.g. enable Public IP) and refer to the linked instruction for further guidance.

:::tip Tip
Also, you can apply the Let’s Encrypt SSL add-on after the environment creation to automatically issue and integrate a free SSL certificate.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/08-environment-ssl-configuration.png)

</div>

## Configuring Nodes Resources and Specifics

Once you are done with the topology structure, you can adjust each particular layer via the wizard’s central part. Let’s review the available options from top to the bottom of the section.

1. You can toggle a layer **on/off**, as well as provide a custom alias for it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/09-environment-layer-switcher.png)

</div>

2. Configure the [automatic vertical scaling](/application-setting/scaling-and-clustering/automatic-vertical-scaling) by setting the number of reserved and dynamic [cloudlets](/platform-overview/cloudlet) (1 cloudlet = **128 MiB** of RAM and **400 MHz** of CPU) for the nodes within the layer.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/10-layer-vertical-scaling-configuration.png)

</div>

Think of it as a minimum and maximum CPU & RAM capacities per server. It is worth mentioning that no matter how high the scaling limit is, only actually consumed resources are charged. This helps to overcome load spikes and, at the same time, not to overpay for unused memory or processor.

3. The [Horizontal Scaling](/application-setting/scaling-and-clustering/horizontal-scaling) part allows defining a number of nodes within the layer and choosing a preferred scaling mode (stateful or stateless).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/11-horizontal-scaling-and-engine-search.png)

</div>

You can use the drop-down lists to change stack and engine type/versions (if needed, expand and start typing to **Search**). In case of adjusting an existing environment, these lists will redirect to the [container redeploy](/category/container-deployment) dialog in order to apply changes.

:::tip Tip

Click on the gear icon (circled in the image below) for additional [management options](/application-setting/scaling-and-clustering/horizontal-scaling#managing-nodes-within-layer) during scaling.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/12-scaled-nodes-management.png)

</div>

:::

4. Next, you need to configure additional settings.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/13-additional-layer-configuration.png)

</div>

The list may vary depending on the particular stack and account permissions:

- **[Auto-Clustering](/application-setting/scaling-and-clustering/auto-clustering-of-instances)** - automatic clusterization for some platform certified templates. Additional fields can appear after activation, e.g. scheme selection (_master-slave, master-master, or galera_) for the database cluster.
- **Disk Limit** - an amount of disk space reserved per node. The dedicated [Shared Storage](/data-storage-container/shared-storage-container) containers are usually provided with enlarged storage capacity.
- **Sequential restart delay** - a delay between the restart operation completion on one node and start on the other. It is used to avoid downtime, ensuring that at least one server is active. You can set it to “-1” for the simultaneous restart of all nodes within the layer.
- **[High-Availability](/application-setting/scaling-and-clustering/session-replication-for-ha)** (deprecated option, it is recommended redeploying to the latest version of the stack and using the Auto-Clustering feature instead) - automated session replication for the Tomcat and TomEE application servers
- **[Access via SLB](/application-setting/external-access-to-applications/shared-load-balancer)**- blocks access to the nodes of the layer via the platform Shared Load Balancer
- **[Public IPv4/IPv6](/application-setting/external-access-to-applications/public-ip)** - attach the specified number of external IP addresses to each node within the layer

5. At the bottom of the section, you can find buttons to the container configuration tools:

- **[Variables](/container/container-configuration/variables)** - review and manage a list of the [environment variables](/container/container-configuration/variables) for the current layer
- **[Links](/container/container-configuration/links)** - interconnect layers inside the environment
- **[Volumes](/container/container-configuration/volumes)** - manage a list of the data volumes to ensure files integrity during container lifecycle
- **[Ports](/container/container-configuration/ports)** - view information about containers' ports
- **[CMD / Entry Point](/container/container-configuration/run-configuration)** - configure containers' Entry Point and Run Command

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/14-layer-containers-configuration.png)

</div>

## Reviewing and Confirming Environment Creation

After all the configurations are done, you can review the amount of allocated resources and the estimated cost of the environment.

1. The main resource measuring units in the platform are [cloudlets](/platform-overview/cloudlet). Here, you can see the number of reserved ones and the scaling limit (dynamic) for the whole environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/15-environment-resource-usage.png)

</div>

For better analysis, the values are divided into the color-marked groups:

- **_green_** - load balancers
- **_blue_** - application servers
- **_orange_** - databases and cache nodes
- **_gray_** - all other stacks

2. Next, you can view the **Estimated Cost** of your environment. The widget displays price using the same color-marking as above, and you can change the period - hourly, daily, or monthly.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/16-environment-estimated-cost.png)

</div>

The **FROM** tab shows the price that will be fully charged as it covers reserved resources. The **TO** tab shows the maximum possible price if all nodes in the environment are going to fully consume all resources up to the scaling limit during the whole period.

:::tip Tip
Hover over the pricing widget to view extended details on the estimated cost calculation:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/17-extended-details-on-environment-cost.png)

</div>

:::

If needed, you can click on the links under the widget for additional information on [how pricing works](/account-and-pricing/pricing-model-overview) and [what is charged at the platform](/account-and-pricing/resource-charging/charged-resources).

3. Lastly, provide a name for your environment and click the **Create** button to proceed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/18-environment-name.png)

</div>

That’s all! In a few minutes, your new environment will appear on the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingUpEnvironment/19-created-environment-in-dashboard.png)

</div>

Now, you are ready for [application deployment](/deployment/deployment-guide) and further use of your cloud environment.
