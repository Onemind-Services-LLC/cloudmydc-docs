---
title: Python Dev Center
slug: python-dev-center
sidebar_position: 1
---

<!-- ## Python Cloud Hosting -->

<div style={{
    display: 'grid',
    gridTemplateColumns: '0.15fr 1fr',
    gap: '10px'
}}>
<div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
}}>

![Locale Dropdown](./img/PythonDevCenter/01-python-cloud-hosting.png)

</div>
</div>
<div>

The platform provides an out-of-box integration of the scalable _Apache_ application server dedicated specially for the Python-based applications hosting. It is already optimized and prepared for immediate management, allowing to dive right into development without bothering about numerous orchestration tasks, i.e. making the hosting process maximally convenient for developers.

</div>
</div>

Through this article, you’ll get acquainted with the main tools and features available on the platform to provide the required level of Python cloud hosting. Use the table of content below to find required information within the guide quicker:

- [Python Environment Hosting](/python/python-dev-center#python-environment-hosting)
- [Python Versioning](/python/python-dev-center#python-versioning)
- [Python Application Deployment](/python/python-dev-center#python-application-deployment)
- [Python Packages/Modules Management](/python/python-dev-center#python-packagesmodules-management)
- [Domains Management](/python/python-dev-center#domains-management)
- [Automatic Vertical Scaling](/python/python-dev-center#automatic-vertical-scaling)
- [Manual Horizontal Scaling](/python/python-dev-center#manual-horizontal-scaling)
- [Automatic Horizontal Scaling](/python/python-dev-center#automatic-horizontal-scaling)
- [Database Connection to PHP Application](/python/python-dev-center#database-connection-to-python-application)

## Python Environment Hosting

To start hosting your Python application at the platform, you need to [create](/environment-management/setting-up-environment) the appropriate environment via the powerful _topology wizard_ (accessible through the **New Environment** button at the dashboard’s top panel).

Switch to the **_Python_** language tab and select the desired engine version. _Apache Python_ application server is automatically added in a bundle with the _mod_wsgi_ module. Specify resource limits and nodes' count, as well as add extra [software stacks](/quickstart/software-stack-versions) or options (e.g. Public IPs) if required.

:::tip Note

This template utilizes a modern **_systemd_** initialization daemon.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/02-python-topology-wizard.png)

</div>

:::tip Notes:

- Each instance is a fully independent [isolated container](/platform-overview/system-container).
- Instances of the same layer are automatically distributed across available hosts ensuring [high availability](/platform-overview/isolated-container#high-availability-for-applications).

:::

## Python Versioning

Currently (at the time of this writing), the following Python versions are supported:

- 3.8.18
- 3.9.18
- 3.10.13
- 3.11.6
- 3.12.0

:::tip

The up-to-date list of the releases available on the platform is provided via the dedicated, regularly (weekly) updated [Software Stack Versions](/quickstart/software-stack-versions) document.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/03-python-versions.png)

</div>

You can select the required [version of Python](/python/python-versions#python-versions) directly from the topology wizard during the creation of a new environment, as well as adjust it for already existing ones using [container redeployment](/category/container-deployment).

## Python Application Deployment

Deployment to the managed application servers (_Apache Python_) is automated by the platform and can be performed using one of the following flows:

- from remote _VCS_ repository (e.g. GitHub)
- via application _archive_ uploaded by external URL or from the local machine

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/04-deploy-python-application.png)

</div>

Git flow provides a possibility of sequential or simultaneous deploy, as well as [automatic redeployment](/deployment/git-&-svn-auto-deploy/auto-deploy-overview#auto-deploy-of-gitsvn-updates) from the repository if new code changes appear.

Refer to the following guides for the detailed overview of the deployment process and the provided additional options:

- [Deployment Manager](/deployment/deployment-manager)
- [Deployment Guide](/deployment/deployment-guide)
- [Auto-Deploy Overview](/deployment/git-&-svn-auto-deploy/auto-deploy-overview#auto-deploy-of-gitsvn-updates)
- [Deployment Hooks](/deployment/deployment-hooks)

Check examples of the Python-based application hosting on the platform:

- Django CMS
- Mezzanine CMS
- Wagtail CMS

## Python Packages/Modules Management

In order to successfully deploy and run a Python application, some additional modules or other packages may be required to be installed. It is a common practice to run Python web applications in isolated [**_virtual environments_**](https://virtualenv.pypa.io/en/stable/), for example using the virtual environment tool, which allows managing projects independently and without the administrator privileges.

1. Connect to the Python environment [via SSH](/deployment-tools/ssh/ssh-access/overview#ssh-access) (using either a _local_ or built-in _Web SSH_ client) to create and start a new virtual environment. Run the following commands:

```bash
virtualenv {appName}
source {appName}/bin/activate
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/05-python-virtual-environment.png)

</div>

2. The management of the required software packages is commonly provided by [**_pip_**](https://pip.pypa.io/en/stable/) - a popular Python package management system for the [PiPI](https://pypi.org/) repository. Below, some of the most common commands are listed:

- `pip install {packageName}` - installs a necessary module
- `pip uninstall {packageName}` - removes previously installed module
- `pip install -upgrade {packageName}` - updates the specified module to its latest version
- `pip install -r requirements.txt` - installs all the modules, listed in the _requirements.txt_ file
- `pip list` - shows the set of already installed modules

:::tip Tip

In the case of the preconfigured application packages (archives), all the dependencies are provided via the **_requirements.txt_** file, which is read during the deployment process to install the listed Python modules automatically. Also, it should contain the **_wsgi.py_** file with the entry point script for running an application inside a virtual environment using the _mod_wsgi_ for Apache.

:::

## Domains Management

If needed, the default domain name of your Python application can be replaced with a [custom one](/application-setting/domain-name-management/custom-domain-name#custom-domain-name) via:

- **CNAME redirect** if using _Shared Load Balancer_; is recommended for **_dev_** and **_test_** environments
- **DNS A Record** if using _public IP_; can handle high traffic load and is suitable for **_production_** environments

In addition, the platform allows switching traffic between two environments quickly and without downtime (e.g. to seamlessly redirect customers to the newer application version) using the [swap domains](/application-setting/domain-name-management/swap-domains#swap-domains) functionality or with the help of the **_SwapExtIps_** [API](https://docs.jelastic.com/api/#!/api/environment.Binder-method-SwapExtIps)/[CLI](/deployment-tools/api-&-cli/platform-cli/swap-public-ips#cli-tutorial-public-ips-external-addresses-swap) method.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/06-python-custom-domains-management.png)

</div>

## Automatic Vertical Scaling

Automatic vertical scaling implemented by the platform provides the exact amount of resources (RAM and CPU) that your application currently requires. As a result, you don’t need to waste your time continuously making load-related adjustments. And in combination with the Pay-as-You-Use pricing model, it ensures you never overpay for unused resources.

Just set the upper [cloudlets](/platform-overview/cloudlet#what-is-a-cloudlet) limit (each one equals _128 MiB_ of RAM and _400 MHz_ of CPU) for your Python application server. Everything else will be handled by the platform automatically.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/07-python-automatic-vertical-scaling.png)

</div>

Refer to the [automatic vertical scaling](/application-setting/scaling-and-clustering/automatic-vertical-scaling#automatic-vertical-scaling) guide for additional details.

## Manual Horizontal Scaling

Horizontal scaling of the Python servers is no different from scaling any other instance at the platform - just specify the required number of nodes with the **+/-** buttons in the central part of the topology wizard. If needed, choose the preferred [scaling mode](/application-setting/scaling-and-clustering/horizontal-scaling#scaling-modes):

- **_Stateless_** - simultaneously creates all of the new nodes from the base image template
- **_Stateful_** - sequentially copies file system of the master container into the new nodes

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/08-python-horizontal-scaling.png)

</div>

:::tip Tip

For the proper request distribution, a [load balancer](/load-balancers/load-balancing#load-balancing) instance is automatically added to the environment upon Python server scaling. Refer to the [horizontal scaling](/application-setting/scaling-and-clustering/horizontal-scaling#horizontal-scaling-specifics) documentation for more specifications.

:::

## Automatic Horizontal Scaling

Navigate to the environment **Settings >** [**Auto Horizontal Scaling**](/application-setting/scaling-and-clustering/automatic-horizontal-scaling#automatic-horizontal-scaling) section to set up custom triggers, which allow automatically increase/decrease the number of nodes due to the application load. Just choose a resource type to be monitored (_CPU, RAM, Network, Disk_) and the exact condition of scaling, the rest actions are automated. You’ll be informed about any changes with email notifications if the appropriate option is enabled.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PythonDevCenter/09-python-automatic-horizontal-scaling.png)

</div>

## Database Connection to Python Application

A set of scalable and fully manageable database servers is available within the platform for you to easily install and use for the Python environment. To establish the connection, adjust your application following the instruction based on the database you require:

- [MySQL Connection](/database/mysql-mariadb-percona/connection-to-applications/python-connection#python-application-connection-to-mysqlmariadbpercona)
- [MongoDB Connection](/database/mongodb/connection-to-applications/python-connection-to-mongodb#python-application-connection-to-mongodb)

Besides, hosting at the platform allows using other built-in tools and features, for example:

- Custom or Built-In SSL
- Public IPv4 and IPv6
- A wide range of managed software stacks
- Container firewalls, endpoints, and environment isolation
- User-friendly UI and direct Web SSH access for management
- Open API and Cloud Scripting for automation
- Pay-as-you-use pricing model
- Collaboration functionality for teamwork
- Multi-cloud distribution

Explore high-quality Python hosting with the PaaS.
