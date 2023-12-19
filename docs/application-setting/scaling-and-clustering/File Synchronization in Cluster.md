---
title: File synchronization in cluster
slug: file-synchronization-in-cluster
sidebar_position: 5
---

## File Synchronization Between Several Application Servers in a Cluster

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

![Locale Dropdown](./img/FileSynchronizationinCluster/1.png)

</div>
</div>
<div>

As incoming traffic to your project grows, you need to improve your app performance to keep up with it. Some room of capacities for elastic extension is automatically provisioned in confines of a set server [vertical scaling](/docs/application-setting/scaling-and-clustering/automatic-vertical-scaling) limit, but eventually you most likely will face the need to enlarge a number of its nodes (i.e. to scale it [horizontally](/docs/application-setting/scaling-and-clustering/horizontal-scaling)) upon your service popularity rises.

</div>
</div>

For lots of the most widely used apps (like _WordPress, Drupal, Joomla, Liferay, Redmine_ and similar ones) such distribution across multiple web server instances becomes a real problem, as usually all user-provisioned content is saved only on a node that has processed the corresponding file upload request.

To help you in getting rid of such content being out-of-sync upon building clustered solution for your application, the platform provides a special **File Synchronization** add-on, intended to keep the uploaded files set similar across multiple web-server instances. Herewith, synchronization could be applied not just in confines of one environment (i.e. for a single horizontally scaled node) but even across application servers in two separate environments, regardless of whether they run the same stack and/or application or different ones.

So, follow the guide below to dive into [implementation specifics](/docs/application-setting/scaling-and-clustering/file-synchronization-in-cluster) of this solution and to discover how it actually works in practice with the next steps:

- [Install Example WordPress Application](/docs/application-setting/scaling-and-clustering/file-synchronization-in-cluster#install-application)
- [Test File Upload Without Synchronization](/docs/application-setting/scaling-and-clustering/file-synchronization-in-cluster#test-file-upload-without-synchronization)
- [Apply File Synchronization](/docs/application-setting/scaling-and-clustering/file-synchronization-in-cluster#apply-file-synchronization)
- [Check Sync Logs](/docs/application-setting/scaling-and-clustering/file-synchronization-in-cluster#check-logs)

## File Synchronization Add-on Implementation

The **File Sync** solution is provided as a single-click [add-on](/docs/deployment-tools/cloud-scripting-&-jps/marketplace), implemented with a bundle of [**lsyncd**](https://code.google.com/archive/p/lsyncd/) daemon and **cron** utility. Herewith, being wisely coupled with [**inotify**](https://en.wikipedia.org/wiki/Inotify), _lsyncd_ initiates file synchronization only when any actual changes are detected on the system. Such realization notably offloads CPU in comparison to the regular sync calls and keeps your data up-to-date all the time, which makes this solution simultaneously simple to use, powerful, and affordable.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/2.png)

</div>

The **File Sync** add-on can be installed on top of any platform-managed application server stack (i.e. except for [Docker](/docs/container/container-types) containers). Before the appliance, you will be asked to select the folder to synchronize. In this way, you are able to sync only the part of your app server’s file system that actually requires this. Thus, only changes within the selected directory (on any of specified application server instances) will trigger the synchronization.

Now, let’s see how to put all of this into action step-by-step.

## Install Application

In our example, we will use the **WordPress** application, deployed to an environment with two _NGINX-PHP_ application servers.

:::tip

The instruction below is fully appropriate for other similar applications (_Drupal, Joomla, Liferay, Redmine_ and so on) based on any supported programming language - Java, PHP, Ruby, etc.

:::

1. You can install your **WordPress** application manually or locate the appropriate one-click package in [Marketplace](/docs/deployment-tools/cloud-scripting-&-jps/marketplace) to deploy it automatically.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/03-marketplace-deploy-wordpress.png)

</div>

Click **Install** and provide the required details, such as _Environment, Display Name_ ([alias](/docs/environment-management/environment-aliases)) and Region (if several [regions](https://cloudmydc.com/) are available).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/4.png)

</div>

Confirm the installation and wait a minute for a message with your admin data to be shown (the same information will be simultaneously sent to you via email).

2. Click **Change environment topology** and use the **+** button within the [_Horizontal Scaling_](/docs/application-setting/scaling-and-clustering/horizontal-scaling) section to add one more app server node and, this way, to create a cluster.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/5.png)

</div>

When finished, click **Apply**.

:::tip

By using instructions in our documentation, you can easily add [extra app servers](/docs/application-setting/scaling-and-clustering/horizontal-scaling), enable [high availability](/docs/application-setting/scaling-and-clustering/session-replication-for-ha) or even configure a clustered solution.

In our case, we have simply added one more app server to the environment but you can use a more complex scenario by setting the [clustered solution](https://cloudmydc.com/) for your WordPress application

:::

## Test File Upload Without Synchronization

At this point, let’s check how the file upload is processed without synchronization.

1. Access the Wordpress admin panel by adding the _/wp-login.php suffix_ to your environment domain name and **Log In** using credentials you’ve received via email.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/6.png)

</div>

2. Once logged in, make some custom changes (e.g. upload images or other files, edit themes, add pages, etc.).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/7.png)

</div>

As an example, we’ve uploaded one image to the **Media** library.

3. Now, return to the platform dashboard and click **Config** next to the app server layer.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/8.png)

</div>

4. Navigate to the **webroot** (click from _Favorites_) **_> ROOT > wp-content _**directory and compare its content within both nodes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/9.png)

</div>

:::danger note

The directory with uploaded files depends on the application you are running. Here is the list of such folders for some widely-used applications:

- **WordPress** - _webroot/ROOT/wp-content_
- **Drupal** - _webroot/ROOT/sites_
- **Joomla** - _webroot/ROOT/images_
- **Liferay** - _webroot/home/liferay/data_

:::

As you can see, one of the app server instances (_Node ID 54502_ in our example) contains the newly added file in the **uploads** directory, whilst another one (with _54505_ identifier) does not have it yet.

## Apply File Synchronization

So, to implement content synchronization inside our cluster, let’s apply the **File Synchronization** add-on.

1. Locate and **Install** the **_File Synchronization_** add-on within the platform [Marketplace](/docs/deployment-tools/cloud-scripting-&-jps/marketplace).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/10.png)

</div>

2. In the opened dialog box you need to define some additional sync parameters.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/11.png)

