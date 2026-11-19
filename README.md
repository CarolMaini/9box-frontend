# 9Box — Interface Frontend de Gestão de Desempenho

Repositório dedicado à camada de apresentação de uma plataforma de gestão de desempenho, com uma interface web para visualização de indicadores, avaliações e atividades relacionadas ao acompanhamento de colaboradores.

O projeto reúne a estrutura HTML, os estilos CSS e os comportamentos JavaScript da interface. Os dados exibidos no dashboard são exemplos estáticos definidos no próprio HTML; este repositório não contém uma API ou implementação de backend.

## Visão geral da interface

A interface apresenta:

- Dashboard com indicadores de avaliações pendentes e concluídas.
- Visualização gráfica de relatórios por meio do ApexCharts.
- Área de atividades recentes.
- Tabela de avaliações com informações demonstrativas.
- Navegação lateral com áreas de Home, Dashboard, PDI, Relatório, Calibração e Painel Admin.
- Menu de configurações com controles de personalização visual.

## Tecnologias e bibliotecas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura semântica e organização das telas |
| CSS3 | Estilização, layout e variáveis de tema |
| JavaScript | Interações da interface |
| Bootstrap 5.2.3 | Componentes, grid, modal e dropdowns |
| Bootstrap Icons 1.10.5 | Ícones da interface |
| Boxicons 2.1.4 | Ícones complementares |
| ApexCharts | Gráfico de área do dashboard |
| Google Fonts | Tipografia |

As bibliotecas externas são carregadas por CDN no arquivo `index.html`.

## Comportamentos implementados

- Expansão e recolhimento do menu lateral.
- Atualização visual das cores de fundo, menu, cards, textos e ícones por meio de variáveis CSS.
- Exibição de modal e componentes dropdown do Bootstrap.
- Renderização de gráfico com séries de dados demonstrativas usando ApexCharts.

A personalização de cores altera as variáveis CSS em tempo de execução. O estado não é persistido em armazenamento ou backend e pode ser perdido ao recarregar a página.

## Estrutura do repositório

```text
9box-frontend/
├── index.html       # Estrutura do dashboard e conteúdo demonstrativo
├── style.css        # Estilos e organização visual
├── reset.css        # Normalização de estilos
├── script.js        # Interações do menu e personalização de cores
└── logo-fundo-transparente-novo_P6GmKNt.png
                    # Recurso visual utilizado na interface
```

## Executar localmente

Não é necessário instalar dependências de backend para visualizar a interface.

1. Clone o repositório:

   ```bash
   git clone https://github.com/CarolMaini/9box-frontend.git
   cd 9box-frontend
   ```

2. Abra o arquivo `index.html` diretamente no navegador ou inicie um servidor HTTP local:

   ```bash
   python -m http.server 8000
   ```

3. Acesse [http://localhost:8000](http://localhost:8000).

É necessária conexão com a internet para carregar as bibliotecas e fontes disponibilizadas por CDN.

## Escopo e limitações

Este repositório documenta a implementação frontend disponível aqui. Elementos como navegação entre módulos, ações de conta, filtros e exportação aparecem na interface, mas não devem ser interpretados como fluxos completos conectados a serviços de backend neste projeto.

Não há neste repositório:

- API REST ou serviços de backend.
- Persistência de dados.
- Autenticação funcional.
- Integração com banco de dados.
- Testes automatizados ou pipeline de CI identificados na estrutura atual.

## Contexto da contribuição

Minha atuação neste projeto esteve concentrada no desenvolvimento frontend da plataforma, incluindo a construção e evolução da interface web. Também participei de atividades complementares relacionadas ao backend da solução, mas essa implementação não está contida neste repositório.

---

**Repositório:** [CarolMaini/9box-frontend](https://github.com/CarolMaini/9box-frontend)
