//enum é uma lista de variáveis

enum Roles {
    ADMIN='admin',
    GUEST= 'guest',
    USER='user'
}

interface IUser {
    username: string,
    role: Roles
}

const user: IUser = {
    username: 'Jessica',
    role: Roles.ADMIN
}

console.log(user);

enum SocialMedia {
    FACEBOOK = 'Facebook',
    INSTAGRAM = 'instagram'
}

const social = SocialMedia.FACEBOOK;
//social -> 'Facebook'

for(const social in SocialMedia) {
    console.log(social) //esse ciclo vai ter duas interações e vai fazer o console.log dos 2 itens
}