---
title: Collaboration user experience
slug: collaboration-user-experience
sidebar_position: 4
---

Once the [collaboration is established](/docs/Account&Pricing/Accounts%20Collaboration/Create%20Collaboration), its members can start working with shared environments. In this guide, we’ll go through all the peculiarities of the process.

1. The shared environments can be easily distinguished from the regular ones via the dedicated icon and owner tag.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/01-shared-environment.png)

</div>

2. You can click the owner name label in the **Tags** column to quickly filter shared environments by primary account.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/02-environments-filtered-by-owner.png)

</div>

3. At the **[Env Groups](/docs/environment-management/environment-groups/overview)** **> Shared with Me** tab, you can see the complete list of shared environments and groups.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/03-shared-environment-groups.png)

</div>

:::danger Note

You cannot add shared environments to your personal groups.

:::

Also, the whole groups' tree can be seen when managing environment groups.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/04-managing-environment-groups.png)

</div>

4. The management process for shared environments is the same as for regular ones. However, the primary account owner may restrict some of the options.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/05-restricted-action-for-shared-environment.png)

</div>

You can check the [role and list of allowed policies](/docs/Account&Pricing/Accounts%20Collaboration/Collaboration%20Roles%20Policies) for shared resources at the account **Settings > Shared with Me** section.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/06-shared-roles-and-policies.png)

</div>

:::tip Tip

You can check roles for the specific shared environment by going to the Settings > Collaboration section.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/07-environment-collaboration-settings.png)

</div>

By default, collaboration members can see only themselves and cannot manage rights. However, such a possibility can be shared by the environment owner through the role with the Collaboration policy.

:::

5. The **Tasks** manager keeps track of all the actions performed with the shared environments and provides a custom icon for operations initiated by other accounts. Hover over this icon to view the email of the corresponding collaboration member.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/08-collaboration-actions-in-tasks.png)

</div>

6. If provided with the ability to create environments, you’ll see the **_Environment Owner_** selection dialog after clicking the **New Environment** button at the top of the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/09-select-new-environment-owner.png)

</div>

Here, you can select an account and group to create your environment.

:::tip Tip

If you have permission to install packages from the [Marketplace](/docs/deployment-tools/cloud-scripting-&-jps/marketplace), the **_Owner_** field will be added to the installation window.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/10-marketplace-package-owner.png)

</div>

:::

The limitations of the selected owner are automatically applied to the topology wizard or installation window (for [imported](/docs/environment-management/environment-export-and-import/environment-import) and Marketplace packages).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CollaborationUserExperience/11-environment-owner-in-wizard.png)

</div>

:::danger Notes

- By default, collaboration members cannot see the pricing information, and only resource data is provided in the topology wizard (as it is shown in the image above). However, the environment owner can share this possibility through the Cost Estimation / Billing History policy.
- Collaborators receive email notifications about actions (load alerts, auto-scaling, password reset, etc.) they initiated but not about actions taken by other collaborators or an account owner.

:::

When creating on behalf of a different account, the topology wizard shows the appropriate environment owner at the bottom-left corner.
