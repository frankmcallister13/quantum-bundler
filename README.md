# Quantum Bundler

A tool for launching tokens with Telegram integration.

## Current Features
- Token creation form
- Wallet management (up to 8 wallets)
- Mint key generation
- Telegram notifications for:
  - Site visits (with timezone and URL)
  - Token launches
- Secure environment variables

## Development Status
- ✅ Basic functionality working
- ✅ Telegram integration
- ✅ Environment variables set up
- ✅ Deployed on Vercel
- ✅ Visit notifications working

## Development Notes
- Local testing: Use direct token in index.html
- Vercel: Use environment variables ({{TELEGRAM_BOT_TOKEN}})
- Always test locally before pushing
- Wait 1-2 minutes after pushing for Vercel to deploy

## Important Information
- GitHub Repository: https://github.com/frankmcallister13/quantum-bundler
- Deployment: Vercel
- Environment Variables:
  - TELEGRAM_BOT_TOKEN (stored in Vercel)
- Chat ID: 5651527672

## Local Development
1. For local testing, replace in index.html:
   ```javascript
   window.ENV_TELEGRAM_BOT_TOKEN = '7648929218:AAFjh4v_bfESlHcbokO8eca8RZQvwr-RXVc';
   ```
2. For production, use:
   ```javascript
   window.ENV_TELEGRAM_BOT_TOKEN = '{{TELEGRAM_BOT_TOKEN}}';
   ```

## Security Notes
- Telegram token is secure in Vercel environment variables
- HTTPS enabled by default
- No sensitive data stored in code

## Workflow
1. Make changes locally
2. Test thoroughly
3. Push to GitHub when ready
4. Vercel auto-deploys
5. Wait 1-2 minutes for deployment

## To-Do List
- [ ] Add more form validations
- [ ] Improve error handling
- [ ] Add loading states
- [ ] Add success/error notifications 