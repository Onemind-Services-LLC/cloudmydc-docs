---
title: Migration between regions
slug: migration-between-regions
sidebar_position: 2
---

## Environment Migration between Regions

Within the confines of the multiple **[environment regions](/docs/EnvironmentManagement/Environment%20Regions/Choosing%20a%20Region)** approach, the initially chosen location of the project can be easily changed using the migration option (obviously, if you have an access to several environment regions). It represents an extremely powerful tool, that can help you to benefit in both cost and productivity - as an example, you can choose cheaper hardware for the development/testing stages and subsequently migrate your production-ready application to the hardware with the best parameters, just before the release.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/01-environment-migration-between-regions.gif)

</div>

:::tip Note

Availability of the migration option, as well as its availability for each particular environment region, depends on your hosting provider’s settings.

:::

So, in order to migrate the existing environment to another region, perform one of the following:

- click on the **Change environment topology** button and choose the **_Migrate_** option within the regions' list above

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/02-environment-migrate-wizard.png)

</div>

- select the **Settings** button next to the desired environment and switch to the **_Migration_** menu option

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/03-environment-settings.png)

</div>

In both cases, you’ll see the same frame opened with a **Current region** of the chosen environment stated and an option for choosing the **Target region**, i.e. the hardware it should be migrated to.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/04-environment-migration-settings.png)

</div>

:::tip Note

Pricing policy in different environment regions can vary based on their parameters and is applied automatically after the relocation is done, thus it’s recommended to get acquainted with the appropriate costs in advance - the actual information can be discovered using the corresponding link, provided within the tip under the _Target region_ selector.

:::

Just lower down the tab the **_Live migration_** section is placed, either with the special switcher shown or providing some additional info, depending on the chosen target region. Here you can define which migration type (among the two provided ones) should be used:

- **[live migration](/docs/EnvironmentManagement/Environment%20Regions/Migration%20between%20Regions#live-migration)** - available only between the environment regions, marked with the special LM label within the list (usually, only for regions within the same datacenter)
- **[offline migration](/docs/EnvironmentManagement/Environment%20Regions/Migration%20between%20Regions#offline-migration)** - can be used for any environment regions

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/05-select-target-region.png)

</div>

State all the necessary conditions and click on **Verify & Migrate** at the bottom of the section to initiate the relocation. Confirm your decision within the appeared pop-up frame.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/06-confirm-environment-migration.png)

</div>

Once the migration is completed, the appropriate information message will appear at the dashboard and the region label next to the environment will be changed. In addition, you’ll receive the notification email with the migration details (like its duration for every container and any changes that happened with their parameters due to this process).

And below we’ll consider both migration modes in more details.

## Live Migration

Within the **Target region** list you can see a special **_LM_** label shown next to particular regions - it is used to mark the **Live migration** option’s availability.

Upon selecting such a region as a target one, the Live migration switcher will appear beneath (in the enabled state by default).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/07-live-migration-switcher.png)

</div>

If choosing this type of migration, the environment relocation will be performed implicitly, i.e. without a restart of containers and any extra configurations needed, so your app’s users won’t face any interruptions.

:::tip Note

Although the benefits of live (online) migration are evident, keep in mind that it is not suitable for all cases. We strongly recommend that you avoid using containers live migration for:

- _environments/containers under high load - unexpected downtime with the “502 - environment stopped_” error (usually brief, under 10 seconds)
- _active database containers, [Big Data](https://en.wikipedia.org/wiki/Big_data)_ - possible corruption or loss of the currently processed data due to the nature of online migration and freezes of network connections/disk IO related operations during the migration process

:::
If the [offline mode](/docs/EnvironmentManagement/Environment%20Regions/Migration%20between%20Regions#offline-migration) is needed - just turn off the corresponding switcher.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/08-disable-live-migration.png)

</div>

In such a case, an environment with all of the containers in it will become unavailable for the whole relocation process and resume its normal work, after this operation completes, with no additional manual adjustments required.

## Offline Migration

When the live migration option is unavailable (due to moving an environment to another data center) or in case it was disabled manually, the offline mode is used. In contrast to the online one, during such a relocation, an environment will be shut down until the end of this process.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MigrationbetweenRegions/09-live-migration-not-available.png)

</div>

In addition, if this migration type is the only available one, some environment settings, like IP addresses of nodes and, optionally, the domain name assigned, will be changed. Thus, after the migration is completed, some manual configurations may be required to restore the normal operability of the moved application - all of the necessary information will be additionally sent to you via email.

Obviously, based on the above-mentioned pros and cons, live migration is a much more preferable option (if suitable for your use case).
