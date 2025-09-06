import type { NextApiRequest, NextApiResponse } from 'next';

interface GenerateIdeaRequest {
  components: string[];
}

interface GenerateIdeaResponse {
  name: string;
  tagline: string;
  description: string;
  valuation: number;
  jollofRating: number;
  fundingStage: string;
  marketSize: string;
  error?: string;
}

// Hugging Face API configuration - using Fireworks AI via router
const HUGGING_FACE_API_URL = 'https://router.huggingface.co/v1/chat/completions';
const HUGGING_FACE_TOKEN = process.env.HUGGING_FACE_TOKEN || 'your-token-here';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateIdeaResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      name: '', 
      tagline: '', 
      description: '', 
      valuation: 0, 
      jollofRating: 0,
      fundingStage: '',
      marketSize: '',
      error: 'Method not allowed' 
    });
  }

  try {
    const { components }: GenerateIdeaRequest = req.body;

    if (!components || components.length < 2) {
      return res.status(400).json({ 
        name: '', 
        tagline: '', 
        description: '', 
        valuation: 0, 
        jollofRating: 0,
        fundingStage: '',
        marketSize: '',
        error: 'At least 2 components required' 
      });
    }

    const componentsText = components.join(', ');

    // Create a focused prompt for the AI model
    const prompt = `Create a startup idea using these technologies: ${componentsText}

Focus on Nigerian market context but with global appeal:
- Name: Creative tech startup name (can reference Nigerian cities/culture)
- Tagline: Catchy, professional tagline with emoji (English only, no pidgin)
- Description: Address real problems relevant to Nigerian users with practical solutions and pricing
- Consider: Lagos traffic, mobile money, farming challenges, banking access, education gaps, healthcare needs
- Use clear, professional English throughout
- Include specific Naira pricing where relevant
- Valuation: Between 50000000 and 15000000000 (₦50M-₦15B)
- Jollof Rating: 6-10 (appeal level for Nigerian market)
- Funding Stage: Pre-seed, Seed Round, Series A, or Series B
- Market Size: Population context (e.g., "25M Lagos residents", "180M mobile users")

Respond ONLY with this JSON format:
{
  "name": "startup name here",
  "tagline": "professional tagline with emoji",
  "description": "detailed solution description with specific pricing and benefits",
  "valuation": 500000000,
  "jollofRating": 8,
  "fundingStage": "Seed Round",
  "marketSize": "25M Lagos residents"
}`;

    // Call Hugging Face Chat Completions API with Fireworks
    const response = await fetch(HUGGING_FACE_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUGGING_FACE_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        model: "meta-llama/Llama-3.2-3B-Instruct",
        max_tokens: 300,
        temperature: 0.8,
        top_p: 0.9,
        stream: false
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    let aiResponse = '';

    // Handle chat completions response format
    if (result.choices && result.choices.length > 0 && result.choices[0].message) {
      aiResponse = result.choices[0].message.content;
    } else {
      throw new Error('Invalid response format from AI API');
    }

    // Extract JSON from the AI response
    let ideaData: any = {};
    try {
      // Look for JSON in the response
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        ideaData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('No JSON found in response');
      }
    } catch (parseError) {
      // Fallback: create idea from AI response text
      const fallbackIdea = createFallbackIdea(components, aiResponse);
      return res.status(200).json(fallbackIdea);
    }

    // Validate and sanitize the AI response
    const sanitizedIdea: GenerateIdeaResponse = {
      name: ideaData.name || generateFallbackName(components),
      tagline: ideaData.tagline || "Making Nigeria proud! 🇳🇬",
      description: ideaData.description || `Revolutionary ${componentsText} platform solving Nigerian problems with innovative technology.`,
      valuation: validateValuation(ideaData.valuation),
      jollofRating: validateJollofRating(ideaData.jollofRating),
      fundingStage: validateFundingStage(ideaData.fundingStage),
      marketSize: ideaData.marketSize || "220M Nigerians nationwide"
    };

    res.status(200).json(sanitizedIdea);

  } catch (error) {
    console.error('AI Generation Error:', error);
    
    // Return fallback idea on error
    const fallbackIdea = createFallbackIdea(req.body.components, '');
    res.status(200).json(fallbackIdea);
  }
}

// Helper functions
function createFallbackIdea(components: string[], aiText: string): GenerateIdeaResponse {
  const prefixes = ['Naija', 'Lagos', 'Smart', 'Quick', 'Jollof'];
  const suffixes = ['Tech', 'Hub', 'Pay', 'Connect', 'Plus'];
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return {
    name: `${prefix}${suffix}`,
    tagline: "Innovation meets Nigerian spirit! 🚀",
    description: `Revolutionary ${components.join(' + ')} platform designed for Nigerian users. Solving real problems with cutting-edge technology at affordable prices.`,
    valuation: Math.floor(Math.random() * (3000000000 - 100000000)) + 100000000,
    jollofRating: Math.floor(Math.random() * 3) + 7,
    fundingStage: ['Pre-seed', 'Seed Round', 'Series A'][Math.floor(Math.random() * 3)],
    marketSize: ['220M Nigerians nationwide', '25M Lagos residents', '70M young people (18-35)'][Math.floor(Math.random() * 3)]
  };
}

function generateFallbackName(components: string[]): string {
  const prefixes = ['Naija', 'Lagos', 'Smart', 'Swift', 'Bright'];
  const suffixes = ['Tech', 'Hub', 'Labs', 'Connect', 'Flow'];
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
  return `${prefix}${suffix}`;
}

function validateValuation(value: any): number {
  const num = Number(value);
  if (isNaN(num) || num < 50000000 || num > 15000000000) {
    return Math.floor(Math.random() * (3000000000 - 50000000)) + 50000000;
  }
  return Math.floor(num);
}

function validateJollofRating(value: any): number {
  const num = Number(value);
  if (isNaN(num) || num < 6 || num > 10) {
    return Math.floor(Math.random() * 5) + 6;
  }
  return Math.floor(num);
}

function validateFundingStage(value: any): string {
  const validStages = ['Pre-seed', 'Seed Round', 'Series A', 'Series B'];
  if (typeof value === 'string' && validStages.includes(value)) {
    return value;
  }
  return validStages[Math.floor(Math.random() * validStages.length)];
}