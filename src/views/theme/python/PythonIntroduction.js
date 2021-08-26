import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const PythonIntroduction = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          Headings
          <DocsLink href="https://coreui.io/docs/content/typography/"/>
        </CCardHeader>
        <CCardBody>
          <p>Python Inroduction... </p>
          <table className="table">
            <thead>
            <tr>
              <th>Heading</th>
              <th>Example</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
              </td>
              <td><span className="h1">h1. Bootstrap heading</span></td>
            </tr>

            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
              </td>
              <td><span className="h2">h2. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
              </td>
              <td><span className="h3">h3. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
              </td>
              <td><span className="h4">h4. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
              </td>
              <td><span className="h5">h5. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p><code className="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
              </td>
              <td><span className="h6">h6. Bootstrap heading</span></td>
            </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>      
    </>
  )
}

export default PythonIntroduction
