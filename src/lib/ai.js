import axios from 'axios';

export const fetchAIResponse = async (prompt) => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/<model>',
      { inputs: prompt },
      { headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_API_KEY}` } }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching AI response:', error);
    throw error;
  }
};
