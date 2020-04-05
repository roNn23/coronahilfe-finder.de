import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Content from '../components/Content'

const MithelfenPage = () => {
  return (
    <Layout>
      <SEO title="Mithelfen" />
      <Content>
        <h1>Hilf uns!</h1>
        <p>
          Es ist schön zu sehen, dass Menschen in Nachbarschaften, Gemeinden oder Vereinen gerade zusammenhalten und
          solidarisch Hilfe anbieten. Gleichzeitig ist es erschreckend, dass gerade lokale, kleine Geschäfte und
          Gastronomen durch die Corona-Krise um ihre Existenz bangen müssen.
        </p>
        <p>
          Wir brauchen euch, um möglichst viele Seiten, die in Nachbarschaften Hilfe anbieten, einfacher findbar zu
          machen. Liefert dein Lieblingsitaliener nun auch oder kann man Gerichte vor Ort abholen? Ist dein Buchhändler
          oder Lieblingsladen um die Ecke erfinderisch geworden und bietet Video- oder Telefonberatung an und liefert
          seine Waren in einem bestimmten Umkreis aus? Betreibst oder kennst du eine Coronahilfe-Seite? Lass es uns
          wissen! Füll unser Formular aus und wir prüfen die Angaben schnellstmöglich und fügen sie unserer Liste hinzu!
        </p>
        <a
          href="https://forms.gle/twyugJya2gfdEMDB6"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mb-5"
        >
          Hier gehts zum Formular!
        </a>
        <h2>Weitere Ideen?</h2>
        <p>
          Wenn dir noch was einfällt kannst du gerne per <a href="mailto:mail@coronahilfe-finder.de">Mail</a> mit uns
          Kontakt aufnehmen!
        </p>
      </Content>
    </Layout>
  )
}

export default MithelfenPage
