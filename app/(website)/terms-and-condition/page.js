import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Terms from "./terms";

export default async function TermsCondition() {
//   const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Terms settings={settings}  />;
}

// export const revalidate = 60;
