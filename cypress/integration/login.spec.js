
import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'

describe('login', function(){

    context('quando o usuário é muito bom', function(){

        const user = {
            name: 'Robson Jassa',
            email: 'jassa@samuraibs.com',
            password: 'pwd123'
        }

        it('deve logar com sucesso', function(){
            loginPage.go()
            loginPage.form(user)
            loginPage.submit()

            dashPage.header.userLoggedIn(user.name)
        })
    })

})