class AuthService {

  signIn(){
    
  }

  newCliente(email, password){
    fetch(`http://localhost:3000/db/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password 
      })
    })
  }
}
const authService = new AuthService();

export default authService;