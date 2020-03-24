import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'
import AddressSearch from '../components/AddressSearch'
import Locations from '../components/Locations'

const IndexPage = () => {
  const [address, setAddress] = useState(null)
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

  const handleAddressFound = address => {
    setAddress(address)
  }

  return (
    <Layout>
      <SEO title={site.siteMetadata.title} useTemplate={false} />
      <Content>
        <h1>Du brauchst Hilfe oder möchtest helfen?</h1>
        <div className="mb-7">
          <AddressSearch onAddressFound={handleAddressFound} />
        </div>
        {address && <Locations lat={address.lat} lon={address.lon} />}
        <p>Hallo und schön, dass du hier bist!</p>
        <div className="boxed">
          <strong>Finde Hilfesuchende in deinem Umkreis oder Hilfsangebote in einer bestimmten Stadt!</strong> Kennst du
          eine Hilfeseite, die nicht in der Liste steht?{' '}
          <a href="https://forms.gle/twyugJya2gfdEMDB6">Trage sie hier ein!</a>
        </div>
        <p>
          Wir erleben gerade eine sehr intensive Zeit, wie wir sie so (zumindest in Europa) schon lange nicht mehr
          durchstehen mussten. Das Corona-Virus hält die Welt in Atem, wir spüren aber auch eine unglaubliche Welle an
          Solidarität. Überall sprießen Hilfsangebote aus dem Boden: Gemeinden, Schülerinnen und Schüler, Studierende
          oder Nachbarn schließen sich zusammen, um für Personen der Risikogruppe einkaufen zu gehen, Erledigungen zu
          machen oder einfach nur da zu sein, wenn Redebedarf besteht. Die meisten dieser Angebote sind spontan
          entstanden und schwer zu finden. Vor allem, wenn man sich um eine Person in Bielefeld sorgt, die Hilfe
          benötigt und selbst aber in München wohnt.
        </p>
        <div className="boxed">
          <strong>Ziel dieser Seite ist es, eine Übersicht über alle Hilfsangebote in Deutschland zu bekommen.</strong>
        </div>
        <p>
          Wir haben bereits angefangen, Facebook-Gruppen, Webseiten oder Portale zusammenzutragen. Nun sind wir auf eure
          Mitarbeit angewiesen. <strong>Kennt ihr eine Seite, die in dieser Liste stehen sollte?</strong> Dann tragt sie
          bitte <a href="https://forms.gle/twyugJya2gfdEMDB6">hier</a> ein. Wir werden sie so schnell wir möglich prüfen
          und in die Liste aufnehmen.
        </p>
        <div className="boxed">
          <strong>Wollt ihr helfen, oder benötigt ihr/ein Mensch in eurem Umfeld Hilfe?</strong>
        </div>
        <p>Durchsucht die Liste und meldet euch bei den Verantwortlichen vor Ort.</p>
        <h2>Für Helfer: Bitte beachten!</h2>
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
        </ul>
        <h2>Weitere Informationen zu Covid-19</h2>
        <ul>
          <li>
            <a href="https://www.infektionsschutz.de/coronavirus/">Bundeszentrale für Gesundheitliche Aufklärung</a>
          </li>
          <li>
            <a href="https://www.bundesgesundheitsministerium.de/coronavirus.html/">Bundesministerium für Gesundheit</a>
          </li>
        </ul>
      </Content>
    </Layout>
  )
}

export default IndexPage
