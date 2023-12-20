---
title: Ruby Versions
slug: ruby-versions
sidebar_position: 2
---

<!-- ## Ruby Versions -->

The platform supports all of the latest major releases of the Ruby engine and provides the regular updates of the appropriate stacks, keeping them up-to-date. Currently, the following Ruby versions are available:

- _3.0.6_
- _3.1.4_
- _3.2.2_

:::tip

The up-to-date list of the releases available on the platform is provided via the dedicated, regularly (weekly) updated [Software Stack Versions](/quickstart/software-stack-versions) document.

:::

You can choose the required one during [environment creation](/ruby/ruby-versions#create-ruby-environment) and quickly [switch between](/ruby/ruby-versions#change-ruby-version) them afterward.

## Create Ruby Environment

1. Click the **New Environment** button at the top of the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyVersions/01-new-environment-button.png)

</div>

2. Within the opened topology wizard, switch to the **_Ruby_** tab and select the desired application server (_Apache_ or _NGINX_). Next, choose the engine version with the appropriate drop-down list in the central part of the frame.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyVersions/02-topology-wizard-choose-ruby-version.png)

</div>

Configure any other desired customization (e.g. cloudlets limit, [public IP]/docs/application-setting/external-access-to-applications/public-ip#public-ip), [region](/environment-management/environment-regions/choosing-a-region#environment-regions), etc.) and click **Create**.

## Change Ruby Version

For the already existing environments, you can change the Ruby version by [redeploying container(s)](/category/container-deployment):

1. There are two options to access container update dialog:

- via the topology wizard (use the **Change Environment Topology** button next to the appropriate environment) by clicking on the stack/tag version in the central dialog part

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyVersions/03-topology-wizard-change-ruby-version.png)

</div>

- with the appropriate **Rededeploy container(s)** button next to the required node/layer

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyVersions/04-redeploy-containers-button.png)

</div>

2. In the opened window, adjust the following settings:

- **_Tag_** - allows choosing the needed Ruby version
- **_Keep volumes data_** - saves data in [volumes](/container/container-configuration/volumes)
- **_Simultaneous_** or **_Sequential deployment with delay_** (for [scaled servers](/application-setting/scaling-and-clustering/horizontal-scaling#horizontal-scaling-inside-the-cloud-multi-node) only) - defines whether all containers within a layer should be redeployed at once or one-by-one, to avoid downtime

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyVersions/05-ruby-container-redeploy-dialog.png)

</div>

3. Click **Redeploy** and confirm via the appeared pop-up frame.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RubyVersions/06-redeploy-confirmation-pop-up.png)

</div>

In a minute, the Ruby version of your node(s) will be updated.
