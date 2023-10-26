---
sidebar_position: 1
---

## Ruby PaaS Hosting

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

<!-- Image Url changes -->

![Locale Dropdown](./img/RubyDevCenter/01-ruby-cloud-hosting.png)

</div>
</div>
<div>

<!-- Content changes -->

**Ruby** is a popular, open source programming language with a powerful and practical, yet natural and easy to read/write syntax. Ruby combines the best practices from various solutions to provide a unique object-oriented language, which aims for simplicity and provides such features as basic & special object-oriented features; operator overloading; exception handling; iterators and closures; garbage collection, and more.

</div>
</div>

The platform provides an out-of-box integration of the Ruby web servers, providing all the management and automatization tools (e.g. _Ruby on Rails_ web-development framework) for comfortable hosting and maximally convenient Ruby application development.

In this article, we’ll go through the distinctive features of the [Ruby](https://cloudmydc.com/) hosting and introduce the Ruby-related possibilities within the platform. Use the table of content below to find required information within the guide quicker:

- [Ruby Environment Hosting](https://cloudmydc.com/)
  - [Ruby Application Servers](https://cloudmydc.com/)
  - [Ruby Versioning](https://cloudmydc.com/)
- [Ruby Application Deployment](https://cloudmydc.com/)
- [Ruby Dependency Management](https://cloudmydc.com/)
- [Ruby Post Deploy Configuration](https://cloudmydc.com/)
- [Domains Management](https://cloudmydc.com/)
- [Automatic Vertical Scaling](https://cloudmydc.com/)
- [Manual Horizontal Scaling](https://cloudmydc.com/)
- [Automatic Horizontal Scaling](https://cloudmydc.com/)

## Ruby Environment Hosting

The platform provides a powerful and intuitive topology wizard to [set up](https://cloudmydc.com/) the hosting of a new environment.

Switch to the _Ruby_ language tab, select the required application server and engine version, add any other [software stack](http://localhost:3000/docs/QuickStart/Software%20Stack%20Versions) required. If needed, adjust other parameters, such as cloudlets (RAM and CPU), disk space, public IPv4/IPv6, node count, etc.

:::tip Note

Both _Apache Ruby_ and _NGINX Ruby_ templates utilize a modern **_systemd_** initialization daemon.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/02-ruby-topology-wizard.png)

</div>

:::tip Note

All instances are [completely isolated](https://cloudmydc.com/) and fully independent containers. Additionally, scaled out nodes are automatically distributed across the physical servers (or VMs), ensuring [high availability](https://cloudmydc.com/).

:::

## Ruby Application Servers

The platform provides [Ruby application servers](https://cloudmydc.com/) based on the _Apache_ and _NGINX_ software stacks. Both ones are configured to utilize the _Ruby on Rails_ framework for implementing web applications and the **Passenger** application server by default.

If needed, the _NGINX Ruby_ stack can be easily configured to work with different inbuilt servers:

- [**_Passenger_**](https://cloudmydc.com/) - one of the most feature-rich application servers for Ruby, which are invaluable for the modern web apps and microservice APIs
- [**_Puma_**](https://cloudmydc.com/) - a Ruby web server oriented on speed and parallelism due to fast and accurate HTTP 1.1 protocol parsing
- [**_Unicorn_**](https://cloudmydc.com/) - an HTTP server, which takes advantage of the Unix/Unix-like kernels features for serving fast clients on low-latency, high-bandwidth connections

## Ruby Versioning

The following Ruby versions are supported at the time of this writing:

- 3.0.6
- 3.1.4
- 3.2.2

:::tip

The up-to-date list of the releases available on the platform is provided via the dedicated, regularly (weekly) updated [Software Stack Versions](https://cloudmydc.com/) document.

:::

You can select the required [version of Ruby](https://cloudmydc.com/) via the topology wizard during the creation of a new environment, as well as adjust it for the existing instances via [container redeployment](https://cloudmydc.com/).

## Ruby Application Deployment

The platform automates the deployment process for the managed _Apache Ruby_ and _NGINX Ruby_ application servers using:

- application **_archive_** uploaded from the local machine or via external URL
- remote **_VCS_** repository (e.g. GitHub)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/03-ruby-application-deployment.png)

</div>

When deploying a Ruby application, only a single context (ROOT) can be used. However, you can select from three _Deployment Types_ (i.e. [RAILS_ENV](https://cloudmydc.com/)) for it:

- **_development_** - reloads all application classes and turns off caching (allows a faster development cycle)
- **_production_** - turns on all caching
- **_test_** - wipes out database between test runs

If needed, you can switch between the Ruby deployment types via the appropriate drop-down list next to your application (see the image below).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/04-ruby-deployment-types.png)

</div>

Read the related documents to learn more about the deployment of the Ruby applications:

- [Deployment Manager](https://cloudmydc.com/)
- [Deployment Guide](https://cloudmydc.com/)
- [Auto-Deploy Overview](https://cloudmydc.com/)
- [Deployment Hooks](https://cloudmydc.com/)

## Ruby Dependency Management

All Ruby instances within the platform are provided with the [**_Bundler_**](https://cloudmydc.com/) dependency manager for automatic tracking and installing the exact gems and versions, which your project requires. If the project has a _Gemfile_ file in the root folder, it will automatically resolve dependencies with Bundler after deployment to the server without you having to perform any manual intervention.

Also, if needed, you can include any Ruby framework into your Gemfile (_Sinatra, Rack, therubyracer, Ramaze_, etc.) or utilize [**_Ruby on Rails_**](https://cloudmydc.com/) - one of the most popular frameworks for developing and implementing web applications, which is available by default.

Refer to the [Ruby Dependency Management](https://cloudmydc.com/) documentation for additional information.

## Ruby Post Deploy Configuration

In order to automate the repetitive actions that Ruby projects need to perform after the application is deployed (e.g. _db:migrate_), a **_rake_deploy_** file (located in the root folder of the project) can be created.

The file should contain a list of commands (each one from a new line) that will be executed consecutively via the [**_rake_**](https://cloudmydc.com/) tool after each restart of the Apache/NGINX node. After successful execution, the **_rake_deploy_** file is automatically removed. Refer to the [Ruby Post Deploy Configuration](https://cloudmydc.com/) documentation for additional information.

## Domains Management

You can provide a [custom domain](https://cloudmydc.com/) name for your Ruby application to be used instead of the default one. Based on the environment topology, you should use:

- **CNAME redirect** if using _Shared Load Balancer_; is recommended for **_dev_** and **_test_** environments
- **DNS A Record** if using _public IP_; can handle high traffic load and is suitable for **_production_** environments

To switch traffic from one environment to another (e.g. to redirect customers to the newer application version without downtime), the [swap domains](https://cloudmydc.com/) functionality should be used. It is also available as the **_SwapExtIps_** [API/CLI](https://cloudmydc.com/) method.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/05-ruby-domain-management.png)

</div>

## Automatic Vertical Scaling

One of the key-features of the platform is dynamic provisioning of the exact amount of resources (RAM and CPU) required by your nodes according to the current load with no manual intervention. Just set the required [cloudlets](https://cloudmydc.com/) limit (_128 MiB_ of RAM and _400 MHz_ of CPU each) for your Ruby application server and everything else will be handled by the platform automatically.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/06-ruby-automatic-vertical-scaling.png)

</div>

As a result, you automatically benefit on a truly user-oriented [**_Pay-per-Use_**](https://cloudmydc.com/) charging approach and don’t need to guess or predict the incoming load. It ensures that you [never overpay for unused resources](https://cloudmydc.com/) and save your time because the platform eliminates the need to handle the load-related adjustments or perform architectural changes manually.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/07-ruby-pay-per-use-pricing.png)

</div>

Refer to the [automatic vertical scaling](https://cloudmydc.com/) documentation for additional information.

## Manual Horizontal Scaling

[Horizontal scaling](https://cloudmydc.com/) with the platform is as simple as selecting the required number of nodes via the corresponding section in the topology wizard. Additionally, you can choose between two scaling modes:

- **_Stateless_** - simultaneously creates all new nodes from the base image template
- **_Stateful_** - sequentially copies file system of the master container into the new nodes

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/08-ruby-horizontal-scaling.png)

</div>

:::tip Note

For the proper distribution of requests, a [load balancer](https://cloudmydc.com/) instance is automatically added upon Ruby server scaling.

:::

The maximum number of the same-type servers within a single environment layer depends on a particular hosting provider settings (usually this limit stands for 16 nodes and can be enlarged by sending the appropriate request to support).

## Automatic Horizontal Scaling

You can configure [automatic horizontal scaling](https://cloudmydc.com/) for your Ruby environment through tunable triggers, which monitor the changes in the nodes load and increase/decrease their number appropriately.

The process is simple, access the environment **Settings > Monitoring > Auto Horizontal Scaling** section, choose the required layer and resource to be monitored (_CPU, RAM, Network, Disk I/O, Disk IOPS_). Set the exact condition and specifics of scaling via the intuitive UI form.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyDevCenter/09-ruby-automatic-horizontal-scaling.png)

</div>

In addition, hosting at the PaaS allows using other built-in tools and features, for example:

- [Built-in](https://cloudmydc.com/) or [Custom SSL](http://localhost:3000/docs/ApplicationSetting/SSL/Custom%20SSL)
- [Public IPv4 and IPv6](https://cloudmydc.com/)
- A wide range of complementary [software stacks](http://localhost:3000/docs/QuickStart/Software%20Stack%20Versions), including SQL and NoSQL databases
- [Container firewalls](https://cloudmydc.com/), [endpoints](http://localhost:3000/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints) and [environment network isolation](https://cloudmydc.com/)
- [User-friendly UI](https://cloudmydc.com/) and [SSH access](https://cloudmydc.com/)
- [Open API](https://cloudmydc.com/) and [Cloud Scripting](https://cloudmydc.com/) for automation
- [Pay-per-use pricing model](https://cloudmydc.com/)
- [Collaboration for teamwork](https://cloudmydc.com/)
- [Multi-cloud distribution](https://cloudmydc.com/)

Explore Ruby hosting benefits within the platform!
