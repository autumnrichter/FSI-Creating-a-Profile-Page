let content = document.querySelector('.js-generated.content')
//H1
let mainHeader = document.createElement('h1')
mainHeader.setAttribute('class', 'dog-name')
mainHeader.textContent = 'Rizzo'
content.append(mainHeader)

//Make a dogContent div 
let dogContentDiv = document.createElement('div')
dogContentDiv.setAttribute('class', 'dog-content')
content.append(dogContentDiv)

//append an image
let dogContentImage = document.createElement('img')
dogContentImage.setAttribute('class', 'dog-image')
dogContentImage.setAttribute('src', './assets/rizzo.jpg')
dogContentDiv.append(dogContentImage)

//Make a dogDetails div under dogContentDiv
let dogDetailsDiv = document.createElement('div')
dogDetailsDiv.setAttribute('class', 'dog-details')
dogContentDiv.append(dogDetailsDiv)

//Create H3 under dogDetailsDiv
let dogDetailsHeader = document.createElement('h3')
dogDetailsHeader.textContent = 'Description:'
dogDetailsDiv.append(dogDetailsHeader)

//Create P under dogDetailsDiv
let paragraph = document.createElement('p')
paragraph.textContent = 'This gentile dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetailsDiv.append(paragraph)

//Create H3 under dogDetailsDiv
let feedingTimesHeader = document.createElement('h3')
feedingTimesHeader.textContent = 'Feeding Times:'
dogDetailsDiv.append(feedingTimesHeader)

//Create UL under dogDetailsDiv
let ul = document.createElement('ul')
dogDetailsDiv.append(ul)

//Create first LI in UL
let li1 = document.createElement('li')
li1.textContent = '9:00 am'
ul.append(li1)

//Create second LI in UL
let li2 = document.createElement('li')
li2.textContent = '12:00 pm'
ul.append(li2)

//Create third LI in UL
let li3 = document.createElement('li')
li3.textContent = '5:00 pm'
ul.append(li3)
