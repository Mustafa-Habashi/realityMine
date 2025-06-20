# realityMine

## Optional Questions

### Testable Code

To make the code testable I can extract the logic into functions and it can be tested indepenedlty using a framework like Jest. For example I can create function that merges the 2 seperate data I collected from the Api response and the metadata from and page and pass them as parameters in a function and to test that the function works I can pass in mock data and expect a specfic output to be returned. Another test is extracting login for converting the time into seconds or the date into an iso date and compare and expect the result to match or show difference if tested for.

### Bandwith efficient

You can limit the amount of data being return from the API response for example adding query paramters to the URL, or only requesting necessary fields if fields are empty or null try not to send them with the response.
