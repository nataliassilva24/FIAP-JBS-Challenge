# 🎯 Swift Gamification - FIAP Challenge

Sistema de gamificação para colaboradores da Swift, desenvolvido como parte do desafio FIAP.

## 📋 Sobre o Projeto

Este projeto visa aumentar a conversão e o ticket médio na jornada O2O (Online to Offline) da Swift através de um sistema de gamificação que motiva e reconhece colaboradores das lojas físicas.

## 🚀 Funcionalidades

### ✅ **Implementadas (Sprint 2)**
- **Dashboard Principal** - Visão geral de pontuação, ranking e estatísticas
- **Sistema de Pontuação** - Acompanhamento de pontos e conquistas
- **Ranking por Loja** - Classificação entre colaboradores
- **Interface Responsiva** - Compatível com desktop, tablet e mobile
- **Identidade Visual Swift** - Design fiel à marca

### 🔄 **Em Desenvolvimento**
- **Página de Desafios** - Missões semanais e desafios especiais
- **Loja de Recompensas** - Sistema de resgate de prêmios
- **Ranking Geral** - Classificação entre todas as lojas
- **Perfil do Colaborador** - Histórico e achievements

## 📁 Estrutura do Projeto

```
FIAP-JBS-Challenge/
├── index.html                    # Dashboard Principal
├── assets/                      # Recursos estáticos
│   ├── images/                 # Imagens e logos
│   │   └── swift-foods-logo-3.png
│   ├── css/                   # Estilos
│   │   └── styles.css
│   └── js/                    # JavaScript
│       └── script.js
├── pages/                     # Páginas individuais
│   ├── desafios.html         # Página de desafios
│   ├── ranking.html          # Ranking geral
│   ├── loja.html            # Loja de recompensas
│   └── perfil.html          # Perfil do usuário
└── README.md                # Documentação
```

## 🛠 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos customizados e responsividade
- **Bootstrap 5.3.2** - Framework CSS
- **Bootstrap Icons** - Iconografia
- **JavaScript (ES6)** - Interatividade e simulações
- **Design Responsivo** - Mobile-first approach

## 🔗 Integração com Sistemas Swift (Implementação Futura)

O sistema de gamificação foi projetado para integração completa com os sistemas existentes da Swift:

- **Sistema POS** - Captura automática de vendas e ticket médio
- **CRM de Clientes** - Identificação de clientes recorrentes
- **Sistema de Avaliações** - Feedbacks e NPS automatizados
- **Plataforma de Treinamentos** - Acompanhamento de capacitações
- **Sistema de RH** - Gestão de colaboradores e níveis

*Nota: No Sprint 2, as funcionalidades são simuladas para demonstração. A integração real seria implementada no backend.*

## 🎨 Sistema de Gamificação

### Categorias de Pontuação
| Categoria | Objetivo | Pontuação |
|-----------|----------|-----------|
| **Atendimento ao Cliente** | Melhoria na experiência | +10 pontos por feedback positivo |
| **Vendas** | Aumentar volume | +5 pontos por venda adicional |
| **Upsell e Cross-sell** | Incentivar recomendações | +8 pontos por venda bem-sucedida |
| **Fidelização** | Clientes retornando | +15 pontos por cliente recorrente |
| **Treinamento** | Engajamento em capacitações | +12 pontos por workshop realizado |
| **Proatividade** | Ideias de melhoria | +10 pontos por sugestão implementada |

### Níveis do Colaborador
- **Iniciante** (0-500 pontos)
- **Intermediário** (501-1000 pontos) 
- **Avançado** (1001-2000 pontos)
- **Expert** (2000+ pontos)

## 🚀 Como Executar

### Método 1: Servidor Local (Recomendado)
```bash
# Navegar para o diretório do projeto
cd FIAP-JBS-Challenge

# Iniciar servidor HTTP local
python3 -m http.server 8000

# Acessar no navegador
http://localhost:8000
```

### Método 2: Abrir Diretamente
1. Fazer download do projeto
2. Abrir o arquivo `index.html` no navegador

## 📊 Entregáveis Sprint 2

### ✅ Concluído
- [x] Front-end responsivo desenvolvido
- [x] Estrutura organizada de arquivos
- [x] Identidade visual Swift aplicada
- [x] Dashboard funcional implementado
- [x] Sistema de navegação entre páginas

### 📋 Próximos Passos (Sprint 3)
- [ ] Implementar páginas de desafios completas
- [ ] Desenvolver sistema de recompensas
- [ ] Adicionar interatividade com JavaScript
- [ ] Implementar animações e feedbacks visuais
- [ ] Integração com backend (se aplicável)

## 🎯 Objetivos de Negócio

- **Aumentar conversão** O2O através da gamificação
- **Melhorar experiência** do cliente com atendimento motivado
- **Reconhecer e recompensar** colaboradores proativos
- **Criar ambiente** competitivo saudável entre lojas
- **Facilitar treinamento** através de desafios práticos

---

**FIAP - Faculdade de Informática e Administração Paulista**  
**Curso:** [Nome do Curso]  
**Professor:** [Nome do Professor]  
**Ano:** 2024
