import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

const articles = [
  {
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn best practices for structuring large React applications with TypeScript, including proper typing strategies and component architecture.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    title: "Modern CSS: Grid vs Flexbox in 2024",
    excerpt:
      "A comprehensive comparison of CSS Grid and Flexbox, when to use each, and practical examples for modern web layouts.",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "CSS",
    image: "/placeholder.svg",
    featured: true,
  },
  {
    title: "Deploying Full-Stack Apps with Docker",
    excerpt:
      "Step-by-step guide to containerizing and deploying full-stack applications using Docker and Docker Compose.",
    date: "2023-12-20",
    readTime: "12 min read",
    category: "DevOps",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "API Design: REST vs GraphQL",
    excerpt:
      "Understanding the differences between REST and GraphQL APIs, their use cases, and implementation considerations.",
    date: "2023-12-10",
    readTime: "10 min read",
    category: "Backend",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "JavaScript Performance Tips",
    excerpt:
      "Essential optimization techniques to improve JavaScript performance and create faster web applications.",
    date: "2023-11-25",
    readTime: "7 min read",
    category: "JavaScript",
    image: "/placeholder.svg",
    featured: false,
  },
  {
    title: "Getting Started with Web Accessibility",
    excerpt:
      "A beginner-friendly guide to making your websites more accessible and inclusive for all users.",
    date: "2023-11-18",
    readTime: "9 min read",
    category: "Accessibility",
    image: "/placeholder.svg",
    featured: false,
  },
];

const BlogSection = () => {
  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = articles.filter((article) => !article.featured);

  return (
    <section className="min-h-screen py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Blog & Articles</h2>
          <p className="section-subtitle">
            Sharing knowledge and insights about web development, technology
            trends, and best practices
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Featured Articles
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={500}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="default"
                      className="bg-primary/90 backdrop-blur-sm"
                    >
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
            Recent Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={500}
                    height={500}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-primary hover:text-primary/80"
                  >
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-card border border-border">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">
              Want to read more articles?
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/80"
            >
              Visit My Blog →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
