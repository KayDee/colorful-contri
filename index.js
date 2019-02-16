const COLORS = [
  ['#E0CCE0', '#BA49BA', '#660066', '#330033'],

  ['#F3D3D4', '#E4999B', '#D56062', '#3B1B1B'],
  
  ['#DBC6C6', '#AB7A7A', '#663131', '#281313'],
  
  ['#F9BF9A', '#F47E36', '#D95503', '#481c01'],
  
  ['#F7B5D2', '#f06ba5', '#E6096A', '#45021f'],
  
  ['#C5C0F9', '#786CF3', '#3F2EEE', '#251b8e'],
  
  ['#C1D1FF', '#50a2d4', '#067BC2', '#01243a'],
  
  ['#FEE858', '#F4BC35', '#E48734', '#020014'],
]
let selected = COLORS[Math.floor(Math.random() * COLORS.length)]

document.addEventListener('DOMContentLoaded', (event) => {
  let x = document.getElementsByClassName('day')
  for(let i = 0; i < x.length; i++){
    if(x[i].getAttribute('fill') == '#ebedf0'){
      //  Do nothing
    }    
    else if(x[i].getAttribute('fill') == '#c6e48b'){
      x[i].setAttribute('fill', selected[0])
    }
    else if(x[i].getAttribute('fill') == '#7bc96f'){
      x[i].setAttribute('fill', selected[1])
    }
    else if(x[i].getAttribute('fill') == '#239a3b'){
      x[i].setAttribute('fill', selected[2])
    }
    else if(x[i].getAttribute('fill') == '#196127'){
      x[i].setAttribute('fill', selected[3])
    }
  }
  let y = document.querySelectorAll('.legend li')
  for(let i = 0; i < y.length; i++){
    let p = y[i].style['background-color']

    if(p == 'rgb(235, 237, 240)'){
      //  Do nothing
    }    
    else if(p == 'rgb(198, 228, 139)'){
      y[i].style['background-color'] = selected[0]
    }
    else if(p == 'rgb(123, 201, 111)'){
      y[i].style['background-color'] = selected[1]
    }
    else if(p == 'rgb(35, 154, 59)'){
      y[i].style['background-color'] = selected[2]
    }
    else if(p == 'rgb(25, 97, 39)'){
      y[i].style['background-color'] = selected[3]
    }
  }

})