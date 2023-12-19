---
title: Traffic distributor integrate
slug: traffic-distributor-integrate
sidebar_position: 4
---

## Integrate Traffic Distributor with Running Application

In most cases, developers face the problem of traffic distribution between several backends when already having some running application, with a pool of existing users and constant incoming load. Thus, besides the general traffic sharing configuration difficulties, it is additionally complicated with the necessity to apply the appropriate “on-fly” changes to the front-end application instance. In many cases, it causes a temporary app downtime. So in order to minimize such negative influence on your customers, below we’ll consider the ways to easily and painlessly integrate [Traffic Distributor (TD)](http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-overview) solution into your running application topology.

:::tip Note

Traffic Distributor provides the ability to benefit from a number of useful solutions, like:

- apply “invisible” application updates with [blue-green deployment](http://localhost:3000/docs/application-setting/traffic-distributor/use-cases/blue-green-deploy)
- examine performance, user experience, and new app version’s stability through [A/B testing](http://localhost:3000/docs/application-setting/traffic-distributor/use-cases/a-b-testing)
- increase service availability with advanced [failover protection](http://localhost:3000/docs/application-setting/traffic-distributor/use-cases/failover-protection)

:::

To achieve this, you’ll need to pass through the following steps:

- [deploy new app version & add it to routing](http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-integrate#add-application-copy-to-routing)
- [configure app entrypoint via TD](http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-integrate#configure-app-entrypoint-via-td)

## Add Application Copy to Routing

For this example, we run an application in the Apache server within the _primary-env_ environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/01-primary-environment.png)

</div>

1. First of all, you need to set up one more environment with the same application inside (we’ll name it _second-env_).

:::tip Tip

You can use the [environment cloning](/docs/environment-management/cloning-environment) feature to instantly get the identical environment copy (i.e. with all the appropriate data and settings being already set up inside) of any type.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/02-environment-clone.png)

</div>

:::danger Note

Don’t forget to properly configure any “hardcoded” data (direct links, IPs, etc.) for the cloned environment if needed.

:::

2. Now, we are ready to [install Traffic Distributor](http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-installation), specifying both these environments as backends.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/03-traffic-distributor-installation.png)

</div>

:::tip Tip

If there are several [environment regions](/docs/environment-management/environment-regions/choosing-a-region) available at the chosen hosting provider platform, you can subsequently [migrate](/docs/environment-management/environment-regions/migration-between-regions) one of your environments to a different hardware set. This will grant better failover protection, as you’ll be able to deal with the hardware-dependent problem at one of your backends (if such occurs) by routing requests to the instance that remains operable.

:::

3. That’s it! Traffic Distributor is already set and ready to handle requests to our application.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/04-traffic-distributor-with-backends.png)

</div>

The only remaining thing is to redirect incoming traffic from the first environment to Traffic Distributor.

## Configure App Entrypoint via TD

Most applications in production have some [custom domain](/docs/application-setting/domain-name-management/custom-domain-name). In our example, the initial environment (_primary-env_ in our case) already has a [custom domain name bound](http://localhost:3000/docs/application-setting/domain-name-management/custom-domain-name#how-to-bind-domain-to-environment).

For the proper redirection of requests (i.e. to process them through the distributor), we need to move the appropriate entrypoint to the TD environment. In such a way, it will be placed in front of the chosen pair of backends and share the incoming load among them based on specified settings.In order to accomplish this, follow one of the next simple procedures based on the used custom domain binding method:

- _if using CNAME or ANAME redirect_ - [swap domains](http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-integrate#swap-domains) between the initial and TD environments
- _if using A Record_ - [swap Public IPs](http://localhost:3000/docs/application-setting/traffic-distributor/traffic-distributor-integrate#swap-public-ips) to transfer used external IP to the TD environment

## Swap Domains

1. Hover over the environment your custom domain is bound to (e.g. _primary-env_) and select **Settings** from the set of appeared functional icons.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/05-primary-environment-settings.png)

</div>

2. Within the opened environment settings tab, the required **Custom domains** section will be displayed by default. Go to the **[Swap Domains]/swap-domains/** suboption and select Traffic Distributor environment within the drop-down list.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/06-swap-domains-with-traffic-distributor.png)

</div>

Now, click the **Swap** button and confirm this action within the pop-up to apply the changes.

3. In a minute, your application custom domain name will be moved to the environment with Traffic Distributor so that both of your backends will become available via this domain.

## Swap Public IPs

The easiest way to pass public IP from p*rimary-env* (i.e. the one your custom domain is attached to) to Traffic Distributor is by using the corresponding **External Addresses Swap** functionality, available through platform [API](https://docs.jelastic.com/api/#!/api/environment.Binder-method-SwapExtIps) and [CLI](/docs/deployment-tools/api-&-cli/platform-cli/platform-cli-overview).

It allows performing the required configurations in a single command, sparing you from the manual A _Record_ reconfiguration.

If you prefer to work **via GUI**, you need to go to your domain registrar and manually substitute an external IP address in the A Record for your custom domain.

1. Ensure that the NGINX balancer instance in your Traffic Distributor environment has an [external IP address](/docs/application-setting/external-access-to-applications/public-ip) attached. Copy its value from the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/TrafficDistributorIntegrate/07-traffic-distributor-public-ip.png)

</div>

2. Then, access your DNS manager and re-configure your [A record](/docs/application-setting/domain-name-management/custom-domain-name) so that it points to this new IP address.

:::tip Tips:

- For these changes to be applied, you need to wait for the current DNS record cache expiration (as until this happens, DNS servers may return the old domain address upon request). To know the exact period the domain’s old IP address will be kept in cache, check the **TTL** setting value within your DNS manager (usually stated in _seconds_).
- Do not forget to recheck your application configurations for the hardcoded IP-dependent settings and adjust them accordingly.

:::

3. After the application entrypoint address is changed, you can detach [public IP](/docs/application-setting/external-access-to-applications/public-ip) from the initial _primary-env_ (if no longer required for direct access) so that you do not pay for the unused option.

That’s it! Now, all incoming traffic for your custom domain will be processed by the Traffic Distributor solution, which, in its turn, will route it according to the set traffic ratio between application backends.
