---
sidebar_position: 3
---

The platform supports various ways of the applications automatic deployment, allowing to choose the most suitable option, which will suit your specific needs:

- **Dashboard** - corresponds to [deployment via archive](https://cloudmydc.com/) (provided either as local file or URL)
- **VCS** - allows to [deploy from your VCS](https://cloudmydc.com/) repository (e.g. Git, SVN, Bitbucket)
- **Hub Registry** - creates a custom container with your application based on the Docker image stored at your _[public](https://cloudmydc.com/)_ or _[private](https://cloudmydc.com/)_ registry
- **Plugins** - deploys a project using one of the popular software development tools (_[Ant Task](https://cloudmydc.com/)_, _[Eclipse](https://cloudmydc.com/)_, _[Intellij IDEA](https://cloudmydc.com/)_, _[Maven](https://cloudmydc.com/)_ or _[NetBeans](https://cloudmydc.com/)_), which provides integration with platform

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/01-deployment-options-illustration.png)

</div>

For more information on the last two options, use the appropriate links, while in this guide we’ll describe deployment via archive and VCS repository. They can be called either from **[Deployment Manager](https://cloudmydc.com/)** or by hovering over the **_Deployments_** record, which is provided for all application servers, and clicking one of the appropriate buttons.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/02-application-server-deployments.png)

</div>

The first two icons (Local file and URL) corresponds to deployment via archive and the last one (Git / SVN) - to deployment from the VCS repository. Choose the appropriate option and click it to proceed with your deployment configuration.

:::tip Notes

- the VCS deployment type for Java application servers is performed with a help of the [Maven build node](https://cloudmydc.com/), refer to the linked guide for additional details
- [.NET deployment process](https://cloudmydc.com/) for the Windows-based IIS application server is different from the standardized flow described in this guide

:::

## Archive Deployment Configurations

The process is extremely simple and can be started in just a few seconds by setting two main parameters (i.e. providing required archive and specifying a target environment). Herewith, deployment can be tuned up to your specific needs by adjusting the additional configs.

Below, we’ve provided a detailed description for all the possible options within the deployment frame:

- **Local file** (or **URL**) - points to the archive file to be deployed (is automatically selected, when installing from Deployment Manager)
- **Environment** - selects a target environment with the application server (is automatically selected, when installing from application server)
- **Path** - sets the desired custom context; herewith, the available options may be limited due to the used programming language specifics (e.g. Python and Node.js have a single predefined deployment path only)
- **Hooks** - applies the provided [scripts](https://cloudmydc.com/) either before or after deployment process
- **Deploy Strategy** (for deployments into [scaled server](https://cloudmydc.com/)) - allows to choose between relatively quicker Simultaneous deployment variant, which causes a brief downtime, and the Sequential deployment with delay option to perform deployment on servers one-by-one with a set delay between operations, which ensures application uptime
- **Enable zero-downtime deployment** (for PHP servers only) - adjusts (if option is ticked) the deployment flow to [avoid application downtime](https://cloudmydc.com/)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/03-archive-deployment-configurations.png)

</div>

Click **Deploy** to initiate the process itself.

## Git / SVN Deployment Configurations

The process is extremely simple and can be started in just a few seconds by setting two main parameters (i.e. selecting the required repository from Deployment Manager and specifying a target environment). Herewith, deployment can be tuned up to your specific needs by adjusting the additional configs.

Below, we’ve provided a detailed description for all the possible options within the deployment frame:

- **Repository** - allows to select the Git / SVN project from Deployment Manager (or jump to its addition form)
- **Branch** - defines the used repository branch (master by default)
- **Environment** - selects a target environment with the application server (is automatically selected, when installing from application server)
- **Path** - sets the desired custom context; herewith, the available options may be limited due to the used programming language specifics (e.g. Python and Node.js have a single predefined deployment path only)
- **Build** (for Java application deployments) - allows to choose the existing [Maven build node](https://cloudmydc.com/) (or add one into the target environment) and, if required, to select repository Working Directory
- **Hooks** - applies the provided [scripts](https://cloudmydc.com/) either before or after deployment process
- **Deploy Strategy** (for deployments into [scaled server](https://cloudmydc.com/)) - allows to choose between relatively quicker Simultaneous deployment variant, which causes a brief downtime, and the Sequential deployment with delay option to perform deployment on servers one-by-one with a set delay between operations, which ensures application uptime
- **Check and auto-deploy updates** - enables periodical check ups for code changes in your repository (with configurable frequency); if any, project [automatic deployment](https://cloudmydc.com/) is initiated
- **Auto-resolve conflicts** - prevents the occurrence of merge conflicts by updating the contradictory files to the repository version (i.e. locally made changes are discarded)
- **Enable zero-downtime deployment** (for PHP servers only) - adjusts the deployment flow to [avoid application downtime](https://cloudmydc.com/)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/04-vcs-deployment-configurations.png)

</div>

Click **Deploy** to initiate the process.

In a few minutes your application will be successfully deployed. Now, you can access it with the **Open in Browser** button, analyzed via [Logs](https://cloudmydc.com/) or managed with [file manager](https://cloudmydc.com/) / via [SSH access](https://cloudmydc.com/).

## Editing Git / SVN Projects

If needed, you can adjust the already deployed VCS project by clicking the **Edit** button for the appropriate deployment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/05-edit-vcs-project.png)

</div>

Within the opened frame, you can edit the same parameters described above for the deployment frame. For example, it is possible to switch a branch, add hooks, enable updates auto-deploy, etc.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/06-edit-project-dialog.png)

</div>

:::tip Note

If access credentials to the project’s repository were changed, you need to provide new ones at the platform to continue working with this project. First, edit authentication for the repository at the **[Deployment Manager](https://cloudmydc.com/)**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/07-edit-repository-credentials.png)

</div>

Then, you need to **Edit** all the already existing projects from this repository. The platform will automatically ask if you wish to update the credentials.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentGuide/08-update-project-authentication-data.png)

</div>

Click **Yes** to apply new credentials for the project.

:::
