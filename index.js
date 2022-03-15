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

//Make a dogDetails div
let dogDetailsDiv = document.createElement('div')
dogDetailsDiv.setAttribute('class', 'dog-details')
dogDetailsHeader = document.createElement('h3')