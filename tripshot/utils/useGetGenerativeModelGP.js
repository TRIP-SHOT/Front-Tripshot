import { useGenAi } from './useGenAI.js'

export const useGetGenerativeModelGP = async (prompt) => {
  const model = await useGenAi('gemini-pro');
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  return text;
};
