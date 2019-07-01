/*Переменная  может принимать значения от 1 до 12. Если она имеет значение 1, 2
или 12, то в переменную season запишем 1, если имеет значение 3, 4 или 5 – 2 и так далее. После определения сезона,
 определите пору года и запишите значение в
переменную seasonName: если 1, то 'Зима', если 2 - 'Лето' и т.д. Определение поры года
написать через switch.*/


var  month = prompt ('Введите число от 1 до 12'),
     season,
     seasonName;

     if (month == 12 || month == 1 || month == 2) {
          season = 1; 
     } else { if (month == 3 || month == 4 || month == 5 ) {
         season = 2;
     } else { if (month == 6 || month == 7 || month ==8) {
         season = 3;
     } else {
         if (month == 9 || month == 10 || month == 11) {
             season = 4;
         } 
             
         }}}




             switch (season) {

                 case 1:
                     alert ('Зима!');
                     break;

                     case 2:
                        alert('Весна!');
                        break;

                        case 3:
                            alert('Лето!');
                            break;

                            case 4:
                                alert('Осень!');
                                break;
             
                 default:
                     alert ('Вы допустили ошибку!');
                     break;
             }