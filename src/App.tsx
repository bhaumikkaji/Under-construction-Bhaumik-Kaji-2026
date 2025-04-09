
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { ImageHoverEffect } from "./components/ImageHoverEffect";

// Individual project pages
import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Project3 from "./pages/projects/Project3";
import Project4 from "./pages/projects/Project4";
import Project5 from "./pages/projects/Project5";
import Project6 from "./pages/projects/Project6";
import Project7 from "./pages/projects/Project7";
import Project8 from "./pages/projects/Project8";
import Project9 from "./pages/projects/Project9";
import Project10 from "./pages/projects/Project10";
import Project11 from "./pages/projects/Project11";
import Project12 from "./pages/projects/Project12";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <ImageHoverEffect />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              
              {/* Individual project routes */}
              <Route path="/project/1" element={<Project1 />} />
              <Route path="/project/2" element={<Project2 />} />
              <Route path="/project/3" element={<Project3 />} />
              <Route path="/project/4" element={<Project4 />} />
              <Route path="/project/5" element={<Project5 />} />
              <Route path="/project/6" element={<Project6 />} />
              <Route path="/project/7" element={<Project7 />} />
              <Route path="/project/8" element={<Project8 />} />
              <Route path="/project/9" element={<Project9 />} />
              <Route path="/project/10" element={<Project10 />} />
              <Route path="/project/11" element={<Project11 />} />
              <Route path="/project/12" element={<Project12 />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
