# Oazo Apps Full Stack task

#### Estimated time: ~5-6 hours 

Your task is to implement a UI where users will be able to check token balances for a given blockchain address and save them. Tracked tokens are Dai, USD Coin and Maker.

Please use the provided repository as the basis of the task. It is based on next.js with typescript.

To interact with the Ethereum network we recommend to use the eth-sdk package, it greatly simplifies interactions with the blockchain. 
Token Addresses to use:
```
DAI: 	0x6b175474e89094c44da98b954eedeac495271d0f
USDC: 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
MKR:	0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2
```


The finished app should consist of only one page `/`. It has 3 sections:
- Page Header including:
    - Oasis logo,
    - Your name or any handle you like,
    - Subheader: `Oazo Apps full stack candidate`
    - A link to your profile (to any platform you like)
- Token balances:
   - It has a list of 3 tokens showing their names, icons and balances for the entered address.  Initially when form is empty, the list displays a placeholder `---`
   - When a user inputs some address (and this address is valid) the app should read token balances from the blockchain for the inputted address and display them.
   - If the provided address was not valid, display the placeholders.
- Form section:
    - It has header and the following instructions for the user:
      > Provide an Ethereum address to find out DAI, USDC and MKR balances. Submit them to save a snapshot for future reference. At least one balance must be greater than zero.
    - One text input with label `Address`
    - Submit button
    - Form handles 2 validation cases:
        - Invalid address: `Please provide a valid Ethereum address`
        - All balances for given address are zero: `At least one balance needs to be greater than zero`

Futher description can be found in the document sent to you.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

