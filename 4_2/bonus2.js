// Ordene o array numbers em ordem decrescente e imprima seus valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] > numbers[j]) {
        let position = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }

  for(index = 0; index < numbers.length; index += 1){
      console.log(numbers[index]);
  }