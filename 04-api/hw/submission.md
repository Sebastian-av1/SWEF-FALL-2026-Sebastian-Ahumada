# Homework 4 submission

Keep this short. Do not paste your API key.

## What POST /ask does (2–3 sentences)

It takes a prompt, sends it to OpenAI, and sends back the answer as `{ reply: ... }`. If there's no prompt, it returns a 400 error.

## Confirm

- [ ] Insomnia got `{ reply: ... }`
- [x] I ran `git status` — `.env` and `node_modules` were **not** staged

Note: I tested with curl. The server reaches OpenAI, but my account has no credits, so I got an error instead of a reply. I messaged the facilitators.