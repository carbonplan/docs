import { Layout, Row, Column } from '@carbonplan/components'
import Heading from '../components/heading'
import Card from '../components/card'

const Index = () => {
  return (
    <Layout>
      <Heading
        description={
          "Documentation for the software projects we're building. Work in progress. More projects will be listed here soon."
        }
      >
        Docs
      </Heading>
      <Row sx={{ mt: [6, 7, 8, 9] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 8, 9, 9]}>
          <Row columns={[2, 3, 3, 3]}>
            <Card
              name={'Ton-year'}
              language={'python'}
              color={'blue'}
              href={'/ton-year'}
            >
              A Python implementation of two widely referenced ton-year
              accounting methods.
            </Card>
            <Card
              name={'CMIP6-downscaling'}
              language={'python'}
              color={'blue'}
              href={'cmip6-downscaling'}
            >
              Pipelines and utilities for performing statistical climate
              downscaling on CMIP6 data.
            </Card>
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

export default Index
