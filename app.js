// Methode One:
/*const tabsArray = [
    {
        title: "History",
        category: "History",
        desc: `Et dolore labore autem sapiente exercitationem reprehenderit
               nobis possimus ad numquam nostrum!`
    },
    {
        title: "Vision",
        category: "Vision",
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
               nobis possimus ad numquam nostrum!`
    },
    {
        title: "Goals",
        category: "Goals",
        desc: `Lorem ipsum dolor sit amete exercitationem reprehenderit
               nobis possimus ad numquam nostrum!`
    }
]

const btns = document.querySelectorAll('.links li')
const tabsTitle = document.querySelector('.nav_content h4')
const tabsDesc = document.querySelector('.nav_content p')

console.log(btns)

window.addEventListener('DOMContentLoaded', () => {
    changeTabsContent(tabsArray[0])
})

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      btns.forEach(button => {
        button.classList.remove('active');
      })
      e.target.classList.add('active')
      btnContent = e.target.textContent
      const tabsFiltred = tabsArray.filter(item => {
        return item.category === btnContent
      })
      changeTabsContent(tabsFiltred[0])
    })
})

function changeTabsContent(item) {
   tabsTitle.innerHTML = item.title
   tabsDesc.innerHTML = item.desc
}*/

// Methode Two
const tabs = document.querySelector('.tabs')
const btns = document.querySelectorAll('.links li')
const box = document.querySelectorAll('.box')

tabs.addEventListener('click', (e) => {
  // Solution 1
    let id = e.target.getAttribute('data-id')
    //console.log(id)
    if(id) {
      btns.forEach(btn => btn.classList.remove('active'));
    }
    e.target.classList.add('active');

  // Solution 1
    box.forEach(item => {
        item.id === id
        ? item.classList.add('active')
        : item.classList.remove('active');
    });

  // Solution 2
  /*box.forEach(item => item.classList.remove('active'))
  let element = document.getElementById(id)
  console.log(element)
  element.classList.add('active')*/
})
