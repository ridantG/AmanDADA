import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { QUICK_LINKS, slugify } from "../data/quickLinks";
import NotFound from "./NotFound";

export default function QuickLink() {
  const { slug } = useParams();
  const title = QUICK_LINKS.find((l) => slugify(l) === slug);

  if (!title) return <NotFound />;

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gray-50">
      <SEO title={title} description={title} path={`/l/${slug}`} />
      <h1 className="text-3xl md:text-4xl font-bold text-[#201c16]">{title}</h1>
    </div>
  );
}
