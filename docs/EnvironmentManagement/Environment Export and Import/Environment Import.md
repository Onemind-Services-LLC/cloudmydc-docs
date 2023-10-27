---
sidebar_position: 3
---

The the platform’s **Environment Import** feature allows executing the **_.json, .jps, .yml, .yaml_**, or **_.cs_** files on the platform to automatically install and configure projects according to the declared settings. Being initially designed to deploy the previously [exported](https://cloudmydc.com/) environment copies (e.g. to transfer an application from another PaaS installation), it can also be used to install your own solutions, declared via JSON, or integrate any ready-to-go package from [JPS Collection](https://cloudmydc.com/).

So, let’s consider how to work with the platform import functionality in detail on the example of the exported environment.

:::danger Note

For your exported environment to work correctly, it should be migrated to the PaaS installation of <u>the same or higher version</u>. You can compare the platform’s versions at [Cloud Union](https://cloudmydc.com/).

:::

1. Click on the **Import** button at the top of the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/01-paas-main-buttons.png)

</div>

2. Within the opened **Import** frame, you’ll see three tabs with different options for providing the required file:

- **_Local File_** - to select a locally stored manifest (via the **Browse** button)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/02-import-via-local-file.png)

</div>

- **URL** - to type in or paste a direct link to the required fileimport via URL

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/03-import-via-url.png)

</div>

- **JPS** - the built-in editor to either insert and edit code or to compose your own solution from scratch (refer to the [JPS deployment and troubleshooting](https://cloudmydc.com/) section below for more information)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/04-import-via-jps.png)

</div>

:::tip Tip

The **_Examples_** link next to these tabs redirects to the [JPS Collection](https://cloudmydc.com/) at GitHub, which stores multiple open-source samples of the ready-to-go packages. You can import any of them by fetching manifest.jps via the tabs above or examine files and scripts to create your own solution.

:::

To proceed, click the **Import** button in the bottom-right corner of the needed import type tab.

3. After that, you’ll see the installation confirmation window with the corresponding package description. For the exported environment, it shows details on the source platform and export date.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/05-confirm-environment-import.png)

</div>

Within the fields inside, you need to specify the following parameters:

- **Environment** - domain name for your new environment
- **Display Name** - environment [alias](https://cloudmydc.com/) to be displayed at the dashboard instead of its domain (optional)
- **Region** - [environment region](https://cloudmydc.com/) to host the solution (if several ones are available)

Click **Import** when ready.

4. Wait until the environment is created, deployed, and configured.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/06-deploying-imported-environment.png)

</div>

:::tip Tip

You can minimize this window and continue working with the dashboard without interrupting the importing process, which will proceed in the background.

:::

5. In a few minutes, you’ll see the installation success window.

Here, you can click **Open in Browser** to immediately check the result or **Close** this frame to reconfigure your environment and application according to the new platform’s settings (e.g. due to changed hostnames, IP addresses, etc.).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/07-environment-successfully-imported.png)

</div>

Also, check your email for information (like hostname, new administrator credentials for the nodes, etc.) on your imported environment.

That’s all! This way, you can automatically install any required solution to the chosen platform just in a few clicks, without the necessity to set up all configurations manually.

## JPS Deployment & Troubleshooting

The **Import > JPS** option is most frequently used by developers who create [JPS packages](https://cloudmydc.com/) (e.g. for automation of the common tasks or implementation of complex CI/CD flows). Also, it is an excellent tool for the quick tuning and testing of the packages.

1. Once added into this editor, your code will be automatically parsed for errors. If detected, they will be marked with the red cross icon before the corresponding line (hover over for some additional information on the issue). Besides, your code is safely retained in your browser’s local storage, so you can freely close the whole Import frame (e.g. to perform some other operations at the dashboard) and return to coding later on.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/08-jps-editor-for-import.png)

</div>

2. At the top of the frame, you can find several tools for a more comfortable work experience:

- **_Format JSON_**- automatically sets proper indentation and line feeds (not available for YAML)
- **_Wrap lines_** - brakes lines when they reach a frame border
- **_Search_** - locates the needed information, with additional options to narrow the search results even further:
  - Match case - enables a case sensitive search
  - Regex - uses [regular expressions](https://cloudmydc.com/) for the search conditions specification
- **_View Logs_** - opens a console to track your code execution

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/09-jps-editor-tools-bar.png)

</div>

3. The Import logs provide essential information for troubleshooting. If you face issues during the JPS packages creation, refer to this **Import > JPS > View Logs** tab and search for errors.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ImportEnvironment/10-import-logs.png)

</div>

:::tip Tip

On the platforms before the 5.9.7 release, you can access this JPS console in a separate browser tab by adding the **/console** suffix to your dashboard URL (must be logged in for authorization).

:::
If you face any issues while importing a JPS package, feel free to appeal for our technical experts’ assistance at [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).
