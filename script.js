function openAns(element){
  let ques=document.querySelectorAll('.questions');
  let ans=document.querySelectorAll('.awnsers');
  for(let i=0;i<ans.length;i++){
    if(ans[i].getAttribute('data')===element.getAttribute('data')){
      element.classList.toggle('active');
      ans[i].classList.toggle('open');
      for(let j=0;j<ans.length;j++){
        if(j==i){
          continue;
        }
        else{
          if(ques[j].classList.contains('active')){
            ques[j].classList.toggle('active')
          }
          if(ans[j].classList.contains('open')){
            ans[j].classList.toggle('open');
          }
        }
      }
    }
  }
}