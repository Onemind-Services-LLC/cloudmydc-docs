---
sidebar_position: 1
---

## Golang Hosting

The PaaS is a truly multilingual cloud platform, which currently provides Java, PHP, Python, Ruby, Node.js, .NET, and from now on, Go environments for running projects of all sizes and various nature.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/01-go-cloud-hosting.png)

</div>

In this guide, you’ll get acquainted with the distinctive features of the Go hosting and will be introduced to the Go-related possibilities within the platform. Use the table of content below to find required information within the guide quicker:

- [Go Environment Hosting](https://cloudmydc.com/)
- [Golang Versioning](https://cloudmydc.com/)
- [Go Application Deployment](https://cloudmydc.com/)
- [Domains Management](https://cloudmydc.com/)
- [Automatic Vertical Scaling](https://cloudmydc.com/)
- [Manual Horizontal Scaling](https://cloudmydc.com/)
- [Automatic Horizontal Scaling](https://cloudmydc.com/)

## Go Environment Hosting

In order to host your Go application, you need to [create](https://cloudmydc.com/) the appropriate environment using the **Topology Wizard**.

Switch to the **Go** engine tab, add _Golang_ as your application server and any other software stack required for your project (e.g. load balancers, databases or shared storage). If needed, adjust your environment nodes count, cloudlet limits for RAM and CPU, attach public IPs, etc.

:::tip Note

This template utilizes a modern **_systemd_** initialization daemon.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/02-golang-topology-wizard.png)

</div>

:::tip Note

All instances on the platform are completely [isolated containers](https://cloudmydc.com/), which are evenly distributed across the available hosts (physical servers or VMs) using automatic anti-affinity rules. This eliminates a risk of your application downtime, i.e. ensure [high availability](https://cloudmydc.com/).

:::

For more information about setting up the environment, see the [Create Environment](https://cloudmydc.com/) document.

## Golang Versioning

Currently (at the time of this writing), the following versions of the _Golang_ stack template are supported by the platform:

- 1.17.12
- 1.18.10
- 1.19.12
- 1.20.9
- 1.21.2

:::tip

The up-to-date list of the releases available on the platform is provided via the dedicated, regularly (weekly) updated [Software Stack Versions](https://cloudmydc.com/) document.

:::

You can choose the preferred version during environment creation and change it later through [container redeploy](https://cloudmydc.com/). Herewith, all the custom data inside the node(s) will be saved, which, for example, allows to easily upgrade your software version upon the new stack template release.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/03-go-containers-redeploy.png)

</div>

## Go Application Deployment

After environment creation, you can [deploy](https://cloudmydc.com/) your Go project from the Git repository (the deployment from application archive will be implemented in the upcoming platform release).

It is possible to customize the deployment process by providing or adjusting the following container [variables](https://cloudmydc.com/):

- **_GO_RUN_** - sets a name of the executable binary file (if not specified, the deployment script will try to locate one based on the Git project name)
- **_GOPATH_** - defines the deployment folder (_/home/jelastic/webapp_, by default)
- **_GO_BUILD_OPTIONS_** - provides additional [options for the build operation](https://cloudmydc.com/) (-a, by default, to force rebuilding of packages that are already up-to-date)
- **_GO_RUN_OPTIONS_** - provides additional [options for the run operation](https://cloudmydc.com/)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/04-go-application-deployment.png)

</div>

During deployment, the platform automatically performs the following steps:

- parses the provided Git URL to get a link to the Go project
- downloads the package with all the dependencies using the [**_go get_**](https://cloudmydc.com/) command
  - in case of error, performs download as for the common Git project and retries getting the Go dependencies
- builds the project with the **_go build_** command (using the additional options specified in the **GO_BUILD_OPTIONS** variable)
- runs the binary defined by the **GO_RUN** variable with the **_go run_** command (using the additional options specified in **GO_RUN_OPTIONS**)

After successful deployment, the Go project is located in the directory set with the **_GOPATH_** variable. Herewith, the [workspace hierarchy](https://cloudmydc.com/) inside is based on the requirements in the official documentation.

You can learn more about Go applications deployment via the appropriate documents:

- [Deployment Manager](https://cloudmydc.com/)
- [Deployment Guide](https://cloudmydc.com/)
- [Auto-Deploy Overview](https://cloudmydc.com/)
- [Deployment Hooks](https://cloudmydc.com/)

## Domains Management

With the platform you can easily bind an [external (custom) domain](https://cloudmydc.com/) name to your Go application to be used instead of the default environment domain. Depending on the used entry point, there are two options:

- **CNAME redirect** if using _Shared Load Balancer_; is recommended for **_dev_** and **_test_** environments
- **DNS A Record** if using _public IP_; can handle high traffic load and is suitable for **_production_** environments

Additionally, you can easily [swap domains](https://cloudmydc.com/) to redirect traffic from one environment to another (e.g. to switch to the newer application version without downtime).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/05-golang-custom-domains-management.png)

</div>

:::tip Tip

For the access via public IP, the traffic can be redirected to another environment with the help of the [**_SwapExtIps_**](https://cloudmydc.com/) API method (also, available via [CLI](https://cloudmydc.com/)).

:::

## Automatic Vertical Scaling

Automatic vertical scaling is ensured by the platform’s ability to dynamically provide the resources (RAM and CPU) for a server within predefined limits according to its current demands, with no manual intervention required. This feature guarantees you [never overpay for unused resources](https://cloudmydc.com/) and saves your time due to eliminating the necessity of handling the load-related adjustments or architectural changes.

The scaling process is handled by platform automatically, you just need to specify the lower and upper [cloudlets](https://cloudmydc.com/) limit (each one equals to _128 MiB_ of RAM and _400 MHz_ of CPU) for your Go server through the topology wizard:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/06-golang-automatic-vertical-scaling.png)

</div>

Your application will work within these limits reducing resource consumption when the load is down or increasing them when the load is up. Thus, you only pay for the resources that are actually consumed. For more information, please refer to the [automatic vertical scaling](https://cloudmydc.com/) documentation.

## Manual Horizontal Scaling

Extra Golang servers can be easily added via the topology wizard during environment creation or adjustment. Just click the “+” button within the _Horizontal Scaling_ section and add the required number of instances.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/07-golang-horizontal-scaling.png)

</div>

The maximum number of the same-type servers within a single environment layer depends on a particular hosting provider settings (usually this limit stands for 16 nodes and can be enlarged by sending the appropriate request to support).

Also, you can notice that upon Golang server scaling, the [load balancing](https://cloudmydc.com/) node is automatically added to environment topology (required for the proper requests distribution). Find more details about manual [horizontal scaling](https://cloudmydc.com/) in the documentation.

## Automatic Horizontal Scaling

Automatic horizontal scaling is implemented through tunable triggers, which allow to increase or decrease the number of nodes due to the application load. To configure automatic scaling open the environment **Settings > Monitoring > Auto Horizontal Scaling** section and click the **Add** button.

Here, you can configure the triggers for specific stacks and resources (_CPU, RAM, Network, Disk_) by adjusting the conditions of scaling.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GoDevCenter/08-golang-automatic-horizontal-scaling.png)

</div>

Learn more about [automatic horizontal scaling](https://cloudmydc.com/) in the corresponding document.

In addition, there is a set of other features and functionality provided by the platform Go hosting, among them:

- Custom or Built-In SSL
- Public IPv4 and IPv6
- Wide choice of managed databases
- Container firewalls, endpoints and environment isolation
- User-friendly UI and direct SSH access for management
- Open API and Cloud Scripting for automation
- Pay-as-you-use pricing model
- Collaboration functionality for teamwork
- Multi-cloud distribution

The Go cloud hosting is ready for running your dev, test, and production environments.
