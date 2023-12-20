---
title: Glassfish Environment Variables
slug: glassfish-environment-variables
sidebar_position: 2
---

<!-- ## Custom Environment Variables -->

Environment variables represent a kind of placeholders, where you can store the frequently used parameters values or strings in order not to specify them manually in the code each time they are needed. There is a number of [default environment variables](/environment-management/environment-variables/environment-variables#default-environment-variables) which are preconfigured and can be used in your application code or even adjusted before node creation to apply some customization, making your work with the platform even more convenient.

In this guide, we’ll describe the most common ways of adding your custom variables for any node within the platform:

- via a dedicated variables section of the dashboard
- using the shell configuration files
- through the variables.conf file (for Java only)

## Customize Environment Variables via UI

1. Hover over the node group in dashboard, expand the **Additionally** list and select the **_Variables_** options.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/01-environment-variables-dashboard.png)

</div>

2. Within the opened frame, you can adjust a list of environment variables up to your needs (using the buttons at the tools pane).

:::tip Note

The platform implementation of the Docker containers allows usage of the existing environment variables to define others. For example, the **_MY$HOME_** value will be automatically converted to MY\ one (or similar based on the HOME variable value).

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/02-manage-environment-variables-via-ui.png)

</div>

Don’t forget to **Apply** the changes you’ve made.

## Set Up Environment Variables via Shell Configs

You are able to provide your custom variables using the shell config files:

- **~/.bash_profile** is executed only upon login via console
- **~/.bashrc** is executed for each new bash instance

In order to help you with maintaining these files, the platform automatically include the sources of the **_.bashrc_** config within **_.bash_profile_**. In such a way, you can provide custom variables through the former file only:

1. Establish [SSH connection](/deployment-tools/ssh/ssh-access/overview) to your container. For example, we’ll use the embedded **Web SSH** client:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/03-web-ssh-button.png)

</div>

2. Create or adjust the **_.bashrc_** file within the home directory by adding your custom variables in the following format:

```bash
export  {var_name}= {var_value}
```

where

- **_{var_name}_** - name of the variable you would like to specify
- **_{var_value}_** - value of your variable

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/04-export-custom-variables-ssh.png)

</div>

3. Now, each new bash instance will be provided with your custom variables. To force new settings appliance for the current session, just refresh the sources with the command shown below. Next, verify new variables availability:

```bash
source ~/.bashrc
echo $ {var_name}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/05-verify-custom-variables-availability-ssh.png)

</div>

As you can see, the changes were successfully applied.

## Adjust Java Environment Variables via Configuration Manager

The following simple workflow is identical for all of the platform-managed Java application servers.

1. Click the **Config** button for your application server to access container [file manager](/application-setting/configuration-file-manager).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/06-configuration-file-manager-button.png)

</div>

2. In the opened tab, navigate to the **_variables.conf_** file within one of the following locations:

- **Tomcat**, **TomEE** - _/opt/tomcat/conf/variables.conf_
- **Jetty** - _/opt/jetty/etc/variables.conf_
- **Spring Boot** - _/opt/shared/conf/variables.conf_
- **GlassFish** - _/opt/glassfish/glassfish/domains/domain1/config/variables.conf_
- **Payara** - _/opt/payara/glassfish/domains/domain1/config/variables.conf_
- **WildFly** - _/opt/wildfly/conf/variables.conf_

3. Here, you can provide your custom variables (each one should be separated by space or start from a new line) or [adjust Java options]/docs/environment-management/environment-variables/java-options-and-arguments) for your application. For example:

   **_-Dvar1=value1 -Dvar2=value2_**

   **_-Dmy.var3=/my/value_**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/07-custom-environment-variables-java.png)

</div>

:::tip

Alternatively, some of the application servers (i.e. _GlassFish_, _Payara_, _WildFly_) are provided with admin panel, which also allows to add JVM options and custom variables:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/08-custom-variables-glassfish-admin-panel.png)

</div>

:::

Do not forget to **Save** the configurations you’ve made.

4. **Restart nodes** of your application server to apply changes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GlassFishEnvironmentVariables/09-restart-nodes-button.png)

</div>

5. The new variables can be called through your Java code with the help of the _System.getProperty(“your_variable”)_ method to appoint the specified values to the needed arguments. For example:

- String **var1** = System.getProperty("**var1**");
- String **var2** = System.getProperty("**var2**");
- String **var3** = System.getProperty("**my.var3**")

Now, you can adjust your application code using these new variables.