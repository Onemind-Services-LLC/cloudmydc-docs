---
sidebar_position: 6
---

In the modern world, the importance of data availability cannot be underestimated. Herewith, you want to maintain immediate access to any required information at a moment’s notice. Thus, for any production solution of any meaningful size, it is highly recommended to configure a **cluster**. Software clustering is the technique of using at least two instances for a service. Such redundancy not only provides reliability (the system can withstand a failure of at least one instance) but also helps to handle high load.

Based on the experience, the configuration of a cluster can be a challenging process that requires quite a lot of time investment. In order to help you out, the platform automates some of the most popular clusterization solutions and can perform them for you on-demand directly from [topology wizard](1). Such automation immensely simplifies and speeds up the creation of a reliable production-ready cluster for your project.

## Enabling Auto-Clustering
Currently, the following templates support the Auto-Clustering feature via the topology wizard:

- **application servers** - [Tomcat/TomEE](1), [GlassFish](1), [Payara](1), [Jenkins](1), [WildFly](1)
- **SQL databases** - [MySQL](1), [MariaDB](1), [Percona](1), [PostgreSQL](1)
- **NoSQL database** - [Couchbase](1), [MongoDB](1), [Redis](1), [OpenSearch](1)
- **storage server** - [Shared Storage Container](1)

:::tip Tip

In addition to the **Auto-Clustering** option in topology wizard, a number of prepackaged clusterization solutions can be found under the **Clusters** category of the platform [Marketplace](1).

![Locale Dropdown](./img/WhatIsAuto-Clustering/01-clusters-in-marketplace.png)

:::

1. Select one of the listed stacks in the topology wizard. The appropriate **Auto-Clustering** switcher will be available in the central part of the frame.

![Locale Dropdown](./img/WhatIsAuto-Clustering/02-stack-auto-clustering-in-topology-wizard.png)

2. You can hover over the **hint** icon for additional information on this particular stack auto-clustering implementation. Within the description, you can find the **Learn More** link to documentation with a more extensive overview.

![Locale Dropdown](./img/WhatIsAuto-Clustering/03-auto-cluster-description.png)

3. Also, after enabling Auto-Clustering, some additional configs can appear for further customization of the cluster. For example, **MariaDB auto-cluster** allows to choose replication Scheme and add dedicated ProxySQL load balancer exclusively for this database cluster:

![Locale Dropdown](./img/WhatIsAuto-Clustering/04-auto-cluster-additional-configs.png)

## Additional Materials on Auto-Clustering
The platform provides extensive documentation, multiple blog posts, and dedicated GitHub pages on the Auto-Clustering topic:

- [Auto-Clustering of Instances via Topology Wizard](1) - lists stacks that support the feature, explains basic management via wizard and Cloud Scripting
- [MariaDB/MySQL Auto-Сlustering with Load Balancing and Replication](1) - automatic clustering and replication for MariaDB and MySQL databases for high availability and performance
- [PostgreSQL Auto-Clustering with Asynchronous Master-Slave Replication](1) - get multiple copies of essential data within automatic master-slave replication for PostgreSQL database
- [MongoDB Replica Set Auto-Сlustering for High Availability and Performance](1) - automatic clustering and replication for MongoDB databases for redundancy, automated failover, and high-availability
- [Out-of-Box GlassFish & Payara Clustering](1): Running Java EE Highly-Available Applications in the Cloud - shows how to set up a highly-available cluster with GlassFish and Payara Micro for running Java EE applications
- [Jenkins Cluster Hosting for Continuous Integration and Delivery (CI/CD)](1) - automate continuous integration and delivery of your Java applications using pre-configured master-slave Jenkins cluster
- [WildFly Managed Domain in Containers](1): Automatic Micro Clustering and Scaling - explains how to extend your WildFly from a standalone server to cluster in managed domain mode for running cloud-native microservices
- [Shared Storage Container Auto-Clustering](1) - configures a reliable storage cluster with AutoFS, NFSv4, and GlusterFS support
- [Solutions Collection on GitHub](1) - stores the platform automation solutions, including Auto-Clustering (e.g. [db-clustering](1), [wildfly](1), [glassfish](1), and other repositories)