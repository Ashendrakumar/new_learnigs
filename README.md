This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!--  Details for Self  -->

HTML CSS JS and React to know

next js is an application which use the react as React and notde for backend

file based routing
Api route  
API create
APIs can also
rendering SSR CSR
data fetching async await
css module tailwind

npx create-next-app@latest
npm run dev
React server Routing

- Server comp - default
- Client comp

Here routing files and folder

1. inside the folder
2. page.js or txs
3. browser
4. home page
5. normal routing based on folder structure and nested routes
6. dynamic route folder with [productId] with nested -- example http://localhost:3000/products/3/reviews/500
7. catch all segments of the routes -- feature1/concept3 match all the names canting
   ex docs = docs/500 http://localhost:3000/docs/alhfkj/jghjdfhg http://localhost:3000/docs
8. 404 page customize not-found.tsx
9. dashboard - line-chart.tsx graph.tsx table.tsx page.tsx (import them to use )
10. private folders \_lib > page.tsx will not a rote and not render
11. groups in folders to group -- using () will remove the folder name from the path , 1lecture3
12. Layout common component to render like header footer (children )
13. layout can also be created as per the route
14. Route group with layout ( ) with name for folder and layout inside will apply for all the pages in this folder
15. SEO metadata api for that routing METAData it over ride the default metadata from the Layout page
16. Link href will use for navigation , replace is used for the remove history to store , Show active route
17. Use client on top of the file to made it csr elf its SSR by default
18. template.tsx at the place of layout we can also use template files but when route changes it's remount the compte
19. loading file
20. error.tsx error boundary component must be client cmp
21. Parallel routes using slot @revenue , @users , @charts
22. archive page on refresh it will not able to match the routes so use default.tsx
23. Conditional routes login / dashboard
24. intercepting routes show the page in the model (.)foldername to match same level (..)foldername one level above (...)about any level of page folder can be accessed
    Install thunder client for test API
25. Route handler folder name with route.ts rest api client thunder client get , post
26. Dynamic Router handler for the get for specific comment , patch , delete, it needs the ID
27. queryParams to search short and filters
28. Headers in route handler , ex. in profile page
    Request headers ex Authorization , Accept , user-agent
    response headers ex content-type

29. cookies use for user preference , set cookie
30. response from the get method is getting cached in the next js so if we need to retrive the new/ latest data from the from the API we must have to use [ export const dynamic = 'force-dynamic']
31. middleware
    Place middleware.ts at the root of your Next.js project.
    Use NextResponse.redirect() to redirect users.
    Use NextResponse.next() to continue the request.
    Use config.matcher to control where middleware applies.

32. Rendering in React
    CSR - Drawbacks SEO , User experience due to slow load time
    SSR - Server loads the HTML
33. RCs architecture CSR once runs in the server and then in the Client
34. RCS lifecycle :

35. Server-rotes client route for the user server-only package
    3rd party packages
    client side react slick npm package
    3rd party package like slider component are not directly used in the server side comp so made them in a separate page and import then in the server component
    context provider in Server side components ex them provider
    inside the client component can not directly invoke Server component user children prop to do so -- Interving Page

36. Data fetching - external sources == Used in the Server comp
37. caches data automatically , but no nee dto cache then used { cache: 'no-store' }

[%>]
