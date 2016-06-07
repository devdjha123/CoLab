/**
 * Created by RANJEET on 6/6/2016.
 */
newApp.controller('BecomeACoachCtrl', ['$scope','$http',
    function ($scope, $http) {
        debugger;
        $scope.images = [{
            url: "Image/gp1.png"
        }
            ,{
                url: "Image/gp2.jpg"

            }
            ,{
                url: "Image/gp3.jpg"
            }];
        $scope.changeBackground = function(url){

            $('.pdhead').css('background-image','url(' + url + ')');
        }




        $scope.myDate = new Date();
        $scope.convertToDate = function (stringDate) {
            var dateOut = new Date(stringDate);
            dateOut.setDate(dateOut.getDate() + 1);
            return dateOut;
        };


        $scope.urls = [{
            url: "Image/Facebook.png"
        }
            ,{
                url: "Image/Twitter.png"

            }
        ];

        $scope.changeurl = function(url) {


        }
        $scope.tabs = [{
            title: 'About The Class',
            url: 'one.tpl.html'
        }, {
            title: 'Venue',
            url: 'two.tpl.html'
        }, {
            title: 'T & C',
            url: 'three.tpl.html'
        }];

        $scope.currentTab = 'one.tpl.html';

        $scope.onClickTab = function (tab) {
            $scope.currentTab = tab.url;
        }

        $scope.isActiveTab = function(tabUrl) {
            return tabUrl == $scope.currentTab;
        };
        $scope.textPrd=" A classroom is a learning space, a room in which classes are held" + "Classrooms are found in educational institutions of all kinds";
    }]);


