import React from 'react'

import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import visuals from './_visuals.yaml'

export default () => (
  <Layout
    crumbs={['openFDA','Visualizations']}
    title='openFDA › Data Visualizations'>
    <Hero
      label='Visualize'
      title='Data Visuals'
      description='These sophisticated, interactive visualizations demonstrate how openFDA APIs can be used for drawing graphs.'
    />
    <nav className='container marg-t-3 marg-b-3'>
      {
        visuals.map((visual, i) => (
        <div key={i} >
            <h2 className='clr-primary-darker'>{visual.title}</h2>
            {visual.description}
            <iframe src={visual.url} width={visual.width} height={visual.height} ></iframe>
        </div>))
      }
    </nav>
  </Layout>
)
