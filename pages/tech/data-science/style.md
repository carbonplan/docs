import Section from '../../../components/section'

# Python Style Guide

Python is the primary language used CarbonPlan for data science projects. This style guide describes the rules and frameworks we use for code formatting.

## Style

We mostly follow the standard Python style conventions from [PEP8](https://www.python.org/dev/peps/pep-0008/) for code, [Numpydoc](https://numpydoc.readthedocs.io/en/latest/format.html) for docstrings, and [PEP484](https://www.python.org/dev/peps/pep-0484/) for type hints. Rather than list the intricicies of each of these conventions, we instead provide an optinionated set of linter configurations that will help maintain style consistancy across all of our projects.

## Linters

We use a series of code linters to maintain consistent formatting across our projects. Most projects will also use `pre-commit` to automate regular execution of the linters. The linters are also regularly run as part of our continuous integration and [testing](testing) suite.

### Black

[Black](https://black.readthedocs.io/en/stable/index.html) is an opinionated PEP-compliant code formatter. We use Black's default settings with a few minor adjustments:

Example `pyproject.toml`:

```ini
[tool.black]
line-length = 100
skip-string-normalization = true
```

### Flake8

[Flake8](https://flake8.pycqa.org/en/latest/) provides additional code formatting sytle checks.

Example `setup.cfg`:

```ini
[flake8]
ignore = E203,E266,E501,W503,E722,E402,C901
max-line-length = 100
max-complexity = 18
select = B,C,E,F,W,T4,B9
```

### isort

[isort](https://pycqa.github.io/isort/) automatically sorts Python imports.

Example `setup.cfg`

```ini
[isort]
known_first_party=
known_third_party=
multi_line_output=3
include_trailing_comma=True
force_grid_wrap=0
combine_as_imports=True
line_length=100
```

## Pre-commmit

[Pre-commit](https://pre-commit.com/) is a framework for managing and mainting [pre-commit hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) that run as part of a Git repository. We use pre-commit to execute a set of standard code formatters and sytle linters (described above).

### Installing the Pre-commit utility

Before using Pre-commit, a command line utility needs to be added to your development environment. Pre-commit can be [installed](https://pre-commit.com/#installation) using a variety of package managers including PyPI, Homebrew, and Conda.

```
pip install pre-commit
# or
conda install -c conda-forge pre-commit
# or
brew install pre-commit
```

### Installing the pre-commit hook in a repository

To enable the pre-commit hook in a Git repository, run:

```
pre-commit install
```

At this point, future commits to this Git repository will trigger the execution of the pre-commit script.

### Running the pre-commit script manually

It is often useful to run the pre-commit script during developemnt, even before you are ready to create a Git commit.

```
pre-commit run [--all-files]
```

The standard execution will only run pre-commit on modified files. Adding the `--all-files` option will run the pre-commit script on all files within the respository.

### Pre-commit configuration

The hooks included in the pre-commit script are defined in the `.pre-commit-config.yaml` file in each repository. Below is an example of a standard pre-commit configuration.

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v3.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-docstring-first
      - id: check-json
      - id: check-yaml
      - id: pretty-format-json
        args: ['--autofix', '--indent=2', '--no-sort-keys']

  - repo: https://github.com/ambv/black
    rev: 21.4b2
    hooks:
      - id: black
        args: ['--line-length', '100']

  - repo: https://gitlab.com/pycqa/flake8
    rev: 3.9.1
    hooks:
      - id: flake8

  - repo: https://github.com/asottile/seed-isort-config
    rev: v2.2.0
    hooks:
      - id: seed-isort-config
  - repo: https://github.com/pre-commit/mirrors-isort
    rev: v5.8.0
    hooks:
      - id: isort

  - repo: https://github.com/deathbeds/prenotebook
    rev: f5bdb72a400f1a56fe88109936c83aa12cc349fa
    hooks:
      - id: prenotebook
```

export default ({ children }) => (
  <Section name='style-guide'>{children}</Section>
)
