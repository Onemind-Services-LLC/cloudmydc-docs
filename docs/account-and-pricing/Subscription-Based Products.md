---
title: Subscription-based products
slug: subscription-based-products
sidebar_position: 7
---

_This feature availability depends on the particular hosting provider’s settings._

The platform can offer some products based on the subscription model. The flow is standard to the modern subscription services implementations – a client is charged once and gets a designated product for a specified period. The solution gives you a fix-priced alternative to the default [usage-based model](/docs/account-and-pricing/pricing-model-overview). Let’s see how it works.

## Purchasing Subscription

1. All products that are available for the user are displayed in the dedicated **_Subscription Plans_** tab of the [Marketplace](/docs/deployment-tools/cloud-scripting-&-jps/marketplace).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/01-marketplace-subscription-plans.png)

</div>

Hover over the required package from the list and click **Install**.

2. Within the opened window, you can see all the configured service plans for the product (multiple options can be available).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/02-selecting-subscription-plan.png)

</div>

Choose the required plan and click **Buy**.

3. In the pop-up, specify the following data:

- **Billing Period** – choose the preferred period and pricing option from the list
- **Quantity** – set a total number of instances included in the subscription
- **Auto Pay** – enable automatic subscription renewal after the initial period

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/03-buying-subscription-plan.png)

</div>

:::danger Note

Although subscription environments are bought separately, they will still be stopped in case of [account deactivation](/docs/Account&Pricing/Account%20Statuses).

:::

At the bottom of the frame, you can see the total sum of the configured subscription.

4. An invoice will be generated immediately after clicking the **Subscribe & Pay** button.

After that, your subscription will be added to the dedicated account section, where you can [manage all your subscriptions](/docs/Account&Pricing/Subscription-Based%20Products#managing-subscriptions).

:::tip Tip

Within the initial Marketplace window, the **Buy** button will be replaced with the **Install** one, allowing you immediately install the obtained package (just like any standard solution).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/04-successfully-purchaced-subscription-plan.png)

</div>

Later, once all the available installations are deployed, the button will change to the **Upgrade** one.

:::

## Managing Subscriptions

All the **Subscriptions** are added to the dedicated section in the account settings. Initially, all the new entries are in the _Incomplete_ status, which will be updated as soon as the appropriate invoice is fulfilled (or expires). Here, you can view all the subscription details, buy new packages, install (uninstall) corresponding instances, and view invoices.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/05-subscriptions-section.png)

</div>

The subscription table provides the following information:

- **Name** – shows the product and tariff plan name (expand to see the list of installations)
- **Usage** – displays the installed to the total number of subscription instances
- **Status** – provides the subscription status
  - _Incomplete_ – complete the invoice to start using the subscription
  - _Active_ - the subscription is ready for work (the last invoice is in the “paid” status)
  - _Unpaid_ - the last invoice still needs to be paid
- **Canceled** - you’ve canceled the subscription
- **Payment** – shows the information on the due or next payment (you can hover over and click **Pay** to complete the due invoice)
- **Cost** – provides subscription price/period
- **Auto** Pay – displays whether the auto-payment feature is enabled for the subscription
- **Created** – shows the creation date (hover over to see additional info on when the subscription was activated and the billing period)

1. Let’s go through the available functionality and specifics:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/06-subscriptions-tools-panel.png)

</div>

The buttons on the tools panel allow to:

- **Buy** [new subscriptions](/docs/Account&Pricing/Subscription-Based%20Products#purchasing-subscription), which will redirect to the appropriate Marketplace section (as described in the previous section).
- **Install** packages for the existing subscriptions.
- **Edit** a subscription to change installation quantity and change the Auto Pay option.
- **Refresh** information in the list.

  1.1. The installation window is similar to a standard package. Provide all the required parameters and click the **Install** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/07-subscription-item-installation.png)

</div>

:::tip Note

Products installed through subscriptions may have some restrictions due to the fixed pricing nature (e.g., topology adjustment, environment cloning, and removal).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/08-subscription-item-restricted-functionality.png)

</div>

:::

The product will be automatically created in a minute.

1.2. The **Edit** subscription option allows updating the number of installations for the existing subscriptions. The price per installation is calculated according to the remaining billing period.

- Upon _upgrade_ (increasing number of installations), the platform will automatically generate an additional “_update quantity_” invoice.
- In case of a downgrade\* (no less than the existing number of instances), the platform will generate a refund invoice, and the account’s balance will be recharged.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/09-edit-subscription-dialog.png)

</div>

Additionally, you can turn the **Auto Pay** option on/off.

:::tip Tip

The Edit button will be replaced with the **Discard Changes** one till the appropriate invoice is fulfilled.

::: 2. Hover over the subscription to see the **Install** option (as described in the previous step) and a drop-down menu with additional options:

- **Invoices** – switches to the Invoices tab, filtered by the current subscription
- **Edit Subscription** – opens the Edit Subscriptions dialog (as described in the previous step)
- **Enable/Disable Auto Pay** – changes the Auto Pay option state for the current subscription
- **Cancel (Don’t Cancel)** – terminates the subscription (or cancels termination)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/10-subscription-product-menu.png)

</div>

2.1. Upon canceling the subscription, you can still use it till the end of the paid period. During this time, you can choose **_Don’t Cancel_** from the same menu, but afterward, your subscription will be removed from the list.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/11-cancel-subscription-confirmation.png)

</div>

3. Hover over the installation within your subscription to access the following actions:

- **_Switch Subscription_** - allows moving installations between subscription plans <u>within the same product</u>
- **_Delete_** – removes selected installation from the account

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/12-subscription-item-menu.png)

</div>

3.1. The availability of the **Switch Subscription** functionality depends on the hosting provider configurations. If available, you can move your installation as follows:

- **Current Subscription** is selected automatically based on the installation for which the option was clicked.
- **New Subscription** drop-down allows selecting the existing subscription (or buying a new one) within the same product
- **Passphrase** is a confirmation code to perform the operation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/13-switch-subscription-dialog.png)

</div>

3.2. When deleting the installation, you will be asked for confirmation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/14-delete-subscription-item-confirmation.png)

</div>

4. The **Invoices** tab allows reviewing all the subscription-related payments. Filters by subscription, status, and number (ID) can help you locate the invoices needed.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/15-subscription-invoices.png)

</div>

If you have open invoices, you can **Pay** them directly from this panel.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Subscription-BasedProducts/16-pay-subscription-invoice.png)

</div>

Now, you know all the needed information on how to work with subscriptions and should be ready to start using the feature on your own.
