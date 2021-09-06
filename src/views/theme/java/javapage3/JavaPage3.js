import React, { useState } from 'react' 
import {
  CCol,
  CNav,
  CNavItem,
  CNavLink,
  CRow,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CTabs,
  CCardHeader
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react' 


const JavaPage3 = () => {
  const [active, setActive] = useState(1)
  const lorem = 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'


  return (
    <>

      <CRow>
      <CCol xs="12" md="12" className="mb-12">
      <CTabs>
              <CNav variant="tabs">
                <CNavItem><CNavLink>Home</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu1</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu2</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu3</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu4</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu5</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu6</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu7</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu8</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu9</CNavLink></CNavItem>
                <CNavItem><CNavLink>Menu10</CNavLink></CNavItem>
              </CNav>

              <CTabContent>
                <CTabPane>{`Home. ${lorem}`}</CTabPane>
                <CTabPane>{`1. ${lorem}`}</CTabPane>
                <CTabPane>{`2. ${lorem}`}</CTabPane>
                <CTabPane>{`3. ${lorem}`}</CTabPane>
                <CTabPane>{`4. ${lorem}`}</CTabPane>
                <CTabPane>{`5. ${lorem}`}</CTabPane>
                <CTabPane>{`6. ${lorem}`}</CTabPane>
                <CTabPane>{`7. ${lorem}`}</CTabPane>
                <CTabPane>{`8. ${lorem}`}</CTabPane>
                <CTabPane>{`9. ${lorem}`}</CTabPane>
                <CTabPane>{`10. ${lorem}`}</CTabPane> 
              </CTabContent>
            </CTabs>
            
      </CCol>
    </CRow>

    </>
  )
}

export default JavaPage3
