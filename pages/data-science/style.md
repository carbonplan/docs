import Section from '../../components/section'

# Python Style Guide

Python is the primary language used CarbonPlan for data science projects. This style guide describes the rules and frameworks we use for code formatting.

## Style

We mostly follow the standard Python style conventions from [PEP8](https://www.python.org/dev/peps/pep-0008/) for code, [Numpydoc](https://numpydoc.readthedocs.io/en/latest/format.html) for docstrings, and [PEP484](https://www.python.org/dev/peps/pep-0484/) for type hints. Rather than list the intricicies of each of these conventions, we instead provide an optinionated set of linter configurations that will help maintain style consistancy across all of our projects.

## Linters

We use a series of code linters to maintain consistent formatting across our projects. Most projects will also use [pre-commit](../misc/pre-commit) to coordinate linter regular execution of the linters. The linters are also regularly run as part of our continuous integration and [testing](testing) suite.

### Black

[Black](https://black.readthedocs.io/en/stable/index.html) is an opinionated PEP-compliant code formatter. We use Black's default settings with a few minor adjustments:

Example `pyproject.toml`:

```
[tool.black]
line-length = 100
skip-string-normalization = true
```

### Flake8

[Flake8](https://flake8.pycqa.org/en/latest/) provides additional code formatting sytle checks.

Example `setup.cfg`:

```
[flake8]
ignore = E203,E266,E501,W503,E722,E402,C901
max-line-length = 100
max-complexity = 18
select = B,C,E,F,W,T4,B9
```

### isort

[isort](https://pycqa.github.io/isort/) automatically sorts Python imports.

Example `setup.cfg`

```
[isort]
known_first_party=
known_third_party=
multi_line_output=3
include_trailing_comma=True
force_grid_wrap=0
combine_as_imports=True
line_length=100
```

export default ({ children }) => (
  <Section name='style-guide'>{children}</Section>
)
