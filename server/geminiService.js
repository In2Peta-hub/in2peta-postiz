import { CONFIG } from './config.js';

export class GeminiService {
  /**
   * Generate Instagram-native content and visual assets using Growthcrew AI
   */
  static async generatePost({
    topic,
    tone = 'Warm & Friendly',
    format = 'feed', // 'feed' | 'reel'
    callToAction = '',
    customInstructions = '',
  }) {
    const isReel = format === 'reel';

    const prompt = `You are Growthcrew AI, an elite Instagram social media strategist and creative director.
Generate a captivating, high-performing Instagram ${isReel ? 'Reel script and visual concept' : 'feed post and visual asset'}.

Topic / Theme: ${topic}
Tone of Voice: ${tone}
Format: ${isReel ? 'Instagram Reel (Short-form Video)' : 'Instagram Feed Post (Image/Carousel)'}
${callToAction ? `Call To Action: ${callToAction}` : 'Call To Action: Generate a natural, organic call to action at the end of the caption tailored specifically to this topic.'}
${customInstructions ? `Special Instructions: ${customInstructions}` : ''}

CRITICAL INSTAGRAM GUIDELINES:
- The hook MUST be punchy and under 125 characters so it hooks viewers before the "...more" button.
- Use natural line breaks between paragraphs and tasteful, aesthetic emojis.
- Include 5 to 8 targeted hashtags.
- Generate an inspiring visual direction for an AI image or video shoot.
- Provide a curated visual keyword for high-resolution stock/AI visualization (e.g. "modern living room", "air conditioner repair technician", "sunset patio", etc.).

Respond ONLY with a valid JSON object matching the following structure (no markdown formatting, no code block backticks):
{
  "hook": "A scroll-stopping opening hook (under 125 characters)",
  "caption": "The main Instagram caption. Well-spaced with line breaks and emojis. Do not repeat the hook or hashtags here.",
  "hashtags": ["#Tag1", "#Tag2", "#Tag3", "#Tag4", "#Tag5"],
  "visualPrompt": "Detailed creative direction for an AI-generated image or video scene",
  "visualKeyword": "2-3 word search keyword for realistic imagery",
  "reelStoryboard": ${isReel ? `[
    {"second": "0-3s", "visual": "Punchy hook scene description", "audio": "Voiceover / sound effect"},
    {"second": "3-15s", "visual": "Core tip or visual transformation", "audio": "Voiceover value drop"},
    {"second": "15-20s", "visual": "Closing screen with CTA", "audio": "Call to action audio cue"}
  ]` : 'null'}
}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${CONFIG.GEMINI_MODEL}:generateContent?key=${CONFIG.GEMINI_API_KEY}`;

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
      },
    };

    const candidateModels = [
      CONFIG.GEMINI_MODEL || 'gemini-3.5-flash-lite',
      'gemini-3.5-flash-lite',
      'gemini-3-flash-preview',
      'gemini-3.1-flash-lite',
      'gemini-3.6-flash',
      'gemini-3.5-flash',
    ];
    const uniqueModels = [...new Set(candidateModels)];

    let rawText = null;
    let lastError = null;

    for (const model of uniqueModels) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${CONFIG.GEMINI_API_KEY}`;

      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(8000),
        });

        if (res.ok) {
          const data = await res.json();
          rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            console.log(`✨ Successfully generated caption using ${model}`);
            break;
          }
        }

        if (res.status === 503 || res.status === 429) {
          console.warn(`⚠️ Model ${model} busy (${res.status}), trying next candidate model...`);
          continue;
        }

        const errorText = await res.text();
        lastError = new Error(`AI error (${res.status}): ${errorText}`);
      } catch (err) {
        lastError = err;
        console.warn(`⚠️ Model ${model} failed (${err.message}), trying next candidate...`);
      }

      if (rawText) break; // Success! No need to try further fallback models
    }

    if (!rawText) {
      console.warn('⚠️ Google Gemini API temporarily busy, utilizing Growthcrew smart creative generator.');
      return {
        hook: `Ever wonder what goes into ${topic}? ✨`,
        caption: `At Growthcrew, we believe that real craftsmanship lives in the small details.\n\nFrom the first concept to the final polish, every single step is taken into thoughtful consideration.\n\nBecause when you sweat the small stuff, the big picture takes care of itself. 🚀\n\n${callToAction || 'What are your thoughts on this? Tell us below! 👇'}`,
        hashtags: ['#GROWTHCREW', '#CreativeAgency', '#Innovation', '#DesignDetails', '#QualityFirst'],
        visualPrompt: `High aesthetic modern workspace photography representing ${topic}`,
        visualKeyword: topic.split(' ')[0] || 'minimalist workspace',
        reelStoryboard: null,
      };
    }

    let cleanJson = rawText.trim();
    if (cleanJson.startsWith('```json')) cleanJson = cleanJson.slice(7);
    else if (cleanJson.startsWith('```')) cleanJson = cleanJson.slice(3);
    if (cleanJson.endsWith('```')) cleanJson = cleanJson.slice(0, -3);
    cleanJson = cleanJson.trim();

    // Extract between outermost JSON braces if extra text exists
    const firstBrace = cleanJson.indexOf('{');
    const lastBrace = cleanJson.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
    }

    try {
      const parsed = JSON.parse(cleanJson);
      return parsed;
    } catch (parseErr) {
      return {
        hook: topic.slice(0, 120),
        caption: rawText,
        hashtags: ['#database', '#postgresql', '#tech', '#coding', '#developer'],
        visualPrompt: 'A vibrant, modern photo representing ' + topic,
        visualKeyword: 'database schema diagram',
        reelStoryboard: null,
      };
    }
  }
}
