import Directory from "../../components/directory/directory.component";
import { CATEGORIES } from "../../config/categories.config";

export default function Home() {
  return <Directory categories={CATEGORIES} />;
}
