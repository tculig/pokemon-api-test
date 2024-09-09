# Frontend Coding Interview Test

Assignment at `https://github.com/mmiro-balize/frontend-test`

## Requirements

1. **Fetch Pokémon Data:**

   - Use the Pokémon API endpoint: `https://pokeapi.co/api/v2/pokemon` to fetch a list of Pokémon.

2. **Create Initial Data Table:**

   - Render the Pokémon in a data table with a single column:
     - **Name:** Display the name of the Pokémon.
   - At this stage, only the "Name" column should be populated since this is the only data available after the initial API fetch.

3. **Enhance Data Table with Additional Columns:**

   - For each Pokémon in the table, use the `url` provided in the `results` to fetch additional details from each Pokémon's individual endpoint.
   - Add two new columns to the data table:
     - **Image:** Fetch and display each Pokémon's image (sprite).
     - **Types:** Fetch and display each Pokémon's types.

4. **Pagination or Infinite Scroll:**
5. **Skeleton Loading State:**

