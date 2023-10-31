---
sidebar_position: 1
---

## WordPress Dashboard Overview

CloudMyDc Application Platform for WordPress provides a dedicated dashboard designed and optimized specifically for WordPress hosting. It has a deep integration with the product, offering just enough diagnostic information and management options to perform all the most frequently required operations without cluttering the screen or overwhelming a customer.

Below, we’ll provide an overview of the:

- [WordPress Dashboard](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Dashboard%20Overview#wordpress-dashboard)
- [Account Settings](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Dashboard%20Overview#account-settings)

## WordPress Dashboard

1. The starting home page lists all the projects on the account with easily distinguishable statuses (_green – active_, _yellow_ – action in progress, _red_ - stopped).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/01-wordpress-user-dashboard.png)

</div>

2. Using the tools panel, you can:

- switch between the **table** and **tile views** (the latter one gives a quick preview of the projects statistics in a real time)
- sort the list **alphabetically** or **by creation date** (in ascending or descending order)
- filter results using the **Search** field

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/02-dashboard-tool-panel.png)

</div>

Additionally, at the top-right corner of the home page, you can see the **Create New Project** button. Learn more at the dedicated [WordPress Project Creation](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Installation) guide.

3. Each project has the following options available from the home page:

- Click the **name** to open a detailed project overview in the dedicated dashboard tab
- Click the **URL** to open your WordPress site in a new browser tab
- Click the **Datacenter Info** to view details on Vendor, Country, Region, etc.
- Expand the menu to get quick access to the **Stop** (**Start**), **Settings**, and **Delete** actions

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/03-project-actions.png)

</div>

4. Clicking on the particular project opens a dedicated tab with detailed information and management options for the project.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/04-project-management.png)

</div>

Learn more at the [WordPress Project Management](/docs/Wordpress%20as%20a%20Service/WordPress%20Dashboard/WordPress%20Project%20Management) guide.

## Account Settings

In the top-right corner of the dashboard, you can find a menu for managing your CloudMyDc Application Platform for WordPress account.

1. The first part is informational. It shows the account email address and balance (can be manually refreshed if needed).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/05-user-account-settings.png)

</div>

2. The **Your Account** option will navigate you to the same-named section with the data related to the whole account:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/06-your-account-settings.png)

</div>

2.1. On the **User Information** tab, you can personalize the account by providing details in the dedicated form. Here you can specify the following information:

- **First Name** of the account owner
- **Last Name** of the account owner
- **Email** of the account owner (uneditable)
- **Company** name for the account
- **Preferred Time zone** for doing business
- **Maintenance time** to perform support activities

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/07-account-user-information.png)

</div>

2.2. The **SSH Access Keys** tab allows the management of public and private SSH keys on the account. It also provides information on the connection to your account and projects via SSH.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/08-account-ssh-keys.png)

</div>

To add a new SSH key, click the appropriate button:

- **Add Public Key** - for gaining SSH access to your account and projects
- **Add Private Key** - for granting the platform access to the remote repositories with the corresponding public key

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/09-add-ssh-key.png)

</div>

The platform supports the following key types:

- ECDSA
- EdDSA
- RSA

In the linked documents, you can learn more about [generating SSH keys](/docs/Deployment%20Tools/SSH/Generate%20SSH%20Key) and [connecting via SSH Gate](/docs/Deployment%20Tools/SSH/SSH%20Access/SSH%20Gate).

2.3. On the **Payment Methods** tab, you can view and manage your payment methods.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/10-add-payment-method.png)

</div>

:::danger Notes

- Only one payment method can be set as default. The platform will automatically use it for auto pay operations (if enabled).
- The default method cannot be removed. In order to delete, select (add) another one as default.

:::
2.4. The **Invoices** tab tracks all the generated invoices on your account.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/11-account-invoices.png)

</div>

2.5. The **Subscriptions** section shows all subscriptions on the account.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/12-account-subscriptions.png)

</div>

Use the drop-down menu at the bottom of each subscription to manage it:

- **Edit Subscription** - opens the Edit Subscription dialog to change websites _Quantity_. The price per installation is calculated according to the remaining billing period.
  - _Upon upgrade_ (increasing number of installations), the platform will automatically generate an additional “update quantity” invoice.
  - _In case of a downgrade_ (no less than the number of installed websites), the platform will generate a refund invoice, and the account’s balance will be recharged.
- **Disable/Enable Auto Pay** - changes the Auto Pay option state for the selected subscription
- **Cancel Subscription** - terminates the subscription

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/13-edit-subscription.png)

</div>

3. The **System Settings** option will navigate you to the section with data related to projects management:

- _SSL Certificates_
- _Git Configuration_
- _Backup Storage_

  3.1. The **SSL Certificates** tab manages SSL certificates on the account. It automatically lists all the Let’s Encrypt certificates issued for your projects and allows manually adding [custom SSL certificates](/docs/ApplicationSetting/SSL/Custom%20SSL) with the **Add SSL** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/14-settings-ssl-certificates.png)

</div>

The **Bind SSL** sub-tab allows binding and unbinding custom SSL to/from the required projects (you need to add custom domain first).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/15-bind-ssl-certificate.png)

</div>

3.2. The **Git Configuration** tab lists all the repositories added to the account.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/16-settings-git-configuration.png)

</div>

Click the **Add Repo** button and provide the necessary information in the opened window to add a new repository:

- **Name** – a custom name for the application
- **URL** – the appropriate URL to the repository
- **Branch** – the required branch of the repo
- **Use Authentication** – tick to provide credentials (Login with either Token or SSH key)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/17-add-git-repository.png)

</div>

3.3. The **Backup Storage** tab shows the list of all the storage instances created to keep backups for your WordPress projects.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/18-settings-backup-storage.png)

</div>

In order to add a new storage, click the **Add Backup** button and provide the following data:

- tick the preferred backup storage option to select it
- if needed, enable annual and auto pay options
- set the number of storage nodes
- provide display name and domain
- choose required region (if available)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/19-add-backup-storage.png)

</div>

Click **Add** when ready. Your new storage product will be created in a few minutes. Learn more about the [backup and restore process](/docs/Wordpress%20as%20a%20Service/WordPress%20Backups).

4. The Language list allows changing the dashboard localization to the preferred language. The availability and exact options depend on the service hosting provider configurations.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WordPressDashboardOverview/20-language-and-dark-mode.png)

</div>

Use the **Dark Mode** toggle to switch between dashboard’s light and dark themes.

5.Next, you can see the list of useful links for your platform:

- Help Center
- Terms Of Use
- Privacy Policy

6. The last **Log Out** option will end your current session with the CloudMyDc Application Platform for WordPress.

You’ll need to log in again to continue your work with the dashboard.
