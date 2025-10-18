# Pangolin Documentation

Welcome to the official documentation for [Pangolin](https://github.com/fosrl/pangolin), a modern reverse proxy and networking solution. This documentation site is hosted at [docs.pangolin.net](https://docs.pangolin.net) and provides comprehensive guides, API references, and resources for getting started with Pangolin.

## About This Documentation

This documentation covers everything you need to know about Pangolin, including:
- Installation and setup guides
- Configuration options
- API reference
- Self-hosting instructions
- Development and contribution guidelines

All contributions to improve this documentation are welcome! Feel free to submit issues or pull requests to help make these docs better for everyone.

## Development & Contributing

This documentation site is built using [Mintlify](https://mintlify.com). If you'd like to contribute to the documentation or run it locally for development, follow the instructions below.

### Local Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview your documentation changes locally:

```bash
npm i -g mint
```

Run the following command at the root of your documentation, where your `docs.json` is located:

```bash
mint dev
```

View your local preview at `http://localhost:3000`.

### Publishing Changes

Install our GitHub app from your [dashboard](https://dashboard.mintlify.com/settings/organization/github-app) to propagate changes from your repo to your deployment. Changes are deployed to production automatically after pushing to the default branch.

### Need Help?

#### Troubleshooting

- If your dev environment isn't running: Run `mint update` to ensure you have the most recent version of the CLI.
- If a page loads as a 404: Make sure you are running in a folder with a valid `docs.json`.

#### Resources
- [Mintlify documentation](https://mintlify.com/docs)
- [Mintlify community](https://mintlify.com/community)
- [Pangolin GitHub Repository](https://github.com/fosrl/pangolin)
