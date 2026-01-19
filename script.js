/* 
Lógica de Programacao
    - Falar a lingua do computador
Algoritmo
    - Receita de bolo. Os passos na sequencia certa

JavaScript
    - Variáveis - pedacinho na memória do computador
        que voce pode guardar o que voce quiser

    - Funcoes
        pedacinho de código que, só executa quando
        eu chamo
        
    - Como se comunicar com o HTML
        Manipular a DOM

    console.log() mostra o que eu quiser na tela

    [x] Saber quando o botão foi clicado
    [ ] Pegar o texto que o usário digitou
    [ ] Mando para o servidor traduzir
    [ ] Receber a resposta do servidor (traducao)  
    [ ] Colocar o texto na tela   

    // JavaScript - scripts
    // HTML - document
    querySelector - procurar alguem no HTML
    value = valor - o texto que tem nele

   padrao =  https://api.mymemory.translated.net/get?q=
   traduzir =  Hello World!
   idioma = &langpair=pt-BR|en

   fetch / ferramenta do javascript para entrar em contato com um servidor
   await (Espere) - async (async & await)
   json (formato mais amigavel)
*/

const inputTexto = document.querySelector(".input-texto")
const idiomaOutput = document.querySelector(".idioma")
const textoOutput = document.querySelector(".traducao")


async function traduzir(){
    textoOutput.innerText = "Traduzindo, aguarde..."

    const endereco = "https://api.mymemory.translated.net/get?q=" 
    + inputTexto.value
    + "&langpair=pt-BR|"
    + idiomaOutput.value

    const resposta = await fetch(endereco)

    const dados = await resposta.json()

    textoOutput.innerText = dados.responseData.translatedText;

    if(dados.responseData.translatedText === null) textoOutput.innerText = "sem tradução"
}
function ouvirVoz() {
    // ferramenta de transcricao de audio
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    // Deixando ela PRONTA PARA USO   
    let reconhecimentoVoz = new SpeechRecognition()

    // Configurando a ferramenta
    reconhecimentoVoz.lang = "pt-BR"

    // Me avise quando ele terminou de transcrever a voz
    reconhecimentoVoz.onresult = (evento) => {
        let textoTranscricao = evento.results[0][0].transcript

        inputTexto.value = textoTranscricao

        traduzir()
    }

    reconhecimentoVoz.start()

}
// clicou no botao -> chama a funcao -> monto o enderco ->
// chamo o servidor -> peco esperar -> responde 