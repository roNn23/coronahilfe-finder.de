import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'
import NationalOffers from '../components/NationalOffers'

const NationalPage = () => {
  return (
    <Layout>
      <SEO title="Deutschlandweite Coronahilfen" />
      <Content>
        <h1>Deutschlandweite Coronahilfen</h1>
        <p>
          <strong>Hier findet ihr Angebote, die in ganz Deutschland verfügbar sind.</strong>
        </p>
        <p>
          Da sich gerade in diesen ungewissen Zeiten Depressionen häufen und es wegen Physical Distancing, Alleine sein
          oder Konflikten nötig sein kann Hilfe und Gesprächspartner von Außen anzunehmen, haben wir neben sozialen
          Hilfen wie Einkaufen oder Gassi gehen auch Angebote rund um mentale Gesundheit gelistet.
        </p>
        <NationalOffers className="mb-6" />
      </Content>
    </Layout>
  )
}

export default NationalPage
