  // Correction

  function toggle_background() {
    let body = document.body
    let color1 = "rgb(255, 0, 0)"
    let color2 = "rgb(255, 128, 0)"
    let color3 = "rgb(255, 255, 0)"
    let color4 = "rgb(0, 255, 0)"
    let color5 = "rgb(0, 0, 255)"
    let color6 = "rgb(238, 130, 238)"

    if (body.style.backgroundColor == color1)
        body.style.backgroundColor = color2
    else if (body.style.backgroundColor == color2)
    body.style.backgroundColor = color3
    else if (body.style.backgroundColor == color3)
    body.style.backgroundColor = color4
    else if (body.style.backgroundColor == color4)
    body.style.backgroundColor = color5
    else if (body.style.backgroundColor == color5)
    body.style.backgroundColor = color6
    else
    body.style.backgroundColor = color1
    console.log(body.style.backgroundColor)
}


window.addEventListener('load',
  () => {
      console.log('initializing')
      window.setInterval(
          () => {
              console.log('tick')
              toggle_background()
          },
          5000
      )
    }
)
