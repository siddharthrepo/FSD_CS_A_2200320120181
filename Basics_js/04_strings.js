// two ways of creating string
const name12 = "siddharth" //1

const sir_name = new String("Raturi")

const repoCount = 50

console.log(`my name is ${name12} and no. of repo i have made are ${repoCount}`) //string interpolation

// string methods

console.log(name12[0])
console.log(name12.toUpperCase())
console.log(name12.charAt(3))
console.log(name12.indexOf('h'))
console.log(name12.substring(1,4))
console.log(name12.slice(-4,-1))

newstr = new String('   hello    ')
console.log(newstr)
console.log(newstr.trim())

url = new String('https://www.netflix.com/browse?jbv=81268316')
console.log(url.replace('?' , '-'))
console.log(url.includes('www'))
console.log(url.split('/'))


