function mostrarConteudo(topico) {
  const conteudo = document.getElementById("conteudo");
  let texto = "";

  switch (topico) {
    case "xp":
      texto = `
        <h2>XP (Extreme Programming)</h2>
        <p>
          O <strong>Extreme Programming (XP)</strong> é uma das metodologias ágeis mais conhecidas,
          com foco na <em>qualidade do software</em> e na <em>resposta rápida às mudanças</em>. 
          Foi criada por Kent Beck e se baseia em valores como simplicidade, comunicação,
          feedback constante, coragem e respeito.
        </p>
        <p><strong>Componentes Humanos:</strong> Desenvolvedores, clientes, testadores, coach (líder técnico) e gestor.</p>
        <p><strong>Práticas Principais:</strong> Programação em par, integração contínua, TDD (Test-Driven Development), refatoração constante e entregas frequentes.</p>
        <p><strong>Vantagens:</strong> Alta qualidade do código, maior adaptação às mudanças, forte interação com o cliente.</p>
        <p><strong>Desvantagens:</strong> Requer forte disciplina da equipe, pode ser difícil em projetos muito grandes.</p>
      `;
      break;

    case "fdd":
      texto = `
        <h2>FDD (Feature Driven Development)</h2>
        <p>
          O <strong>Feature Driven Development (FDD)</strong> é uma metodologia ágil voltada para o 
          <em>desenvolvimento orientado a funcionalidades</em>. Seu foco é entregar software de forma
          incremental, com base em recursos funcionais que tenham valor real para o cliente.
        </p>
        <p><strong>Componentes Humanos:</strong> Gerente de projeto, líder de desenvolvimento, donos de classes (programadores responsáveis por módulos) e usuários/clientes.</p>
        <p><strong>Fases:</strong> Desenvolvimento do modelo, criação da lista de funcionalidades, planejamento por funcionalidades, design por funcionalidades e construção por funcionalidades.</p>
        <p><strong>Vantagens:</strong> Facilita o acompanhamento do progresso, entrega contínua de valor, mantém o foco nas necessidades do cliente.</p>
        <p><strong>Desvantagens:</strong> Menos flexível que outras metodologias ágeis, pode gerar burocracia em equipes pequenas.</p>
      `;
      break;

    case "kanban":
      texto = `
        <h2>Kanban</h2>
        <p>
          O <strong>Kanban</strong> é uma metodologia visual para gestão do fluxo de trabalho, 
          criada inicialmente na Toyota como parte do <em>Lean Manufacturing</em>. No contexto do 
          desenvolvimento de software, o Kanban auxilia a visualizar tarefas e otimizar a entrega.
        </p>
        <p><strong>Componentes Humanos:</strong> Toda a equipe de desenvolvimento, gestores de fluxo e stakeholders.</p>
        <p><strong>Fases/Processo:</strong> O trabalho é representado em um quadro (Kanban Board) dividido em colunas 
          como "A Fazer", "Em Progresso" e "Concluído". Cada tarefa (cartão) avança conforme o progresso.</p>
        <p><strong>Vantagens:</strong> Simplicidade, clareza no acompanhamento do fluxo, redução de gargalos, maior transparência.</p>
        <p><strong>Desvantagens:</strong> Não define papéis claros, pode gerar sobrecarga se não houver disciplina na equipe.</p>
      `;
      break;

    case "crystal":
      texto = `
        <h2>Crystal</h2>
        <p>
          A <strong>Crystal</strong> é uma família de metodologias ágeis adaptáveis ao tamanho e à 
          criticidade do projeto. Diferente de metodologias rígidas, a Crystal valoriza a 
          <em>interação humana, comunicação, reflexões e melhorias constantes</em>.
        </p>
        <p><strong>Componentes Humanos:</strong> Equipe de desenvolvimento, usuários finais, facilitadores e gestores.</p>
        <p><strong>Processo:</strong> Não é fixo; depende do contexto. A metodologia sugere ciclos curtos de entrega, reuniões frequentes e priorização da comunicação.</p>
        <p><strong>Vantagens:</strong> Flexibilidade, valorização das pessoas, foco em resultados práticos e não em documentação extensa.</p>
        <p><strong>Desvantagens:</strong> Pode parecer vaga demais, pouca padronização entre equipes, difícil de aplicar em empresas muito tradicionais.</p>
      `;
      break;

    case "msf":
      texto = `
        <h2>MSF (Microsoft Solutions Framework)</h2>
        <p>
          O <strong>Microsoft Solutions Framework (MSF)</strong> é uma metodologia de processos e boas práticas 
          proposta pela Microsoft, com o objetivo de apoiar o desenvolvimento de sistemas robustos e de 
          grande porte, mantendo princípios ágeis como adaptação e colaboração.
        </p>
        <p><strong>Componentes Humanos:</strong> Papéis bem definidos, como arquiteto de soluções, desenvolvedores, testadores, gerente de programa e stakeholders.</p>
        <p><strong>Fases do Processo:</strong> Envisioning (visão inicial), Planning (planejamento detalhado), Developing (desenvolvimento), Stabilizing (testes/estabilização) e Deploying (implantação).</p>
        <p><strong>Vantagens:</strong> Estrutura bem organizada, compatível com projetos complexos, integra boas práticas ágeis e tradicionais.</p>
        <p><strong>Desvantagens:</strong> Pode ser burocrático, menos indicado para equipes pequenas e projetos simples.</p>
      `;
      break;

    default:
      texto = "<p>Selecione uma metodologia para ver os detalhes.</p>";
  }

  conteudo.innerHTML = texto;
}
