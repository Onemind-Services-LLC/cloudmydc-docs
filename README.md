# TODO

page ~ found

# Search

yarn build
'''
docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/your/config.json | jq -r tostring)" algolia/docsearch-scraper
'''

# Icons

'''
https://www.flaticon.com/uicons/interface-icons
'''



<!-- Template -->
<div style={{
    display: 'grid',
    gridTemplateColumns: '0.15fr 1fr',
    gap: '10px'
}}>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
}}>

![Locale Dropdown](./img/WindowsRDAccess/01-windows-rdp-access.png)

</div>

<div>

All the Windows-based nodes at the platform provide the embedded **Remote Desktop Protocol** support, which allows you to connect to the virtual desktop of your Windows machine and perform any required server configurations through it.

In order to ensure the maximum convenience while using the Windows hosting services, our platform is equipped with the integrated RDP tool - **Guacamole**. It represents a clientless remote desktop gateway, which is run from within the web-browser by virtue of HTML5 and does not require any additional plugins or client software installed.

</div>

</div>



# Contribute to CloudMyDC Docs

Welcome to the [CloudMyDC docs](https://docs.cloudmydc.com/) repository. See the
[CloudMyDC software](https://github.com/Onemind-Services-LLC/cloudmydc-docs) repository if you have questions or
requests for the CloudMyDC platform.

## Make a Suggestion

You can suggest changes to the CloudMyDC docs in two ways:

1. [Open an issue](https://github.com/Onemind-Services-LLC/cloudmydc-docs/issues/new/choose).
2. Edit the docs in the way you see fit and open a pull request.

## Edit the Docs

To get started, [fork](https://github.com/Onemind-Services-LLC/cloudmydc-docs/fork) and clone the cloudmydc-docs repository.

Our repository doesn't allow you to make changes directly to the `master` branch. Create a working branch and make pull
requests from your fork to [Onemind-Services-LLC/cloudmydc-docs](https://github.com/Onemind-Services-LLC/cloudmydc-docs).

For most updates, you'll need to edit a file in `/docs`.

If a file is moved or renamed, you'll also need to edit the `sidebars.js` files for each version, and the list of
redirects in `docusaurus.config.js`. See [Moving or Renaming Docs](./moving-or-renaming-docs.md).

### Navigate the Repo

The file paths in the repo correspond to the URLs for pages on the docs website. The docs for the latest version of
CloudMyDC are located in `/docs`. Most index pages are found within the `/pages-for-subheaders` directory in `/docs`.
All images are in `/static/img` in the top level of the repo.

### Style & Formatting

The docs are written in [Markdown](https://www.markdownguide.org/getting-started/). We refer to the Microsoft
[style guide](https://learn.microsoft.com/en-us/style-guide/welcome/) and use standard American English.

Every docs page contain metadata in the first few lines:

```
---
title: Some Title
---
```

The `title` is rendered as the page's headline. The site renderer wraps the `title` value in `H1` tags, which are
equivalent to `#` in Markdown syntax. This means that all subsequent headers on the page should be second level
(`##`) or more.

## Run the Docs Website

The CloudMyDC Docs website is built with [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

You can run the site on your local machine, to preview how pages on your working branch will look live.

First, install Docusaurus 2:

1. If you haven't already, install [Node](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/getting-started/install).
2. Go into your local cloudmydc-docs folder.
3. The CloudMyDC Docs repository already contains a yarn.lock file, which contains the dependencies you need to build
   the website. Run `yarn` to install Docusaurus and associated dependencies.

### Start Site

```
yarn start
```

This command starts a local development server for Docusaurus 2, and opens up a browser window. Most changes are
reflected live without having to restart the server.

**Note:** The `yarn start` command won't include some important static site features. For example, switching between
languages from the site's dropdown menu is not available. If you need these features, use `yarn build`.

### Build Site

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Launch With Docker

You can also use [Docker](https://www.docker.com/) to launch the website.

The below command can be used to install the dependencies and run the site inside a container:

```
docker run --rm -it -v $PWD:$PWD -w $PWD -p 3000:3000 node:18 /bin/sh -c "yarn install && yarn start -h 0.0.0.0"
```

Subsequent executions will check for updated dependencies, if there are none, it will skip the updates and quickly start the server.
