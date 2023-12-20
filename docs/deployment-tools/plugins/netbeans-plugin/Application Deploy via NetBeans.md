---
title: Application Deploy Via NetBeans
slug: application-deploy-via-netbeans
sidebar_position: 4
---

<!-- ## NetBeans Plugin for Application Deploy -->

You can create own project in NetBeans IDE and deploy it right into your environment.

## Create New Project

1. Click the **New Project** button in the upper tools panel of NetBeans IDE.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/01-netbeans-create-new-project.png)

</div>

2. Choose the **Java Web** category and the **_Web Application_** project. Click **Next**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/02-netbeans-create-java-web-application.png)

</div>

3. In the opened window, enter the desired **Project Name**, specify **Project Location** and **Project Folder**. Click **Next** to proceed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/03-netbeans-set-project-name-and-location.png)

</div>

4. Select one of your environments in the **Server** drop-down list. If needed, specify the context and click **Next** one more time.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/04-netbeans-project-server-and-settings.png)

</div>

5. If you want to use frameworks in your application, tick the required ones and click **Finish**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/05-netbeans-project-frameworks.png)

</div>

6. Your new web project will be created in a moment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/06--netbeans-new-project-created.png)

</div>

## Deploy Project

1. Right-click the name of your project and choose the **Deploy** menu item.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/07-netbeans-deploy-project.png)

</div>

2. Next, the **.war** archive of your project will be built and deployed to the platform.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/08-project-build-and-deploy-log.png)

</div>

3. To make sure everything works open your application URL in the browser manually or automatically by clicking **Open App in browser** in the **Services** tab.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/09-open-deployed-application-in-browser.png)

</div>

As a result your application will be opened.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ApplicationDeployviaNetBeans/10--deployed-project.png)

</div>

With the platform **NetBeans IDE plugin** installed you can easily manage, develop and deploy your applications without switching between the IDE and the browser.
