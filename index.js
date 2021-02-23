var customerName = 'bob';

var upperCaseCustomerName = () => {
    customerName = customerName.toUpperCase()
    return customerName;
}
var setBestCustomer = () => {
    bestCustomer = 'not bob';
    return bestCustomer;
}

var overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob'
    return bestCustomer;
}

const leastFavoriteCustomer = '';

var changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'bob'
}