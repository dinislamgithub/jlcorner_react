import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Theme']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Introduction',
    to: '/theme/java',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navs',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Navbars',
        to: '/base/navbars',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Switches',
        to: '/base/switches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tabs',
        to: '/base/tabs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Disabled',
    icon: 'cil-ban',
    badge: {
      color: 'secondary',
      text: 'NEW',
    },
    addLinkClass: 'c-disabled',
    'disabled': true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Labels']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label danger',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-danger'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label info',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-info'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Label warning',
    to: '',
    icon: {
      name: 'cil-star',
      className: 'text-warning'
    },
    label: true
  },
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  },



  // din start
  // LANGUAGE
  {
    _tag: 'CSidebarNavTitle',
    _children: ['LANGUAGE']
  },
  // FOR Java
  {
    _tag: 'CSidebarNavDropdown',
    name: 'JAVA',
    route: '/java',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'JavaIntroduction',     //any name can here...
        to: '/theme/java/javaintroduction',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page2',     
        to: '/theme/java/javapage2',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page3',     
        to: '/theme/java/javapage3',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page4',     
        to: '/theme/java/javapage4',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page5',     
        to: '/theme/java/javapage5',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page6',     
        to: '/theme/java/javapage6',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page7',     
        to: '/theme/java/javapage7',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page8',     
        to: '/theme/java/javapage8',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page9',     
        to: '/theme/java/javapage9',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page10',     
        to: '/theme/java/javapage10',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page11',     
        to: '/theme/java/javapage11',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page12',     
        to: '/theme/java/javapage12',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page13',     
        to: '/theme/java/javapage13',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page14',     
        to: '/theme/java/javapage14',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page15',     
        to: '/theme/java/javapage15',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page16',     
        to: '/theme/java/javapage16',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page17',     
        to: '/theme/java/javapage17',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page18',     
        to: '/theme/java/javapage18',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page19',     
        to: '/theme/java/javapage19',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page20',     
        to: '/theme/java/javapage20',
      }
    ]
  },

  //for php
  {
    _tag: 'CSidebarNavDropdown',
    name: 'PHP',
    route: '/php',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'PhpIntroduction',     //any name can here...
        to: '/theme/php/phpintroduction',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page2',     
        to: '/theme/php/phppage2',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page3',     
        to: '/theme/php/phppage3',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page4',     
        to: '/theme/php/phppage4',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page5',     
        to: '/theme/php/phppage5',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page6',     
        to: '/theme/php/phppage6',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page7',     
        to: '/theme/php/phppage7',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page8',     
        to: '/theme/php/phppage8',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page9',     
        to: '/theme/php/phppage9',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page10',     
        to: '/theme/php/phppage10',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page11',     
        to: '/theme/php/phppage11',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page12',     
        to: '/theme/php/phppage12',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page13',     
        to: '/theme/php/phppage13',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page14',     
        to: '/theme/php/phppage14',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page15',     
        to: '/theme/php/phppage15',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page16',     
        to: '/theme/php/phppage16',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page17',     
        to: '/theme/php/phppage17',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page18',     
        to: '/theme/php/phppage18',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page19',     
        to: '/theme/php/phppage19',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page20',     
        to: '/theme/php/phppage20',
      }
    ]
  },


  //for python
  {
    _tag: 'CSidebarNavDropdown',
    name: 'PYTHON',
    route: '/python',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Introduction',     //any name can here...
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page2',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page3',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page4',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page5',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page6',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page7',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page8',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page9',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page10',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page11',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page12',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page13',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page14',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page15',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page16',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page17',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page18',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page19',     
        to: '/theme/python',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page20',     
        to: '/theme/python',
      }
    ]
  },


  //for adroid
  {
    _tag: 'CSidebarNavDropdown',
    name: 'ANDROID',
    route: '/android',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Introduction',     //any name can here...
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page2',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page3',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page4',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page5',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page6',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page7',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page8',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page9',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page10',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page11',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page12',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page13',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page14',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page15',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page16',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page17',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page18',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page19',     
        to: '/theme/android',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page20',     
        to: '/theme/android',
      }
    ]
  },

  //for cc++
  {
    _tag: 'CSidebarNavDropdown',
    name: 'C_CPLUS',
    route: '/cc++',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Introduction',     //any name can here...
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page2',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page3',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page4',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page5',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page6',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page7',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page8',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page9',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page10',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page11',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page12',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page13',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page14',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page15',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page16',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page17',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page18',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page19',     
        to: '/theme/cc++',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Page20',     
        to: '/theme/cc++',
      }
    ]
  },




  {
    _tag: 'CSidebarNavTitle',
    _children: ['DATABASE']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['SCRIPT & UI']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['LINUX ALL']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['VCS']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['FRAMEWORK']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['DS_ALGO']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['AWS_DEVOPS']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['REPORTING']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['WEB SERVER']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['UNIT TESTING']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['DOMAIN_HOSTING']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['BUILD TOOLS']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['MISC']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['ENGLISH']
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['ISLAMIC']
  },


]

export default _nav
