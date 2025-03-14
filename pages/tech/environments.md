import Section from '../../components/section'

# Computational Environments

## Overview

At CarbonPlan, we use different types of computational environments to support our data science work:

- **Local environments**: For day-to-day development
- **Docker containers**: For reproducibility and deployment

These environments support various activities across our workflow:

| Activity        | Local Environment   | Docker                   |
| --------------- | ------------------- | ------------------------ |
| Development     | ✅ Primary choice   | ⚠️ Can be slower         |
| Testing         | ✅ Quick iterations | ✅ CI integration        |
| Deployment      | ❌ Not recommended  | ✅ Best practice         |
| Reproducibility | ⚠️ Limited          | ✅ Excellent             |
| Collaboration   | ⚠️ Setup required   | ✅ Consistent experience |

## Local environments

We primarily use two tools for managing local environments, depending on project needs.

### Using Pixi

[Pixi](https://pixi.sh/latest/) is our recommended tool for managing local environments, especially for projects with complex geospatial dependencies.

#### Advantages of Pixi

- Faster dependency resolution than conda/mamba
- Simplified environment specification and isolation
- Compatibility with conda-forge packages (crucial for `GDAL`, `rasterio`, etc.)
- Deterministic builds with lockfiles

#### Getting Started with Pixi

Follow the [installation instructions](https://pixi.sh/latest/#installation) to set up Pixi:

```bash
# Install Pixi
curl -fsSL https://pixi.sh/install.sh | bash

# Initialize a new project
pixi init

# Add dependencies (including conda-forge packages)
pixi add numpy pandas xarray
pixi add -c conda-forge gdal rasterio

# Run commands within the environment
pixi run python my_script.py
```

### Alternative: Conda/Mamba

For projects that benefit from the broader conda ecosystem, you can use conda or its faster alternative, mamba.

## Docker environments

We use [Docker](https://www.docker.com/) to create and manage containerized environments. These environments are used for deployment, testing, and reproducibility. We publish our docker images to [Quay.io](https://quay.io/organization/carbonplan).

### When to use Docker

Docker is particularly valuable in these scenarios:

- **Reproducible research**: Docker allows future-proofing your work by encapsulating all dependencies in a container. This ensures that your code will run in the same environment, regardless of changes to the underlying system.
- **Dependecy isolation**: Sometimes, you may need to use a specific version of a library or tool that your code runs smoothly and consistently across different operating systems.
- **Cross-platform compatibility**: Works around OS-specific issues (Linux vs. macOS)
- **Collaboration**: Our JupyterHub environment allows users to run code in a containerized environment such as containers. Some projects may benefit from having a Docker container that can be shared with other users. This allows others to run your code in the same environment, without having to install all of the dependencies on their local machine.

### Creating docker images using repo2docker

We typically use [`repo2docker`](https://repo2docker.readthedocs.io/en/latest/) to create Docker images from GitHub repositories.

1. Setup: Create environment files in your repository:
   - `environment.yml` for conda dependencies
   - `requirements.txt` for pip dependencies
   - `apt.txt` for system dependencies
2. Building locally:

   ```bash
   python -m pip install jupyter-repo2docker
   repo2docker --no-run path/to/your/repo
   ```

3. Automated builds: We use GitHub Actions to build and push images to Quay.io when changes are pushed. This approach allows us to automatically build and publish Docker images whenever we push changes to the repository. An example GitHub Action workflow for building and pushing a Docker image can be found in the [carbonplan/argo-docker repository](https://github.com/carbonplan/argo-docker)

export default ({ children }) => (

<Section name='environments'>{children}</Section>)
