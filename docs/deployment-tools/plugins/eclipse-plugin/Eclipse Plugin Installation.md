---
title: Eclipse plugin installation
slug: eclipse-plugin-installation
sidebar_position: 2
---

!Image Missing

## Eclipse Plugin Installation

In order to start working with the Eclipse Plugin, you need to [get it installed](/docs/deployment-tools/plugins/eclipse-plugin/eclipse-plugin-installation) and [authenticated to your PaaS account](/docs/deployment-tools/plugins/eclipse-plugin/eclipse-plugin-installation#authentication-with-account-credentials) within its settings. So, launch your Eclipse IDE and proceed with the instructions below.

## Plugin Installation

1. Open the Eclipse [**Marketplace**](https://marketplace.eclipse.org/content/jelastic-paas-plugin) page with the platform Plugin in a browser. Click on and drag the plugin installation button (circled in the image below) into your running Eclipse workspace.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EclipsePluginInstallation/01-paas-plugin-for-eclipse.png)

</div>

2. In the opened frame you can check and edit the list of installed software. In our case, there is only _Eclipse Plugin_ listed, so just click on **Confirm**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EclipsePluginInstallation/02-confirm-eclipse-plugin-installation.png)

</div>

3. At the next step, you’ll need to read and accept the license agreement.accept plugin license agreement.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EclipsePluginInstallation/03-accept-plugin-license-agreement.png)

</div>

Click on **Finish** in order to proceed with installation.

4. If you receive a security warning, click the Install anyway button to proceed and wait a minute for this operation to be completed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EclipsePluginInstallation/04-plugin-installation-security-warning.png)

</div>

5. Restart your Eclipse IDE by clicking **Restart Now** on the last frame to apply the changes and finish installation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EclipsePluginInstallation/05-restat-eclipse-ide-to-enable-plugin.png)

</div>

## Authentication with Account Credentials

To get started with PaaS, you need to connect the plugin with your account at a platform. For that, navigate to **Window > Preferences > PaaS Preferences.
**
In the opened tab, fill in the _Login_ and _Password_ fields with the corresponding values and either select the required hosting _Provider_ from the list of available ones (for Public Cloud) or type the _Custom host_ manually (for Private Cloud).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EclipsePluginInstallation/06-preferences-for-remote-access.png)

</div>

Select the A**pply and Close** button to confirm the entered data.
That’s all the required configurations! Now, having the **Eclipse plugin** installed, you can [manage environments](/docs/deployment-tools/plugins/eclipse-plugin/environment-management) and [deploy new projects](/docs/deployment-tools/plugins/eclipse-plugin/application-deployment) easily without switching between IDE and browser.
