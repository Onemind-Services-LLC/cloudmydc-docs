---
title: Deployment manager
slug: deployment-manager
sidebar_position: 2
---

The **Deployment Manager** is located at the bottom of the dashboard and is used to store applications to simplify their subsequent deployment into your environments. There are two subsections to provide support for the following deployment types:

- **[Archive](/docs/Deployment/Deployment%20Manager#application-archives)** - stores the application packages, which can be uploaded from your local machine or any external link
- **[Git / SVN](/docs/Deployment/Deployment%20Manager#git--svn-projects)** - saves the link to your project within the remote Git / SVN repository and the appropriate access credentials (if needed)

## Application Archives

1. The **Archive** tab within the Deployment Manager section allows to view all application archives stored at your account. The list provides the following information:

- **Name** - name of the uploaded archive
- **Comment** - custom note for your application
- **Size** - size of the application archive
- **Upload Date** - date of the archive addition to the Deployment Manager

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/01-archive-deployment-manager.png)

</div>

2. Click **Upload** and within the appeared dialog box provide the appropriate file either from your local machine (the Local File tab) or anywhere over the Internet (URL):

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/02-upload-archive-to-deployment-manager.png)

</div>

:::danger Note

The maximum archive size for the local file upload is 150 MB. If your application size exceeds this limit, please use the URL option.

:::

Fill in the **Comment** field (if required) and **Upload**.

3. In order to deploy an application from the archive, hover over the required file and click the appeared **Deploy to** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/03-deploy-archive-from-deployment-manager.png)

</div>

Within the opened frame you can [configure deployment](/docs/Deployment/Deployment%20Guide) up to your needs.

4. The no longer required archives can be removed by selecting them with the appropriate checkboxes before the name and clicking the **Delete** button at the top panel.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/04-deployment-manager-delete-archives.png)

</div>

Now, you know how the archive tab of the Deployment Manager works and can use it to organize your deployment packages.

## Git / SVN Projects

1. The **Git / SVN** section of the Deployment Manager stores the link to the remote repository with your projects and, if required, the appropriate authentication credentials.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/05-git-svn-deployment-manager.png)

</div>

2. In order to add a new project, click the **Add Repo** button and fill in the fields of the appeared **_Add Repository_** window:

- **Name** - name of your application (no spaces and special symbols are allowed)
- choose the **Git** repo type

  - URL - the appropriate URL to the repository
  - Branch - the required branch of the project (master by default)
  - optionally, tick the Use Authentication check box and provide either Password or Token or [SSH Key](https://cloudmydc.com/) based credentials

:::danger Note

If your repository is protected with two-factor authentication, you need to use the appropriate access token (e.g. for [GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) or [GitLab](https://docs.gitlab.com/ee/user/project/deploy_tokens/)) instead of your password.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/05.1-deployment-authentication-with-git-access-token.png)

</div>

Additionally, you can manage the scope of provided permissions during the access token generation to ensure your repository safety.

:::

- choose the **_SVN_** repo type

  - _URL_ - link to your repository
  - _Login and Password_ - authentication credentials (if required)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/06-add-vcs-repository-to-deployment-manager.png)

</div>

You can just **Add** this project into Deployment Manager or **Add + Deploy** to immediately initiate [deployment](/docs/Deployment/Deployment%20Guide) of this application.

3. Hover over the Git / SVN project in Deployment Manager to access the **Deploy** to, **Edit** and **Delete** options.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DeploymentManager/07-manage-vcs-repositories-in-deployment-manager.png)

</div>

Now, you know how to manage your VCS projects within the platform Deployment Manager.
