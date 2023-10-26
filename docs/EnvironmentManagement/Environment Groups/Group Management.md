---
sidebar_position: 4
---

## Environment Groups Management: How to Assign, Edit & Remove

The guide below contains information on the basic management options the platform provides for operating with [environment groups](/docs/EnvironmentManagement/Environment%20Groups/Overview). Namely, we’ll get deeper insights on how to:

- [Assign Group to Environment](/docs/EnvironmentManagement/Environment%20Groups/Group%20Management#assign-group-to-environment)
- [Add Subgroup](/docs/EnvironmentManagement/Environment%20Groups/Group%20Management#add-subgroups)
- [Edit Group](/docs/EnvironmentManagement/Environment%20Groups/Group%20Management#edit-group)
- [Remove Group](/docs/EnvironmentManagement/Environment%20Groups/Group%20Management#remove-group)

## Assign Group to Environment

While working on a project, you may need to create more related environments and, obviously, to include them into the group the rest of application components already belongs to.

:::danger Note

You cannot add shared environments to your personal groups.

:::

In order to specify labels for your environment, hover over the **Tags** column and click the button that appears:

- **Add to Env Group** - in case no tags were assigned to an environment yet

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/01.png)

</div>

- **Edit Env Groups** - if some tags are already attached

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/02.png)

</div>

In the opened dialog box, you can define group(s) for this environment (through choosing them via the automatically fetched list of the existing ones), [create](/docs/EnvironmentManagement/Environment%20Groups/Group%20Creation) and assign new tags (just type in the desired name and press **Enter**) or detach the unrequired ones.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/03.png)

</div>

Upon clicking on **Apply**, all the specified tags will be instantly displayed within the **Tags** column for the corresponding environment.

:::tip Tip

- you can assign as many tags to a single environment as you need
- use slash separator to assign and/or create nested groups right via input field

:::

Also, if the process of environment creation is called from inside a particular environment group (i.e. when the corresponding tag is displayed within the Env Groups panel at the top), all newly created entities will be automatically included to this group.

## Add Subgroups

Leveraging subgroup allows to divide top-level environment groups into smaller partitions (e.g. to separate computing and data components of a single project or differentiate development stages).

Within the **Tags** dashboard column, subgroups are displayed in a view of path, where each child item is separated with a slash “/” from the preceding parent one.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/04.png)

</div>

Such nesting can include the unlimited number of levels and can be set in the following ways:

- right during new [group creation](/docs/EnvironmentManagement/Environment%20Groups/Group%20Creation), through either typing the full group path in the Name field (using slash as a separator) or choosing Parent Group within the appropriate list (so this new group will be included to the selected parent)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/05.png)

</div>

- while inside the group, through expanding the list of actions for it and clicking on **Add Child**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/06.png)

</div>

- via the common **_Environment Groups_** management frame (opened with **Env Groups > Manage**), by selecting string with the required group and clicking on the **Add > Add Child** option

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/07.png)

</div>

In the latter two cases, the **_Add Group_** frame will be opened, with the appropriate group being automatically set as a parent.

## Edit Group

It is possible to adjust any environment group at your account to make it matching new demands at any time. The appropriate option can be accessed in one of the following ways:

- switch to the required group, expand the action list for it and click on **Edit**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/08.png)

</div>

- go to the general group management frame (opened with **Env Groups > Manage**), select string with the appropriate group and choose **Edit** in the tools pane above.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/09.png)

</div>

Through both options, the **Edit Group** dialog box will be opened.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/10.png)

</div>

Here, you can adjust all the data you’ve initially specified during this group creation, i.e.:

- **Name** - type a new name for your group (color association can be changed as well)
- **Parent** Group - set or change nesting for the current group
- **Environments** - add or remove environments from the group

Click **Apply** to save the settings.

:::tip Note

When performing edits via the management Environment Groups dialog box, you need to Refresh the group list for the new settings to be instantly displayed in this frame.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/11.png)

</div>

:::

## Remove Group

When the previously created group is no longer needed, you can easily delete it from the dashboard.

:::tip Note

The group removal makes no impact on included environments (obviously, except of the corresponding tag detachment). In the same way, upon deleting all environments from a group, the corresponding tag will be still available at the dashboard for choosing.

:::

To remove a group, perform one of the following operations:

- navigate inside a group that is no longer needed, expand the list of actions for it within the top panel and click on **Remove**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/12.png)

</div>

or, go to **Env Groups > Manage**, select the unrequired group within the shown list and click the **Remove** button

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/13.png)

</div>

To proceed with group removal, confirm this action by selecting **Yes** in the appeared frame.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GroupManagement/14.png)

</div>

In such a way, you can implement all the essential environment group configurations and enhance their divisioning at your dashboard.
