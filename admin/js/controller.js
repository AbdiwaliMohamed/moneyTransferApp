angular.module("myApp")
    .controller("appCtrl",function ($scope,$rootScope,$state,$timeout,$interval,$http,$uibModal) {
        if(!$rootScope.id) {
            toastr.warning("Login now","Warning",{timeOut:2000})
            $state.go("app.login")
        }
        get = function (receive,sent,debt,credit) {
            $scope.receive=receive
            $scope.sent=sent
            $scope.debt=debt
            $scope.credit=credit

            $http.get("api/getReport.php",
                {
                    receive:receive,
                    sent:sent,
                    debt:debt,
                    credit:credit
                }
            ).then(function (resp) {
                $scope.report = resp.data
                $rootScope.totals = resp.data

        //     $scope.addItem = function(item) {
        //     $scope.report.push(item);
        //     $scope.item = {};
        // };
        //
        //
        // });
             $rootScope.totals.forEach(function (total) {
                 //total.report = angular.fromJson(total.report)

                 var sent_Total =0;
                 for (var count = 0; count <= $rootScope.totals.length; count++) {
                     sent_Total =$rootScope.totals[count].sent
             }
                 console.log( sent_Total)
              })
                //
                //     }
                //     var Receive_Total = 0;
                //     for (var count = 0; count < $rootScope.totals.length; count++) {
                //         Receive_Total += total.sent
                //
                //
                //     }
                //     var Credit_Total = 0;
                //     for (var count = 0; count < $rootScope.totals.length; count++) {
                //         Credit_Total += total.sent
                //
                //
                //     }
            });
        };
        //console.log($rootScope.totals)

        get();
        $scope.myJson = {
            type: "pie",
            title: {
                textAlign: 'center',
                text: "recent reports",
                color:'red',
            },
            plot: {
                slice: 50 //to make a donut
            },

            series: [{
                values: [76],
                text: 'Total lacagaha laqabtay',
                color:'red'


            }, {
                values: [55],
                text: "Total lacagaha ladiray",
                color:'red'


            }, {
                values: [76],
                text: "total lacagaha shirkada lagu leyahay",
                color:'red'

            }, {
                values: [56],
                text: "Total daymaha shirkada",
                color:'red'


            }]

        };


        $scope.preModify=function (reports) {
            reports.receive=parseFloat(reports.receive)
            reports.sent=parseFloat(reports.sent)
            reports.credit=parseFloat(reports.credit)
            reports.debt=parseFloat(reports.debt)
            $scope.selectedreports=Object.assign({},reports)
            console.log(reports)
            $scope.x=$uibModal.open({
                templateUrl:"template/update.html",
                scope:$scope
            })
        }
        $scope.delete=function (id) {
            var x=confirm("Are you sure want to deleted  this Transaction ?")
            if(x){
                $http.post("api/delete.php",{cust_id:id})
                    .then(function (resp) {
                        if(resp.data.status){
                            toastr.success("Transaction  deleted successfully","Success",{timeOut:2000})
                            get()
                        }
                        else
                            toastr.error("Something went wrong !","Error",{timeOut:2000})

                    })
            }
        }



    })
    .controller("reportCtrl",function ($scope,$rootScope,$http,$state,$timeout,$interval) {
        get = function (receive,sent,debt,credit) {
            $scope.receive=receive
            $scope.sent=sent
            $scope.debt=debt
            $scope.credit=credit

            $http.get("api/getReport.php",
                {
                    receive:receive,
                    sent:sent,
                    debt:debt,
                    credit:credit
                }
            ).then(function (resp) {
                $scope.report = resp.data
                $scope.totals = resp.data







            });
        };
        get();    })
    .controller("loginCtrl",function ($scope,$rootScope,$state,$http2,$timeout,$interval,$http) {
        // $scope.user = "ali@gmail.com",
        // $scope.pass = 1234567
        // $scope.login=function () {
        //     if ($scope.user && $scope.pass) {
        //         alert("Welcome ")
        //         $state.go("app.home")
        //
        //     }
        //     else {
        //         alert("Wrong Username or Password")
        //
        //         $scope.$apply()
        //     }
        // }
        $scope.login=function () {
            $http.post("api/login.php",$scope.data)
                .then(function (resp) {
                    if(resp.data.status){
                        toastr.success("Welcome "+$scope.data.user,"Success",{timeOut:2000})
                        $rootScope.id=resp.data.id
                        $scope.user=resp.data.user
                        $state.go("app.home")

                    }
                    else{
                       toastr.error("Wrong Username or Password","Error",{timeOut:2000})

                        $scope.data.user=""
                        $scope.data.pass=""
                    }
                })
        }
    })
    .controller("sendCtrl",function ($scope,$rootScope,$state,$timeout,$interval,$http) {
        get = function () {
            $http.get("api/send.php", {
                user_id: $rootScope.id,
            }).then(function (resp) {
                $scope.sends = resp.data
            })

        }
        get();
        $scope.delete=function (id) {
            var x=confirm("Are you sure want to deleted  this Transaction ?")
            if(x){
                $http.post("api/delete.php",{cust_id:id})
                    .then(function (resp) {
                        if(resp.data.status){
                            toastr.success("Transaction  deleted successfully","Success",{timeOut:2000})
                            get()
                        }
                        else
                            toastr.error("Something went wrong !","Error",{timeOut:2000})

                    })
            }
        }
    })

    .controller("receivedCtrl",function ($scope,$rootScope,$http,$state,$timeout,$interval) {
        get = function () {
            $http.get("api/receive.php", {
                user_id: $rootScope.id,
            }).then(function (resp) {
                $scope.receives = resp.data
            })

        }
           get();
    })
    .controller("custCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {

    })
    .controller("debtCtrl",function ($scope,$http,$rootScope,$state,$timeout,$interval) {
        get = function () {
            $http.get("api/debt.php", {
                user_id: $rootScope.id,
            }).then(function (resp) {
                $scope.debts = resp.data
            })

        }
        get();

    })
    .controller("creditCtrl",function ($scope,$rootScope,$http,$state,$timeout,$interval) {
        get = function () {
            $http.get("api/credit.php", {
                user_id: $rootScope.id,
            }).then(function (resp) {
                $scope.credits = resp.data
            })

        }
        get();
    })