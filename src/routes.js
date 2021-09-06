import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
// din start
const JavaIntroduction = React.lazy(() => import('./views/theme/java/javaintroduction/JavaIntroduction'));
const JavaPage2 = React.lazy(() => import('./views/theme/java/javapage2/JavaPage2'));
const JavaPage3 = React.lazy(() => import('./views/theme/java/javapage3/JavaPage3'));
const JavaPage4 = React.lazy(() => import('./views/theme/java/javapage4/JavaPage4'));
const JavaPage5 = React.lazy(() => import('./views/theme/java/javapage5/JavaPage5'));
const JavaPage6 = React.lazy(() => import('./views/theme/java/javapage6/JavaPage6'));
const JavaPage7 = React.lazy(() => import('./views/theme/java/javapage7/JavaPage7'));
const JavaPage8 = React.lazy(() => import('./views/theme/java/javapage8/JavaPage8'));
const JavaPage9 = React.lazy(() => import('./views/theme/java/javapage9/JavaPage9'));
const JavaPage10 = React.lazy(() => import('./views/theme/java/javapage10/JavaPage10'));
const JavaPage11 = React.lazy(() => import('./views/theme/java/javapage11/JavaPage11'));
const JavaPage12 = React.lazy(() => import('./views/theme/java/javapage12/JavaPage12'));
const JavaPage13 = React.lazy(() => import('./views/theme/java/javapage13/JavaPage13'));
const JavaPage14 = React.lazy(() => import('./views/theme/java/javapage14/JavaPage14'));
const JavaPage15 = React.lazy(() => import('./views/theme/java/javapage15/JavaPage15'));
const JavaPage16 = React.lazy(() => import('./views/theme/java/javapage16/JavaPage16'));
const JavaPage17 = React.lazy(() => import('./views/theme/java/javapage17/JavaPage17'));
const JavaPage18 = React.lazy(() => import('./views/theme/java/javapage18/JavaPage18'));
const JavaPage19 = React.lazy(() => import('./views/theme/java/javapage19/JavaPage19'));
const JavaPage20 = React.lazy(() => import('./views/theme/java/javapage20/JavaPage20'));

//PHP
const PhpIntroduction = React.lazy(() => import('./views/theme/php/phpintroduction/PhpIntroduction'));
const PhpPage2 = React.lazy(() => import('./views/theme/php/phppage2/PhpPage2'));
const PhpPage3 = React.lazy(() => import('./views/theme/php/phppage3/PhpPage3'));
const PhpPage4 = React.lazy(() => import('./views/theme/php/phppage4/PhpPage4'));
const PhpPage5 = React.lazy(() => import('./views/theme/php/phppage5/PhpPage5'));
const PhpPage6 = React.lazy(() => import('./views/theme/php/phppage6/PhpPage6'));
const PhpPage7 = React.lazy(() => import('./views/theme/php/phppage7/PhpPage7'));
const PhpPage8 = React.lazy(() => import('./views/theme/php/phppage8/PhpPage8'));
const PhpPage9 = React.lazy(() => import('./views/theme/php/phppage9/PhpPage9'));
const PhpPage10 = React.lazy(() => import('./views/theme/php/phppage10/PhpPage10'));
const PhpPage11 = React.lazy(() => import('./views/theme/php/phppage11/PhpPage11'));
const PhpPage12 = React.lazy(() => import('./views/theme/php/phppage12/PhpPage12'));
const PhpPage13 = React.lazy(() => import('./views/theme/php/phppage13/PhpPage13'));
const PhpPage14 = React.lazy(() => import('./views/theme/php/phppage14/PhpPage14'));
const PhpPage15 = React.lazy(() => import('./views/theme/php/phppage15/PhpPage15'));
const PhpPage16 = React.lazy(() => import('./views/theme/php/phppage16/PhpPage16'));
const PhpPage17 = React.lazy(() => import('./views/theme/php/phppage17/PhpPage17'));
const PhpPage18 = React.lazy(() => import('./views/theme/php/phppage18/PhpPage18'));
const PhpPage19 = React.lazy(() => import('./views/theme/php/phppage19/PhpPage19'));
const PhpPage20 = React.lazy(() => import('./views/theme/php/phppage20/PhpPage20')); 


//PYTHON
const PythonIntroduction = React.lazy(() => import('./views/theme/python/PythonIntroduction'));

//ANDROID
const AndroidIntroduction = React.lazy(() => import('./views/theme/android/AndroidIntroduction'));

