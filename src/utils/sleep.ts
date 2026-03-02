// Демо задержка для отображения прелоадера.
export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
