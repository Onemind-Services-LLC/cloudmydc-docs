---
title: Wordpress security
slug: wordpress-security
sidebar_position: 6
---

## WordPress Security

Website safety is one of the main pillars of successful WordPress hosting. When it comes to security, it can take on two primary forms - protection against hackers trying to steal your data and security against information loss. The platform addresses both these security points. Data loss is covered automatically by [cloud hosting server configurations](/docs/Wordpress%20as%20a%20Service/WordPress%20Security#cloud-hosting-security), while hacker protection utilizes multiple [application server features](/docs/Wordpress%20as%20a%20Service/WordPress%20Security#litespeed-security-protection).

## Cloud Hosting Security

Being a reliable cloud hosting provider with multiple years of experience and a solid reputation, the CloudMyDc Application Platform for WordPress takes care of numerous security implementations. Cloud hosting provides an excellent solution against data infringement on your website called data segmentation. How does it work? Let’s say one of the servers is hacked. Data segmentation gives the cloud hosting the flexibility to separate this infiltration from the rest of your website before anything else is affected.

An extension to your site’s safety, cloud hosting helps safeguard against information loss with a robust data replication feature. It utilizes a network of interlinked servers making your website’s data available to be cloned and stored into as many servers as necessary.

For comparison, self-managed cloud hosting leaves all these and other server configurations to you, which is challenging even for experienced developers and engineers.

## LiteSpeed Security Protection

With the title of the best CMS on the market comes the security threat of being a common target for hacker attacks. Additionally, WordPress’s open-source code makes it more vulnerable. Almost 70% of websites that run on WordPress fall victim to the attacks through malicious software in the plugins. Another popular hacking activity is using programs that guess admin login details (also known as brute force attacks). Apart from posing security threats, these attacks put a heavy load on the server resources, and even if your password is not guessed, the performance can be affected.

To prevent such attacks, the LiteSpeed server protects the most vulnerable **_xmlrpc.php_** and **_wp-login.php_** files. It also moves the Security Captcha from the application level to the server level and prevents unwanted login attempts by automatically blocking IP addresses. It is achieved by setting an automatic quota for logins that is reduced by one after each failed attempt. Once it reaches zero, the throttling, denying, or dropping of the requests will be applied to protect your WordPress installation.

Multiple other security options can be configured for the LiteSpeed server. The platform integrates some of the most popular features used with the WordPress installations, allowing users to easily enable them on the server using the [dedicated environment variables](http://localhost:3000/docs/environment-management/environment-variables/environment-variables):

- **WAF** - enables (true) or disables (false, by default) Web Application Firewall with the [Comodo](https://waf.comodo.com/) default ruleset
- **WP_PROTECT** - configures an action for the [WordPress Brute Force Attack Protection](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection) feature (off|on|drop|deny|throttle|captcha; off by default)
- **WP_PROTECT_LIMIT** - sets a limit for the [WordPress Brute Force Attack Protection](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:wordpress-protection) feature (0|1|2-1000; 10 by default)

For additional configuration options, you can access the LiteSpeed admin panel (using credentials received via email after the environment creation).

:::tip Tip

Depending on the topology, you are provided with credentials to the admin panels of all the components:

- WordPress
- LiteSpeed ADC
- LiteSpeed WEB Server
- PhpMyAdmin (MariaDB)

:::

Check our **WordPress Security Optimization for High-Performing Websites** article for more security and optimization advice.
