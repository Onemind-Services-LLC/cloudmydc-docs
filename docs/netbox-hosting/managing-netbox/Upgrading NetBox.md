---
title: Upgrading NetBox
slug: upgrading-netbox
sidebar_position: 3
---

This guide outlines the steps and prerequisites necessary for upgrading NetBox, ensuring a seamless transition to the latest version.

## Prerequisites

Prior to initiating the upgrade, take the following actions to prepare:

1. **Plugin Version Update:**
If you have plugins installed, update their versions in the NetBox container's `plugin_requirements.txt` file located at `/etc/netbox/plugin_requirements.txt`. Pin each plugin to a specific version using the == operator to avoid compatibility issues. For instance, `netbox-secrets==1.8.5`. Confirm that the plugin versions are compatible with the NetBox version you intend to upgrade to.

2. **Local Requirements Update:**
Similarly, update the versions for any local dependencies in the `local_requirements.txt` file found at `/etc/netbox/local_requirements.txt`.

:::tip Note

Updates to the `plugin_requirements.txt` and `local_requirements.txt` files need only be made in the main NetBox container.

:::

## Upgrade Process

Follow these steps to upgrade your NetBox installation:

1. **Redeployment via Dashboard:**
Initiate the upgrade process by using the dashboard redeployment method. Comprehensive instructions can be found on the [here](/container/container-redeploy#update-container-via-dashboard).

2. **Version Consistency Across Containers:**
Make sure to redeploy all containers related to NetBox to the same version. This is crucial to maintain uniform functionality and prevent version mismatch issues.

By carefully following these prerequisites and upgrade steps, you can ensure a smooth upgrade to the latest NetBox version.
