# Slack

This tutorial explains how to use **Data Integration Center** to send messages to a Slack channel using the Slack API.

## Prerequisites

* Slack account with appropriate permissions
* Chosen Slack channel

## Setup Slack

To send messages to Slack:

1. Install [Incoming Webhooks](https://slack.com/apps/A0F7XDUAZ-incoming-webhooks).
2. Configure it by choosing a channel e.g `coiote-integration`.
3. Copy Webhook URL.
   ![Slack App Settings](../images/slack-app-settings.webp)

## Create webhook

1. From the previous step, paste `Webhook URL` as url.
2. Set the Authorization to `No authorization`, as Slack treats the URL as a token itself.
3. As body template, set e.g:

    ```json
    {
      "text": "Created new device: $endpointName"
    }
    ```
   
    You can adjust the webhook according to your needs.

!!! Info

    For detailed instructions on how to create webhooks, see the [Webhook](../webhooks.md) and [Overview](../overview.md) chapters.

![Slack Configuration](../images/slack-configuration.webp)

## Follow chat

To verify if our webhook works, go to the `coiote-integration` channel.

![Slack Chat](../images/slack-chat.webp)
