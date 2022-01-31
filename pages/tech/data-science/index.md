import Section from '../../../components/section'

# Data Science Overview

Our data science toolset is built on top of the open source Scientific Python ecosystem. We make extensive use of open source frameworks such as the [Pangeo Project](https://pangeo.io/) and open source cloud infrastructure such as [Kubernetes](https://kubernetes.io/).

## Core projects

We maintain a few core projects that help tie together CarbonPlan's data science work.

1. [`carbonplan-python`](https://github.com/carbonplan/carbonplan-python): A lightweight namespace package for Python utilities and subprojects
1. [`carbonplan-data`](https://github.com/carbonplan/data): Cross-org data catalogs and utilities
1. [`carbonplan-styles`](https://github.com/carbonplan/styles): Plotting styles for Altair and Matplotlib

All of these projects can be installed from [PyPI](https://pypi.org/search/?q=carbonplan):

```
pip install "carbonplan[data,styles]"
```

## Guides

- [Contribution Guid](data-science/contributing)
- [Style Guide](data-science/style)
- [Testing Guide](data-science/testing)
- [Python Environments Guide](data-science/environments)

export default ({ children }) => (
  <Section name='data-science'>{children}</Section>
)
