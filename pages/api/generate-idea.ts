import type { NextApiRequest, NextApiResponse } from 'next';

interface GenerateIdeaRequest {
  components: string[];
}

interface GenerateIdeaResponse {
  name: string;
  executiveSummary: string;
  marketOpportunity: string;
  revenueModel: string;
  keyFeatures: string;
  nextSteps: string;
  callToAction: string;
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
      executiveSummary: '', 
      marketOpportunity: '', 
      revenueModel: '', 
      keyFeatures: '',
      nextSteps: '',
      callToAction: '',
      error: 'Method not allowed' 
    });
  }

  try {
    const { components }: GenerateIdeaRequest = req.body;

    if (!components || components.length < 2) {
      return res.status(400).json({ 
        name: '', 
        executiveSummary: '', 
        marketOpportunity: '', 
        revenueModel: '', 
        keyFeatures: '',
        nextSteps: '',
        callToAction: '',
        error: 'At least 2 components required' 
      });
    }

    const componentsText = components.join(', ');

    // Create a business blueprint focused prompt for the AI model
    const prompt = `You are a business strategist for a top tech agency in Nigeria. A user has selected the following digital tools to build a business. Based on these tools, write a concise and compelling business blueprint. Do not use corporate jargon. Frame it with a clear market problem and how the tools solve it. Be creative. End with a single, powerful call to action.

Selected tools: ${componentsText}

Create a comprehensive business blueprint with:
- Business Name: Creative, memorable name that reflects the solution
- Executive Summary: Clear problem statement and solution (MAX 60 words)
- Market Opportunity: Specific target market and size
- Revenue Model: How the business makes money
- Key Features: How the selected tools work together
- Next Steps: Actionable implementation plan

Format as JSON:
{
  "name": "business name",
  "executiveSummary": "problem and solution description (max 60 words)",
  "marketOpportunity": "target market description",
  "revenueModel": "how business makes money",
  "keyFeatures": "how tools integrate",
  "nextSteps": "implementation roadmap",
  "callToAction": "powerful single sentence CTA"
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
      executiveSummary: ideaData.executiveSummary || `Innovative ${componentsText} solution addressing key market challenges with proven technology stack.`,
      marketOpportunity: ideaData.marketOpportunity || "Targeting growing digital market with 200M+ potential users across Africa",
      revenueModel: ideaData.revenueModel || "Subscription-based SaaS model with tiered pricing and enterprise solutions",
      keyFeatures: ideaData.keyFeatures || `Integrated ${componentsText} working together to deliver seamless user experience`,
      nextSteps: ideaData.nextSteps || "1. MVP Development 2. Market Validation 3. Funding Round 4. Scale Operations",
      callToAction: ideaData.callToAction || "Ready to transform your industry? Let's build the future together."
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
  const prefixes = ['Smart', 'Quick', 'Elite', 'Prime', 'Swift'];
  const suffixes = ['Solutions', 'Hub', 'Pro', 'Connect', 'Plus'];
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return {
    name: `${prefix}${suffix}`,
    executiveSummary: `Comprehensive ${components.join(' + ')} solution addressing critical business challenges with integrated technology stack.`,
    marketOpportunity: "Large addressable market with growing demand for digital transformation solutions",
    revenueModel: "Multi-tiered SaaS model with monthly subscriptions, professional services, and enterprise contracts",
    keyFeatures: `Seamlessly integrated ${components.join(', ')} providing end-to-end business automation and optimization`,
    nextSteps: "Phase 1: MVP Development | Phase 2: Beta Testing | Phase 3: Market Launch | Phase 4: Scale Operations",
    callToAction: "Ready to revolutionize your business operations? Let's build something extraordinary together."
  };
}

function generateFallbackName(components: string[]): string {
  const prefixes = ['Swift', 'Smart', 'Quick', 'Bright', 'Nova', 'Flex'];
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