import Section from '../../components/section'

# Testing

## Continuous integration

Continuous integration (CI) is the practice of regularly merging, deploying, and testing software. We utilize multiple CI services:

- [GitHub Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com)
- [Pre-commit.ci](https://pre-commit.ci/)

Most of our projects are set up to run test suites automatically on every push and pull request to the repository. This helps us catch errors early and ensures that our code is always in a releasable state. A pull request will be considered "ready to merge" when you have an 'all green' status on all of the CI services that are enabled for the repository. Below is an example of an 'all green' status on a pull request:

![all green status](/all-green-build.png)

Note that each time you push new commits to GitHub, the CI services will trigger a new build. If the existing build is still running, it will be canceled and a new build will be started.

## Test-driven development

We encourage contributors to embrace [test-driven development (TDD) practices](https://en.wikipedia.org/wiki/Test-driven_development). This development style strongly encourages writing tests before writing code. In other words, a developer writes a test that fails, then writes the code to make the test pass. This approach helps ensure that the code is correct and that it meets the requirements of the test. For scenarios where one is dealing with additional use cases, it is often worth writing different tests for each use case. This helps ensure that the tests are comprehensive and maintainable.

Our test suites are written using the [pytest](https://docs.pytest.org/en/stable/) framework. Pytest is a powerful and flexible testing framework that makes it easy to write and run tests. It also provides a number of features that make it easy to write tests for complex scenarios.

## Writing tests

All tests should go in the `tests` subdirectory of the project. The test files should be named `test_*.py` and the test functions should be named `test_*`. This is a convention that is recognized by pytest and other testing frameworks.

## Running the test suite

To run the test suite, you can use the following command from the root of the cloned repository:

```
python -m pytest
```

Often you will want to run the test suite on a specific file or directory. You can do this by specifying the path to the file or directory as an argument to the `pytest` command:

```
python -m pytest path/to/test_file.py
```

export default ({ children }) => <Section name='testing'>{children}</Section>
