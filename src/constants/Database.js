export const AdminDBFields = {
    createdAt: 'createdAt',
    email: 'email',
    name: 'name',
    password: 'password',
}

export const RestaurantDBFields = {
    address: 'address',
    city: 'city',
    closeTime: 'closeTime',
    contactNo: 'contactNo',
    coordinates: 'coordinates',
    createdAt: 'createdAt',
    email: 'email',
    endDate: 'endDate',
    isActive: 'isActive',
    openTime: 'openTime',
    ownerName: 'ownerName',
    password: 'password',
    pincode: 'pincode',
    rate: 'rate',
    restId: 'restId',
    restImage: 'restImage',
    restaurantName: 'restaurantName',
    reviews: 'reviews',
    startDate: 'startDate',
    state: 'state',
    tables: 'tables',
    Images: {
        addedAt: 'addedAt',
        imgUr1: 'imgUr1',
    },
    Menu: {
        addedAt: 'addedAt',
        category: 'category',
        itemName: 'itemName',
        price: 'price',
    }
}

export const CustomerDBFields = {
    authType: 'authType',
    contactNo: 'contactNo',
    createdAt: 'createdAt',
    email: 'email',
    userId: 'uid',
    userImg: 'userImg',
    userName: 'userName',
    favourites: 'favourites',
}

export const BookingsDBFields = {
    custContactNo: 'custContactNo',
    custEmail: 'custEmail',
    custId: 'custId',
    custName: 'custName',
    date: 'date',
    discount: 'discount',
    isCancel: 'isCancel',
    isVerify: 'isVerify',
    noOfGuest: 'noOfGuest',
    restId: 'restId',
    restName: 'restName',
    time: 'time',
}

export const InvoiceDBFields = {
    custContactNo: 'custContactNo',
    custId: 'custId',
    custName: 'custName',
    date: 'date',
    discount: 'discount',
    generatedAt: 'generatedAt',
    invoiceId: 'invoiceId',
    isComplete: 'isComplete',
    restId: 'restId',
    tableNo: 'tableNo',
    time: 'time',
    Items: {
        addedAt: 'addedAt',
        itemName: 'itemName',
        itemPrice: 'itemPrice',
        qty: 'qty',
        total: 'total'
    }
}

export const PackagesDBFields = {
    addedAt: 'addedAt',
    duration: 'duration',
    packageName: 'packageName',
    price: 'price',
}

export const CategoryDBFields = {
    catName: 'catName',
    fontColor: 'fontColor',
    menuCardImg: 'menuCardImg',
}

export const RatingDBFields = {
    rating: 'rating',
    restId: 'restId',
    review: 'review',
    time: 'time',
    userId: 'userId',
}