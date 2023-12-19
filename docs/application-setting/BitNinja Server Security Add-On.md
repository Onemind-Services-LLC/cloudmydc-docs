---
title: Bitninja server security add-on
slug: bitninja-server-security-add-on
sidebar_position: 11
---

## BitNinja Server Security Add-On

[**BitNinja**](https://bitninja.com/) is an easy-to-use, security-as-a-service server defense tool. It protects your server from hackers, botnets, attackers, and malicious activities with minimal effort and maintenance required from your side.

All the servers protected by BitNinja collect and exchange information about attacks with each other, accumulating a knowledge base (known as **Defense Network**). Detected attacks and blocked IPs are immediately reported to all protected servers worldwide, creating an even harder shield against attacks.

In the platform, you can protect your servers with BitNinja security in a few clicks with the dedicated add-on.

## BitNinja Installation

The [**BitNinja**](https://github.com/jelastic-jps/bitninja) add-on is available for all certified nodes at the platform (except [VPS](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/General%20Information)).

1. Open the [Marketplace](/docs/deployment-tools/cloud-scripting-&-jps/marketplace) in the platform dashboard and search for the **_BitNinja Service_** package or find it in the **Add-Ons** section. Hover over and click **Install** to proceed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/01-marketplace-bitninja-add-on.png)

</div>

:::tip Tip

Also, you can install the solution from the **Add-Ons** panel for a specific environment layer.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/02-environment-add-ons-panel-bitninja.png)

</div>

:::

2. In the opened window, choose the target environment and layer through the appropriate fields. BitNinja add-on provides a varying set of features (modules) based on the selected layer:

- **Load Balancer** - [_IP Reputation_](https://doc.bitninja.io/docs/ip%20filter/ip_reputation/), [_Web Application Firewall_](https://doc.bitninja.io/docs/modules/waf2/), [_DOS Detection_](https://doc.bitninja.io/docs/modules/dosdetection/), [_Port Honeypot_](https://doc.bitninja.io/docs/modules/port_honeypot/)
- **Application Server** - [_IP Reputation_](https://doc.bitninja.io/docs/ip%20filter/ip_reputation/), [_Proxy Filter_](https://doc.bitninja.io/docs/modules/proxyfilter/), [_FTP Captcha_](https://doc.bitninja.io/docs/modules/captchaftp/), [_SMTP Captcha_](https://doc.bitninja.io/docs/modules/captchasmtp/), [_Malware Detection_](https://doc.bitninja.io/docs/modules/malware-detection/), [_Web Application Firewall_](https://doc.bitninja.io/docs/modules/waf2/), [_Defense Robot_](https://doc.bitninja.io/docs/modules/defenserobot/)
- **Database** - [_IP Reputation_](https://doc.bitninja.io/docs/ip%20filter/ip_reputation/)
- **Shared Storage** - [_IP Reputation_](https://doc.bitninja.io/docs/ip%20filter/ip_reputation/), [_Proxy Filter_](https://doc.bitninja.io/docs/modules/proxyfilter/), [_FTP Captcha_](https://doc.bitninja.io/docs/modules/captchaftp/), [_SMTP Captcha_](https://doc.bitninja.io/docs/modules/captchasmtp/), [_Malware Detection_](https://doc.bitninja.io/docs/modules/malware-detection/)
- **Build Node** - [_IP Reputation_](https://doc.bitninja.io/docs/ip%20filter/ip_reputation/), [_Malware Detection_](https://doc.bitninja.io/docs/modules/malware-detection/)

:::tip Note

All features (modules) are available and can be enabled on all layers. The list just represents modules activated by default based on the common use cases.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/03-bitninja-service-installation.png)

</div>

:::danger Note

As proprietary software, the add-on usage requires a license. You can learn all the [license pricing](http://localhost:3000/docs/application-setting/bitninja-server-security-add-on#license-pricing) specifics in the dedicated section below.

:::

Click **Install** for the package to automatically set up a BitNinja agent on your nodes and create an account at the BitNinja cloud service (must be confirmed and activated).

3. After the installation, you will receive an email with the “**_[BitNinja Account Activation] Quick setup + Results in 12 hours_**” subject.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/04-bitninja-account-activation-email.png)

</div>

Here, you can find an activation link. Click it and set up a password for your account.

:::danger Note

Only one BitNinja account can be created per email address, so you cannot activate the add-on on multiple PaaS platforms that use the same email.

:::

Now, your server is under protection!

## License Pricing

The platform seamlessly integrates the cost of the BitNinja license under the fair **pay-as-you-go** principles. Namely, the license is billed hourly (730 hours per month) and for **active** containers only. In addition, license lifecycle management is fully automated:

- licenses are issued for every container on the layer during the BitNinja add-on installation
- each newly-created container on the layer (horizontal scaling) is provided with a dedicated license
- licenses are decommissioned for stopped and removed containers

Each license is charged based on the [1 hosted user](https://bitninja.com/pricing/) plan, which currently is **10$** per month (or approximately 0.014$ per hour).

:::danger Note

The exact cost may vary slightly for the platforms with a currency other than USD; it depends on the conversion rate at the moment of the hourly billing event. You can track all the account charges via the [**Billing History**](/docs/account-and-pricing/resource-charging/monitoring-consumed-resources#billing-history) in the dashboard.

:::

Check the following example scenario for a better understanding.

Let’s say we have an environment with a load balancer, several application servers, and a database cluster of two nodes. During the BitNinja add-on installation, you can select a target layer. In our case, it is logical to add an add-on to the load balancer server (instead of multiple compute nodes). For additional security, we’ll install BitNinja for the database layer as well.

**Result**: The license price is per server/node, so for the example above, we’ll be charged for three licenses (one for load balancer and two for databases). Also, if we add or remove nodes on the layers with installed add-on (horizontal scaling), the platform will automatically adjust the total license count. It is done with the purpose that scaled instances have the same configuration.

## BitNinja Add-On Options

After installation, you can manage the **_BitNinja Service_** add-on via the dedicated panel. Use the appropriate buttons to open the **BitNinja Admin Panel**, **Restart Agent**, or **Uninstall** the add-on.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/05-bitninja-add-on-options.png)

</div>

For example, log into the BitNinja service console to monitor the events.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/06-bitninja-admin-panel-events.gif)

</div>

## Vendor Support

If you face any issues or have questions regarding BitNinja, you can contact the support team directly via the dashboard. Use the quick **chat** option in the bottom right corner or open a support ticket by navigating to the **Get help** menu in the top right corner of the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/BitNinjaServerSecurityAdd-On/07-bitninja-support.png)

</div>
