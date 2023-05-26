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
              language={'Python'}
              color={'blue'}
              href={'/ton-year'}
            >
              A Python implementation of two widely referenced ton-year
              accounting methods.
            </Card>
            <Card
              name={'CMIP6-downscaling'}
              language={'Python'}
              color={'blue'}
              href={'https://cmip6-downscaling.readthedocs.io/'}
            >
              Pipelines and utilities for performing statistical climate
              downscaling on CMIP6 data.
            </Card>
            <Card
              name={'Charts'}
              language={'JavaScript'}
              color={'yellow'}
              href={'charts'}
            >
              Library for creating responsive, reactive, themeable charts.
            </Card>
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

export default Index
