import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="content center flex flex-col"style={{minHeight: '65vh'}}>
      <h1>Oopssss....</h1>
      <p>Тражена страница не може бити пронађена.</p>
      <span>
      Вратите се назад <Link to="/" > на почетну страницу </Link>
      </span>
      
    </div>
  </Layout>
)

export default NotFoundPage
