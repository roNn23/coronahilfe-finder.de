import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'

const DatenschutzPage = () => (
  <Layout>
    <SEO title="Datenschutz" />
    <Content>
      <h1>Datenschutzerklärung</h1>
      <p>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren
        Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt
        dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht
        an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der
        Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
        durch Dritte ist nicht möglich.Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten
        durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird
        hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
      </p>
      <h2>Datenschutzerklärung für die Nutzung von Google Analytics</h2>
      <p>
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Inc., 1600
        Amphitheatre Parkway Mountain View, CA 94043, USA. Google Analytics verwendet so genannte „Cookies“. Das sind
        Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie
        ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel
        an einen Server von Google in den USA übertragen und dort gespeichert. Mehr Informationen zum Umgang mit
        Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von
        Google: [https://support.google.com/analytics/answer/6004245?hl=de](https://support.google.com/analytics/answer/6004245?hl=de)
      </p>
      <h2>Browser Plugin</h2>
      <p>
        Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern;
        wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
        Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch den Cookie
        erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die
        Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-
        Plugin herunterladen und
        installieren: [https://tools.google.com/dlpage/gaoptout?hl=de](https://tools.google.com/dlpage/gaoptout?hl=de)
      </p>
    </Content>
  </Layout>
)

export default DatenschutzPage
