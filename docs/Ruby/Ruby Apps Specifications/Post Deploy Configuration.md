---
sidebar_position: 2
---

##CONTEXT CODE

## Ruby Post Deploy Configuration

The platform can perform post deployment application configuration via **rake**. This is usually needed to finalize configuration of complex applications, to run additional applications or specific steps for application configuration like db:migrate.

To do this we’ve introduced a new file called **_rake_deploy_**. It is located in the application root and contains a list of the commands that have to be passed to **rake**. Each command has to be located in a separate line. Commands are executed successively.

The platform executes commands from **_rake_deploy_** with each restart of the apache/nginx service and deletes them right after successful execution. As a result, if you need to bypass different commands to rake on each deploy you need to create a **_rake_deploy_** file each time and put the correct commands there.

The platform puts the output of each **_rake_deploy_** into a corresponding log file which is available via the [**Log**](/docs/ApplicationSetting/Built-in%20Monitoring/Log%20Files#view-log-files) view in the platform dashboard.

**_Syntaxis of the rake_deploy file:_**

```bash
$COMMAND_NAME_1  
$COMMAND_NAME_2  
...  
$COMMAND_NAME_N
```

And the platform will execute the following scripts:

```bash
rake $COMMAND_NAME_1  
rake $COMMAND_NAME_2  
...  
rake $COMMAND_NAME_N
```

For example, **rake_deploy** looks like the following in the [_Redmine_](https://cloudmydc.com/) tutorial:

```bash
generate_secret_token  
db:migrate  
redmine:load_default_data
```

:::danger Note

To freeze gems you need to add the **_gems:unpack_** command to _rake_deploy_.

:::
