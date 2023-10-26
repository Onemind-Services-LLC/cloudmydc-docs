---
sidebar_position: 3
---

On the very first login into the dashboard, the platform automatically starts a quick introduction guide. The tutorial includes information on the main functionality and features available for you and helps to deploy your first application. The whole process requires just a few minutes to complete and is an excellent basis to start working with the platform.

If needed, this tutorial can be manually run via the **Help > Tutorial** menu at any time:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WelcomeTutorial/01-start-paas-welcome-tutorial.png)

</div>

Let’s walk through all of the tutorial steps.

1. Guide starts with an introductory presentation. The first frame is named **The Benefits of PaaS**, which provides a list of the central features of the platform.

![Locale Dropdown](./img/WelcomeTutorial/02-tutorial-paas-benefits.png)

Hover over a particular point within the list to view an explanatory illustration. Click it to open the dedicated documentation page for even more details.

Hovering over any point reveals the corresponding illustration, while clicking on it redirects to the dedicated documentation page.

2. The second **Build Your Application Topology** slide shows how to build your application topology using the platform components. Refer to the [Concept & Terminology](/docs/PlatformOverview/Basics%20&%20Terminology) document for additional details.

![Locale Dropdown](./img/WelcomeTutorial/03-tutorial-build-application-topology.png)

3. The next **Tune Your Resource Consumption** frame demonstrates how to provide resources for the instances and how the estimated price is automatically calculated.

![Locale Dropdown](./img/WelcomeTutorial/04-tutorial-tune-resource-consumption.png)

The platform automatically provides Estimated cost for the currently configured topology based on the hourly, daily, and monthly basis (use the drop-down menu circled in the image above).

:::tip Notes

The maximal usage pricing is almost unreachable in practice (100% load on all nodes at all times), see the next step for more details.

:::

4. The last **Enjoy Pricing Advantages** slide helps to explain the efficiency of the platform [usage-based pricing](http://localhost:3000/docs/Account&Pricing/Pricing%20Model%20Overview) comparing to other cloud vendors' models.

![Locale Dropdown](./img/WelcomeTutorial/05-tutorial-paas-pricing-advantages.png)

5. Next, the presentation is closed and the topology wizard is automatically opened.

![Locale Dropdown](./img/WelcomeTutorial/06-tutorial-create-environment.png)

:::tip Tip

You can hide the current hint or completely abandon the tutorial with the appropriate icons (cross and crossed out circle respectively).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WelcomeTutorial/07-close-and-stop-tutorial.png)

</div>

:::

If needed, you can [set up your new environment](http://localhost:3000/docs/EnvironmentManagement/Setting%20Up%20Environment) using all of the parameters available via topology wizard. However, you don’t need any specific configurations for this tutorial, so we recommend to follow the hint and click **Create** straightaway.

6. Wait a minute for your environment to be created. Meanwhile, you can track the process state in the [Tasks](http://localhost:3000/docs/QuickStart/Dashboard%20Guide) panel.

![Locale Dropdown](./img/WelcomeTutorial/08-tutorial-tasks-panel.png)

7. Once the operation is completed, tutorial automatically navigates you to the [deployment manager](http://localhost:3000/docs/Deployment/Deployment%20Manager) section. Here, a button to deploy the default Hello World application will be highlighted. Click it to proceed.

![Locale Dropdown](./img/WelcomeTutorial/09-tutorial-deploy-default-application.png)

8. Within the opened [deploy frame](http://localhost:3000/docs/Deployment/Deployment%20Guide), select your just created Environment in the appropriate drop-down menu and click the **Deploy** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WelcomeTutorial/10-tutorial-confirm-application-deployment.png)

</div>

9. Wait a moment for the application to be deployed.

![Locale Dropdown](./img/WelcomeTutorial/11-tutorial-wait-for-deployment.png)

10. Great! Your first application is ready to work, click the highlighted **Open in Browser** button to view it in a separate browser tab.

![Locale Dropdown](./img/WelcomeTutorial/12-tutorial-open-application-in-browser.png)
