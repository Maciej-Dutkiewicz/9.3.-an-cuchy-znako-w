var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var text = text.replace('Velociraptor', dinosaur.toUpperCase());
console.log(text.slice(0, text.length/2));