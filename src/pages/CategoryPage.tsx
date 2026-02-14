import { useParams, useNavigate } from "react-router-dom";
import { events, categoryOrder, type EventData } from "@/data/events";
import MatrixRain from "@/components/MatrixRain";
import RadialCategoryLayout from "@/components/RadialCategoryLayout";

const CategoryPage = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const navigate = useNavigate();

    const category = categoryId as EventData["category"];
    const isValid = categoryOrder.includes(category);

    if (!isValid) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
                <MatrixRain />
                <h1 className="text-4xl font-poster text-matrix-red mb-4 uppercase">Category Not Found</h1>
                <button
                    onClick={() => navigate("/")}
                    className="px-8 py-3 glass rounded-full text-foreground hover:matrix-glow transition-all font-matrix uppercase tracking-widest"
                >
                    Return Home
                </button>
            </div>
        );
    }

    const categoryEvents = events.filter((e) => e.category === category);

    // Use the Radial Layout for ALL categories
    return <RadialCategoryLayout events={categoryEvents} />;
};

export default CategoryPage;
