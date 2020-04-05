import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'

const UeberUnsPage = () => {
  return (
    <Layout>
      <SEO title="Über uns" />
      <Content>
        <h1>Über uns</h1>
        <p>
          Wir erleben gerade eine sehr intensive Zeit, wie wir sie so (zumindest in Europa) schon lange nicht mehr
          durchstehen mussten.
        </p>
        <p>
          Das Corona-Virus hält die Welt in Atem, aber wir spüren aber auch eine unglaubliche Welle an Solidarität.
          Überall sprießen Hilfsangebote aus dem Boden: Gemeinden, Schülerinnen und Schüler, Studierende oder Nachbarn
          schließen sich zusammen, um für Personen der Risikogruppe einkaufen zu gehen, Erledigungen zu machen oder
          einfach nur da zu sein, wenn Redebedarf besteht.
        </p>
        <p>
          Die meisten dieser Angebote sind spontan entstanden und schwer zu finden. Vor allem, wenn man sich um eine
          Person in Bielefeld sorgt, die Hilfe benötigt und selbst aber in München wohnt. Inspiriert durch den{' '}
          <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener noreferrer">
            #WirVsVirus Hackathons der Bundesregierung
          </a>{' '}
          hatte Ronny die Idee, eine Art &quot;Suchmaschine&quot; für Coronahilfe-Seiten zu bauen. Ziel der Seite soll
          es sein, Hilfeseiten für einen bestimmten Ort einfacher zu finden und so Hilfsgesuche und Hilfsangebote
          zusammenzubringen.
        </p>
        <p>
          Gemeinsam haben wir angefangen zu konzipieren und zu recherchieren. Gestartet mit etwa 50 Hilfeseiten war der
          erste Entwurf des Coronahilfe-Finders schnell fertig. Inzwischen sind deutschlandweit mehr als 200 Hilfeseite
          zu finden - Tendenz steigend. Kennt ihr eine Coronahilfe-Seite oder eine #supportlocal Aktion für/von
          Gastronomen und Gewerbetreibenden, die in unserer Liste stehen sollte?{' '}
          <a href="https://forms.gle/twyugJya2gfdEMDB6" target="_blank" rel="noopener noreferrer">
            Tragt sie einfach in das Formular ein
          </a>{' '}
          und wir fügen sie hinzu.
        </p>
        <p>
          Vielen Dank für eure Solidarität und bleibt gesund!{' '}
          <span role="img" aria-label="pray">
            🙏
          </span>
        </p>
        <p>Ronny und Rebecca</p>
      </Content>
    </Layout>
  )
}

export default UeberUnsPage
