import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'
import PostalCodeForm from '../components/PostalCodeForm'

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  )

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} useTemplate={false} />
      <Content>
        <h1>Du brauchst Hilfe oder möchtest helfen?</h1>
        <p>Finde Hilfesuchende in deinem Umkreis oder Hilfsangebote in einer bestimmten Stadt!</p>
        <div className="mb-6">
          <PostalCodeForm />
        </div>
        <div className="mb-6">
          <h2>Worum geht&apos;s hier?</h2>
          <p>
            Kurz und knapp:{' '}
            <strong>Ziel dieser Seite ist es, möglichst alle Coronahilfen in Deutschland auffindbar zu machen.</strong>
          </p>
        </div>
        <div className="mb-6">
          <h2>Wir brauchen dich!</h2>
          <p>
            Kennst du eine Hilfeseite, die nicht in der Liste steht?{' '}
            <a href="https://forms.gle/twyugJya2gfdEMDB6" target="_blank" rel="noopener noreferrer">
              Trage sie hier ein!
            </a>
          </p>
          <p>
            Wir haben bereits angefangen Facebook-Gruppen, Webseiten oder Portale zusammenzutragen. Nun sind wir auf
            deine Mitarbeit angewiesen. <strong>Kennst du eine Seite, die in unserer Liste stehen sollte?</strong> Dann
            tragt sie bitte{' '}
            <a href="https://forms.gle/twyugJya2gfdEMDB6" target="_blank" rel="noopener noreferrer">
              hier
            </a>{' '}
            ein. Wir werden sie so schnell wie möglich prüfen und in die Liste aufnehmen.
          </p>
        </div>

        {/* <div className="boxed">
          <strong>Wollt ihr helfen, oder benötigt ihr/ein Mensch in eurem Umfeld Hilfe?</strong>
        </div>
        <p>Durchsucht die Liste und meldet euch bei den Verantwortlichen vor Ort.</p> */}
        {/* <h2>Für Helfer: Bitte beachten!</h2>
        <ul>
          <li>Haltet die empfohlenen Hygiene-Anforderungen ein.</li>
          <li>
            Helft maximal 2 bis 3 Haushalten, um das Risiko möglichst gering zu halten. Achtet dabei auf kontaktlose
            Übergabe von Einkäufen.
          </li>
          <li>
            Es ist momentan nicht überall erlaubt, haushaltsfremde Kinder zu betreuen. Möchtet ihr Eltern helfen, dann
            nur einem Haushalt in eurer direkten Nachbarschaft. Informiert euch vorher über rechtliche Einschränkungen.
          </li>
          <li>Bringt euch selbst nicht Gefahr.</li>
          <li>Ist eine Telefonnummer angegeben aber keine Öffnungszeiten, ruft bitte nur tagsüber an.</li>
          <li>
            Die meisten Angebote basieren auf freiwilliger Arbeit. D.h. ihr bekommt keine Entlohnung für euer Engagement
            - außer das unbezahlbare Gefühl, eine gute Tat vollbracht zu haben.
          </li>
          <li>Beachtet ansonsten auch die Vorgaben von den jeweiligen Organisatoren.</li>
        </ul> */}
        <h2>Weitere Informationen zu Covid-19</h2>
        <ul>
          <li>
            <a href="https://www.infektionsschutz.de/coronavirus/" target="_blank" rel="noopener noreferrer">
              Bundeszentrale für Gesundheitliche Aufklärung
            </a>
          </li>
          <li>
            <a
              href="https://www.bundesgesundheitsministerium.de/coronavirus.html/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bundesministerium für Gesundheit
            </a>
          </li>
        </ul>
      </Content>
    </Layout>
  )
}

export default IndexPage
