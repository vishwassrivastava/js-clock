function setDate(){
  const secondHand=document.querySelector('.sec-hand');
    const minsHand=document.querySelector('.min-hand');
      const hourHand=document.querySelector('.hour-hand');

  const now=new Date();

  const seconds=now.getSeconds();
  const secondsDegrees=((seconds/60)*360)+90;
  secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

  const minutes=now.getMinutes();
  const MinuteDegrees=((minutes/60)*360)+90;
  minsHand.style.transform=`rotate(${MinuteDegrees}deg)`;

  const hours=now.getHours();
  const hrDegrees=((hours/12)*360)+90;
  hourHand.style.transform=`rotate(${hrDegrees}deg)`;
}
setInterval(setDate,1000);
