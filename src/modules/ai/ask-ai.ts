import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});

const openai = new OpenAIApi(configuration);

export const SummarizeChat = async (messages: string): Promise<string> => {
  if (!configuration.apiKey) {
    return 'API key missing';
  }

  const prompt = messages + '\nTl;dr and who are talking?';

  const summarizedResponse = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 250,
    temperature: 0.9,
    top_p: 0.8,
    presence_penalty: 1.84,
    frequency_penalty: 0.98
  });

  const summarizedContent =
    summarizedResponse.data.choices[0].text ?? "Sorry! Couldn't summarize.";

  return summarizedContent;
};
