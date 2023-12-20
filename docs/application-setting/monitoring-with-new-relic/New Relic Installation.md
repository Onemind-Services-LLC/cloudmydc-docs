---
title: New Relic Installation
slug: new-relic-installation
sidebar_position: 1
---

<!-- ## New Relic Monitoring for Your Application inside the PaaS -->

[**New Relic**](https://newrelic.com/) is an application performance monitoring (APM) tool for Developers and Ops, focused on providing the deep insight into the project’s performance and reliability in real-time. Designed to pinpoint and diagnose the occurred issues, it can track throughput of your web transactions, analyze application exceptions, find slowness in queries or web requests and, generally, gives the great amount of useful data for the fast and comfortable troubleshooting.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/01-new-relic-monitoring-addon.png)

</div>

Since New Relic is one of the most frequently used and extremely popular solutions for supervising application metrics, we have prepared a special add-on to simplify its delivery. Implemented on the base of [JPS](/deployment-tools/cloud-scripting-&-jps/jps-overview) (Packaging Standard), it gives opportunity to install this software in a single mouse click and start tracking the most crucial application server information in a matter of minutes. In addition, you can always stay up-to-date with the embedded option for automatic installation of available New Relic updates.

So, let’s explore how to unveil the latent performance capacities of your application with the help of New Relic - to proceed with the add-on installation, you’ll need to have:

- the already registered New Relic account, with your unique user identifier (i.e. license key)
- at least a single environment created at any of [our partners'](https://cloudmydc.com/) platforms, with the deployed app you’d like to track

Once these conditions are fulfilled, you can easily integrate New Relic agent to your cloud environment - just follow the steps below.

:::tip Note

Subsequently, the installed New Relic monitoring software can be [smoothly updated](/application-setting/monitoring-with-new-relic/new-relic-update) to its latest version with the corresponding inbuilt add-on option.

:::

## New Relic Add-On Installation

With the platform, the New Relic add-on can be installed on the top of either _Java_-(handled as a [Java agent](/java/java-apps-specifications/java-agent)) or _PHP_-based environment (being implemented in a view of [PHP extension](/php/php-apps-specifications/php-extensions)).

Anyway, the installation flow remains similar - so, as an example, we’ll use a Java environment with **Tomcat** application server.

:::tip Note

The currently supported Java application servers are **Tomcat**, **TomEE**, and **Jetty** of all versions. The ability to apply New Relic monitoring to other servers is planned to be added further.

:::

1. To start with, click the **Marketplace** button at the top dashboard pane.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/02-paas-main-buttons.png)

</div>

2. Switch to the **Add-ons** section in the opened tab, find the **_New Relic APM_** solution within the appeared list (you can use the search input above) and click on **Install** for it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/03-new-relic-add-on-package.png)

</div>

:::tip Tip

The New Relic APM agent is also available at the [JPS Collection](https://github.com/jelastic-jps), alongside with the number of other useful JPS solutions the platform provides.

You can [import](/environment-management/environment-export-and-import/environment-import) and integrate any of them using the link to _manifest.jps_ file within the appropriate repository.

:::

3. You’ll see the installation frame appeared:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/04-new-relic-add-on-installation.png)

</div>

Here, the following data should be specified within the appropriate fields:

- **Application name** - enter the label for this app to be shown at your New Relic dashboard, e.g. _my-project_ (an environment domain is substituted by default here if switching among several available ones)

- **License key** - a unique identifier, that is bound to each New Relic user and can be viewed at the **_Account settings_** section of its [admin panel](/application-setting/configuration-file-manager) (stating it, you ensure that the collected data will be reported at your account)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/05-new-relic-apm-admin-panel.png)

</div>

:::tip Note

The **_License key_** field at add-on installation frame contains the key mask by default. You can complete the installation leaving it unchanged, but, obviously, you won’t be able to explore the gathered statistics (because of the absence of the bound New Relic account).

Nevertheless, you can specify this parameter later within the New Relic add-on settings by means of the platform [Configuration Manager](/container/container-configuration/configuration-tools#configuration-file-manager).The paths for the required file are:

- for **Java** app servers:
  - **TomEE**,**Tomcat** - _/opt/tomcat/lib/newrelic/newrelic.yml_
  - **Jetty** - _/opt/jetty/lib/newrelic/newrelic.yml_
- for **PHP** app servers: the appropriate **_newrelic.license_** parameter can be found in the _/etc/php.d/newrelic.ini_ file

Besides, the rest of add-on parameters can be modified within these files too.

:::

- **Environment name** - select the name of environment the New Relic agent should be installed to (the suitable ones are highlighted within the drop-down list)

- **Nodes** - pick the instance for being monitored (currently, only application servers are available for choosing)

Click the **Install** button to confirm your entries and initiate the deployment process.

4. In several minutes, the add-on will be added to your application:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/06-new-relic-successfully-installed.png)

</div>

5. According to the above shown pop-up, you need to obligatory **Restart node(s)** to start gathering your app’s efficiency trends. This can be performed with the appropriate button next to your application server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/07-restart-tomcat-server.png)

</div>

:::danger note

Please, **pay attention** that if your project is run in a single app server node, the restart will cause a **temporary downtime** of your application, thus we leave for you to decide when to perform this operation.

However, in case your app server is [scaled horizontally](/application-setting/scaling-and-clustering/horizontal-scaling), the downtime will be minimized, since all the server instances will be restarted sequentially. You are able to get rid of this inconvenience at all, through setting the delay for executing this operation at each next node within a layer. In such a way, whilst one node is undergoing the maintenance, the rest ones will remain active.

:::

6. Now, you can log in to your New Relic account and look inside the collected data on your application performance metrics. Keep an eye on the most crucial parameters in real time through your custom report dashboards, get the automatic notifications on the critical issues occurred and much more - see the full list of the provided [monitoring features](https://newrelic.com/platform/application-monitoring).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NewRelicInstallation/08-monitoring-with-new-relic.png)

</div>

As you can see, the New Relic add-on installation is really simple and will not take much time. At the same time, it’s powerful enough to help dealing with arisen problems and doing away with lack of performance.

:::tip tip

If you face any issues while integrating New Relic APM into your environment, feel free to appeal for our technical experts' assistance at [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

:::
