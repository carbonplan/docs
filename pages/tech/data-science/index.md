import Section from '../../../components/section'

# Data Science Overview

Our data science toolset is built on top of the open source Scientific Python ecosystem. We make extensive use of open source frameworks such as the [Xarray](https://xarray.dev/) package for working with multi-dimensional arrays, and the [Dask](https://dask.org/) package for parallel computing. We also rely on a number of other open source packages for data analysis and visualization.

## Guides

- [Contribution Guide](data-science/contributing)
- [Style Guide](data-science/style)
- [Testing Guide](data-science/testing)
- [Python Environments Guide](data-science/environments)

export default ({ children }) => (

<Section name='data-science'>{children}</Section>)
