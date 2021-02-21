function digitalClock() {
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  
    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ];
  
    const time = new Date();
  
    let date = time.getDate();
    let day = days[time.getDay()];
    let month = months[time.getMonth()];
    let year = time.getFullYear();
  
    let hour = String(time.getHours()).padStart(2, '0');
    let min = String(time.getMinutes()).padStart(2, '0');
    let sec = String(time.getSeconds()).padStart(2, '0');
  
    const info = [
      ['current__date', date],
      ['current__day', day],
      ['current__month', month],
      ['current__year', year],
      ['time__hour', hour],
      ['time__min', min],
      ['time__sec', sec]
    ];
  
    info.forEach(
      ([ids, data]) => (document.getElementById(ids).innerHTML = data)
    );
  
    setTimeout(digitalClock, 1000);
  }
  
  digitalClock();