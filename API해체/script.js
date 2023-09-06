const getApidata = ()=>{
return new Promise(async (resolve) => {
  let result = await fetch("./DailyBox.json")
  let data = await result.json()
  console.log(data);
  resolve(data)
  })//promise
}//getApidat

let Apidata = await getApidata()
let boxOfficeResult = Apidata.boxOfficeResult

console.log(boxOfficeResult);
let boxOfficeList = boxOfficeResult.dailyBoxOfficeList
console.log(boxOfficeList);
boxOfficeList.forEach((v)=>{
  let {movieNm,rank,openDt,audiAcc} = v
  document.querySelector('div').insertAdjacentHTML('beforeend',`
  <h2>영화제목 :${movieNm}</h2>
  <em>박스오피스 순위 :${rank}</em>
  <b>개봉일 : ${openDt}</b>
  <small>총 관객 수 : ${audiAcc}</small>
  `)
  
})