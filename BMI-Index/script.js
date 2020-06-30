var bmi, weight, hight;
weight = prompt('Podaj swoją wagę w kilogramach');
hight = prompt('Podaj swój wzrost w metrach');
if (hight >2.3) {
    alert ('nie podałeś wzrostu w metrach ! lub jesteś wyźszy niz 2.3m')
    hight = prompt ('Podaj swój wzrost w metrach')
    bmi = weight / (hight * hight)
}
else{
    bmi = weight / (hight * hight);
}
console.log('Twój BMI wynosi ' + bmi);
