import axios from 'axios';

export interface FamousPerson {
  name: string;
  birthDate?: string;
  nationality?: string;
  profession?: string;
  achievements?: string;
  biography?: string;
  interestingFacts?: string;
}

// 실제 API 키는 환경 변수에서 가져와야 합니다
const API_KEY = 'your-api-key-here'; // 이 부분을 실제 API 키로 교체하세요

export const searchFamousPerson = async (name: string): Promise<FamousPerson> => {
  try {
    // OpenAI GPT API 사용 예시 (실제 사용 시 API 키 필요)
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: '당신은 유명인에 대한 정보를 제공하는 전문가입니다. 요청된 JSON 형식에 맞춰 정확하고 유용한 정보를 제공해주세요.'
          },
          {
            role: 'user',
            content: `다음 유명인에 대한 정보를 한국어로 제공해주세요: ${name}

다음 JSON 형식으로 응답해주세요:
{
  "name": "유명인의 이름",
  "birthDate": "생년월일 (알려진 경우)",
  "nationality": "국적",
  "profession": "직업/분야",
  "achievements": "주요 업적과 성과",
  "biography": "간단한 약력과 경력",
  "interestingFacts": "흥미로운 사실이나 일화"
}

정보가 없는 항목은 null로 표시하고, 모든 내용은 한국어로 작성해주세요.`
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const content = response.data.choices[0]?.message?.content;
    
    if (!content) {
      throw new Error('API 응답에서 내용을 찾을 수 없습니다.');
    }
    
    // JSON 응답을 파싱
    try {
      const personData = JSON.parse(content);
      return {
        name: personData.name || name,
        birthDate: personData.birthDate || undefined,
        nationality: personData.nationality || undefined,
        profession: personData.profession || undefined,
        achievements: personData.achievements || undefined,
        biography: personData.biography || undefined,
        interestingFacts: personData.interestingFacts || undefined
      };
    } catch (parseError) {
      // JSON 파싱 실패 시 텍스트를 그대로 반환
      return {
        name: name,
        biography: content
      };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('API 키가 유효하지 않습니다. API 키를 확인해주세요.');
      } else if (error.response?.status === 429) {
        throw new Error('API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.');
      } else if (error.response?.status && error.response.status >= 500) {
        throw new Error('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } else {
        throw new Error(`API 요청 실패: ${error.response?.status || 'unknown'} ${error.response?.statusText || 'unknown'}`);
      }
    } else {
      throw new Error('알 수 없는 오류가 발생했습니다.');
    }
  }
};
