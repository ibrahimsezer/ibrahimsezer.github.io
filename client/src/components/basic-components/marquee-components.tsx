import { cn } from "../../lib/utils";
import { Marquee } from "../magicui/marquee";

const mediumArticles = [
  {
    title: "What will be the technological 🤖developments in the next 5 years ?(We asked GPT)",
    url: "https://medium.com/@ibrahimsezer/what-will-be-the-technological-developments-in-the-next-5-years-we-asked-gpt-7409fef6769c",
    description: "The impact of artificial intelligence on our future in the field of technology is increasing not even with each passing year but with each passing day. We want to increase the impact of artificial intelligence in order to improve technology and move forward by reducing manpower costs. So what does artificial intelligence think about this issue?",
    publishDate: "2025-01",
    readTime: "6 min read",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*47zMswL5ktpaYmbu"
  },
  {
    title: "Tips for effectively using Cursor AI to boost your productivity 🚀🎯",
    url: "https://medium.com/@ibrahimsezer/cursor-ai-78f6dd58e38a",
    description: "Cursor is an artificial intelligence-supported code editor and is designed to make software development processes more efficient. Thanks to its advanced auto-completion feature, it predicts your next steps while coding and offers multi-line suggestions, thus increasing your coding speed.",
    publishDate: "2025-01",
    readTime: "6 min read",
    img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ErE0xc4Cwr3TYcIw8JOCIw.png"
  },
  {
    title: "Useful websites for Flutter developers 🧑‍💻",
    url: "https://medium.com/@ibrahimsezer/useful-websites-for-flutter-developers-362c10410f01",
    description: "Every developer definitely needs creativity at some points, some want to move forward by producing their own solutions, while others want to see different perspectives. Today, I will introduce a few websites that can be useful for Flutter developers in order to provide different perspectives.",
    publishDate: "2025-01",
    readTime: "3 min read",
    img: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*GZ76dN-TJgjPAo69"
  },
  {
    title: "Prompts Chat: Your Gateway to Crafting Effective AI Interactions 🤖",
    url: "https://medium.com/@ibrahimsezer/prompts-chat-your-gateway-to-crafting-effective-ai-interactions-b65baf58126b",
    description: "Prompts.chat is a curated platform designed to enhance your interactions with AI-powered conversational models. Initially built for ChatGPT, the platform now supports other large language models, including Claude, Gemini, Llama, and more.",
    publishDate: "2025-01",
    readTime: "2 min read",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*vz_hjZK4Qzr4YGvIcFPt7g.png"
  },
  {
    title: "3 Things I Wish I Knew Earlier in Flutter App Monetization 🧠",
    url: "https://medium.com/@ibrahimsezer/3-things-i-wish-i-knew-earlier-in-flutter-app-monetization-49258d7b7eea",
    description: "When I started my journey in Flutter app development, monetization felt like an intimidating puzzle. But as I delved deeper, I discovered three game-changing tools that simplified the process and boosted my app revenue.",
    publishDate: "2025-01",
    readTime: "3 min read",
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*YrvuBcoTxmaCoTu-56bEMQ.png"
  },
  {
    title: "Discover Same.Energy: Your Gateway to Visual Inspiration 🌟",
    url: "https://medium.com/@ibrahimsezer/discover-same-energy-your-gateway-to-visual-inspiration-1cf980daf488",
    description: "In a world where visual content is king, finding the right inspiration can often feel like searching for a needle in a haystack. That's where Same.Energy steps in — a revolutionary platform designed to help you discover visually similar content effortlessly.",
    publishDate: "2025-01",
    readTime: "2 min read",
    img: "https://miro.medium.com/v2/resize:fit:3800/format:webp/1*YTqpyIocp7WGld-bxsL5oA.png"
  },
];

interface ArticleCardProps {
  title: string;
  url: string;
  description: string;
  publishDate: string;
  readTime: string;
  img: string;
}

const ArticleCard = ({
  title,
  url,
  description,
  publishDate,
  readTime,
  img,
}: ArticleCardProps) => {
  return (
    <div className="relative group block p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 transition duration-300 min-w-[640px] max-w-[320px]">
      <a href={url}><div className="flex items-start gap-4">
        <img
          src={img}
          alt={title}
          className="w-36 h-24 rounded object-cover"
        />
        <div className="space-y-1">
          <h3 className="font-medium text-zinc-200 group-hover:text-white transition duration-300">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition duration-300 flex-shrink">
            {description}
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span>{publishDate}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </div>
      </div></a>
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col gap-8">
      <Marquee className="[--gap:2rem]" pauseOnHover>
        {mediumArticles.map((article, i) => (
          <ArticleCard key={i} {...article} />
        ))}
      </Marquee>
    </div>
  );
}
