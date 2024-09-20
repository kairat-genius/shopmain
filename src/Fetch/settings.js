import Cookies from 'js-cookie';

const API_DOMAIN = 'https://topia.pp.ua';
const API_PREFIX = '/api/v1/';
const CONCATE = API_DOMAIN + API_PREFIX;

export const accessToken = Cookies.get('access');
// const CONCATE = API_PREFIX;
// API METHODS URLS
export const USER_REGISTER = CONCATE + 'registration/';
export const USER_LOGIN = CONCATE + 'account/login/';

export const USER_REFRESH_TOKEN = CONCATE + 'account/refresh/token/';

export const USER_RESET_PASSWORD = CONCATE + 'reset-password/';
export const USER_RESET_PASSWORD_CHEK = CONCATE + 'reset-password/check/';
export const USER_RESET_PASSWORD_CONFIRM = CONCATE + 'reset-password/confirm/';
export const USER_PROFILE_LIST_ORDERS = CONCATE + 'account/list/orders/';
export const USER_PROFILE_DETAIL_ORDER = (order_id) => CONCATE + `account/order/${order_id}`;
export const USER_PROFILE_DOWNLOAD_FILE = (order_id, product_id) => CONCATE + `account/download/file/${order_id}/${product_id}/`

// подписка

export const SUBSCRIPTION = CONCATE + 'subscription/';


export const MENEGER_ORDER_POST = CONCATE + 'account/create/manager-order/';
export const CHECKOUT_ORDER_GET = (order_id) => CONCATE + `account/checkout/${order_id}/`;


// продукты
export const PRODUCT_LIST_GET = CONCATE + 'GetProducts/';
export const PRODUCT_DETAIL = (slug) => 
    CONCATE + `GetProductDetail/${slug}/`;

export const PRODUCT_SIMILAR_POST = CONCATE + 'GetSimilarProducts/';


// Статика
export const PARTNER_GET = CONCATE + 'partner/';
export const CONTACT_GET = CONCATE + 'contact/';
export const FQA_GET = CONCATE + 'aboutUs/';
export const POPULAR_SERVICE_GET = CONCATE + 'popular-service/';


// Корзина

export const CAT_GET = CONCATE + 'account/my/shopping-cart/';
export const CAT_ADD_POST = CONCATE + 'account/add/shopping-cart/'
export const CAT_DELETE_POST = CONCATE + 'account/delete/shopping-cart/'
export const CAT_GET_COUNT = CONCATE + 'account/shopping-cart/products/count/'
