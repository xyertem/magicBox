var createAnimal = function (d) {
    var info = "\n      animalType: ".concat(d.animalType, "\n      name:  ").concat(d.name, " \n      type:  ").concat(d.type, " \n      sound: ").concat(d.sound, " \n      ").concat(d.male === true ? "male:  ".concat(d.male) : d.female === true ? "female:  ".concat(d.female) : " no sex info!!", "\n      ");
    return info;
};
console.log(createAnimal({ animalType: 'Dog', name: 'cafer', type: 'Golden Retriver', sound: 'Barf Barf!!', male: true }));
console.log(createAnimal({ animalType: 'Cat', name: 'Boncuk', type: 'Iran kedisi', sound: 'meow meaww!!', female: true }));
