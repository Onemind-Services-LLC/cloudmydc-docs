---
sidebar_position: 3
---

## Auto-Configurations for PHP Application Servers

The platform dynamic resources organization complements the basic PHP one to bring the maximum efficiency for PHP integration into the PaaS. Upon changing the amount of allocated resources for your environment (i.e. cloudlets count), the platform automatically adjusts the appropriate PHP directives to fit the new conditions. However, you can still configure parameters manually within your server’s configuration file.

The type of basic requests' handling and dispatching system varies for different PHP application servers, so the directives they use are different too. However, the functionality of such parameters could be similar. To learn more about these directives for a particular application server, navigate to the corresponding section below:

- [Apache PHP](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#apache-php-auto-adjustable-settings)
- [NGINX PHP](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#nginx-php-auto-adjustable-settings)

Besides that, you can learn [How the Auto Configuration Works](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#how-the-php-auto-configuration-works) or, if you want to redefine the values manually, proceed to the [How to Disable the Automatic Optimization](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#disable-automatic-optimization) section of this guide.

## Apache PHP Auto Adjustable Settings

Dynamic requests handling in Apache PHP is implemented with the help of the **_prefork_** Multi-Processing Module (MPM), which helps to reveal full server potential. The MPM directives are listed in the main Apache **_/etc/httpd/conf/_** [**_httpd.conf_**](http://localhost:3000/docs/PHP/PHP%20App%20Server%20Configuration) configuration file.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/01-apache-php-httpd-conf-file.png)

</div>

Here is a complete list of parameters, which the platform configures for the [**_prefork_**](https://httpd.apache.org/docs/2.4/mod/prefork.html) module:

- **_StartServers_** - sets the number of child server processes created on startup.
- M**_inSpareServers (MaxSpareServers)_** - defines the minimum (maximum) number of server processes that are kept spare
- **_ServerLimit_**- sets the highest allowed value for the _MaxRequestWorkers_ directive
- **_MaxRequestWorkers_** - configures the limit of simultaneous requests to be processed
- **_MaxConnectionsPerChild_** - defines a number of requests a single child process can serve

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/02-apache-php-prefork-module-configs.png)

</div>

Based on the allocated resources (i.e. a number of dynamic [cloudlets](/docs/PlatformOverview/Cloudlet) reserved for the Apache PHP server) and capacity of the CPU provided by your particular hosting provider, the platform automatically adjusts the **_ServerLimit_** and **_MaxRequestWorkers_** parameters:

**_MaxRequestWorkers_** = **_ServerLimit_** = min( **_{containerRam}_** / 30MiB, **_{coresCount}_** \* 5 )

Due to this statement, both directives are stated equal to the lower value between:

- allocated to the node amount of RAM, divided by 30
- cores number of hoster’s physical server the container is placed at, multiplied in 5 times

In such a way, parameters are dynamically changed based on the number of allocated cloudlets but won’t grow over the hardware limits.

:::danger Note

If you’d like to state your custom value for these directives, be aware that incorrect values can cause your Apache PHP server instability:

- if **_ServerLimit_** is much higher than necessary, the unused shared memory is allocated; while stating parameter too low won’t reveal the full server performance potential
- **_MaxRequestWorkers_** should be big enough to handle as many simultaneous requests as you expect to receive and small enough to ensure that there is enough RAM

:::

You may also be interested in [How the Auto Configuration Works](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#how-the-php-auto-configuration-works) or how to [Disable the Automatic Optimization](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#disable-automatic-optimization) to set your custom values for these directives.

## NGINX PHP Auto Adjustable Settings

Request handling in the NGINX PHP application server is managed by _FastCGI Process Manager (FPM)_, which can be configured via the **_/etc/_** [**_php-fpm.conf_**](https://www.php.net/manual/en/install.fpm.configuration.php) file. It is automatically added to the _favorites_ list in the [container file manager](http://localhost:3000/docs/ApplicationSetting/Configuration%20File%20Manager) for quick access:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/03-nginx-php-php-fpm-conf-file.png)

</div>

The FPM works in the **_ondemand_** mode (the **_pm_** directive) by default. It spawns new processes when needed (i.e. on demand) and removes idle ones. The only additional parameters for this mode are:

- **_pm.max_children_** - defines the maximum number of child processes (equal to the number of CPU cores available for the container, but no less than 2)

:::tip

The exact value depends on the capacity of the CPU provided by your particular hosting provider and the number of allocated cloudlets for your container. In such a way, cloudlets count enlargement results in the automatic growth of the **_pm.max_children_** parameter.

This directive can be defined explicitly without [disabling the automatic optimization](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations#disable-automatic-optimization) through the appropriate **_PHPFPM_MAX_CHILDREN_** [variable](http://localhost:3000/docs/EnvironmentManagement/EnvironmentVariables/Environment%20Variables).

:::

- **_pm.process_idle_timeout_** - sets the delay before killing an idle process (60 seconds)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/04-nginx-php-fastcgi-process-manager-configs.png)

</div>

If needed, you can [Disable the Automatic Optimization](http://localhost:3000/docs/ApplicationSetting/Smart%20Auto-Configuration/PHP%20Auto-Configurations) to change the FPM mode and adjust other directives (be aware that incorrect values can cause your NGINX PHP server instability).

Also, to gain advanced performance, the PHP FPM listener utilizes the UNIX domain socket instead of the common TCP one. Such a solution is better suited for the communications within the same host, allowing to skip some checks and operations (like routing).

## How the PHP Auto-Configuration Works

You can check how the parameters mentioned above are changed based on the allocated resources. We’ll consider it on the Apache PHP server example:

1. [Create](http://localhost:3000/docs/EnvironmentManagement/Setting%20Up%20Environment) a new PHP environment with the **Apache PHP** application server inside (if you don’t have one).

Then, click the **Config** button for this node and find the **_prefork_** module configs in the **_/etc/httpd/conf/httpd.conf_** file.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/05-apache-php-auto-configuration-16-cloudlets.png)

</div>

Remember the values of the directives for the current cloudlets number (16 in our case).

2. Now, with the help of the **Change Environment Topology** button, set a new resource limit for the Apache PHP server (e.g. 32 cloudlets). Refresh the **_/etc/httpd/conf/httpd.conf_** file and compare values of the prefork parameters with the ones in the previous step.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/06-apache-php-auto-configuration-32-cloudlets.png)

</div>

As you can see, the directive values increased automatically due to a higher amount of available resources allocated, so the automatic optimization works. Similar to this, upon lowering the cloudlets count, these parameters' values will be reduced.

## Disable Automatic Optimization

To state your custom values instead of the automatically configured directives, you need to disable the automatic optimization. Otherwise, your custom changes will be reverted during the container restart/update.

:::danger Note

Inappropriate directive values may cause your server instability, so it is **not recommended** to apply any manual changes unless you know exactly what you are doing.

:::

If you want to manually change any of the auto-configured settings, you need to set the **_JELASTIC_AUTOCONFIG_** [environment variable](http://localhost:3000/docs/Container/Container%20Configuration/Variables) to _false_.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/07-paas-autoconfig-variable.png)

</div>

## Legacy Implementation

On the old containers, you just need to remove the line with the optimization mark at the beginning of the corresponding configuration file:

- **Apache PHP** - _“# Jelastic autoconfiguration mark”_ within the **_/etc/httpd/conf/httpd.conf_** file

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/08-apache-php-autoconfiguration-mark.png)

</div>

- **NGINX PHP** - _“; Jelastic autoconfiguration mark”_ within the **_/etc/php-fpm.conf_** file

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAuto-Configurations/09-nginx-php-autoconfiguration-mark.png)

</div>

After the corresponding string is deleted, the parameters' values won’t be auto-configured by the platform optimization mechanism so that you can state your custom parameters. Don’t forget to **Save** the file to apply the new configurations.
