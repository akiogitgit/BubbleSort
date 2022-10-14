const numberOfElement = 5
const order:"asc"|"desc" = "desc"
const array = [...Array(numberOfElement)].map(v=>Math.floor( Math.random() * 100 ))

console.log("元の配列：", array)

for(let i=0;i<array.length;i++){
  for(let j=0;j<array.length-1;j++){
    if(
      (order === "asc" && array[j] > array[j+1]) ||
      (order === "desc" && array[j] < array[j+1])
    ){
      const a = array[j]
      array[j] = array[j+1]
      array[j+1] = a
    }
  }
}

console.log("ソート後の配列：",array)