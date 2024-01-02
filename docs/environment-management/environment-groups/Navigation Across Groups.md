---
title: Navigation Across Groups
slug: navigation-across-groups
sidebar_position: 3
---

Organizing applications into [environment groups](/environment-management/environment-groups/overview) allows to make your working process much more comfortable. This is achieved through setting special **Tags**, which are used for environment filtering and are displayed within the same-named column in the main user dashboard screen.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/01.png)

</div>

You can switch and navigate between your environment groups with the following UI elements:

- [via the Tags column](/environment-management/environment-groups/navigation-across-groups#navigation-via-tags)
- [via the Env Groups menu](/environment-management/environment-groups/navigation-across-groups#navigation-via-env-groups-panel)

## Navigation via Tags

The **Tags** column lists all of the groups an environment belongs to - click on a particular tag in order to refer to the appropriate group.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/02.png)

</div>

The required filtering will be applied automatically, whilst the selected group label will be displayed as a nesting element in the **Env Groups** navigation panel at the top.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/03.png)

</div>

Herewith, the appropriate group name will be temporarily hidden within the **Tags** column (as you are inside already).

:::tip Note

In case the currently selected group contains further child items (i.e. [subgroups](/environment-management/environment-groups/group-management#add-subgroups)), their list can viewed at the chosen group’s [management menu](/environment-management/environment-groups/group-management) within the top navigation panel.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/04.png)

</div>

Just click on the string with such child group to open it.

:::

In order to cancel filtering and return back to the overall list of available environments, click on **Env Groups**.

## Navigation via Env Groups Panel

Upon expanding the main **Env Groups** menu at the top, you’ll be shown the list of all environment groups within your account, including the comprised [subgroups](/environment-management/environment-groups/group-management#add-subgroups) (if are any).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/05.png)

</div>

Clicking on a particular one will apply the corresponding filtering to your environment list.
Additionally, here you are provided with two predefined sorting options which are based on the following parameters:

- **Shared with Me** - select this option to access the list of environments [shared](/environment-management/share-environment) with your account

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/06.png)

</div>

:::tip Note
When hovering over **Shared with Me**, you’ll see the list of collaboration owners you belong to; choosing a particular record here will display the environments that were shared to you by this person.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/07.png)

</div>

And if selecting **Manage** at this submenu bottom, the **Account settings > [Shared with Me](/environment-management/share-environment)** tab will be opened.

:::

- **Region** - use this option to filter environments based on the list of [environment regions](/environment-management/environment-regions/choosing-a-region), available for your account

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NavigationAcrossGroups/08.png)

</div>

Now, when you know how to easily navigate between different environment groups, check some additional possibilities provided for [group management](/environment-management/environment-groups/group-management) at the platform dashboard.
