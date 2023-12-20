---
title: Access To Admin Panel
slug: access-to-admin-panel
sidebar_position: 3
---

<!-- ## Managing Access to PHPMyAdmin -->

The platform allows to flexibly manage access to the **_phpMyAdmin_** panel for the MySQL, MariaDB and PerconaDB database servers.

By default, all connections to phpMyAdmin are allowed and, if you want to change such a behaviour, adjust the **_/etc/httpd/conf.d/phpMyAdmin-jel.conf_** file. Just, locate the <Directory /usr/share/phpMyAdmin/> section, where the possible configs are described via comments:

```bash
<Directory /usr/share/phpMyAdmin/>
     ##REMOVE THE "Require all granted" STRING BELOW TO RESTRICT THE ACCESS FROM ANY IP EXCEPT SPECIFIED IN THE SECTION BELOW

     Require all granted

     ###UNCOMMENT THE FOLLOWING LINES TO ALLOW ACCESS FROM THE SPECIFIED IP
     ###REPLACE THE xxx.xxx.xxx.xxx WITH THE IP ADDRESS FROM WHICH THE ACCESS IS ALLOWED
     #SetEnvIf X-Forwarded-For ^xxx\.xxx\.xxx\.xxx env_allow_1
     #Require env env_allow_1
     #Require ip xxx.xxx.xxx.xxx
     #Require all denied
</Directory>
```

Let’s move through it step-by-step:

1. To change the default behavior, which allows all connections, you need to comment/remove the appropriate line, as it is shown in the image below (e.g. using the [file configuration manager](/application-setting/configuration-file-manager#configuration-file-manager) or via [Web SSH](/deployment-tools/ssh/ssh-access/web-ssh#ssh-access-via-web-browser)):

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/AccesstoAdminPanel/01-phpmyadmin-configuration-file.png)

</div>

2. Next, list the allowed IPs, which should be specified in the following format (you can uncomment the provided templates and specify the correct IP address):

- if your database node has _[public IP](/application-setting/external-access-to-applications/public-ip#public-ip)_

```bash
Require ip {ipAddress}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/AccesstoAdminPanel/02-configure-access-for-db-with-public-ip.png)

</div>

- _if your database node has internal IP only_

```bash
SetEnvIf X-Forwarded-For {ipAddress} {varName}
Require env {varName}
```

:::danger Note

In this case you should specify the **_{ipAddress}_** in the **_^xxx.xxx.xxx.xxx_** format to be properly processed by Apache. Also, you can use any prefered **_{varName}_** variable name, for example env_allow_1.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/AccesstoAdminPanel/03-configure-access-for-db-with-internal-ip-only.png)

</div>

If needed, you can specify multiple addresses as it is shown in the images above.

3. Uncomment the last line within the section, to deny access from any IP other than specified one(s):

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/AccesstoAdminPanel/04-deny-access-to-admin-from-not-listed-addresses.png)

</div>

4. **Save** the changes and **Restart Nodes** of your database server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/AccesstoAdminPanel/05-restart-database-nodes.png)

</div>

That’s it! Any connection to the phpMyAdmin panel from the IP address, which is not in the allowed list, will lead to the page similar to the following one:

403 forbidden page example

Now, you can be sure that your database admin panel is protected from the unallowed connections.
