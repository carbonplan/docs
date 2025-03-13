import Section from '../../components/section'

# Developer Docs

At CarbonPlan, we build projects using a wide varity of open source tools and technologies. We make extensive use of open source frameworks such as the [Xarray](https://xarray.dev/) package for working with multi-dimensional arrays, and the [Dask](https://dask.org/) package for parallel computing. We also rely on a number of other open source packages for data analysis and visualization.

This site provides documentation aimed at supporting our core software, data, and science development activities.

## Guides

- [Contribution Guide](/tech/contributing)
- [Style Guide](/tech/style)
- [Testing Guide](/tech/testing)
- [Python Environments Guide](/tech/environments)

export default ({ children }) => <Section name='intro'>{children}</Section>
