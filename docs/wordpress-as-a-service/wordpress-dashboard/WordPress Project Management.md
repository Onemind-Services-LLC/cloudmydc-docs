---
title: Wordpress project management
slug: wordpress-project-management
sidebar_position: 3
---

## WordPress Project Management

All WordPress projects on the platform are provided with a dedicated page where you can view all the details, track monitoring data, deploy solutions, and perform other management operations.

Below, we’ve grouped all the functionality available for projects in the WordPress dashboard into the following groups:

- [Settings and Basic Actions](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#settings-and-basic-actions)
- [General Data](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#general-data)
- [WordPress Plugins](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#wordpress-plugins)
- [Application Deployment](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#application-deployment)
- [Environment Management](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#environment-management)

## Settings and Basic Actions

1. At the top of the project window, you can see the list of basic environment actions – **Stop (Start), Restart**, and **Settings**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/01-project-basic-actions.png)

</div>

Just click the required button to perform the appropriate operation.

2. The button with a gear icon will redirect you to the project **Settings** page, which has several sections, including an option to [delete the project](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Installation#deleting-project) at the bottom.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/02-project-settings.png)

</div>

2.1. The **Custom Domains** section provides instruction and functionality for binding [custom domains](/docs/application-setting/domain-name-management/custom-domain-name) to your environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/03-settings-custom-domains.png)

</div>

2.2. The **SSL Installation** section allows issuing new or viewing existing certificates. You can use automatic _Let’s Encrypt SSL_ or manually manage custom SSL for the project (you need to add custom domain first).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/04-settings-ssl-installation.png)

</div>

2.3. The **Backup Storage** section enables automatic backups for your project based on the specified schedule (pre-defined, custom, or crontab). Additionally, you can select backup storage (add it via [account settings](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Dashboard%20Overview#account-settings)) and set a number of latest backups to keep. Learn more about the [backup and restore process](/docs/Wordpress%20as%20a%20Service/WordPress%20Backups).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/05-settings-backup-storage.png)

</div>

2.4. The **Endpoints** section shows a list of existing endpoints, allowing you to manage them, and creating new ones.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/06-settings-endpoints.png)

</div>

[Endpoints](/docs/application-setting/external-access-to-applications/endpoints) create a direct connection (over raw TCP or UDP protocol) to one of the project nodes without the mandatory Public IP address. It can be used to set up remote access. For example, one of the most common use cases is gaining remote access to your database instance using a local database client.

2.5. The **Subscription Plan** section shows subscription details of the current project and, depending on the hosting provider configurations, can provide the **Change Plan** option. It gives the ability to move the current project to a different plan within the same subscription.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/07-settings-subscription-plan.png)

</div>

3. Next to the buttons mentioned above, you can find a drop-down list to switch between _[Production and Staging environments](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Installation#staging-project)_ for your project.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/08-staging-project.png)

</div>

## General Data

The project’s **_Overview_** section provides the most frequently needed data for your project.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/09-wp-project-overview.png)

</div>

1. The icon at the start shows whether the project is clustered or standalone solution. The colored dot next to it indicates project status (_green_ – active, _yellow_ – in progress, _red_ – stopped). The name that follows defines whether the [environment is production or staging](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Installation#staging-project). Lastly, you can see the internal domain of the project.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/10-wp-project-domains.png)

</div>

You can click the **Edit Domain Name** button to [bind a custom external domain](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#settings-and-basic-actions).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/11-project-edit-domain.png)

</div>

2. Far to the right, an expandable menu for application deployment is located. Here you can view and delete the default application or install a new one if there is none.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/12-project-deployment-menu.png)

</div>

Learn more in the dedicated [Application Deployment](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#application-deployment) section.

3. Below that, the platform displays the automatically detected **WordPress version** and provides a link to the WordPress admin panel.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/13-project-wp-version.png)

</div>

4. The **PHP version** is shown as well.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/14-wp-project-php-version.png)

</div>

Hower over to see the **Redeploy** option that allows updating the PHP version. Click it and select a new tag with the preferable version. The operation will update your project containers to a new tag (version) without affecting the application inside.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/15-wp-project-redeployment.png)

</div>

We recommend performing regular redeployments to the latest version to ensure your project’s container is running the up-to-date operating system and software stacks with all the latest vulnerability fixes. However, be aware that the operation will cause a brief downtime for the project. You can read more on the **[Redeployment](/docs/category/container-deployment)** feature in the linked document.

5. Click the **Datacenter Info** to check the relevant information.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/16-wp-project-datacenter-info.png)

</div>

6. Click the **SSH/SFTP Info** to see how you can access your project via the [SSH](/docs/Deployment%20Tools/SSH/SSH%20Access/SSH%20Gate#ssh-access-to-platform-account) and [SFTP](/docs/deployment-tools/ssh/ssh-protocols) protocols. The drop-down list allows viewing information for different nodes of the cluster.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/17-wp-project-ssh-sftp-info.png)

</div>

7. You can click the **Database Info** to view the admin’s Username, an option to Reset Password, and redirect to the admin panel (an email with credentials was sent to you after the project creation). The drop-down list allows viewing information for different nodes of the cluster.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/18-wp-project-database-info.png)

</div>

8. If you have a custom application deployed, the appropriate label will be displayed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/19-project-git-deployment.png)

