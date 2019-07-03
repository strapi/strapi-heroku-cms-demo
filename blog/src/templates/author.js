import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

import "../styles/global.css"

const UserTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/Article_${article.id}`}>{article.title}</Link>
          </h2>

          <ReactMarkdown
            source={article.content.substring(0, 500).concat("...")}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
            className="indexArticle"
            escapeHtml={false}
          />

          <Link to={`/Article_${article.id}`}>Read more</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
    }
  }
`
