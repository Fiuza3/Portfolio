export interface Projeto {
  id: number
  titulo: string
  descricao: string
  tecnologias: string[]
  imagemUrl: string
  linkDemo?: string
  linkGithub: string
  destaque: boolean
}

export interface Habilidade {
  nome: string
  nivel: number
  categoria: 'frontend' | 'backend' | 'ferramentas' | 'outros'
}

export interface ExperienciaProfissional {
  empresa: string
  cargo: string
  periodo: string
  descricao: string
  tecnologias: string[]
}

export interface ContatoForm {
  nome: string
  email: string
  assunto: string
  mensagem: string
}