<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
import axios, { AxiosError, AxiosResponse } from "axios"; // để thực hiện một số HTTP đén API cụ thể , và đồng thời nó cấu hình interceptor để xử lý các lỗi phản hồi từ lỗi API
import { toast } from 'react-toastify';
import { router } from '../router/Routes';
import { PaginatedResponse } from "../models/pagination";
import { store } from '../api/store/configureStore';
const sleep = () => new Promise(resolve => setTimeout(resolve, 500))// tạo độ trễ tgian time out

axios.defaults.baseURL = import.meta.env.VITE_API_URL;// thiết lập URL gốc cho tất cả các yêu cầu AXiOS
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data; // hàm arrow function để trích xuất dữ liệu phản hồi của Axios

axios.interceptors.request.use(config => {
    const token = store.getState().account.user?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
})
 

axios.interceptors.response.use(async response => {
    if (import.meta.env.DEV) await sleep();
    const pagination = response.headers['pagination'];
    if (pagination){
        response.data = new PaginatedResponse(response.data, JSON.parse(pagination));
        return response;
    }
    return response
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;
    switch (status) {// xử lý lỗi: kiểm tra trạng Thái HTTP(status)
<<<<<<< HEAD
=======
=======
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from 'react-toastify';
import { router } from '../router/Routes';

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

axios.defaults.baseURL = 'http://localhost:5515/api/';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    await sleep();
    return response
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;
    switch (status) {
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
            toast.error(data.title || 'Unauthrised');
            break;
        case 403:
            toast.error('You are not allowed to do that');
            break;
        case 500:
            router.navigate('/server-error', {state: {error: data}})
            toast.error(data.title);
<<<<<<< HEAD
=======
=======
            toast.error(data.title);
            break;
        case 500:
            router.navigate('/server-error', {state: {error: data}})
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
// Đối tưởng chứa các phương thức để thực hiên các yêu cầu HTTP và để trích xuất dữ liệu từ các phản hồi
const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
    postForm: (url: string, data: FormData) => axios.post(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url: string, data: FormData) => axios.put(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody)
}

// Đối tượng này chứa các phương thức để lấy ds sản phẩm và chi tiết sản phẩm 
const Catalog = {
    list: (params: URLSearchParams) => requests.get('products', params),
    details: (id: number) => requests.get(`products/${id}`),
    fetchFilters: () => requests.get('products/filters')
}

// Đối tượng này chứa các phương thức đẻ gây ra các lỗi thử nghiệm khác nhau 
<<<<<<< HEAD
=======
=======
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
}

const Catalog = {
    list: () => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
const TestErrors = {
    get400Error: () => requests.get('buggy/bad-request'),
    get401Error: () => requests.get('buggy/unauthorised'),
    get404Error: () => requests.get('buggy/not-found'),
    get500Error: () => requests.get('buggy/server-error'),
    getValidationError: () => requests.get('buggy/validation-error')
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`, {}),
    removeItem: (productId: number, quantity = 1) => requests.del(`basket?productId=${productId}&quantity=${quantity}`)
}
const Account = {
    // tạo mk tài khoản bất kỳ , dùng biến value để lưu tk mk
    login: (values: any) => requests.post('account/login', values),
    register: (values: any) => requests.post('account/register', values),
    //có thể là một đối tượng chứa thông tin xác thực để xác định người dùng hiện tại.
    currentUser: () => requests.get('account/currentUser'),
    fetchAddress: () => requests.get('account/savedAddress')


    
}
const Orders = {
    list: () => requests.get('orders'),
    fetch: (id: number) => requests.get(`orders/${id}`),
    create: (values: any) => requests.post('orders', values),

}
const Payments = {
    createPaymentIntent: () => requests.post('payments', {})
}
function createFormData(item: any) {
    const formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData;
}
<<<<<<< HEAD
const User = {
=======
const Admin = {
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
    createProduct: (product: any) => requests.postForm('products', createFormData(product)),
    updateProduct: (product: any) => requests.putForm('products', createFormData(product)),
    deleteProduct: (id: number) => requests.del(`products/${id}`)
}


//đối tượng này chwua các phương thức API được tổ chức theo từng nhóm Catalog và TestError
const agent = {
    Catalog,
    TestErrors,
    Basket,
    Account,
    Orders,
    Payments,
<<<<<<< HEAD
    User

=======
    Admin

=======
const agent = {
    Catalog,
    TestErrors
>>>>>>> 38528589831e3a4d6355354a13693e0fa2111371
>>>>>>> 16341f1dccbfe858a5480ca574a6ff4714c0b330
}

export default agent;