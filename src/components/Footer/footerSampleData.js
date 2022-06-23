export const cloneLinks = (() => {

    let emptyFun = () =>{}

    let links = new Map();

    let AccountElement = new Map();
    AccountElement.set("Account",null)
    AccountElement.set("Sign In",null)
    AccountElement.set("Register",null)
    AccountElement.set("Order Status",null)
    AccountElement.set("Returns",null) 

    let AboutElement = new Map();
    AboutElement.set("About Us",'/about-us')
    AboutElement.set("Our Story",null)
    AboutElement.set("Email Signup",null)
    AboutElement.set("Give Back",null)

    let helpElement = new Map();
    helpElement.set("Help",null)
    helpElement.set("Customer Service","/customer-service")

    let contactUsElement = {
        "key": "Contact Us",
        "value":{
            path: '/contact-us',
            Component: emptyFun
        }
    }
    helpElement.set("Contact Us",contactUsElement)
    helpElement.set("Order",null)
    helpElement.set("Return",null)



    links.set("account",AccountElement)
    links.set("about",AboutElement)
    links.set("help",helpElement)

    return links
})()



