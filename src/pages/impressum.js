import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'

const ImpressumPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <Content>
      <h1>Impressum</h1>
      <p>
        Angaben gemäß § 5 TMG
        <br />
        Rebecca Wulff & Ronny Neefe
        <br /> Gustav-Heinemann-Ring 14
        <br /> 63128 Dietzenbach
      </p>
      <h3>Vertreten durch</h3>
      <ul>
        <li>Rebecca Wulff</li>
        <li>Ronny Neefe</li>
      </ul>
      <h3>Kontakt</h3>
      <p>
        <strong>Telefon: </strong>0176-23181219
        <br />
        <strong>E-Mail: </strong>mail@coronahilfe-finder.de
        <br />
      </p>
      <h2>Haftungsausschluss</h2>
      <h3>Haftung für Inhalte</h3>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1
        TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind
        wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </p>
      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist
        stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
        Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
        Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Links umgehend entfernen.
      </p>
    </Content>
  </Layout>
)

export default ImpressumPage