//CC++
const CCplusIntroduction = React.lazy(() => import('./views/theme/cc++/CCplusIntroduction'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },

  // din start Java
  { path: '/theme/java/javaintroduction', name: 'JavaIntroduction', component: JavaIntroduction }, 
  { path: '/theme/java/javapage2', name: 'JavaPage2', component: JavaPage2 },
  { path: '/theme/java/javapage3', name: 'JavaPage3', component: JavaPage3 },
  { path: '/theme/java/javapage4', name: 'JavaPage4', component: JavaPage4 },
  { path: '/theme/java/javapage5', name: 'JavaPage5', component: JavaPage5 },
  { path: '/theme/java/javapage6', name: 'JavaPage6', component: JavaPage6 },
  { path: '/theme/java/javapage7', name: 'JavaPage7', component: JavaPage7 },
  { path: '/theme/java/javapage8', name: 'JavaPage8', component: JavaPage8 },
  { path: '/theme/java/javapage9', name: 'JavaPage9', component: JavaPage9 },
  { path: '/theme/java/javapage10', name: 'JavaPage10', component: JavaPage10 },
  { path: '/theme/java/javapage11', name: 'JavaPage11', component: JavaPage11 },
  { path: '/theme/java/javapage12', name: 'JavaPage12', component: JavaPage12 },
  { path: '/theme/java/javapage13', name: 'JavaPage13', component: JavaPage13 },
  { path: '/theme/java/javapage14', name: 'JavaPage14', component: JavaPage14 },
  { path: '/theme/java/javapage15', name: 'JavaPage15', component: JavaPage15 },
  { path: '/theme/java/javapage16', name: 'JavaPage16', component: JavaPage16 },
  { path: '/theme/java/javapage17', name: 'JavaPage17', component: JavaPage17 },
  { path: '/theme/java/javapage18', name: 'JavaPage18', component: JavaPage18 },
  { path: '/theme/java/javapage19', name: 'JavaPage19', component: JavaPage19 },
  { path: '/theme/java/javapage20', name: 'JavaPage20', component: JavaPage20 },

  //PHP
  { path: '/theme/php/phpintroduction', name: 'PhpIntroduction', component: PhpIntroduction },
  { path: '/theme/php/phppage2', name: 'PhpPage2', component: PhpPage2 },
  { path: '/theme/php/phppage3', name: 'PhpPage3', component: PhpPage3 },
  { path: '/theme/php/phppage4', name: 'PhpPage4', component: PhpPage4 },
  { path: '/theme/php/phppage5', name: 'PhpPage5', component: PhpPage5 },
  { path: '/theme/php/phppage6', name: 'PhpPage6', component: PhpPage6 },
  { path: '/theme/php/phppage7', name: 'PhpPage7', component: PhpPage7 },
  { path: '/theme/php/phppage8', name: 'PhpPage8', component: PhpPage8 },
  { path: '/theme/php/phppage9', name: 'PhpPage9', component: PhpPage9 },
  { path: '/theme/php/phppage10', name: 'PhpPage10', component: PhpPage10 },
  { path: '/theme/php/phppage11', name: 'PhpPage11', component: PhpPage11 },
  { path: '/theme/php/phppage12', name: 'PhpPage12', component: PhpPage12 },
  { path: '/theme/php/phppage13', name: 'PhpPage13', component: PhpPage13 },
  { path: '/theme/php/phppage14', name: 'PhpPage14', component: PhpPage14 },
  { path: '/theme/php/phppage15', name: 'PhpPage15', component: PhpPage15 },
  { path: '/theme/php/phppage16', name: 'PhpPage16', component: PhpPage16 },
  { path: '/theme/php/phppage17', name: 'PhpPage17', component: PhpPage17 },
  { path: '/theme/php/phppage18', name: 'PhpPage18', component: PhpPage18 },
  { path: '/theme/php/phppage19', name: 'PhpPage19', component: PhpPage19 },
  { path: '/theme/php/phppage20', name: 'PhpPage20', component: PhpPage20 },

  //PYTHON
  { path: '/theme/python', name: 'PythonIntroduction', component: PythonIntroduction },

  //ANDROID
  { path: '/theme/android', name: 'AndroidIntroduction', component: AndroidIntroduction },

  //CC++
  { path: '/theme/cc++', name: 'CCplusIntroduction', component: CCplusIntroduction },

];

export default routes;
