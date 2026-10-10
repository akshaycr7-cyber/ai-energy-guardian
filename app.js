document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'))
    item.classList.add('active')
  })
})

document.querySelector('.icon-button')?.addEventListener('click', () => {
  document.querySelector('.icon-button b')?.remove()
})

document.querySelector('.view-all')?.addEventListener('click', () => {
  document.querySelector('.view-all').textContent = 'All recommendations reviewed'
})

const orb = document.querySelector('.orb')
let tilt = 0
window.addEventListener('pointermove', (event) => {
  if (!orb) return
  tilt = ((event.clientX / window.innerWidth) - 0.5) * 8
  orb.style.transform = `translateX(${tilt}px) translateY(${((event.clientY / window.innerHeight) - 0.5) * 5}px)`
})

