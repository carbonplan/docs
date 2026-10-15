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
              name={'SAI-downscaling'}
              language={'Python'}
              color={'blue'}
              href={'https://sai-downscaling.readthedocs.io/en/latest/'}
            >
              Downscaling pipeline for stratospheric aerosol injection climate
              scenarios
            </Card>
            <Card
              name={'zarr-layer'}
              language={'JavaScript'}
              color={'yellow'}
              href={'https://zarr-layer.demo.carbonplan.org/'}
            >
              Flexible Zarr rendering for maplibre and mapbox maps.
            </Card>
            <Card
              name={'topozarr'}
              language={'Python'}
              color={'blue'}
              href={'https://github.com/carbonplan/topozarr'}
            >
              Create multiscale Zarr stores for visualization.
            </Card>
            <Card
              name={'Open-Climate-Risk'}
              language={'Python'}
              color={'blue'}
              href={'https://open-climate-risk.readthedocs.io/'}
            >
              Pipeline for analyzing and visualizing building-level wildfire
              risk.
            </Card>
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
