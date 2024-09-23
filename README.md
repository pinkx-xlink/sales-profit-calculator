# sales-profit-calculator
This app is a tool I've created to determine how much a business should charge for a product based on hours of labor, base hourly rate, and production/shipping costs.

9/20/24
This is a personal project that I was very excited to begin. 

As somebody who loves organization and customization, the Microsoft Sheets version of this I whipped up a while back was missing something, so I wanted to just recycle the concept but build it from the ground up.

Today I built the skeleton of the app: the input form, which takes values to use for the basic math functions; a cost-breakdown off to the side that talks through every step of the calculation... except the 'post-tax' value is giving me issues (NaN, apparently). I threw a cute (and basic) Google Font on it, and now after about 6 hours I'm ready to call it a night.

I plan on adding these helpful features: 

- A folder to store each 'query' in (or you can just discard)

- A list option for materials that will accept multiple items + their price and find the total, storing the total amount under the umbrella materials variable

- A dropdown menu for the 'Sales Tax Rate' input field - ideally there would be an API that will fetch the sales tax rate for any given state when selected

- Connect an API that will estimate the shipping cost from one zip code to another

- Connect an API that will fetch store item prices, which can be added to the materials list
    a. mini feature that will break up the price per piece if bought as a pack


In conclusion, I think this project will be very helpful in my day-to-day life, which has made it very fun and fulfilling so far! It was also nice to brush up on Jest and run some tests on my modules before putting everything together. 

To be continued ...

9/23/24
This morning I took a moment to fix the bugs with the sales tax rate dropdown menu. The 'total price after taxes' price is now accurate again (instead of 'NaN'). Now that that's working, time to add the rates for the rest of the states.