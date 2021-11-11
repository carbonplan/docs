import Section from '../../components/section'

# Testing

## Continuous integration

Continuous integration (CI) is the practice of regularly merging, deploying, and testing software. We utilize multiple CI services:

- GitHub Actions
- Vercel
- [Pre-commit.ci](https://pre-commit.ci/)

- continuous integration
- {lint, unit, build, integration, deployment} testing
- dependabot (and other services)

export default ({ children }) => <Section name='testing'>{children}</Section>
