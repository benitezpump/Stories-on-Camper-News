/**
 * Created by carlos on 22/08/15.
 */

var app = angular.module('camperNews',[]);

app.controller('myController',['$http',function ($http) {

    var datos = this;

    datos.post = [];

    $http.get('http://www.freecodecamp.com/news/hot').success(function(data){
        datos.post = data.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.timePosted) - new Date(a.timePosted);
        });
    });

    this.setImage = function (object) {
        var data = object;
        var reg = /http/g;
        if(data.image === "" || data.image === "undefined"){
            return data.author.picture;
        } else {
            return data.image;
        }
    }

}]);