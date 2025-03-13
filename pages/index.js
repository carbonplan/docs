import { Column, Layout, Link, Row } from '@carbonplan/components'
import { Box, Text } from 'theme-ui'
import Card from '../components/card'
import Heading from '../components/heading'

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
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 8, 9, 9]}>
          <Box variant='text.mono'>
            <Text>
              You can also check out our{' '}
              <Link href={'tech/data-science'}>data science</Link> contributor
              guide on how to contribute to our projects.
            </Text>
          </Box>
        </Column>
      </Row>
      <Row sx={{ mt: [4, 5, 6, 7] }}>
        <Column start={[1, 2, 3, 3]} width={[6, 8, 9, 9]}>
          <Row columns={[2, 3, 3, 3]}>
            <Card
              name={'Ton-year'}
              language={'Python'}
              color={'blue'}
              href={'https://ton-year.readthedocs.io/'}
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
              name={'ndpyramid'}
              language={'Python'}
              color={'blue'}
              href={'https://ndpyramid.readthedocs.io/'}
            >
              A small utility for generating ND array pyramids using Xarray and
              Zarr.
            </Card>
            <Card
              name={'offsets-db-data'}
              language={'Python'}
              color={'blue'}
              href={'https://offsets-db-data.readthedocs.io'}
            >
              a Python package with utilities for cleaning and processing data
              for OffsetsDB web tool.
            </Card>
            <Card
              name={'Charts'}
              language={'JavaScript'}
              color={'yellow'}
              href={'charts'}
            >
              Library for creating responsive, reactive, themeable charts.
            </Card>
            <Card
              name={'Maps'}
              language={'JavaScript'}
              color={'yellow'}
              href={'maps'}
            >
              Library for rendering raster data in a web map
            </Card>
          </Row>
        </Column>
      </Row>
    </Layout>
  )
}

export default Index
