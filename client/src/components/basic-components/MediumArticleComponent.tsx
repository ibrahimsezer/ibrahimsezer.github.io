import { motion } from "framer-motion";

interface IMediumArticleCard {
    title: string;
    description: string;
    link: string;
    image: string;
}

const MediumArticleCard: React.FC<IMediumArticleCard> = ({ title, description, link, image }) => (
    <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        className="block bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors overflow-hidden"
    >
        <div className="aspect-w-16 aspect-h-9">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-t-lg"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
        </div>
    </motion.a>
);