// variaveis:
// let: pretende mudar o conteúdo
// const: constante, continua pra sempre, não pretende mudar o conteúdo

// const user = {
//  name: "Jakeline Gracielly",
//  phone: 123456789,
//  accept: true,
// };

// alert(user.name)

const LinksSocialMedia = {
    github: "jakeliny2",
    youtube: "jakelinygracielly",
    facebook: "maykbrito",
    instagram: "jakeliny.gracielly",
    twitter: "jakelinytec",
}

function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
            
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })

}

getGitHubProfileInfos()

// arrow functions:
// function nomedafuncao(argumentos){
    //code
// }

// argumento => {
// 
// }