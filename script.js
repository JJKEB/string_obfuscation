
const btnObfuscation = document.querySelector('.btn-obfuscation');

btnObfuscation.addEventListener('click', function(){
  const originArea = document.querySelector('.origin_txt'),
        replaceArea = document.querySelector('.replace_txt');

  if (originArea.value === '') {
    alert('난독화할 문자를 입력해주세요.')
    originArea.focus()
  } else {
    let valArray = originArea.value.split(''),
        tempArray = [];

    valArray.forEach(char => {
      let uni = char.charCodeAt(0);

      checkBaChim(uni);

      // 한글 아스키코드는 44032 ~ 55203 이지만 임의로 10 이하 를 더하기 위해 55199 까지만 검증한다.
      (uni >= 44032 && uni <= 55193 ) ? uni += Math.floor(Math.random() * 10 + 1) : '';

      let kor = String.fromCharCode(uni)
      tempArray.push(kor);
    });

    lastText = tempArray.join('');
    replaceArea.value = lastText;

    // 받침이 있는것만 확인해보자
    function checkBaChim(uni) {
      if ( (uni >= 44032 && uni <= 55203 ) && (uni - 44032) % 28 != 0) {
        return console.log(String.fromCharCode(uni));
      }
    }

  }
});