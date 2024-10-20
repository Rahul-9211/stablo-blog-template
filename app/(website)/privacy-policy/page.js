import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Privacy from "./privacy";

export default async function AboutPage() {
//   const authors = await getAllAuthors();
  const settings = await getSettings();
  return <Privacy settings={settings}  />;
}

// export const revalidate = 60;
