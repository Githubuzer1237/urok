const ProductsData = [
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Soft Curves',
         user: '😎 Chingiz Pidor',
         price: 0.85,
    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'The mystery of the black square',
         user: '🤩 Chingiz Daun',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'Pink Cloud 🌥',
         user: '🫠 Chingiz Gay',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Ethereum',
         user: '😃 Chingiz Ne Natural',
         price: 0.85,

    },
]






const wrapper = document.querySelector('.live__wrapper1')
const cards = ProductsData.map(card => {
    return `
            <div class="live__card">
            <img class="live__card-img" src=${card.img} alt="" />
            <div class="live__card-box">
              <h3>${card.title}</h3>
              <div>
                <p>${card.user}</p>
                <p>
                  Current Bid <br />
                  <b>${card.price}</b>
                </p>
              </div>
            </div>
          </div>
    `
}).join('')

wrapper.innerHTML = cards






const ProductsData2 = [
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Soft Curves',
         user: '😎 Chingiz Pidor',
         price: 0.85,
    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'The mystery of the black square',
         user: '🤩 Chingiz Daun',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'Pink Cloud 🌥',
         user: '🫠 Chingiz Gay',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Ethereum',
         user: '😃 Chingiz Ne Natural',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Soft Curves',
         user: '😎 Chingiz Pidor',
         price: 0.85,
    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'The mystery of the black square',
         user: '🤩 Chingiz Daun',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'Pink Cloud 🌥',
         user: '🫠 Chingiz Gay',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Ethereum',
         user: '😃 Chingiz Ne Natural',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Soft Curves',
         user: '😎 Chingiz Pidor',
         price: 0.85,
    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'The mystery of the black square',
         user: '🤩 Chingiz Daun',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: 'Pink Cloud 🌥',
         user: '🫠 Chingiz Gay',
         price: 0.85,

    },
    {
        img: 'https://masterpiecer-images.s3.yandex.net/1545ea95892b11eead48ca123cab517e:upscaled',
        title: '3D Ethereum',
         user: '😃 Chingiz Ne Natural',
         price: 0.85,

    },
]




const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card2 => {
    return `
            <div class="live__card">
            <img class="live__card-img" src=${card2.img} alt="" />
            <div class="live__card-box">
              <h3>${card2.title}</h3>
              <div>
                <p>${card2.user}</p>
                <p>
                  Current Bid <br />
                  <b>${card2.price}</b>
                </p>
              </div>
            </div>
          </div>
    `
}).join('')

wrapper2.innerHTML = cards2
