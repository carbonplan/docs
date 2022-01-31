import Section from '../../../components/section'

# Testing

## Continuous integration

Continuous integration (CI) is the practice of regularly merging, deploying, and testing software. We utilize multiple CI services:

- [GitHub Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com)
- [Pre-commit.ci](https://pre-commit.ci/)

## Testing Python code

pytest

## CI services

- dependabot (and other services)

export default ({ children }) => <Section name='testing'>{children}</Section>
