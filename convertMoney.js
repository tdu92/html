function convertMoney()  {
    let amount = +document.getElementById('money').value;
    let from = +document.getElementById('from').value;
    let to = +document.getElementById('to').value;
    let result = amount*to/from;
    document.getElementById('result').innerHTML = "Kết quả đổi: "+ result;
}