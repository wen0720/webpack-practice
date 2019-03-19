import url from './assets/sass/main.scss'
import image from './assets/images/img-lesson01.png'
import image02 from './assets/images/img-lesson02.png'
import print from './print'

console.log('我在這啊jjj')
console.log('[image 路徑]', image) // 就是 lesson01.png 被打包出來的路徑
console.log('[css 路徑]', url)

print()

console.log(process.env.NODE_ENV)