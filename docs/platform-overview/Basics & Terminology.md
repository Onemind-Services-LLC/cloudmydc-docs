---
title: Basics & Terminology
slug: basics-&-terminology
sidebar_position: 2
---

This document represents an overview of the platform fundamental concepts, a versatile solution for hosting inside Public, Private, Hybrid, or Multi-Cloud. The reference below is targeted at those who are new to PaaS and helps to understand the overall landscape of the platform.

## Cloudlet

[**Cloudlet**](/platform-overview/cloudlet) is the smallest platform infrastructure component. It is a special resource unit that equals to **_128 MiB_** of **RAM** and **_400 MHz_** of **CPU** power simultaneously. Such high granularity of resources allows the system to allocate the exactly required capacity for each instance in the environment. This ensures the truly fair [usage-based pricing](/account-and-pricing/pricing-model-overview), so that only the really consumed resources are being paid.

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

**Container** (node) is an isolated virtualized instance, provisioned for software stack handling (like application servers, databases, load balancers, etc.) and placed on a particular [host](/platform-overview/basics-&-terminology#host). Each container can be automatically scaled, both [vertically](/application-setting/scaling-and-clustering/automatic-vertical-scaling) and [horizontally](/application-setting/scaling-and-clustering/automatic-horizontal-scaling), making hosting of applications truly flexible.

![Locale Dropdown](./img/BasicsTerminology/03-container-secure-and-isolated-instance.png)

The platform provides [certified containers](/quickstart/software-stack-versions) for Java, PHP, Ruby, Node.js, Python, Go, .NET and the ability to deploy custom [Docker](/container/container-types) containers. Each container has its own private IP and unique DNS record, whilst [public IP](/application-setting/external-access-to-applications/public-ip) can be easily attached within UI [dashboard](/quickstart/dashboard-guide) or via [API](/deployment-tools/api-&-cli/api-overview).

## Layer

**Layer**, also referred to as a **Node group**, is a set of similar [containers](/platform-overview/basics-&-terminology#container) in a single [environment](/platform-overview/basics-&-terminology#environment). There is a set of predefined layers within the platform [topology wizard](/environment-management/setting-up-environment) for certified containers, such as:

- load balancer (LB)
- compute (CP)
- database (DB)
- data storage (DS)
- сache
- VPS
- build node
- extra (custom layer; multiple ones can be added for [Docker-based](/container/container-types) environments)

![Locale Dropdown](./img/BasicsTerminology/04-layer-group-of-similar-containers.png)

The layers are designed to perform different actions with the same type of containers at once. For example, the nodes can be simultaneously restarted or redeployed, as well as horizontally [scaled](/application-setting/scaling-and-clustering/horizontal-scaling):

- manually via [dashboard](/quickstart/dashboard-guide), platform [API](/deployment-tools/api-&-cli/api-overview), [CLI](/deployment-tools/api-&-cli/platform-cli/platform-cli-overview)
- automatically based on the [load triggers](/application-setting/scaling-and-clustering/automatic-horizontal-scaling)

Also, it is possible to check the common logs and stats, or make the required configurations via file manager for all containers in a layer.

In addition, the containers of one layer are distributed across different [hosts](/platform-overview/basics-&-terminology#host) using anti-affinity rules, ensuring even more reliability and high-availability for hosted applications.

## Environment

**Environment** is a collection of isolated [containers](/platform-overview/basics-&-terminology#container) for running particular application services. The platform provides built-in tools for convenient environment [management](/environment-management/setting-up-environment) (i.e. configuration, monitoring, troubleshooting, etc.).

There is a number of actions that can be performed for the whole environment, such as stop, start, clone, migrate to another region, share with team members for [collaborative work](/environment-management/share-environment), track resource consumption and so on.

![Locale Dropdown](./img/BasicsTerminology/05-environment-interconnected-container-layers.png)

Each environment has its own internal 3rd level domain name by default. A custom external domain can be easily bound via [CNAME or A record](/application-setting/domain-name-management/custom-domain-name), and even further [swapped](/application-setting/domain-name-management/swap-domains) with another environment for traffic redirection.

## Application

**Application** is a combination of environments for running one project. A simple application with one or two [stacks](/quickstart/software-stack-versions) can be run inside a single environment.

:::tip Tip

Applications with more complex topology usually require more flexibility during deploy or update processes, so it is better to distribute different types of servers across several environments, to be able to maintain them independently.

:::

![Locale Dropdown](./img/BasicsTerminology/06-application-environments-of-a-single-project.png)

Application source code or built binaries can be deployed from:

- GIT/SVN repository, which allows to benefit on the [automatic updates](/deployment/git-&-svn-auto-deploy/auto-deploy-overview)
- local archive (zip, war, ear, etc.) via [UI dashboard](/quickstart/dashboard-guide) or [FTP](/deployment-tools/ftp-ftps-support)
- custom [Docker](/container/container-types) template

Also, a number of already prepackaged applications can be found within the platform [Marketplace](/deployment-tools/cloud-scripting-&-jps/marketplace), to be set up in just a few clicks.

## Host

**Host** is a physical server or a big virtual machine that is virtualized via KVM, ESXi, Hyper-V, etc.

![Locale Dropdown](./img/BasicsTerminology/07-host-physical-or-virtual-server.png)

Hosts are sliced into small isolated [containers](/platform-overview/basics-&-terminology#container) that are used to build [environments](/platform-overview/basics-&-terminology#environment). Such partition provides the industry-leading multitenancy, as well as high density and smart resource utilization with the help of containers distribution according to the load across hosts.

## Environment Region

**[Environment region](/environment-management/environment-regions/choosing-a-region)** is a set of [hosts](/platform-overview/basics-&-terminology#host) orchestrated within a single isolated network.

![Locale Dropdown](./img/BasicsTerminology/08-environment-region-hosts-group.png)

Each environment region has its own capacity in a specific data centre, predefined pool of private and public IP addresses and corresponding resource pricing. Moreover, the initially chosen location can be effortlessly changed by [migrating](/environment-management/environment-regions/migration-between-regions) the project between available regions.

## Platform Installation

The **Platform** is a group of [environment regions](/platform-overview/basics-&-terminology#environment-region) (where each one can be physically located in a separate Data Center, representing an isolated Cloud) and cluster orchestrator to control and act like a single system. This provides versatile possibilities to develop, deploy, test, run, debug and maintain applications due to the multiple options while selecting hardware - different capacity, pricing, location, etc.

![Locale Dropdown](./img/BasicsTerminology/09-platform-orchestrator-environment-regions.png)

As a result, you get a multi-data center or even multi-cloud solution for running your applications within a single panel. Moreover, each Platform is maintained by a separate hosting service provider with its local support team.
