---
sidebar_position: 2
---

This document represents an overview of the platform fundamental concepts, a versatile solution for hosting inside Public, Private, Hybrid, or Multi-Cloud. The reference below is targeted at those who are new to PaaS and helps to understand the overall landscape of the platform.

Here, we offer a consistent outline of the underlying platform components with pointers to the corresponding documentation, namely:

- [Cloudlet](https://cloudmydc.com/)
- [Container](https://cloudmydc.com/)
- [Layer](https://cloudmydc.com/)
- [Environment](https://cloudmydc.com/)
- [Application](https://cloudmydc.com/)
- [Host](https://cloudmydc.com/)
- [Environment Region](https://cloudmydc.com/)
- [Platform Installation](https://cloudmydc.com/)
- [Cloud Union](https://cloudmydc.com/)

Being informed about the basic components and how they interrelate, you can proceed with more complex scenarios available within the platform.

## Cloudlet

[Cloudlet](https://cloudmydc.com/) is the smallest platform infrastructure component. It is a special resource unit that equals to **128 MiB** of **RAM** and **400 MHz** of **CPU** power simultaneously. Such high granularity of resources allows the system to allocate the exactly required capacity for each instance in the environment. This ensures the truly fair [usage-based pricing](https://cloudmydc.com/), so that only the really consumed resources are being paid.

![Locale Dropdown](./img/BasicsTerminology/01-cloudlet-resource-unit.png)

There are two types of cloudlet at the platform:

- **Reserved Cloudlets** are fixed amount of resources reserved in advance and charged irrespective of the actual usage. Reserved cloudlets are cheaper than dynamic and recommended to be used when the application load is permanent.
- **Dynamic Cloudlets** are added and removed automatically according to the amount of resources required by your application (assigned when load goes up and removed as soon as it drops down). Dynamic cloudlets are recommended to be used for applications with variable load or when it cannot be predicted in advance, ensuring the truly usage-based charging model. In such a way, so that you pay based on your actual resource usage within the scaling limit.

![Locale Dropdown](./img/BasicsTerminology/02-reserved-and-dynamic-cloudlets.png)

:::tip Note

When calculating cloudlet usage, the system considers only the larger of RAM or CPU usage per hour (not both combined). E.g. if during one hour your average CPU usage is 2400 MHz (6 cloudlets), and your peak RAM usage is 1024 MiB (8 cloudlets), you pay for 8 cloudlets - not the combined total (14 cloudlets).

:::

Both reserved and dynamic cloudlets functionality provides auto discounts for the usage volume - the more is used, the cheaper is the base price.

## Container

**Container** (node) is an isolated virtualized instance, provisioned for software stack handling (like application servers, databases, load balancers, etc.) and placed on a particular [host](https://cloudmydc.com/). Each container can be automatically scaled, both [vertically](https://cloudmydc.com/) and [horizontally](https://cloudmydc.com/), making hosting of applications truly flexible.

![Locale Dropdown](./img/BasicsTerminology/03-container-secure-and-isolated-instance.png)

The platform provides [certified containers](https://cloudmydc.com/) for Java, PHP, Ruby, Node.js, Python, Go, .NET and the ability to deploy custom [Docker](https://cloudmydc.com/) containers. Each container has its own private IP and unique DNS record, whilst [public IP](https://cloudmydc.com/) can be easily attached within UI [dashboard](https://cloudmydc.com/) or via [API](https://cloudmydc.com/).

## Layer

**Layer**, also referred to as a **Node group**, is a set of similar [containers](https://cloudmydc.com/) in a single [environment](https://cloudmydc.com/). There is a set of predefined layers within the platform [topology wizard](https://cloudmydc.com/) for certified containers, such as:

- load balancer (LB)
- compute (CP)
- database (DB)
- data storage (DS)
- сache
- VPS
- build node
- extra (custom layer; multiple ones can be added for [Docker-based](https://cloudmydc.com/) environments)

![Locale Dropdown](./img/BasicsTerminology/04-layer-group-of-similar-containers.png)

The layers are designed to perform different actions with the same type of containers at once. For example, the nodes can be simultaneously restarted or redeployed, as well as horizontally [scaled](https://cloudmydc.com/):

- manually via [dashboard](https://cloudmydc.com/), platform [API](https://cloudmydc.com/), [CLI](https://cloudmydc.com/)
- automatically based on the [load triggers](https://cloudmydc.com/)

Also, it is possible to check the common logs and stats, or make the required configurations via file manager for all containers in a layer.

In addition, the containers of one layer are distributed across different [hosts](https://cloudmydc.com/) using anti-affinity rules, ensuring even more reliability and high-availability for hosted applications.

## Environment

**Environment** is a collection of isolated [containers](https://cloudmydc.com/) for running particular application services. The platform provides built-in tools for convenient environment [management](https://cloudmydc.com/) (i.e. configuration, monitoring, troubleshooting, etc.).

There is a number of actions that can be performed for the whole environment, such as stop, start, clone, migrate to another region, share with team members for [collaborative work](https://cloudmydc.com/), track resource consumption and so on.

![Locale Dropdown](./img/BasicsTerminology/05-environment-interconnected-container-layers.png)

Each environment has its own internal 3rd level domain name by default. A custom external domain can be easily bound via [CNAME or A record](https://cloudmydc.com/), and even further [swapped](https://cloudmydc.com/) with another environment for traffic redirection.

## Application

**Application** is a combination of environments for running one project. A simple application with one or two [stacks](https://cloudmydc.com/) can be run inside a single environment.

:::tip Tip

Applications with more complex topology usually require more flexibility during deploy or update processes, so it is better to distribute different types of servers across several environments, to be able to maintain them independently.

:::

![Locale Dropdown](./img/BasicsTerminology/06-application-environments-of-a-single-project.png)

Application source code or built binaries can be deployed from:

- GIT/SVN repository, which allows to benefit on the [automatic updates](https://cloudmydc.com/)
- local archive (zip, war, ear, etc.) via [UI dashboard](https://cloudmydc.com/) or [FTP](https://cloudmydc.com/)
- custom [Docker](https://cloudmydc.com/) template

Also, a number of already prepackaged applications can be found within the platform [Marketplace](https://cloudmydc.com/), to be set up in just a few clicks.

## Host

**Host** is a physical server or a big virtual machine that is virtualized via KVM, ESXi, Hyper-V, etc.

![Locale Dropdown](./img/BasicsTerminology/07-host-physical-or-virtual-server.png)

Hosts are sliced into small isolated [containers](https://cloudmydc.com/) that are used to build [environments](https://cloudmydc.com/). Such partition provides the industry-leading multitenancy, as well as high density and smart resource utilization with the help of containers distribution according to the load across hosts.

## Environment Region

**[Environment region](https://cloudmydc.com/)** is a set of [hosts](https://cloudmydc.com/) orchestrated within a single isolated network.

![Locale Dropdown](./img/BasicsTerminology/08-environment-region-hosts-group.png)

Each environment region has its own capacity in a specific data centre, predefined pool of private and public IP addresses and corresponding resource pricing. Moreover, the initially chosen location can be effortlessly changed by [migrating](https://cloudmydc.com/) the project between available regions.

## Platform Installation

The **Platform** is a group of [environment regions](https://cloudmydc.com/) (where each one can be physically located in a separate Data Center, representing an isolated Cloud) and cluster orchestrator to control and act like a single system. This provides versatile possibilities to develop, deploy, test, run, debug and maintain applications due to the multiple options while selecting hardware - different capacity, pricing, location, etc.

![Locale Dropdown](./img/BasicsTerminology/09-platform-orchestrator-environment-regions.png)

As a result, you get a multi-data center or even multi-cloud solution for running your applications within a single panel. Moreover, each Platform is maintained by a separate hosting service provider with its local support team.

## Cloud Union

The platform has a unique business model of distributing its cloud product globally through hosting providers that form our **Cloud Union**. There is a rich choice of the platform vendors regulated by local government and laws. In other words, our hosting partners speak your language and understand your specific needs.

![Locale Dropdown](./img/BasicsTerminology/10-cloud-union-paas-hosting-providers.png)

Cloud Union already includes [100 data centres](https://cloudmydc.com/) available in 38 countries (more than [offered by cloud giants](https://cloudmydc.com/)). This partner community provides the freedom of choice, while hosting your application with no vendor lock-in and no compromise on data centre location, support level, performance or pricing.