// utils/executeOnScrollBottom.ts

type ScrollCallback = () => void;
type ScrollbarTopValue = (n: number) => void;

/**
 * Executa uma função callback quando o scroll chega no bottom da página,
 * limitando a execução para uma vez a cada `delay` milissegundos.
 * @param callback - Função a ser executada ao chegar no bottom.
 * @param offset - Distância (em pixels) antes de atingir o bottom para disparar a callback (default: 100).
 * @param delay - Intervalo mínimo entre execuções consecutivas (em ms) (default: 1000).
 */
export function executeOnScrollBottom(
  callback: ScrollCallback,
  offset: number = 100,
  delay: number = 1000
): () => void {
  let lastExecution = 0;

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Verifica se o usuário chegou próximo ao bottom da página
    if (scrollTop + clientHeight >= scrollHeight - offset) {
      const now = Date.now();

      // Se o intervalo desde a última execução for maior que o delay, executa o callback
      if (now - lastExecution >= delay) {
        lastExecution = now;
        callback();
      }
    }
  };

  // Adiciona o event listener para o scroll
  window.addEventListener("scroll", handleScroll);

  // Retorna uma função para remover o event listener (caso necessário)
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