</div>

## WordPress Plugins

The **_Plugins_** section lists all the WordPress plugins installed for your project. The list is automatically updated upon switching to this tab, so you always have up-to-date data.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/20-project-plugins.png)

</div>

Here, you can hover over to view the plugin’s name and description. Use the toggle at the top to **Enable/Disable** it. You can **Update** your plugin if the appropriate option is available. Not-needed plugins can be removed with the ((Delete)) button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/21-manage-plugin.png)

</div>

In order to add new plugins, you need to connect to your project via the **_WordPress admin panel_** (an email with credentials was sent to you after the project creation).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/22-admin-add-plugin.png)

</div>

Go to the **Plugins** tab within the admin panel and choose the required plugin from the marketplace (or upload your custom one). Learn more at the official WordPress documentation - check the **[Managing Plugins](https://wordpress.org/documentation/article/manage-plugins/#finding-and-installing-plugins-1)** guide.

## Application Deployment

The application deployment menu is located at the right part of the overview section. Usually, a **Default project** is deployed during a new WordPress project creation. It is a sample website of the “Hello World” blog to help new users get started. Eventually, you may want to switch to something more suitable for your specific needs.

1. Only one application can be deployed at a time. So, any existing solution should be removed before deploying a new application. Expand the deployment menu and click the **Delete** option.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/23-delete-default-application.png)

</div>

:::danger Note

This action may break the built-in integration with WordPress. Proceed only if you know exactly what you are doing.

:::

Confirm the action via pop-up.

2. If a project does not have any application deployed, the deployment menu will have the **Deploy** option.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/24-project-deploy-application.png)

</div>

3. Within the opened window, you can select the preferable Git repository from the list of ones added via the [account settings](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Dashboard%20Overview#account-settings). Optionally, tick the “Check and auto-deploy updates (min)” checkbox and provide the preferred period to enable automatic updates of the deployed application (only upon some changes).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/25-deploy-application.png)

</div>

4. In order to deploy an application from the new repository, choose the **Add New Repo** option from the list and provide the required details:

- **Name** – a custom name for the application
- **URL** – the appropriate URL to the repository
- **Branch** – the required branch of the repo
- **Use Authentication** – tick to provide credentials (Login with either Token or SSH key)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/26-add-git-repository.png)

</div>

5. After providing all the required data, click **Deploy** and wait a minute for the platform to automatically deploy the application to your project.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/27-deploy-sample-project.png)

</div>

6. For the deployed projects, the platform shows the Git URL and provides options to:

- **Pull** – manually initiate the application update from the repository
- **Edit** – switch to a different repo or adjust the auto-deploy feature (enable, disable, change interval)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/28-project-application-details.png)

</div>

## Environment Management

The platform provides monitoring and file management options for your WordPress projects. Choose the required project and find the appropriate section at the bottom of the page.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/29-project-monitoring-and-file-manager.png)

</div>

You can use the buttons to the right (circled in the image above) to respectively:

- Maximize the section to a full screen.
- Split screen with the basic project information (the size of the section can be manually adjusted).
- Minimize the section to a single line at the bottom of the page.

1. The **_Statistics_** tab of the section provides detailed information on the project consumption and is updated in real-time. Hover over the graphs for detailed data for that moment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/30-wp-project-statistics-monitoring.png)

</div>

It is possible to adjust the displayed data using the tools panel:

- **Scope** – node type to show statistics (only available for clustered solutions with multiple nodes)
  - _bl_ – load balancers (LiteSpeed ADC)
  - _cp_ – application servers (LiteSpeed)
  - _nosql_ – NoSQL databases (Redis)
  - _sql_ – SQL databases (MariaDB)
  - _storage_ – storage nodes (Shared Storage)
- **Nodes** – all or a specific node within the selected scope
- **Duration** – choose the required period (hour, day, or month)
- **Interval** – select the preferred interval (depends on the Duration option)
- **CPU, Memory, Network, Storage** – tick the data that should be displayed
- **Auto Refresh** – click to enable/disable data tracking in real time

2. On the **_File Management_** tab, you can see your application files and perform basic management. You can select the needed node for the clustered solutions via the appropriate **Nodes** list at the top.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/31-wp-project-file-manager.png)

</div>

The **Favorites** tab is used for quick access to the main configuration files of the selected node. The **All** tab allows managing all project files. Select a file or folder to see additional information and actions to the right:

- **Folder** – you can create new files and folders inside, refresh content, or remove the directory.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/32-project-manage-folder.png)

</div>

- **File** – you can open, refresh, or remove it. Opened files can be edited directly in the file manager. Changes can be saved to all nodes within the scope (for clusters only).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressProjectManagement/33-managing-project-files.png)

</div>

For [more management options](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management#general-data), connect via SSH or make adjustments via the database and WordPress admin panels.
