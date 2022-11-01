const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function isFragile() {
  let template = ''
  let isFragile = packages.filter(package => package.isFragile == true)
  isFragile.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
      <div class="col-1 text-success">TO</div>
      <div class="col-4 text-light text-center">${package.to}</div>
      <div class="col-1 text-success">ID</div>
      <div class="col-3 text-light text-center">${package.trackingNumber}</div>
    </section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template

  console.log(isFragile)
}
function notFragile() {
  let template = ''
  let notFragile = packages.filter(package => package.isFragile == false)
  console.log(notFragile)
  notFragile.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
      <div class="col-1 text-success">TO</div>
      <div class="col-4 text-light text-center">${package.to}</div>
      <div class="col-1 text-success">ID</div>
      <div class="col-3 text-light text-center">${package.trackingNumber}</div>
    </section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template
}

function drawPackages() {
  let template = ''
  packages.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
      <div class="col-1 text-success">TO</div>
      <div class="col-4 text-light text-center">${package.to}</div>
      <div class="col-1 text-success">ID</div>
      <div class="col-3 text-light text-center">${package.trackingNumber}</div>
    </section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template
}

drawPackages()

function filterStandard() {
  let template = ''
  let isStandard = packages.filter(package => package.priorityLevel == 'standard')
  isStandard.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
      <div class="col-1 text-success">TO</div>
      <div class="col-4 text-light text-center">${package.to}</div>
      <div class="col-1 text-success">ID</div>
      <div class="col-3 text-light text-center">${package.trackingNumber}</div>
    </section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template

  console.log(isStandard)
}
function filterExpress() {
  let template = ''
  let isExpress = packages.filter(package => package.priorityLevel == 'express')
  isExpress.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
      <div class="col-1 text-success">TO</div>
      <div class="col-4 text-light text-center">${package.to}</div>
      <div class="col-1 text-success">ID</div>
      <div class="col-3 text-light text-center">${package.trackingNumber}</div>
    </section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template

  console.log(isExpress)
}
function filterFree() {
  let template = ''
  let isFree = packages.filter(package => package.priorityLevel == 'free')
  isFree.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
      <div class="col-1 text-success">TO</div>
      <div class="col-4 text-light text-center">${package.to}</div>
      <div class="col-1 text-success">ID</div>
      <div class="col-3 text-light text-center">${package.trackingNumber}</div>
    </section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template

  console.log(isFree)
}

function heavy() {
  let template = ''
  let isHeavy = packages.sort((package1, package2) => package2.weight - package1.weight)
  isHeavy.forEach(package => template += `
  <section class="row justify-content-around my-2 p-2 border">
  <div class="col-1 text-success">TO</div>
  <div class="col-4 text-light text-center">${package.to}</div>
  <div class="col-1 text-success">ID</div>
  <div class="col-3 text-light text-center">${package.trackingNumber}</div>
</section>
  `
  )
  let packElm = document.getElementById('packages')
  // @ts-ignore
  packElm.innerHTML = template

  console.log(isHeavy)
}
