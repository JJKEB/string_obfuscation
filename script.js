
const btnObfuscation = document.querySelector('.btn-obfuscation');

btnObfuscation.addEventListener('click', function(){
  const originArea = document.querySelector('.origin_txt'),
        replaceArea = document.querySelector('.replace_txt');

  if (originArea.value === '') {
    alert('난독화할 문자를 입력해주세요.')
    originArea.focus()
  } else {

    console.log(originArea.value);


  }


});