</div>

Here, specify whether file synchronization should run within _One_ environment (as in our example) or between _Two_ different _environments_ (see the related dedicated options in the table below),. Apart of that, provide the following details:

- **Sync path** - path to a folder (relatively to the **webroot** directory) that should be synchronized on a chosen below (within the _Nodes_ field) server, e.g. _/ROOT/wp-content_
- **Sync delay (sec)** - synchronization delay, stated in seconds
- Environment name - to select the required environment from the list of available ones
- **Nodes** - the app server layer is fetched automatically upon selecting an environment
  When you are finished, click **Install**.

:::tip

In order to implement synchronization between two different environments, the add-on should be installed to web-servers in both of them (selecting another environment within the appropriate drop-down list each time) with the chosen Two _environments synchronization_ option. Here, the following additional parameters should be specified:

- **2nd environment IP** - address of any application server node within the second environment (you can use internal IP for the case both environments are run on the same Platform and hardware [region](/docs/environment-management/environment-regions/choosing-a-region); otherwise, external IP address is required)
- **Password** - optional box to set a password on synchronization (should be stated the same on both instances)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/12.png)

</div>

:::

3. When installation is completed, you’ll see a confirmation message.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/13.png)

</div>

4. At this point, you can check the uploaded file’s presence within both nodes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/14.png)

</div>

:::tip

If you change the environment topology by adding more app servers, the add-on will apply the corresponding file synchronization to the new nodes automatically, with no manual adjustment needed.

:::

It’s that easy! File synchronization will be automatically performed every time you add or change anything in your WordPress (or any other application you maintain) so that data on your servers will always be identical.

## Check Logs

The synchronization process can be monitored via log files that are located within the **webroot/lsyncd/var/log** web-server directory.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/15.png)

</div>

The most important information and status of synchronization can be viewed in the **_lsyncd.log_** and **_lsyncd.status_** files.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FileSynchronizationinCluster/16.png)

</div>

Hopefully, this instruction was helpful for you.

:::tip

Have any questions on file synchronization between application servers? Feel free to get in touch with our technical experts at [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

:::
