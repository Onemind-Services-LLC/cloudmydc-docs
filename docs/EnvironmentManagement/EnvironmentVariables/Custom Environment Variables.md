---
sidebar_position: 3
---

import obj from './CustomEnvVar.json'

Environment variables represent a kind of placeholders, where you can store the frequently used parameters values or strings in order not to specify them manually in the code each time they are needed. There is a number of [default environment variables](https://cloudmydc.com/) which are preconfigured and can be used in your application code or even adjusted before node creation to apply some customization, making your work with the platform even more convenient.

In this guide, we’ll describe the most common ways of adding your custom variables for any node within the platform:

- [via a dedicated variables section of the dashboard](https://cloudmydc.com/)
- [using the shell configuration files](https://cloudmydc.com/)
- [through the variables.conf file (for Java only)](https://cloudmydc.com/)

## Customize Environment Variables via UI

1. Hover over the node group in dashboard, expand the **Additionally** list and select the **_Variables_** options.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/01-environment-variables-dashboard.png)

</div>

2. Within the opened frame, you can adjust a list of environment variables up to your needs (using the buttons at the tools pane).

:::danger Note

The platform implementation of the Docker containers allows usage of the existing environment variables to define others. For example, the **MY$HOME** value will be automatically converted to **MY**\ one (or similar based on the HOME variable value).

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/02-manage-environment-variables-via-ui.png)

</div>

Don’t forget to **Apply** the changes you’ve made.

## Set Up Environment Variables via Shell Configs

You are able to provide your custom variables using the shell config files:

- **_~/.bash_profile_** is executed only upon login via console
- **_~/.bashrc_** is executed for each new bash instance
  In order to help you with maintaining these files, the platform automatically include the sources of the .**_bashrc_** config within **_.bash_profile_**. In such a way, you can provide custom variables through the former file only:

1. Establish [SSH connection](https://cloudmydc.com/) to your container. For example, we’ll use the embedded **Web SSH** client:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/03-web-ssh-button.png)

</div>

2. Create or adjust the .bashrc file within the home directory by adding your custom variables in the following format:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
    <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding:'10px 20px 5px 20px', color: 'white' }}>
        1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
            {obj.data1}
        </div>
    </div>
</div>

where

- **_{var_name}_** - name of the variable you would like to specify
- **_{var_value}_** - value of your variable

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/04-export-custom-variables-ssh.png)

</div>

3. Now, each new bash instance will be provided with your custom variables. To force new settings appliance for the current session, just refresh the sources with the command shown below. Next, verify new variables availability:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
    {obj.data2.map((item, idx) => {
        return <div key={idx} style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding:'10px 20px 5px 20px', color: 'white' }}>
            {idx+1}
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
            {item}
        </div>
    </div>
    })}
</div>

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/05-verify-custom-variables-availability-ssh.png)

</div>

As you can see, the changes were successfully applied.

## Adjust Java Environment Variables via Configuration Manager

The following simple workflow is identical for all of the platform-managed Java application servers.

1. Click the **Config** button for your application server to access container [file manager](https://cloudmydc.com/).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/06-configuration-file-manager-button.png)

</div>

2. In the opened tab, navigate to the **_variables.conf_** file within one of the following locations:

- **Tomcat, TomEE** - /opt/tomcat/conf/variables.conf
- **Jetty** - /opt/jetty/etc/variables.conf
- **Spring Boot** - /opt/shared/conf/variables.conf
- **GlassFish** - /opt/glassfish/glassfish/domains/domain1/config/variables.conf
- **Payara** - /opt/payara/glassfish/domains/domain1/config/variables.conf
- **WildFly** - /opt/wildfly/conf/variables.conf

3. Here, you can provide your custom variables (each one should be separated by space or start from a new line) or [adjust Java options](https://cloudmydc.com/) for your application. For example:

**-Dvar1=value1 -Dvar2=value2** <br/>
**-Dmy.var3=/my/value**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/07-custom-environment-variables-java.png)

</div>

:::tip Tip

Alternatively, some of the application servers (i.e. _GlassFish, Payara, WildFly_) are provided with admin panel, which also allows to add JVM options and custom Variables

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/08-custom-variables-glassfish-admin-panel.png)

</div>

:::

Do not forget to **Save** the configurations you’ve made.

4. **Restart nodes** of your application server to apply changes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomEnvironmentVariables/09-restart-nodes-button.png)

</div>

5. The new variables can be called through your Java code with the help of the _System.getProperty(“your_variable”)_ method to appoint the specified values to the needed arguments. For example:

- String **var1** = System.getProperty("**var1**");
- String **var2** = System.getProperty("**var2**");
- String **var3** = System.getProperty("**my.var3**")

Now, you can adjust your application code using these new variables.
