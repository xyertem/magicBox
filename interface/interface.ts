interface Animal {
    type:string,
    name:string,
    male?:boolean,
    female?:boolean
    
}

interface AnimaType extends Animal {
    animalType:string,
    sound:string
}

const createAnimal = (d:AnimaType) => {
      let info = `
      animalType: ${d.animalType}
      name:  ${d.name} 
      type:  ${d.type} 
      sound: ${d.sound} 
      ${d.male === true ? `male:  ${d.male}` : d.female === true ? `female:  ${d.female}` : ` no sex info!!`}
      `
      return info
}

console.log(createAnimal({animalType:'Dog',name: 'cafer', type: 'Golden Retriver', sound:'Barf Barf!!', male: true }))
console.log(createAnimal({animalType:'Cat',name: 'Boncuk', type: 'Iran kedisi', sound:'meow meaww!!', female: true }))
