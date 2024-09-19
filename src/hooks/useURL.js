
export const useURL = () => {
    return {
      ProductDetail: { name: 'ProductDetail', path: '/product/:slug'},
      CollectionsAll: { name: 'CollectionsAll', path: '/collections/all'},
      Payment: { name: 'Payment', path: '/checkout'},
      ManagerPayment: {name: 'ManagerPayment', path: '/checkout/:order_id'},
      Cart: { name: 'Cart', path: '/cart'},
      Profile: { name: 'Profile', path: '/account'},
      OrderDetails: { name: 'OrderDetails', path: '/account/order/:order_id'},
      Register: { name: 'Register', path: '/account/Register'},
      Login: { name: 'Login', path: '/account/login' },
      Reset: { name: 'Reset', path: '/account/reset-password/:uid/:token'},
      About: { name: 'About', path: '/pages/about'},
      Portfolio: { name: 'Portfolio', path: '/pages/portfolio'},
      Contact: { name: 'Contact', path: '/pages/contact'},
      Search: { name: 'Search', path: '/search'}
    };
  };
  
