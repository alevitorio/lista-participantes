

let participantes = [
  {
    nome: "Alessandro Barbosa Vitorio",
    email: "asovitorio@gmail.com",
    dataInscricao: new Date(2024, 10, 15, 10, 30),
    dataCheckin: new Date(2025, 0, 5, 9, 00),
  },
  {
    nome: "Sandra G. Fernandes Vitorio",
    email: "sandra@gmail.com",
    dataInscricao: new Date(2024, 10, 18, 14, 45),
    dataCheckin: new Date(2025, 0, 6, 9, 15),
  },
  {
    nome: "Carlos Eduardo Lima",
    email: "carlos.lima@gmail.com",
    dataInscricao: new Date(2024, 11, 2, 16, 10),
    dataCheckin: new Date(2025, 0, 7, 10, 00),
  },
  {
    nome: "Mariana Souza Alves",
    email: "mariana.alves@hotmail.com",
    dataInscricao: new Date(2024, 11, 10, 11, 30),
    dataCheckin: new Date(2025, 0, 8, 11, 10),
  },
  {
    nome: "Fernando Rocha Silva",
    email: "fernando.rocha@gmail.com",
    dataInscricao: new Date(2024, 11, 15, 9, 00),
    dataCheckin: null,
  },
  {
    nome: "Juliana Mendes Castro",
    email: "juliana.mendes@outlook.com",
    dataInscricao: new Date(2024, 11, 22, 14, 15),
    dataCheckin: null,
  },
  {
    nome: "Ricardo Oliveira Santos",
    email: "ricardo.santos@gmail.com",
    dataInscricao: new Date(2024, 11, 27, 17, 45),
    dataCheckin: new Date(2025, 0, 11, 14, 50),
  },
  {
    nome: "Ana Paula Ribeiro",
    email: "ana.ribeiro@yahoo.com",
    dataInscricao: new Date(2024, 11, 29, 13, 20),
    dataCheckin: new Date(2025, 0, 12, 15, 10),
  },
  {
    nome: "Gustavo Martins Lopes",
    email: "gustavo.lopes@gmail.com",
    dataInscricao: new Date(2024, 9, 5, 10, 50),
    dataCheckin:null,
  },
  {
    nome: "Beatriz Ferreira Cunha",
    email: "beatriz.cunha@outlook.com",
    dataInscricao: new Date(2024, 9, 12, 9, 30),
    dataCheckin: new Date(2025, 0, 14, 8, 45),
  },
  {
    nome: "Eduardo Nascimento Araújo",
    email: "eduardo.araujo@gmail.com",
    dataInscricao: new Date(2024, 10, 3, 15, 25),
    dataCheckin: new Date(2025, 0, 15, 9, 20),
  },
  {
    nome: "Larissa Silva Mendes",
    email: "larissa.mendes@hotmail.com",
    dataInscricao: new Date(2024, 10, 20, 16, 45),
    dataCheckin: new Date(2025, 0, 16, 10, 05),
  },
  {
    nome: "Thiago Pereira Lima",
    email: "thiago.lima@gmail.com",
    dataInscricao: new Date(2024, 11, 5, 18, 30),
    dataCheckin: new Date(2025, 0, 17, 10, 50),
  },
  {
    nome: "Patrícia Gonçalves Souza",
    email: "patricia.souza@outlook.com",
    dataInscricao: new Date(2024, 11, 11, 8, 50),
    dataCheckin: new Date(2025, 0, 18, 11, 20),
  },
  {
    nome: "Rafael Mendes Cardoso",
    email: "rafael.cardoso@gmail.com",
    dataInscricao: new Date(2024, 11, 15, 12, 20),
    dataCheckin: null,
  }
];


const rows = document.querySelector("tbody")
const form = document.querySelector('form')

const carregarLista = (lista = []) => {

  const listaMap = lista.map(item => {


    return ` 
     <tr>
      <td> 
        <strong>
       ${item.nome}
        </strong>
        <br> 
        <small>${item.email}</small>
      </td>
      <td>${dayjs(Date.now()).to(item.dataInscricao)}</td>
      <td>${item.dataCheckin ? dayjs(Date.now()).to(item.dataCheckin) :
        `<button date-email="${item.email}" onclick = "fazerCheckIn(event) ">fazer checkin</button>`}</td>
    </tr>`})


  rows.innerHTML = listaMap.join(' ')
}

const adicionaParticipante = (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const participante = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    dataInscricao: new Date(),
    dataCheckin: null,
  }

  const validacaoEmail = participantes.filter(participante => participante.email === formData.get('email'))
  console.log(validacaoEmail)
  if (validacaoEmail.length > 0) {
    alert('email já existe')
    return
  }
  participantes = [participante, ...participantes]

  carregarLista(participantes)
  alert("Participante cadastrado com sucesso ✅ ")

  e.target.querySelector('[ name="nome"').value =''
  e.target.querySelector('[ name="email"').value =''
}

const fazerCheckIn = (event) => {
  const confirmCheckIn = confirm("Tem certeza que vai fazer o checkin?")
  if (!confirmCheckIn) return

  const email = event.target.getAttribute('date-email');

  const [participante] = participantes.filter(participante => participante.email === email)

  const posicao = participantes.indexOf(participante)
  participantes[posicao].dataCheckin = new Date()
  console.log(posicao)
  carregarLista(participantes)

}

carregarLista(participantes).join('')



