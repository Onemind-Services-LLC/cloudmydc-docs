---
sidebar_position: 2
---

## Swap Domains

While working with any project, you will eventually face the need to upgrade or modify it. Of course, before applying any changes in production, you should thoroughly test them. With the platform, this can be done in a separate environment, and once the new version is ready, you can just **swap domains** between these development/testing and production projects for an immediate version switch.

So, by utilizing this functionality, you can skip the steps of rolling out updates to the environment in production (avoiding additional configurations and possible downtime) and simultaneously keep the previous version of your application for a quick rollback in case of necessity.

:::danger Note

The _Swap Domains_ feature operates with the [bound domains](/docs/ApplicationSetting/Domain%20Name%20Management/Custom%20Domain%20Name#how-to-bind-domain-to-environment) only. If you need to swap URLs for environments with public IP as an entry point (attached to the application server or load balancer), use the [swap external IPs method](/docs/Deployment%20Tools/API%20&%20CLI/Platform%20CLI/Swap%20Public%20IPs) or adjust appropriate records in your domain registrar.

:::

So, let’s see how this works.

## Create Test Environment

1. Locate your environment in production with the application that you want to update. In our example, it is called _production_.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/01-open-production-environment.png)

</div>

:::danger Note

This environment should have a [bound custom domain](/docs/ApplicationSetting/Domain%20Name%20Management/Custom%20Domain%20Name#how-to-bind-domain-to-environment) (e.g. _production.com_) that you will consequently swap with a different environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/02-list-of-bound-domain-names.png)

</div>

:::

2. Click the **Open in Browser** button or access via custom domain to see your application.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/03-new-production-environment.png)

</div>

3. [Clone this environment](/docs/EnvironmentManagement/Cloning%20Environment) to automatically create its identical copy including, all deployed packages, databases, etc. Let’s name it _testing_.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/04-open-testing-environment.png)

</div>

4. Click the **Open in Browser** button for your cloned environment to make sure that everything works fine.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/05-new-testing-environment.png)

</div>

Now, you can add new features, customize settings, apply updates, etc. All without affecting the original environment.

## Update Application

1. Make the needed changes (either directly via the dashboard or by deploying the new project version) to the cloned environment. The following documentation guides can help you with your project adjustments:

- [Deployment Guide](/docs/Deployment/Deployment%20Guide)
- [SSH Access](/docs/Deployment%20Tools/SSH/SSH%20Access/Overview)
- [configuration file manager](/docs/ApplicationSetting/Configuration%20File%20Manager)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/06-edit-testing-environment.png)

</div>

2. Click the **Open in Browser** button for your updated project to test your changes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/07-edited-testing-environment.png)

</div>

:::tip Note

The **Swap Domain** functionality will work even if only one environment has a bound domain. However, for more thorough testing, you can [bind a custom domain](/docs/ApplicationSetting/Domain%20Name%20Management/Custom%20Domain%20Name#how-to-bind-domain-to-environment) to your cloned environment as well.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/08-testing-environment-bound-domains.png)

</div>

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/09-edited-testing-environment-custom-domain.png)

</div>

:::

## Swap Domains

After testing the updates, the next step is to swap domains of the production and testing environments.

:::tip Tip
If only one of the environments has a bound custom domain, the Swap Domains functionality will transfer it to the second environment.

:::

1. Open the **Settings** for one of your environments (e.g. _production_ one). Here, the required **Custom Domains** section will be opened by default.

2. In the Swap Domains subsection, choose the environment with which you want to swap domains (the _testing_ one in our case) and click the **Swap** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/10-swap-production-and-testing-domains.png)

</div>

:::tip Tip

You can check custom domains bound to the current environment in the _Domain Binding_ subsection and for the target environment - in the _Swap Domains_ one.

:::

3. Now, you can navigate to your production environment custom domain (_production.com_ in our case) and see that your application has been updated.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SwapDomains/11-edited-production-environment.png)

</div>

:::tip

If you experience any problems with a domain swap, you can appeal to our technical experts' assistance at [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

:::
