import { useEffect } from "react";
import { listings } from "../utils/data";

// Define the Listing type based on the structure of the listings data
type Listing = {
  id: number;
  name: string;
  image: any;
  price: string;
  openChats: string;
  messageRequests: string;
  status: string;
  type: string;
};

type SetDisplayedListing = React.Dispatch<React.SetStateAction<Listing[]>>;

// Custom hook to filter listings based on listingType
export const useListing = (
  setDisplayedListing: SetDisplayedListing,
  listingType: string
) => {
  useEffect(() => {
    const filterListing = () => {
      // Check if listings data exists
      if (!listings) return;

      // Filter listings based on listingType
      const filtered = listings.filter(
        (item: Listing) => item.type === listingType
      );

      // Set the filtered listings to the displayedListing state
      setDisplayedListing(filtered);
    };

    // Call the filterListing function when listingType changes
    filterListing();
  }, [listingType, setDisplayedListing]);
};
