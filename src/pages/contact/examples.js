import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content" style={{width: '60vw', margin: '1em auto'}}>
              <h1></h1>
              <p>
                
              </p>
              <ul>
                <li>
                  <Link to="/contact">Контакт</Link>
                </li>
                <li>
                  <Link to="/contact/file-upload/">Контакт за слање прилога</Link>
                </li>
              </ul>

              
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
