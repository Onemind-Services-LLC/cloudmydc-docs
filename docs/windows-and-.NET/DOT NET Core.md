---
title: Dot Net Core
slug: dot-net-core
sidebar_position: 1
---

<!-- ## .NET Core Application Server -->

**[.NET Core](https://learn.microsoft.com/en-us/dotnet/core/introduction)** is an open-source, cross-platform version of .NET for building websites, services, and console applications. Often it is used for cloud applications or refactoring large enterprise applications into microservices.

.NET Core consists of the following components:

- **[.NET Core runtime](https://github.com/dotnet/runtime/tree/main/src/coreclr)** - provides essential services (type system, assembly loading, garbage collector, etc.). [Framework libraries](https://github.com/dotnet/runtime/tree/main/src/libraries) provide primitive data types, app composition types, and fundamental utilities
- **[ASP.NET Core runtime](https://github.com/dotnet/aspnetcore)** - provides a framework for building modern, cloud-based, internet-connected applications (_web apps_, _IoT apps_, and _mobile backends_)
- **[.NET Core SDK](https://github.com/dotnet/sdk)** and language compilers ([Roslyn](https://github.com/dotnet/roslyn) and [F#](https://github.com/dotnet/fsharp)) - allow the development of the .NET Core projects
- **[dotnet command](https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet)** - launches .NET Core applications and CLI commands. It selects and hosts the runtime, provides an assembly loading policy, and launches apps and tools

:::tip Notes

- This stack availability depends on the particular hosting provider settings.
- This template utilizes a modern **_systemd_** initialization daemon.

:::

## Creating .NET Core Server

1. Log in to the PaaS dashboard and click the **New Environment** button at the top-left corner.

2. Within the opened [topology wizard](/environment-management/setting-up-environment), navigate to the **.NET** tab and select the **_.NET Core_** application server. Configure the other parameters (_[cloudlets](/platform-overview/cloudlet)_,_disk limit_, _[public IPs](/application-setting/external-access-to-applications/public-ip/)_, etc.) up to your needs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/01-dotnet-core-topology-wizard.png)

</div>

Click **Create** to proceed.

3. Your environment with the _.NET Core_ server will be created in a few minutes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/02-dotnet-core-application-server-created.png)

</div>

The application server operates in a separate container (node) - an isolated virtualized instance - provisioned for a software stack. The container has its own private IP and unique DNS record.

## Deploying Application to .NET Core Server

The platform provides multiple options to automatically [deploy projects](/deployment/deployment-guide). In this example, we’ll add a simple .NET project stored on GitHub.

1. Open the **_Git/SVN_** tab of the **[Deployment Manager](/deployment/deployment-manager#git--svn-projects)** to add a new repository.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/03-deployment-manager-add-repository.png)

</div>

:::tip Tip

If you are interested in [creating your own .NET application](https://learn.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-7.0&tabs=visual-studio) follow the official documentation.

:::

2. Provide the necessary URL and Branch for your project.

:::tip Note

.NET Core supports several specific [variables](/container/container-configuration/variables) that can help with application deployment:

- **_APP_NAME_** - points to the particular folder (if there are multiple applications in a single repository) or runs a specific **_.dll_** file in your project
- **_ASPNETCORE_URLS_** - configures services to work with the specified URL
- **_RUN_OPTION_** - provides additional **_dotnet run_** options for your project

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/04-dotnet-core-app-name-variable.png)

</div>

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/05-add-dotnet-core-application.png)

</div>

Click **Add** to save the project in your Deployment Manager.

3. Open the deployment dialog using one of the two buttons in the image below:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/06-deploy-from-git.png)

</div>

4. Within the opened frame, you need to select an application to be deployed, branch, and the target environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/07-deploy-dotnet-core-application.png)

</div>

:::tip Note

Similar to the Python, Node.js, and Go programming languages, the **.NET Core** has a single context (i.e. only one app can be deployed at a time).

:::
Configure any other parameters according to your needs by following the deployment guide.

5. In a minute, the application will be deployed and can be accessed using the **Open in Browser** button next to the .NET Core application server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/08-open-dotnet-core-in-browser.png)

</div>

Your web application should be opened in a new browser tab. In our case, it is just a simple .NET website.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DotNETCore/09-dotnet-core-web-application.png)

</div>

Use this guide as a reference to deploy your own application to the .NET Core server.
