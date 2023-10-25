describe('Qualquer coisa ', () => {
    it.only('Deve fazer login com mock', function () {
        cy.request({
            method: 'POST',
            url: 'https://70e8e6ee-cbe8-449b-b714-cf92b4ddfc55.mock.pstmn.io/login',
            body: {
                'email': 'reid.haley@hotmail.com',
                'password': 'ky3h4b30i8fgp'
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.message).to.eq('Login realizado com sucesso');
            const token = response.body.authorization;
            cy.wrap(token).as('token');
        })
    });

});