let bulb = function (name) {
 
    this.get = function () {
        this.name = name;
        this.power = +prompt('Enter power(Вт)');
        this.cost = +prompt('Enter cost of electricity(1КВт/ч)');
        if (confirm('Turn on?')) {
            this.work = +prompt('Time?(ч)');
        } else {
            this.work = 0;
        };
 
        this.operation();
    };
 
    this.operation = function () {
        this.result = (this.power / 1000) * this.cost * this.work;
 
        this.show();
    };
 
    this.show = function () {
 
        if (this.work == 0 || this.work == undefined) {
            console.log(`Лампочка ${this.name} не включена`);
        } else {
            console.log(`Лампочка ${this.name} работала ${this.work} ч, стоимость электроэнергии: ${this.result}`);
        }
    };
};
 
let Bbulb = new bulb('в спальне');
Bbulb.get();
 
let Bbulb2 = new bulb('в гостинной');
Bbulb2.get();
 
let Bbulb3 = new bulb('на кухне');
Bbulb3.get();
 
let Cost = Bbulb.result + Bbulb2.result + Bbulb3.result;
 
console.log(`Всего: ${Cost}`);