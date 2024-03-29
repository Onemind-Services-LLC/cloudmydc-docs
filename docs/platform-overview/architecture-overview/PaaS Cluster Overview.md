---
title: Paas Cluster Overview
slug: paas-cluster-overview
sidebar_position: 1
---

Platform as a Service (PaaS) is a comprehensive cluster of servers and resources that functions as a unified system, facilitating the seamless development, debugging, deployment, testing, and maintenance of hosted applications. Consisting of Hardware Nodes storing isolated virtual machines, PaaS clusters are orchestrated by a Cluster Orchestrator, an infrastructure node managing resources and supporting system maintenance. Each environment within PaaS comprises isolated virtual containers on specific hardware nodes. CloudMyDC, a VPS hosting system, utilizes containers to run multiple instances on a single physical server through operating system-level virtualization. This architecture enhances efficiency and scalability for optimal application management.

## Basic Concepts

**Cluster**

Cluster is a group of servers and other resources that act like a single system by providing the ability to develop, debug, deploy, test, run and maintain hosted applications. PaaS Cluster includes Hardware Nodes and a Cluster Orchestrator.

**Cluster Orchestrator**

Cluster Orchestrator (Infrastructure node) is a set of internal components for managing resources, processing requests, and supporting PaaS system maintenance.

**Hardware Node**

Hardware nodes are the physical servers which store the isolated virtual machines provisioned for users' environments.

**Environment**

Environment is a collection of isolated virtual containers that provides all the facilities necessary for a particular application.

**Node (Container)**

Node or container is a virtual isolated machine provisioned for the environment and stored on the particular hardware node.

**CloudMyDC**

CloudMyDC is a system used to host a VPS (Virtual Private Server). CloudMyDC Containers can support several containers on a single physical server by using operating system-level virtualization.

## General Cluster Overview

PaaS is an isolated cluster with a group of servers and other resources that act like a single system for providing the ability to develop, debug, deploy, test, run and maintain hosted applications.

PaaS Cluster includes Hardware Nodes where [virtual isolated containers](https://en.wikipedia.org/wiki/OS-level_virtualization) provisioned for environment are located and Cluster Orchestrator (Infrastructure Node) for internal components processing.

![Locale Dropdown](./img/PaaSClusterOverview/01-paas-cluster.png)

Follow the links to get more detailed information on each cluster component:

- [Cluster Orchestrator (Infrastructure node)](/platform-overview/architecture-overview/cluster-orchestrator)
- [Hardware Node](/platform-overview/architecture-overview/infrastructure-level)
