---
title: Gitlab Ci-Cd Integration
slug: gitlab-ci-cd-integration
sidebar_position: 10
---

<div style={{
    display: 'grid',
    gridTemplateColumns: '0.55fr 1fr',
    gap: '10px'
}}>
<div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
    width: "100%",
    objectFit: "contain",
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/image22-300x300.png)

</div>
</div>
<div>

In the article “Private GitLab Server Automatic Installation with Jelastic PaaS” we looked at the GitLab installation, its initial setup, and the basics required for the project’s lifecycle (git project importing and docker registry accessing). And today we’ll move forward to the integration of GitLab with Kubernetes, as well as describe how to set up continuous integration and continuous deployment pipeline for your projects based on Java application sample.

</div>
</div>

## Prerequisites for Kubernetes Integration

GitLab's ecosystem is enriched with a large number of features like:

- the built-in continuous integration system (CI/CD) allows you to create a pipeline and control the lifecycle of the application’s deployment, from downloading the code to the repository, until it is uploaded to the production environment
- with AutoDevOps, you can establish a CI/CD pipeline that automatically detects, builds, tests, and deploys your projects. Integrated with a Kubernetes (K8S) cluster, it allows you to deploy applications with no provisioning of extra CI/CD resources or configurations required.

## Kubernetes Integration Details

Below we will cover the Kubernetes integration with GitLab in Jelastic PaaS as an endpoint of the pipeline. You will see how to get rid of boring integration routines required to add the K8S manually entering a lot of data:

- Proper API URL. To identify access and permissions issues when adding a cluster, Kubernetes integration checks the availability of the API URL
- Correct access token
- Valid CA certificate
- Project namespaces
- Local network access, etc.

All of them may be done with platform automation. Also, we will go through the steps on how to create a project, build a pipeline and deploy Java applications to the Kubernetes cluster integrated with the Gitlab server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/image7-1-768x365.png)

</div>

## Kubernetes and GitLab Installation

Sign in to the Jelastic platform dashboard, go to the [Marketplace](/deployment-tools/cloud-scripting-&-jps/marketplace), find and install **DevOps Lab - GitLab Server** and **Kubernetes Cluster** applications one by one. The installation sequence is arbitrary. Note that the solution from this guide is available only for billing customers.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/image19.png)

</div>

- If you are going to use a custom domain, activate the Install Let’s Encrypt Certificates and Custom Domain Addon option while installing the GitLab server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/image35.png)

</div>

- Kubernetes application can be installed with default parameters or based on your needs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/install.png)

</div>

When you finish both installations, the topologies should look as follows.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/2envs-topology.png)

</div>

## Kubernetes Integration with GitLab

You can integrate Kubernetes with GitLab using "**Kubernetes GitLab Integration Add-On**".

1. Open Add-Ons list next to the **Control Plane** node, find the required one and press the Configure button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/addons1.png)

</div>

2. In the open dialogue find the GitLab DevOps environment and press **Apply**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/image4-1.png)

</div>

3. Congratulations! The Kubernetes integration with the GitLab server is completed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/gitlab-dash-k8s1-1024x380.png)

</div>

4. Click on Kubernetes to get integration details.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GitLabCI-CDIntegration/kuber-integration-details-1024x716.png)

</div>

Now you may use GitLab pipelines to build and deploy projects to the Kubernetes cluster.

In the next article, we'll cover how to test Kubernetes and GitLab integration, as well as how to bind custom domain to the application running within this setup.

Automate continuous integration and delivery of your applications using state-of-the-art solutions. Get your Kubernetes with GitLab CI/CD pipeline setup at one of Jelastic cloud service providers.
