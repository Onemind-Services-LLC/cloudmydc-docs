---
title: Php dev center
slug: php-dev-center
sidebar_position: 1
---

## PHP Developer’s Center

PHP is considered one of the easiest to use server-side scripting languages. Its usage for websites (top 10 million by Alexa rank) is steadily growing and currently reached [78.9%](https://w3techs.com/technologies/history_overview/programming_language). The PHP engine’s popularity is also proven by the platform customers as almost every second server is run on top of PHP according to our internal statistics.

Let’s take a journey to PHP cloud hosting within the platform, its chief peculiarities, winning points, and rich possibilities provided for the efficient running of applications.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/01-php-cloud-hosting.png)

</div>

Use the table of content below to find required information within the guide quicker:

- [PHP Versions](/docs/PHP/PHP%20Dev%20Center#php-versions)
- [PHP Application Servers](/docs/PHP/PHP%20Dev%20Center#php-application-servers)
- [PHP Application Deployment](/docs/PHP/PHP%20Dev%20Center#php-application-deployment)
- [Domains Management](/docs/PHP/PHP%20Dev%20Center#domains-management)
- [automatic vertical scaling](/docs/PHP/PHP%20Dev%20Center#automatic-vertical-scaling)
- [Manual Horizontal Scaling](/docs/PHP/PHP%20Dev%20Center#manual-horizontal-scaling)
- [Automatic Horizontal Scaling](/docs/PHP/PHP%20Dev%20Center#automatic-horizontal-scaling)
- [PHP Clustering](/docs/PHP/PHP%20Dev%20Center#php-clustering)
- [Database Connection to PHP Application](/docs/PHP/PHP%20Dev%20Center#database-connection-to-php-application)
- [Modules and Accelerators](/docs/PHP/PHP%20Dev%20Center#modules-and-accelerators)
- [PHP Security](/docs/PHP/PHP%20Dev%20Center#php-security)

## PHP Versions

Keeping the pace with technology evolution, the platform supports the latest PHP engine versions (at the time of this writing):

- 8.0.30
- 8.1.22
- 8.2.8

:::tip Tip

The up-to-date list of the releases available on the platform is provided via the dedicated, regularly (weekly) updated [Software Stack Versions](/docs/quickstart/software-stack-versions) document.

:::

You can choose the engine version you need while environment creation and easily switch between them afterward via intuitive [platform UI](/docs/PHP/PHP%20Versions).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/02-php-environment-creation.png)

</div>

## PHP Application Servers

Two PHP application servers are provided by default and supported by the platform (e.g. version updates or security patches are added by PaaS team to the templates):

- [Apache](/docs/PHP/PHP%20App%20Servers/Apache%20PHP/)
- [NGINX](/docs/PHP/PHP%20App%20Servers/NGINX%20PHP/)

To see in detail how these servers can be configured, and find out the list of editable config files for each of them, refer to the document [PHP App Server Configuration](/docs/PHP/PHP%20App%20Server%20Configuration).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/03-php-file-manager.png)

</div>

## PHP Application Deployment

[Zero downtime deployment](/docs/PHP/ZDT%20Deployment%20for%20PHP) provides the ability to run any cloud-native or legacy application. In order to deliver your PHP projects to the created environment within the platform, you can choose one of the available [deployment options](/docs/deployment/deployment-guide): via Archive/URL, GIT/SVN, Bitbucket project, etc.

Besides, you can configure an [automatic periodic re-deployment](http://localhost:3000/docs/deployment/git-&-svn-auto-deploy/auto-deploy-overview) from the repository (it is performed only if new code changes appear).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/04-php-application-deployment.png)

</div>

Also, all platform-certified PHP nodes are provided with the pre-installed [**Composer**](/docs/PHP/Composer%20Dependency%20Manager) dependency manager to quickly install all the required packages for the deployed project and keep them up-to-date.

## Domains Management

For production purposes, you can bind an external domain name to your application instead of the default environment domain. Follow the appropriate [custom domains](/docs/application-setting/domain-name-management/custom-domain-name) instruction to learn how it can be done.

With the help of the [swapping domains](/docs/application-setting/domain-name-management/swap-domains) feature, end-users of your application won’t experience any downtime when you, for example, deploy a new application version. You can stage your new application version in a test environment and consequently swap URLs with a production environment just in a few clicks.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/05-php-domains-management.png)

</div>

Using [multiple domains](http://localhost:3000/docs/application-setting/domain-name-management/multiple-domain-for-php) on a single PHP server increases the application usability, efficiency, and scalability, simultaneously saving the costs on the necessity to set up separate instances.

## Automatic Vertical Scaling

Automatic vertical scaling is made possible by the platform ability to dynamically change the number of allocated resources (RAM and CPU) for a server according to its current demands, with no manual intervention required. This feature guarantees you never overpay for unused resources and saves your time due to eliminating the necessity of handling the load-related adjustments or architectural changes.

In order to set up automatic resource consumption by your PHP server, open the environment topology wizard and specify the upper scaling limit of [cloudlets](http://localhost:3000/docs/platform-overview/cloudlet) (each equals to 128 MiB and 400 MHz) with the slider located at the top:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/06-php-vertical-scaling.png)

</div>

Your application will work within these limits reducing resource consumption when the load is down or increasing them when the load is up. Thus, you only pay for the resources that are actually consumed. For more information, please refer to the documentation about [automatic vertical scaling](/docs/application-setting/scaling-and-clustering/automatic-vertical-scaling).

## Manual Horizontal Scaling

For adding extra PHP servers manually, just click **Change Environment Topology**. Then press the “+” button in the wizard and add the required number of instances.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/07-php-horizontal-scaling.png)

</div>

The maximum number of the same-type servers within a single environment layer depends on a particular hosting provider settings (usually, this limit stands for 16 nodes and can be adjusted by sending a request to support).

Also, as you can see, when you add extra servers, [[load balancing]](/docs/Load%20Balancers/Load%20Balancing) is enabled automatically.

Please, find more details about manual [Horizontal Scaling](http://localhost:3000/docs/application-setting/scaling-and-clustering/horizontal-scaling) in the documentation.

## Automatic Horizontal Scaling

Automatic horizontal scaling can be implemented through tunable triggers, which monitor the changes in the application load and increase or decrease the number of nodes due to them.

To configure a trigger for the automatic horizontal scaling open **Settings > Monitoring > Auto Horizontal Scaling** section and press **Add** button.

In this way, you can configure the triggers for specific stacks and resources (CPU, RAM, Network, Disk) within your environment separately. Just specify the conditions of scaling and apply changes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/08-php-auto-horizontal-scaling.png)

</div>

Please, find more details about [automatic horizontal scaling](/docs/application-setting/scaling-and-clustering/automatic-horizontal-scaling) in the corresponding document.

## PHP Clustering

Implementing the [PHP sessions clustering](/docs/PHP/PHP%20Sessions%20Clustering) for your application can highly increase its availability and failover capabilities using the sticky sessions, run on several app server nodes. This mechanism is ensured by a Memcached node that should be added to your environment and used as storage for the processed sessions’ backups.

While scaling out PHP server with your deployed application, you get its exact copy with all the same configurations and files inside due to built-in [data synchronization](http://localhost:3000/docs/application-setting/scaling-and-clustering/data-synchronization).

Besides, the platform has pre-packaged auto-scalable [WordPress Cluster](https://github.com/jelastic-jps/wordpress-cluster) and [Magento Cluster](https://github.com/jelastic-jps/magento-cluster) available for one-click installation to ensure your service operability. Moreover, you can package any PHP application in this way to automate its clustered installation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/09-php-clustering-scheme.png)

</div>

## Database Connection to PHP Application

The platform provides a set of scalable and fully manageable database servers that you can easily install and operate within the PHP environment. To establish the connection, adjust your application following the instruction based on the database you require:

- [MySQL/MariaDB Connection](/docs/Database/MySQL-MariaDB-Percona/Connection%20to%20Applications/PHP%20Connection)
- [PostgreSQL Connection](/docs/Database/PostgreSQL/Connection%20to%20Applications/PHP%20Connection%20to%20PostgreSQL)
- [MongoDB Connection](/docs/Database/MongoDB/Connection%20to%20Applications/PHP%20Connection%20to%20MongoDB)

## Modules and Accelerators

While working with the platform, you can extend the functionality of the environment through setting different PHP extensions at the appropriate application servers. You can either select one of the default extensions and activate it, or upload your own custom one - both these operations are described in the [PHP Modules](/docs/PHP/PHP%20Apps%20Specifications/PHP%20Extensions) instruction.

As a separate kind of PHP extension, [PHP accelerators](/docs/PHP/PHP%20Apps%20Specifications/PHP%20Accelerators) can be determined. They are used for enlarging your application efficiency through caching the already compiled parts of PHP code, which can be quickly executed upon a user’s request.

Apache PHP and NGINX servers include a particular [set of the inbuilt modules](/docs/PHP/PHP%20App%20Servers/Apache%20PHP/Apache%20Modules). In addition, there are a few separate tutorials on configuring the various modules:

- [Adding Custom Apache Modules](/docs/PHP/PHP%20App%20Servers/Apache%20PHP/Add%20Apache%20Modules)
- [Apache WebDav Module](/docs/PHP/PHP%20App%20Servers/Apache%20PHP/Apache%20WebDav%20Module)
- [Apache Statistics Module](/docs/PHP/PHP%20App%20Servers/Apache%20PHP/Apache%20Statistics%20Module)
- [NGINX WebDav Module](/docs/PHP/PHP%20App%20Servers/NGINX%20PHP/NGINX%20WebDav%20Module)
- [New Relic Monitoring](http://localhost:3000/docs/application-setting/monitoring-with-new-relic/new-relic-installation)

## PHP Security

[SSL / TLS](http://localhost:3000/docs/application-setting/ssl/secure-sockets-layer) (Secure Sockets Layer / Transport Layer Security) is the industry standard security technology for establishing an encrypted connection between a web server and a browser. This technology is supported by the platform and ensures that all passed data remains private and confidential, i.e., it can’t be intercepted by a third party.

Besides the common protection methods, security of your application can be increased through [customizing the main PHP configuration file](/docs/PHP/PHP.INI%20Security%20Settings), named **_php.ini_**. You can edit a number of default settings it contains or adds your own in accordance with the needs of your application.

Additional configuration guidance is available for particular application servers:

- [Apache Security Configurations](/docs/PHP/PHP%20App%20Servers/Apache%20PHP/Apache%20Security%20Configurations)
- [NGINX Security Configurations](/docs/PHP/PHP%20App%20Servers/NGINX%20PHP/NGINX%20Security%20Configurations)

One more way to ensure the application protection is using a container [firewall feature](/docs/application-setting/external-access-to-applications/container-firewall). It lets you control nodes' availability both from inside and outside of the platform.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPDevCenter/10-php-container-firewall.png)

</div>

Explore limitless PHP possibilities with the platform.
