import Section from '../../../components/section'

# Environments

We use a variety of environments to support our data science work. These include:

- local environments
- docker environments

These environments are used to support a range of activities, including:

- local development
- continuous integration
- deployment
- reproducibility
- collaboration

Each environment has its own set of tools and configurations, and we use them in different ways depending on the task at hand. For example, we might use a local environment for development and testing, while using a docker environment for deployment and reproducibility.

## Local environments

We recommend using [mamba](https://mamba.readthedocs.io/en/latest/) for managing local environments. Mamba is a fast, robust, and cross-platform package manager that can be used to create and manage conda environments. It is a drop-in replacement for conda, and it is fully compatible with the conda ecosystem.

## Docker environments

We use [Docker](https://www.docker.com/) to create and manage containerized environments. These environments are used for deployment, testing, and reproducibility. We publish our docker images to [Quay.io](https://quay.io/organization/carbonplan).

export default ({ children }) => (

<Section name='environments'>{children}</Section>)
