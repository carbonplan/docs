import Section from '../../components/section'

# Contribution Guide

This page serves as a general contribution guide for CarbonPlan data science projects. Some projects within the organization may also provide customized contribution guides.

## Getting Started

If you're new to contributing to CarbonPlan projects, here are some resources to help you get started:

- Familiarize yourself with our [GitHub organization](https://github.com/carbonplan)
- Read our [Code of Conduct](https://github.com/carbonplan/.github/blob/main/CODE_OF_CONDUCT.md)
- Check out our [style guide](./style) to understand our coding standards

## Reporting Issues

We use GitHub Issues to track bugs and feature requests. When submitting an issue:

- Use clear, descriptive titles
- Provide detailed steps to reproduce bugs
- For feature requests, explain why the feature would be useful
- Include relevant information about your environment

## Development Workflow

### Setting Up Your Environment

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment (project-specific instructions will be in each repository's README)

### Branch Strategy

- Work on a feature branch named appropriately (e.g., `feature/add-new-filter` or `fix/resolve-data-loading-issue`)
- Keep your branch focused on a single issue or feature
- Reference our [GitHub workflow](./github) for more details on branches and pull requests

### Code Contributions

When contributing code:

- Follow our [style guide](./style) for code formatting
- Write [tests](./testing) for new functionality
- Update documentation to reflect your changes
- Use [numpydoc](https://numpydoc.readthedocs.io/en/latest/format.html) style for Python docstrings

### Documentation Contributions

Good documentation is as important as good code:

- Keep language clear and concise
- Update examples to reflect code changes
- Ensure documentation builds without errors
- Preview changes locally before submitting

### Submitting Changes

1. Commit your changes with descriptive messages
2. Push to your fork
3. Submit a pull request from your branch to the main repository
4. Address feedback during code review

## Code Review Process

All submissions go through a review process:

- A maintainer will review your PR
- Automated tests must pass
- Changes may be requested before merging
- Be responsive to questions and feedback

## Project Versioning

The choice of versioning scheme depends on the project and its goals. We use two versioning schemes depending on the project type:

- [Calendar Versioning (CalVer)](https://calver.org/)
  - The format is `YYYY.MM.DD` or `YYYY.MM.DD.N`
  - Used for: projects with frequent updates (e.g., [offsets-db-data](https://github.com/carbonplan/offsets-db-data))
  - When: release schedule is time-based rather than feature-based
- [Semantic Versioning (SemVer)](https://semver.org/)
  - The format is `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)
  - Used for: projects with a more stable release cycle (e.g., [cmip6-downscaling](https://github.com/carbonplan/cmip6-downscaling))
  - When: breaking changes need to be communicated clearly and new features are added in a backwards-compatible manner.

export default ({ children }) => (

<Section name='contributing'>{children}</Section>)
