import Section from '../../../components/section'

# Python Style Guide

Python is the primary language used CarbonPlan for data science projects. This style guide describes the rules and frameworks we use for code formatting.

## Style

We mostly follow the standard Python style conventions from [PEP8](https://www.python.org/dev/peps/pep-0008/) for code, [Numpydoc](https://numpydoc.readthedocs.io/en/latest/format.html) for docstrings, and [PEP484](https://www.python.org/dev/peps/pep-0484/) for type hints. Rather than list the intricicies of each of these conventions, we instead provide an optinionated set of linter configurations that will help maintain style consistancy across all of our projects.

## Linters

We use a series of code linters to maintain consistent formatting across our projects. Most projects will also use `pre-commit` to automate regular execution of the linters. The linters are also regularly run as part of our continuous integration and [testing](testing) suite.

### Ruff

[Ruff](https://docs.astral.sh/ruff) is a Python linter and code formatter which supports a wide range of linting rules, many of which are derived from the popular tools like [Flake8](https://flake8.pycqa.org/en/latest/) and [isort](https://pycqa.github.io/isort/), [pyupgrade](https://github.com/asottile/pyupgrade) and others. Ruff provides a formatter designed to be used as a drop-in replacement for [Black](https://black.readthedocs.io/en/stable/index.html) -- an opinionated PEP-compliant code formatter.

We use Ruff's default settings with a few minor adjustments:

Example `pyproject.toml`:

```ini
[tool.ruff]
    extend-include = ["*.ipynb"]
    line-length    = 100
    target-version = "py310"

    builtins = ["ellipsis"]
    # Exclude a variety of commonly ignored directories.
    exclude = [
        ".bzr",
        ".direnv",
        ".eggs",
        ".git",
        ".git-rewrite",
        ".hg",
        ".ipynb_checkpoints",
        ".mypy_cache",
        ".nox",
        ".pants.d",
        ".pyenv",
        ".pytest_cache",
        ".pytype",
        ".ruff_cache",
        ".svn",
        ".tox",
        ".venv",
        ".vscode",
        "__pypackages__",
        "_build",
        "buck-out",
        "build",
        "dist",
        "node_modules",
        "site-packages",
        "venv",
    ]
[tool.ruff.lint]
    ignore = [
        "E501", # Conflicts with ruff format
        "E721", # Comparing types instead of isinstance
        "E741", # Ambiguous variable names
    ]
    per-file-ignores = {}
    select = [
        # Pyflakes
        "F",
        # Pycodestyle
        "E",
        "W",
        # isort
        "I",
        # Pyupgrade
        "UP",
    ]

[tool.ruff.lint.mccabe]
    max-complexity = 18

[tool.ruff.lint.isort]
    combine-as-imports = true
    known-first-party  = []

[tool.ruff.format]
    docstring-code-format = true
    quote-style           = "single"

[tool.ruff.lint.pydocstyle]
    convention = "numpy"

[tool.ruff.lint.pyupgrade]
    # Preserve types, even if a file imports `from __future__ import annotations`.
    keep-runtime-typing = true
```

## Pre-commmit

[Pre-commit](https://pre-commit.com/) is a framework for managing and mainting [pre-commit hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) that run as part of a Git repository. We use pre-commit to execute a set of standard code formatters and sytle linters (described above).

### Installing the Pre-commit utility

Before using Pre-commit, a command line utility needs to be added to your development environment. Pre-commit can be [installed](https://pre-commit.com/#installation) using a variety of package managers including PyPI, Homebrew, and Conda.

```
python -m pip install pre-commit
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
    rev: v5.0.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-docstring-first
      - id: check-json
      - id: check-yaml
      - id: double-quote-string-fixer
      - id: debug-statements
      - id: mixed-line-ending

  - repo: https://github.com/astral-sh/ruff-pre-commit
    rev: 'v0.9.9'
    hooks:
      - id: ruff
        args: ['--fix']
      - id: ruff-format

  - repo: https://github.com/pre-commit/mirrors-prettier
    rev: v4.0.0-alpha.8
    hooks:
      - id: prettier
```

export default ({ children }) => (

<Section name='style-guide'>{children}</Section>)
