const help = (prefix) => {
	return `💎 Comandos do DIGÃO-BOT' 💎

🔰 Principais Comandos 🔰 

Comandos: '${prefix}antipv'
Função: ative o modo antipv no bot
Como Usar: '${prefix}antipv 1' para ativar o modo antipv e '${prefix}antipv 0' para desativar
Obs: Este comando pode ser usado se você for um proprietário do bot

Comandos: '${prefix}antinewchat'
Função: ative o modo antinewchat no bot
Como Usar: '${prefix}antinewchat 1' para ativar o modo antinewchat e '${prefix}antinewchat 0' para desativar
Obs: Este comando pode ser usado se você for um proprietário do bot

Comando: '${prefix}dbacklist'
Função: Lista os usuarios que não podem voltar pro grupo

Comando: '${prefix}dbackadd'
Função: Adiciona numero que nao pode voltar ao grupo
Como Usar: '${prefix}dbackadd (num sem +, - ou espaço)'

Comando: '${prefix}dbackrm'
Função: Remove numero que nao pode voltar ao grupo
Como Usar: '${prefix}dbackadd (num sem +, - ou espaço)'

Comandos: '${prefix}dontback'
Função: Ativa o modo boas-vindas do grupo
Como Usar: '${prefix}dontback 1' para ativar o modo dontback e '${prefix}dontback 0' para desativar o modo dontback
Obs: Este comando pode ser usado se você for um administrador do grupo 

Comando: '${prefix}toimg'
Função: converter adesivos em imagem
Como Usar: responder a sticker 

Comando: '${prefix}sticker' ou '${prefix}stiker'
Função: converter imagem / gif / vídeo em adesivo
Como Usar: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda 
Obs: caso queira, coloque um numero abaixo de 15 para controlar os fps

Comando: '${prefix}blockcmd'
Função: bloquea comando
Como Usar: ${prefix}blockcmd menu

Comando: '${prefix}unblockcmd'
Função: desbloquea comando
Como Usar: ${prefix}unblockcmd menu

Comando: '${prefix}listblockcmd'
Função: lista comando bloqueados

Comando:'${prefix}criador'
Função: Mostra as informações do criador do bot

Comando:'${prefix}unblock'
Função: desbloquea numero de usar os comandos
Como Usar: responder a sticker

Comando:'${prefix}block'
Função: bloquea numero de usar os comandos
Como Usar: responder a sticker

Comando:'${prefix}blacklist'
Função: lista os numeros bloqueados de usar os comandos
Como Usar: responder a sticker

🔰 Limite de comandos 🔰 

Comandos: '${prefix}mylimit'
Função: mostra seu limite de comandos

Comandos: '${prefix}resetlimit'
Função: reseta o limite dos usuários

Comando: '${prefix}rmlimituser'
Função: reseta o limite de um usuário específico
Como Usar: '${prefix}rmlimituser (num)'

Comandos: '${prefix}limitcmd'
Função: Ativa o modo limite do bot
Como Usar: '${prefix}limitcmd 1' para ativar o modo limite e '${prefix}limitcmd 0' para desativar o modo limite

🔰 Atividade de membros 🔰 

Comando:'${prefix}filtroativo'
Função: filtra membros que mandaram uma certa qnt de msg
Como usar: ${prefix}filtroativo (qnt)

Comando:'${prefix}banativos'
Função: registra seus dados do sistema de niveis

Comando:'${prefix}atividade'
Função: lista todas as mensagens que o membro mandou no gp

Comando: '${prefix}rankativo'
Função: Rankea os membros mais ativos do grupo

Comando: '${prefix}checkativo'
Função: Mostra os dados da atividade do membro marcado
Como Usar: '${prefix}checkativo (marcar número)'

🔰 Jogatinas 🔰

Comando: '${prefix}jogatina'
Função: Ativa e desativa o modo jogatina no grupo
Como Usar: '${prefix}jogatina 1/0'

Comando: '${prefix}stealrandom'
Função: Rouba o xp de um membro aleatório
Recompensa: entre o xp total do selecionado a 0

Comando: '${prefix}steal'
Função: Rouba o xp de um ou demais membro
Como Usar: '${prefix}steal (marcar número)'
Recompensa: entre o xp total dos selecionados a 0
Obs: Será mandado uma msg no pv dos roubados por você então tenha cuidado ao roubar em massa

Comando: '${prefix}cassino'
Como Usar: '${prefix}steal (qnt de xp)'
Função: Roda um caça níquel

Comando: '${prefix}flip'
Função: Gira a moeda cara ou coroa
Como Usar: '${prefix}flip Cara/Coroa'
Recompensa: entre 500 e 100

Comando: '${prefix}doarxp'
Função: Doa o xp para um ou demais membro
Como Usar: '${prefix}doarxp (qnt de xp) (marcar) (marcar outros opcionais)'

Comando: '${prefix}roletarandom'
Função: Gira a roleta que ganha ou perde xp
Recompensa: entre 500 a 0

Comando: '${prefix}roletaneg'
Função: Gira a roleta que perde xp
Perda: entre 500 a 0

Comando: '${prefix}roletapos'
Função: Gira a roleta que ganha xp
Recompensa: entre 1000 a 0

🔰 Sistema de leveis 🔰 

Comando:'${prefix}registerlevel'
Função: registra seus dados do sistema de niveis

Comando:'${prefix}deletelevel'
Função: remove seus dados do sistema de niveis

Comando:'${prefix}level'
Função: fala seu nível atual
Como Usar: '${prefix}level (nada ou marque numero)'

Comando:'${prefix}rmlevel'
Função: remove o usuário marcado do sistema de níveis
Como Usar: '${prefix}rmlevel (número sem +, - e espaço)'

Comando: '${prefix}rankxp'
Função: Rankea todos os membros do sistema de xp

🔰 Comandos de Memes 🔰  

Comando: '${prefix}meme'
Função: imagens aleatórias de meme [english]

Comando: '${prefix}memeindo'
Função: imagens aleatórias de meme [indo]

🔰 Outros Comandos 🔰 

Comando: '${prefix}gimage'
Função: Pesquisa no google imagens
Como Usar: '${prefix}gimage [texto]'

Comando: '${prefix}cep'
Função: Pesquisa ceps
Como Usar: '${prefix}cep [texto]'

Comando: '${prefix}termux'
Função: Mostra uma lista de comandos básicos do termux

Comando: '${prefix}gtts'
Função: converter texto em fala / áudio
Como Usar: '${prefix}gtts [la] [texto]'
Exemplo: '${prefix}gtts ja Oni-chan'

Comando: '${prefix}signome'
Função: Mostra o significado do seu nome
Como usar:'${prefix}signome [nome]'
Exemplo:'${prefix}signome ian'

Comando: '${prefix}nethunter'
Função: Mostra um tutorial de como ter um emulador de kali linux no seu termux

Comando: '${prefix}db'
Função: envia links de várias database de travazap

Comando:'${prefix}wppim'
Função: envia links de todos whatsapp imunes

Comando: '${prefix}url2img'
Função: tirar uma captura de tela na web
Como Usar: *${prefix}url2img [tip] [url]*

Comando: '${prefix}simi'
Função: sua mensagem será respondida por simi
Como Usar: '${prefix}simi [texto]'

Comando: '${prefix}ocr'
Função: pegue o texto na foto
Como Usar: responder imagem ou enviar imagem com legenda 

Comando: '${prefix}wait'
Função: Pesquisa o anime na imagem [ O que anime é isso / aquilo ]
Como Usar: responder imagem ou enviar imagem com legenda 

Comando: '${prefix}setprefix'
Função: substituir prefixo
Como Usar: '${prefix}setprefix [text|optional]' 
Exemplo: '${prefix}setprefix ?'

🔰 Comandos de Grupos 🔰 

Comando: '${prefix}totag'
Função: marca todos os membros do grupo

Comando: '${prefix}listonline'
Função: lista os membros que estão online

Comando: '${prefix}ship'
Função: Ve as chances dos numero marcados darem certos
Como Usar: '${prefix}ship (marcar1) (marcar2)' 

Comando: '${prefix}ban'
Função: Bane quem for marcado

Comando: '${prefix}banir'
Função: Bane quando responde a mensagem

Comandos: '${prefix}welcome'
Função: Ativa o modo boas-vindas do grupo
Como Usar: '${prefix}welcome 1' para ativar o modo welcome e '${prefix}welcome 0' para desativar o modo welcome
Obs: Este comando pode ser usado se você for um administrador do grupo 

Comando: '${prefix}leave'
Função: faz o bot sair do grupo
Obs: Somente adms pode usar esse comando

Comandos: '${prefix}linkgroup'
Função: pegue o link do grupo
Como Usar: basta enviar o comando
Obs: só pode ser usado quando o bot se torna admin, e quem enviar o comando é admin! 

Comandos: '${prefix}tagall'
Função: marca todos os membros do grupo, incluindo administradores também
Como Usar: basta enviar o comando
Obs: Este comando pode ser usado se você for um administrador do grupo 

Comandos: '${prefix}antilink'
Função: ative o modo antilink no grupo
Como Usar: '${prefix}antilink 1' para ativar o modo antilink e '${prefix}antilink 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}abrirgp'
Função: Abre o grupo pra todos falarem

Comandos: '${prefix}fechargp'
Função: Fecha o grupo pra somente adms falarem

Comandos: '${prefix}offmodgrupo'
Função: desativa pra todos poderem editar o grupo

Comandos: '${prefix}onnmodgrupo'
Função: ativa pra todos poderem editar o grupo

Comandos: '${prefix}antifake'
Função: ative o modo antifake no grupo
Como Usar: '${prefix}antifake 1' para ativar o modo antifake e '${prefix}antifake 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antiporn'
Função: ative o modo antiporn no grupo
Como Usar: '${prefix}antiporn 1' para ativar o modo antiporn e '${prefix}antiporn 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antiaudio'
Função: ative o modo antiaudio no grupo
Como Usar: '${prefix}antiaudio 1' para ativar o modo antiaudio e '${prefix}antiaudio 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antisticker'
Função: ative o modo antisticker no grupo
Como Usar: '${prefix}antisticker 1' para ativar o modo antisticker e '${prefix}antisticker 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antictt'
Função: ative o modo antictt no grupo
Como Usar: '${prefix}antictt 1' para ativar o modo antictt e '${prefix}antictt 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antiloc'
Função: ative o modo antiloc no grupo
Como Usar: '${prefix}antiloc 1' para ativar o modo antiloc e '${prefix}antiloc 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antivideo'
Função: ative o modo antivideo no grupo
Como Usar: '${prefix}antivideo 1' para ativar o modo antivideo e '${prefix}antivideo 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antiimg'
Função: ative o modo antiimg no grupo
Como Usar: '${prefix}antiimg 1' para ativar o modo antiimg e '${prefix}antiimg 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}autoreply'
Função: ative o modo autoreply no grupo
Como Usar: '${prefix}autoreply 1' para ativar o modo autoreply e '${prefix}autoreply 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antidoc'
Função: ative o modo antidoc no grupo
Como Usar: '${prefix}antidoc 1' para ativar o modo antidoc e '${prefix}antidoc 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo

Comandos: '${prefix}antilinkhard'
Função: ative o modo simi no grupo
Como Usar: '${prefix}antilinkhard 1' para ativar o modo antilinkhard e '${prefix}antilinkhard 0' para desativar
Obs: Este comando pode ser usado se você for um administrador do grupo 

Comandos: '${prefix}simih'
Função: ative o modo simi no grupo
Como Usar: '${prefix}simih 1' para ativar o modo simih e '${prefix}simih 0' para desativar o modo simih
Obs: Este comando pode ser usado se você for um administrador do grupo 
`
}

exports.help = help


