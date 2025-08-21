import BlogImage from "../assets/Blog-Image.png"; 
import BlogImage2 from "../assets/Blog-Image-2.png"; 
import BlogImage3 from "../assets/Blog-Image-3.png"; 
import { Calendar, MessageCircle, Tag } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Boost Your Productivity with Biccas",
    desc: "Learn how to organize your tasks and achieve more with Biccas.",
    date: "Aug 21, 2025",
    comments: 12,
    tags: ["Productivity", "Dashboard"],
    image: BlogImage,
  },
  {
    id: 2,
    title: "Top 10 Tips for Remote Work",
    desc: "Master remote work with these essential tips and tricks.",
    date: "Aug 18, 2025",
    comments: 8,
    tags: ["Remote", "Work", "Tips"],
    image: BlogImage2,
  },
  {
    id: 3,
    title: "Designing an Effective Workflow",
    desc: "Streamline your work and maximize output using these workflow strategies.",
    date: "Aug 15, 2025",
    comments: 5,
    tags: ["Workflow", "Design"],
    image: BlogImage3,
  },
];

export const Blog = () => {
  return (
    <section className="px-5 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-12">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-primary">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h2 className="text-3xl font-bold">{blogPosts[0].title}</h2>
              <p className="mt-2 text-sm">{blogPosts[0].desc}</p>
              <div className="flex gap-4 mt-4 text-sm opacity-90">
                <div className="flex items-center gap-1">
                  <Calendar size={16} /> {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={16} /> {blogPosts[0].comments} Comments
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="flex flex-col rounded-2xl bg-background/90 shadow-primary overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {post.title}
                  </h3>
                  <p className="text-brand text-sm">{post.desc}</p>
                  <div className="flex gap-3 mt-2 flex-wrap text-sm text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle size={14} /> {post.comments}
                    </div>
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 px-2 py-0.5 bg-shape/20 text-shape rounded-full text-xs"
                      >
                        <Tag size={12} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col gap-4">
            <h4 className="text-xl font-bold text-black">Categories</h4>
            <div className="flex flex-col gap-2">
              {["Productivity", "Workflow", "Design", "Remote Work"].map(
                (cat, i) => (
                  <button
                    key={i}
                    className="text-brand hover:text-primary text-left text-sm transition-colors duration-200"
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col gap-4">
            <h4 className="text-xl font-bold text-black">
              Subscribe Newsletter
            </h4>
            <p className="text-brand text-sm">
              Get the latest updates directly in your inbox.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button type="submit" className="button-gr w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
