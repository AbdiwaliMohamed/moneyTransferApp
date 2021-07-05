angular.module("myApp")
.controller("appCtrl",function ($scope,$rootScope,$state,$http2,$timeout,$interval,$http,$uibModal) {
    if(!$rootScope.id) {
        toastr.warning("Login","Warning",{timeOut:2000})
        $state.go("app.login")
    }$rootScope.get = function () {
        $http2.post("api/getReport.php",{
            user_id:parseInt($rootScope.id)

               }).then(function (resp) {
                $scope.report = resp.data
                $scope.totals = resp.data

            // $scope.totals.forEach(function (total) {
                //     total.report = angular.fromJson(total.report)
                //
                //
                //     var Debt_Total =$scope.totals[2].debt
                //
                //
                //
                //     console.log(Debt_Total)



                //     $scope.addItem = function(item) {
                //     $scope.report.push(item);
                //     $scope.item = {};
                // };
                // var sent_Total = 0;
                //     for(var count=0;count< $scope.totals.length;count++){
                //         sent_Total += total.sent
                //
                //
                //     }
                // var Receive_Total = 0;
                //     for(var count=0;count< $scope.totals.length;count++){
                //         Receive_Total += total.sent
                //
                //
                //     }
                // var Credit_Total = 0;
                //     for(var count=0;count< $scope.totals.length;count++){
                //         Credit_Total += total.sent
                //
                //
                //     }

               // })
            });
    };
    //$rootScope.get();






})
    .controller("reportCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {
        $scope.report=[
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:84,Debt:45,Credit:66},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:84,Debt:45,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:84,Debt:45,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:84,Debt:45,Credit:66},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:84,Debt:45,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:6,Received:82,Debt:99,Credit:66},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:63,Received:63,Debt:48,Credit:96},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:644,Debt:84,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:63,Received:81,Debt:94,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:466,Received:84,Debt:454,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:6,Received:99,Debt:64,Credit:66},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:88,Debt:84,Credit:66},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:80,Debt:74,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:77,Debt:44,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:66,Debt:34,Credit:64},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:55,Debt:24,Credit:66},
            {No:1,Name:"Abdiwali Mohamed",Phone:0127638689,Address:"balabil",Sent:66,Received:0,Debt:33,Credit:66}

        ];
    })
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
                        $rootScope.get();
                        $scope.user=resp.data.user
                            $state.go("app.home")
                       console.log($rootScope.id)

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
        $scope.sendMoney=function () {
            $scope.data.user_id=$rootScope.id
            $http.post("api/report.php",$scope.data)
                .then(function (resp) {
                    if(resp.data){
                       alert(" inserted successfully")
                        $scope.data={}
                    }
                    else{
                        alert("Something went wrong !")

                    }
                })
        }
    })
    .controller("receivedCtrl",function ($scope,$http,$rootScope,$state,$timeout,$interval) {
        $scope.ReceiveMoney=function () {
            $scope.data.user_id=$rootScope.id
            $http.post("api/report.php",$scope.data)
                .then(function (resp) {
                    if(resp.data){
                        toastr.success("Inserted successfully","Success",{timeOut:2000})
                        $scope.data={}
                    }
                    else{
                        toastr.success("Something went wrong !","info",{timeOut:2000})

                    }
                })
        }

})
    .controller("custCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {

    })
    .controller("debtCtrl",function ($scope,$rootScope,$http,$state,$timeout,$interval) {
        $scope.DebtMoney=function () {
            $scope.data.user_id=$rootScope.id
            $http.post("api/report.php",$scope.data)
                .then(function (resp) {
                    if(resp.data){
                        toastr.success("Inserted successfully","Success",{timeOut:2000})
                        $scope.data={}
                    }
                    else{
                        toastr.success("Something went wrong !","info",{timeOut:2000})

                    }
                })
        }

})
    .controller("creditCtrl",function ($scope,$http,$rootScope,$state,$timeout,$interval) {
        $scope.CreditMoney=function () {
            $scope.data.user_id=$rootScope.id
            $http.post("api/report.php",$scope.data)
                .then(function (resp) {
                    if(resp.data){
                        toastr.success("Inserted successfully","Success",{timeOut:2000})
                        $scope.data={}
                    }
                    else{
                        toastr.success("Something went wrong !","info",{timeOut:2000})

                    }
                })
        }

    })