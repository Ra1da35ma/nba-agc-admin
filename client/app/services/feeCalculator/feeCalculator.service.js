'use strict';

/* jshint ignore:start */
angular.module('nbaAgcAdminApp')
    .service('FeeCalculator', function () {
       return {
           getFee: function (name) {
               var feeDue = 0;
               var todayDate = new Date();
               var dateEarly = new Date('2016', '05', '20');// month lapses by 1
               var dateNormal = new Date('2016', '06', '20');// month lapses by 1
               var dateLate = new Date('2016', '07', '09');// month lapses by 1

               if(todayDate >= dateEarly && todayDate < dateNormal) {
                   switch (name) {
                       case 'sanAndBench':
                           feeDue = 100000;
                           break;
                       case 'judge':
                           feeDue = 75000;
                           break;
                       case 'law_students':
                           feeDue = 4500;
                           break;
                       case 'magistrate':
                           feeDue = 50000;
                           break;
                       case 'others':
                           feeDue = 250000;
                           break;
                       case 'non_lawyer':
                           feeDue = 50000;
                           break;
                       case 'international':
                           feeDue = 500;
                           break;
                       case 'access_bank_test':
                           feeDue = 100;
                           break;
                   }
               }
               if(todayDate >= dateNormal && todayDate < dateLate) {
                   switch (name) {
                       case 'sanAndBench':
                           feeDue = 120000;
                           break;
                       case 'judge':
                           feeDue = 75000;
                           break;
                       case 'law_students':
                           feeDue = 4500;
                           break;
                       case 'magistrate':
                           feeDue = 50000;
                           break;
                       case 'others':
                           feeDue = 250000;
                           break;
                       case 'non_lawyer':
                           feeDue = 50000;
                           break;
                       case 'international':
                           feeDue = 750;
                           break;
                       case 'access_bank_test':
                           feeDue = 100;
                           break;
                   }
               }

               return feeDue.formatMoney(2);
           }

    };
    });
/* jshint ignore:end */
