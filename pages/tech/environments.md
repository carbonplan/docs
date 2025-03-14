import Section from '../../components/section'

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

### When to use Docker

We recommend using Docker in the following scenarios:

- **Reproducible research**: Docker allows future-proofing your work by encapsulating all dependencies in a container. This ensures that your code will run in the same environment, regardless of changes to the underlying system.
- **Dependecy isolation**: Sometimes, you may need to use a specific version of a library or tool that is not compatabile with your local operating system (e.g. Linux vs. MacOs). Creating a Docker container with the required dependencies can help you avoid conflicts and ensure that your code runs smoothly and consistently across different operating systems.
- **Collaboration**: Our JupyterHub environment allows users to run code in a containerized environment such as containers. Some projects may benefit from having a Docker container that can be shared with other users. This allows others to run your code in the same environment, without having to install all of the dependencies on their local machine.

### Creating docker images using repo2docker

There are several approaches to creating Docker images. We typically use [`repo2docker`](https://repo2docker.readthedocs.io/en/latest/) to create Docker images from a GitHub repository and GitHub Actions to build and push the image to Quay.io. This approach allows us to automatically build and publish Docker images whenever we push changes to the repository. An example GitHub Action workflow for building and pushing a Docker image can be found in the [carbonplan/argo-docker repository](https://github.com/carbonplan/argo-docker)

export default ({ children }) => (

<Section name='environments'>{children}</Section>)
