import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer PAhEZrn1aJ48hGa8trlHj6In9_1_NZ9KurBZbLn-wIWnvVCWA8m9nxzrd1Msa8k2KUBLvGYs555iZ8Fo2wFSeoys9gZ4NQNjtMLcnbsH49T99SMsomf0s_048bHmYXYx",
  },
});
