'use strict';

/* Controllers */

var canucksApp = angular.module('canucksApp', []);

canucksApp.controller('PlayersController', function($scope) {
  $scope.players = [
    {'name': 'Nick Bonino',
     'position': 'Center Forward',
     'img': './img/bonino.jpg',
     'age': 26,
     'Nationality': 'American'
     },
    {'name': 'Alexandre Burrows',
     'position': 'Right Wing',
     'img': './img/burrows.jpg',
     'age': 33,
     'Nationality': 'Canadian'
    },
    {'name': 'Derek Dorsett',
     'position': 'Right Wing',
     'img': './img/dorsett.jpg',
     'age': 28,
     'Nationality': 'American'
    },
    {'name': 'Jannik Hansen',
     'position': 'Right Wing',
     'img': './img/hansen.jpg',
     'age': 28,
     'Nationality': 'Swedish'
    },
    {'name': 'Chris Higgins',
     'position': 'Left Wing',
     'img': './img/higgins.jpg',
     'age': 31,
     'Nationality': 'Canadian'
    },
    {'name': 'Bo Horvat',
     'position': 'Center Forward',
     'img': './img/horvat.jpg',
     'age': 19,
     'Nationality': 'Canadian'
    },
    {'name': 'Zack Kassian',
     'position': 'Right Wing',
     'img': './img/kassian.jpg',
     'age': 23,
     'Nationality': 'Canadian'
    },
    {'name': 'Shawn Matthias',
     'position': 'Center Forward',
     'img': './img/matthias.jpg',
     'age': 26,
     'Nationality': 'Canadian'
    },
    {'name': 'Brad Richardson',
     'position': 'Right Wing',
     'img': './img/richardson.jpg',
     'age': 29,
     'Nationality': 'American'
    },
    {'name': 'Daniel Sedin',
     'position': 'Left Wing',
     'img': './img/dsedin.jpg',
     'age': 34,
     'Nationality': 'Swedish'
    },
    {'name': 'Hendrik Sedin',
     'position': 'Center Forward',
     'img': './img/hsedin.jpg',
     'age': 34,
     'Nationality': 'Swedish'
    },
    {'name': 'Linden Vey',
     'position': 'Right Wing',
     'img': './img/vey.jpg',
     'age': 23,
     'Nationality': 'American'
    },
    {'name': 'Radim Vrbata',
     'position': 'Right Wing',
     'img': './img/vrbata.jpg',
     'age': 33,
     'Nationality': 'Canadian'
    },
    {'name': 'Kevin Bieksa',
     'position': 'Defenceman',
     'img': './img/bieksa.jpg',
     'age': 33,
     'Nationality': 'American'
    },
    {'name': 'Alexander Edler',
     'position': 'Defenceman',
     'img': './img/edler.jpg',
     'age': 28,
     'Nationality': 'Canadian'
    },
    {'name': 'Dan Hamhuis',
     'position': 'Defenceman',
     'img': './img/hamhuis.jpg',
     'age': 32,
     'Nationality': 'Canadian'
    },
    {'name': 'Luca Sbisa',
     'position': 'Defenceman',
     'img': './img/sbisa.jpg',
     'age': 24,
     'Nationality': 'Italian'
    },
     {'name': 'Ryan Stanton',
     'position': 'Defenceman',
     'img': './img/stanton.jpg',
     'age': 25,
     'Nationality': 'American'
     },
     {'name': 'Christopher Tanev',
     'position': 'Defenceman',
     'img': './img/tanev.jpg',
     'age': 25,
     'Nationality': 'American'
     },
     {'name': 'Yannick Weber',
     'position': 'Defenceman',
     'img': './img/weber.jpg',
     'age': 26,
     'Nationality': 'Swedish'
     },
     {'name': 'Eddie Lack',
     'position': 'Goalie',
     'img': './img/lack.jpg',
     'age': 27,
     'Nationality': 'Canadian'
     },
     {'name': 'Ryan Miller',
     'position': 'Goalie',
     'img': './img/miller.jpg',
     'age': 34,
     'Nationality': 'American'
     },
  ];

  $scope.orderProp = 'position';
  $scope.orderProp = 'age';
});