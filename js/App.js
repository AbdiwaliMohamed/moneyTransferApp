angular.module("myApp", ['zingchart-angularjs',"ngAnimate","ngSanitize","ui.router","ui.bootstrap","mds"])
    .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    main:{
                        templateUrl:"template/main.html",
                        controller:"appCtrl"
                    }
                }
            })
            .state("app.home",{
                url:"/home",
                views:{
                    sub:{
                        templateUrl:"template/home.html",

                    }
                }
            })
            .state("app.login",{
                url:"/login",
                views:{
                    sub:{
                        templateUrl:"template/login.html",
                        controller:"loginCtrl"
                    }
                }
            })
            .state("app.send",{
                url:"/send",
                views:{
                    sub:{
                        templateUrl:"template/send.html",
                        controller:"sendCtrl"
                    }
                }
            })
            .state("app.received",{
                url:"/received",
                views:{
                    sub:{
                        templateUrl:"template/received.html",
                        controller:"receivedCtrl"
                    }
                }
            })
            .state("app.report",{
                url:"/report",
                views:{
                    sub:{
                        templateUrl:"template/report.html",
                        controller:"reportCtrl"
                    }
                }
            })
            .state("app.cust",{
                url:"/cust",
                views:{
                    sub:{
                        templateUrl:"template/cust.html",
                        controller:"custCtrl"
                    }
                }
            })
            .state("app.debt",{
                url:"/debt",
                views:{
                    sub:{
                        templateUrl:"template/debt.html",
                        controller:"debtCtrl"
                    }
                }
            })
            .state("app.credit",{
                url:"/credit",
                views:{
                    sub:{
                        templateUrl:"template/credit.html",
                        controller:"creditCtrl"
                    }
                }
            })
            .state("app.comm",{
                url:"/comm",
                views:{
                    sub:{
                        templateUrl:"template/comm.html",
                        controller:"commCtrl"
                    }
                }
            })



        $urlRouterProvider.otherwise("/app/home")
    })


    .filter("filter1",function ($rootScope) {
        return function (Collections,min1,max1) {
            var out = []
            if (!min1 || !max1)
                return Collections
            else {
                Collections.forEach(function (Collection) {
                    if (Collection.price >=min1 && Collection.price<= max1)
                        out.push(Collection)
                })
            }
            return out


        }
    })
    .filter("filter2",function ($rootScope) {
    return function (fashions,min2,max2) {
        var out = []
        if (!min2 || !max2)
            return fashions
        else {
            fashions.forEach(function (fashion) {
                if (fashion.price >=min2 && fashion.price<= max2)
                    out.push(fashion)
            })
        }
        return out


    }
})
    .filter("filter3",function ($rootScope) {
    return function (footwears,min3,max3) {
        var out = []
        if (!min3 || !max3)
            return footwears
        else {
            footwears.forEach(function (footwear) {
                if (footwear.price >=min3 && footwear.price<= max3)
                    out.push(footwear)
            })
        }
        return out


    }
})
    .filter("filter4",function ($rootScope) {
    return function (mobiles,min,max) {
        var out = []
        if (!min || !max)
            return mobiles
        else {
            mobiles.forEach(function (mobile) {
                if (mobile.price >=min && mobile.price<= max)
                    out.push(mobile)
            })
        }
        return out


    }
})





