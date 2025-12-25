# Two-LLM Parts Dialogue Implementation

## What Was Built

The Internal Parts Dialogue tool now uses **TWO separate LLM instances** to create an authentic dialogue between internal parts, instead of one LLM simulating both sides.

## How It Works

### User Flow:
1. Navigate to `/labs.html` (or click Labs from navigation)
2. Click "Parts Dialogue" tab
3. Fill in the scenario and both parts:
   - **Part A**: Name, traits, perspective (e.g., "The Achiever" - driven, wants success)
   - **Part B**: Name, traits, perspective (e.g., "The Guardian" - cautious, wants safety)
4. Click **"Simulate Dialogue"**
5. Watch the real-time dialogue unfold:
   - Part A speaks (LLM #1)
   - "Part A is thinking..." indicator shows
   - Part A's message appears
   - Part B responds (LLM #2)
   - "Part B is thinking..." indicator shows
   - Part B's message appears
   - This continues for 4 exchanges (8 total messages)

### Technical Implementation:

**Files Modified:**
- `js/app.js` - Added ~200 lines of dialogue orchestration code
- `labs.html` - Changed button from `data-action="call-gemini"` to `data-action="call-parts-two-llm"`

**New Functions in app.js:**
1. `callGeminiPartsTwoLLM()` - Main orchestration (lines 403-520)
2. `buildPartSystemPrompt()` - Creates unique identity for each LLM (lines 522-543)
3. `buildDialoguePrompt()` - Builds contextual prompts with conversation history (lines 545-561)
4. `callGeminiForPart()` - Wrapper for Gemini API calls (lines 563-581)
5. `sleep()` - Timing utility (lines 583-585)

## Key Features

### ✅ Separate LLM Instances
- Each part has its own LLM with unique system prompt
- LLM stays in character throughout the dialogue
- No cross-contamination between parts

### ✅ Real-Time Streaming
- "Thinking..." indicators show between messages
- 800ms delay between messages for natural pacing
- Messages appear one at a time

### ✅ Contextual Awareness
- Each LLM gets conversation history
- Responses build on what the other part said
- Natural back-and-forth flow

### ✅ Dialogue Progression
- Starts with strong positions
- Moves through conflict
- Gradually shifts toward mutual understanding
- 4 exchanges total (configurable)

### ✅ Visual Design
- Part A: Blue avatar/text
- Part B: Red avatar/text
- Clean message bubbles
- Completion footer when done

## Testing Instructions

### Basic Test:
1. Go to labs.html
2. Enter scenario: "Should I quit my job to pursue my calling?"
3. Part A: "The Risk-Taker" - Spontaneous, creative - Wants freedom and growth
4. Part B: "The Guardian" - Cautious, protective - Wants safety and security
5. Click "Simulate Dialogue"
6. Watch the dialogue unfold (takes ~7-8 seconds total with delays)

### Expected Result:
```
Part A (The Risk-Taker): "I'm tired of playing it safe..."
Part B (The Guardian): "But what if we fail? We have bills to pay..."
Part A: "That fear is exactly what's keeping us stuck..."
Part B: "Maybe... but can't we find a middle ground?"
[continues for 4 exchanges]
```

### Advanced Test:
- Try different scenarios
- Use contrasting parts (e.g., Perfectionist vs. Free Spirit)
- Verify each LLM maintains its character
- Check that responses reference previous messages

## Configuration

### Adjustable Parameters (in app.js):

**Number of exchanges:**
```javascript
const NUM_EXCHANGES = 4; // Change to 3, 5, or 6 for different lengths
```

**Delay between messages:**
```javascript
await sleep(800); // Change to 500 (faster) or 1200 (slower)
```

**System Prompt:**
Modify `buildPartSystemPrompt()` to change:
- Tone/style of responses
- Response length (currently 2-3 sentences)
- Level of emotion/vulnerability

## API Costs

**Per Dialogue:**
- 8 API calls to Gemini
- ~200-300 tokens per call
- Total: ~2000-2400 tokens per dialogue
- Cost: ~$0.001-0.002 per dialogue (with Gemini Flash pricing)

**Optimization:**
- Could reduce to 3 exchanges (6 messages) for faster/cheaper
- Could increase to 6 exchanges for deeper exploration

## Future Enhancements

### Possible Additions:
1. **User Intervention** - Let user add mediator comments mid-dialogue
2. **Self Voice** - Add third LLM playing the "Self" from IFS
3. **Emotion Tracking** - Detect emotional shifts in the dialogue
4. **Export Feature** - Save dialogue as text/PDF
5. **Dialogue Steering** - Let user guide the conversation direction
6. **Voice Selection** - Different LLM personalities for different part types

## Troubleshooting

### If dialogue doesn't start:
- Check browser console for errors
- Verify Gemini API key is set in Netlify
- Check that both part names are filled in

### If responses are too short/long:
- Modify the system prompt in `buildPartSystemPrompt()`
- Adjust "Keep responses to 2-3 sentences" instruction

### If LLMs break character:
- Make system prompts more explicit
- Add stronger "stay in character" instructions
- Reduce conversation history context (might confuse the LLM)

## Deployment

No special deployment steps needed. Just:
```bash
git add js/app.js labs.html
git commit -m "Add two-LLM dialogue system for Parts tool"
git push
```

Netlify will automatically deploy with the new functionality.

---

**Status**: ✅ Ready to test
**Location**: `/labs.html` → Parts Dialogue tab
**Button Changed**: Line 236 in labs.html
**Code Added**: Lines 399-589 in js/app.js
