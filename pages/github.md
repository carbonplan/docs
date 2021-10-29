import Section from '../components/section'

# GitHub

[GitHub](https://github.com) is a hosted platform for distributed version control. Beyond version controll, GitHub provides a social platform where open science and open source software developers work together to solve a range of technical and scientific problems. At CarbonPlan, we make extensive use of GitHub to coordinate software development activities across [the organization](https://github.com/carbonplan) and to openly share tools, data, and other resources.

## Using GitHub

There are many tutorials (i.e. [here](https://lab.github.com/githubtraining/introduction-to-github) or [here](https://guides.github.com/activities/hello-world/)) that walk new users through the process of learning GitHub. Rather than repeat those tutorials, we briefly layout some of most central concepts utilized at CarbonPlan.

### Navigating the CarbonPlan Organization

GitHub Organizations are shared accounts that allow organizations, like CarbonPlan, collaborate on multiple projects at once. CarbonPlan's GitHub organization (https://github.com/carbonplan) is the central development location for all of our data-science and front-end projects. Important featurs at the organization level include:

- [Repositories](https://github.com/orgs/carbonplan/repositories): a listing of our projects (aka repositories)
- [People](https://github.com/orgs/carbonplan/people): a listing of members of the CarbonPlan GitHub organization and outside collaborators

### Issues

[Issues](https://docs.github.com/en/issues/tracking-your-work-with-issues) are an important tool for organizing projets. They allow us to track ideas, feature requests, and bug reports on individual projects and they support cross-project references allowing us to connet conversions across multiple projects.

### Pull Requests

[Pull Requests](https://docs.github.com/en/github/collaborating-with-pull-requests) propose changes to a project and provide an interface for discussing technical implementation details (often refered to as code review).

### Branches

In the Git version controll system, each repository can include multiple [branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell). Branches allow a project to have multiple development tracks open at the same time. Git (and GitHub) provide tooling for merging changes in from two branches after a period of development.

At CarbonPlan, we typically define the `main` branch as the main development track. Feature additions and bug fixes typically use descriptive branch names such as `feature/foo-support` or `fix/foo-bug`. [This tutorial](https://guides.github.com/introduction/flow/) does a great job explaining how branches fit into the overall Git flow.

### GitHub Actions

GitHub provides a continuous integration service called [GitHub Actions](https://github.com/features/actions). Most of CarbonPlan's GitHub repositories use GitHub Actions for either testing or deployment. See the [front-end](front-end/testing) or [data-science](/data-science/testing) testing sections for more details on configuring GitHub actions for various project types.

export default ({ children }) => <Section name='github'>{children}</Section>
